import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServiceHeader`.
 */
export type ServiceHeaderProps =
  SliceComponentProps<Content.ServiceHeaderSlice>;

/**
 * Component for "ServiceHeader" Slices.
 */
const ServiceHeader = ({ slice }: ServiceHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for service_header (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ServiceHeader;
