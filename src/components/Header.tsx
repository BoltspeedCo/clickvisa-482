'use client'
import { SliceZone, isFilled } from "@prismicio/client";
import Container from "./Container";
import Image from 'next/image'
import { ButtonLink, AnimatedLink, Button } from "./ui/Button";
import { NavigationItemSlice } from "../../prismicio-types";
import React from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/Scroll-area";

type HeaderProps = {
    headerMenu: SliceZone<NavigationItemSlice>
}
export function Header({ headerMenu }: HeaderProps) {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const body = document.querySelector('body')
    const handleClickMenu = () => {
        setMenuOpen(prev => !prev)
        if (body) {
            body.classList.toggle('overflow-hidden')
        }
    }
    return (<header className="sticky top-0 bg-background z-50">
        <Container size="wide" className="py-2 lg:py-4">
            <div className="flex justify-between items-center">
                <div className="">
                    <Image src={'/images/clickvisa-logo.svg'} alt="clickvisa-logo" className="h-4 lg:h-6 w-auto" width={200} height={50} />
                </div>
                <nav className="hidden md:flex gap-4 lg:gap-12 items-center">
                    {headerMenu.map((menu, index) => {
                        const {
                            link,
                            name,
                            asButton
                        } = menu.primary;
                        return <div className="" key={index}>
                            {isFilled.link(link) && isFilled.keyText(name) ? <>
                                {asButton ? <ButtonLink href={link.url || ''} variant={'fill'} size="sm" className="mx-2">
                                    {name}
                                </ButtonLink> : <AnimatedLink href={link.url || ''}>
                                    {name}
                                </AnimatedLink>}
                            </> : null}
                        </div>;
                    })}

                </nav>
                <div className="md:hidden">
                    <Button variant={'ghost'} onClick={() => handleClickMenu()}  >
                        <span className={
                            cn("block transition-all", menuOpen ? 'rotate-180' : '')
                        }>  {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}</span>

                    </Button>
                </div>
            </div>
        </Container>
        {menuOpen ?
            <>
                <div className="fixed z-50 bg-muted h-[calc(100%-56px)] w-full top-14 left-0">
                    <ScrollArea className="w-full h-full">
                        <nav className="space-y-3 p-6">
                            {headerMenu.map((menu, index) => {
                                const {
                                    link,
                                    name,
                                    asButton
                                } = menu.primary;
                                const submenu = menu.items
                                return <div className="" key={index}>
                                    {isFilled.link(link) && isFilled.keyText(name) ? <>
                                        {asButton ? <ButtonLink href={link.url || ''} variant={'fill'} size="sm" className="mt-3">
                                            {name}
                                        </ButtonLink> : <AnimatedLink href={link.url || ''} className="block py-2 uppercase">
                                            {name}
                                        </AnimatedLink>}
                                    </> : null}
                                    {submenu && submenu.length > 0 ? (
                                        <div className="space-y-3">
                                            {submenu.map((submenuItem, index) => {
                                                const { childName, childLink } = submenuItem
                                                return (
                                                    <>
                                                        {isFilled.link(childLink) && isFilled.keyText(childName) ? <>
                                                            <AnimatedLink href={childLink.url || ''} className="block text-sm uppercase relative py-2 pl-6 before:content-[''] before:block before:h-px before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-foreground before:w-4">
                                                                {childName}
                                                            </AnimatedLink>
                                                        </> : null}
                                                    </>
                                                )
                                            })}
                                        </div>
                                    ) : null}
                                </div>;
                            })}

                        </nav>
                    </ScrollArea>
                </div>
            </> : null}
    </header>);
}