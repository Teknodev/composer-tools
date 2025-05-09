import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface ComposerImageProps
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export function ComposerImage(props: ComposerImageProps) {
  return <img {...props} />;
}
