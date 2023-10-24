import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeaturedServices`.
 */
export type FeaturedServicesProps =
  SliceComponentProps<Content.FeaturedServicesSlice>;

/**
 * Component for "FeaturedServices" Slices.
 */
const FeaturedServices = ({ slice }: FeaturedServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for featured_services (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeaturedServices;
