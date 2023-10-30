import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LpAboutImage`.
 */
export type AboutImageProps = SliceComponentProps<Content.AboutImageSlice>;

/**
 * Component for "LpAboutImage" Slices.
 */
const AboutImage = ({ slice }: AboutImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for lp_about_image (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AboutImage;
