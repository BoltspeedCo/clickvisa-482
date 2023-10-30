import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LpHero`.
 */
export type LpHeroProps = SliceComponentProps<Content.LpHeroSlice>;

/**
 * Component for "LpHero" Slices.
 */
const LpHero = ({ slice }: LpHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for lp_hero (variation: {slice.variation}) Slices
    </section>
  );
};

export default LpHero;
