import { SliceZone } from '@prismicio/react'
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import RootLayout from '@/components/RootLayout';
import { NextPage, NextPageContext } from 'next';
import { notFound } from 'next/navigation';

export default async function Pages({ params }: { params: { uid: string } }) {
    if (!params.uid) return null
    const client = createClient();

    const page = await client.getByUID('service', params.uid, {
        fetchLinks: ['service.name', 'service.featuredDescription', 'service.featuredIcon']
    }).catch(() => notFound())
    const globalSections = await client.getSingle('globalSections')
    const settings = await client.getSingle('settings')
    // console.log("page", page)
    return (
        <RootLayout settings={settings} globalContext={globalSections}>
            <SliceZone slices={page.data.slices} components={components} context={{
                globalSections: globalSections
            }} />
        </RootLayout>

    )
}

export async function generateStaticParams() {
    const client = createClient()

    const pages = await client.getAllByType('service')

    return pages.filter(page => page.uid !== 'homepage').map(page => {
        return {
            pagePath: page.url?.split('/').filter(Boolean)
        }
    })
}