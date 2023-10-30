import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CtaContact`.
 */
export type CtaContactProps = SliceComponentProps<Content.CtaContactSlice>;

/**
 * Component for "CtaContact" Slices.
 */
const CtaContact = ({ slice }: CtaContactProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cta_contact (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CtaContact;
