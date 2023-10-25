import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

/**
 * Component for "Quote" Slices.
 */
const Quote = ({ slice }: QuoteProps): JSX.Element => {
  const { heading } = slice.primary
  return (
    <Section
      name="quote"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className="" size="small">
        <div className="relative">
          <Image src={'/images/quote.svg'} alt="quote" width={228} height={198} className=" w-56 h-auto -z-0 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <SmartText text={heading} variant="h2" size="h3" className="text-center italic font-light !leading-tight relative" />

        </div>
      </Container>
    </Section>
  );
};

export default Quote;
