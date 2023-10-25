import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography, { SmartText } from "@/components/Typography";
import { Button } from "@/components/ui/Button";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Advantage`.
 */
export type AdvantageProps = SliceComponentProps<Content.AdvantageSlice>;

/**
 * Component for "Advantage" Slices.
 */
const Advantage = ({ slice }: AdvantageProps): JSX.Element => {
  const { heading, buttonLink, buttonText } = slice.primary
  const advantages = slice.items
  return (
    <Section
      name="advantage"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container >
        <div className="mb-12 md:mb-16 lg:mb-24 md:max-w-3xl lg:max-w-2xl">
          <SmartText text={heading} variant="h2" className="!mb-0" />


        </div>
        <div className="md:max-w-xl ml-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-x-24 lg:gap-y-20">
          {advantages.map((advantage, index) => {
            const { advantageDescription, advantageHeading } = advantage
            return (
              <div className="col-span-1" key={index}>
                <SmartText text={advantageHeading} variant="h3" className="font-bold" />
                <SmartText text={advantageDescription} variant="p" className="mb-0 lg:mb-0" />
              </div>
            )
          })}
          {isFilled.link(buttonLink) && isFilled.keyText(buttonText) ? (
            <div className="w-full h-full flex flex-col justify-end items-start">
              <Button  >
                {buttonText}
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
};

export default Advantage;
