import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Button } from "@/components/ui/Button";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta = ({ slice }: CtaProps): JSX.Element => {
  const { bodyText, buttonLink, buttonText, heading, preHeading } = slice.primary;
  return (
    <Section
      name="cta"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container size="wide" className="">
        <div className=" bg-foreground relative overflow-hidden">
          <div className="absolute w-full md:w-2/3 lg:w-7/12 right-0 h-[150px] md:h-full bottom-0 md:top-0 overflow-hidden">
            <Image src={'/images/cta-bg.png'} alt={'cta-background'} className="left-0 w-full h-full object-right-center lg:object-right-center object-cover relative grayscale" width={1000} height={1000} />

          </div>
          <div className="absolute w-full md:w-2/3 lg:w-7/12 h-[150px] md:h-full bottom-0 md:top-0 right-0  bg-radial-gradient-foreground">

          </div>
          <div className="max-w-5xl mx-auto relative">
            <div className=" max-w-lg  text-background pt-12 pb-28 p-6 md:p-8 lg:p-12 xl:p-16 text-left md:text-center flex flex-col md:items-center">
              <SmartText text={preHeading} variant="h5" size="h6" className=" font-normal mb-3 lg:mb-4 capitalize " />
              <SmartText text={heading} variant="h2" size="h1" className="font-bold uppercase md:max-w-xs mb-5 lg:mb-10" />
              <SmartText text={bodyText} variant="p" className="" />
              {isFilled.link(buttonLink) && isFilled.keyText(buttonText) ? (
                <div className="w-full h-full ">
                  <Button className="text-background bg-transparent border-background"  >
                    {buttonText}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Cta;
