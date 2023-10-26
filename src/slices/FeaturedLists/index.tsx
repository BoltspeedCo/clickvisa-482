import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturedLists`.
 */
export type FeaturedListsProps =
  SliceComponentProps<Content.FeaturedListsSlice>;

/**
 * Component for "FeaturedLists" Slices.
 */
const FeaturedLists = ({ slice }: FeaturedListsProps): JSX.Element => {
  const lists = slice.items
  return (
    <Section
      name="featured-lists"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container size="default">

        <div className="max-w-4xl mx-auto space-y-6 lg:space-y-12">
          {lists.map((list, index) => {
            const { description, heading } = list
            return (
              <div className="" key={index}>
                <div className="grid md:grid-cols-3 md:gap-8 lg:gap-12 ">
                  <div className=" col-span-1 pt-2">
                    <SmartText text={heading} variant="h3" size="h5" className="mb-3" />
                  </div>

                  <div className=" col-span-2">
                    <SmartText text={description} variant="p" size="h4" className="text-justify mb-0 lg:mb-0" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>

    </Section>
  );
};

export default FeaturedLists;
