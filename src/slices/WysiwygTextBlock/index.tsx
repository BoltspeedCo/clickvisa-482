import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WysiwygTextBlock`.
 */
export type WysiwygTextBlockProps =
  SliceComponentProps<Content.WysiwygTextBlockSlice>;

/**
 * Component for "WysiwygTextBlock" Slices.
 */
const WysiwygTextBlock = ({ slice }: WysiwygTextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for wysiwyg_text_block (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default WysiwygTextBlock;
