import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `TeamPartners`.
 */
export type TeamPartnersProps = SliceComponentProps<Content.TeamPartnersSlice>;

/**
 * Component for "TeamPartners" Slices.
 */
const TeamPartners = ({ slice }: TeamPartnersProps): JSX.Element => {
  const { heading } = slice.primary
  const partners = slice.items
  return (
    <Section
      name="team-partner"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container size="wide">
        <SmartText text={heading} variant="h2" className="text-center uppercase mb-12 md:mb-16 lg:mb-20 xl:mb-32" />

        <div className="grid md:grid-cols-2 md:gap-8 lg:gap-12 xl:gap-24">
          {partners.map((person, index) => {
            const { description, image, name, email, phone, position } = person
            return (
              <div className="col-span-1 max-w-2xl grid md:grid-cols-7 md:gap-8 lg:gap-10" key={index}>
                <div className="col-span-3">
                  {isFilled.image(image) ? (
                    <Image src={image.url} alt={image.alt || ''} className="aspect-square grayscale w-full" width={image.dimensions.width} height={image.dimensions.height} />
                  ) : null}
                </div>
                <div className="col-span-4">
                  <SmartText text={name} variant="h3" className="mb-3 lg:mb-4 uppercase" />
                  <div className="space-y-1 mb-2 lg:mb-3 flex flex-col">
                    <SmartText text={position} variant="p" className="text-justify font-normal mb-0 lg:mb-0 leading-tight " />
                    {isFilled.keyText(email) ? (
                      <a href={`mailto:${email}`}>
                        <SmartText text={email} variant="span" className="text-justify text-sm block mb-0 lg:mb-0 underline italic leading-tight " />
                      </a>
                    ) : null}
                    {isFilled.keyText(phone) ? (
                      <a href={`tel:${phone}`} className="">
                        <SmartText text={phone} variant="span" className="text-justify text-sm block mb-0 lg:mb-0 underline italic leading-tight " />
                      </a>
                    ) : null}
                  </div>
                  <SmartText text={description} variant="p" className="text-justify mb-0 lg:mb-0" />
                </div>
              </div>
            )
          })}
        </div>
      </Container>

    </Section>
  );
};

export default TeamPartners;
