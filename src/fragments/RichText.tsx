import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer";
import { ComponentProps } from "react";

type TRichTextProps = ComponentProps<typeof CMSRichText>;

export const RichText = ({ ...props }: TRichTextProps) => {
  return <CMSRichText {...props} />;
};
