import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CtaGuarantee`.
 */
export type CtaGuaranteeProps = SliceComponentProps<Content.CtaGuaranteeSlice>;

/**
 * Component for "CtaGuarantee" Slices.
 */
const CtaGuarantee = ({ slice }: CtaGuaranteeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cta_guarantee (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CtaGuarantee;
