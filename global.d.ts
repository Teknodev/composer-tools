declare module "*.module.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const value: string;
  export default value;
}
