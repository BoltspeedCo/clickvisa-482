import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServicesLists`.
 */
export type ServicesListsProps =
  SliceComponentProps<Content.ServicesListsSlice>;

/**
 * Component for "ServicesLists" Slices.
 */
const ServicesLists = ({ slice }: ServicesListsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for services_lists (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ServicesLists;
