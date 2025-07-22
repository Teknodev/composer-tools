import { TypeButton } from "composer-tools/composer-base-components/base/base";
import { TypeUsableComponentProps } from "composer-tools/editor-components/EditorComponent";

export namespace INPUTS {
  export type CastedButton = {
    text: React.JSX.Element;
    url: string;
    icon: string;
    image: string;
    type: TypeButton;
  };

  export const BUTTON = (
    buttonKey: string,
    displayer: string,
    text: string,
    url: string | null,
    icon: string | null,
    image: string | null,
    type: TypeButton = "Primary"
  ) => {
    const button: TypeUsableComponentProps = {
      type: "object",
      key: buttonKey,
      displayer: displayer,
      value: [
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: text,
        },
        {
          type: "select",
          key: "type",
          displayer: "Type",
          value: type,
          additionalParams: {
            selectItems: [
              "Primary",
              "Secondary",
              "Tertiary",
              "Link",
              "White",
              "Black",
            ],
          },
        },
      ],
    };

    if (url !== null) {
      button.value.push({
        type: "page",
        key: "url",
        displayer: "URL",
        value: url,
      });
    }

    if (icon !== null) {
      button.value.push({
        type: "icon",
        key: "icon",
        displayer: "Icon",
        value: icon,
      });
    }

    if (image !== null) {
      button.value.push({
        type: "image",
        key: "image",
        displayer: "Image",
        value: image,
      });
    }

    button["getPropValue"] = null;

    return button;
  };

  export const LOGO = (
    key: string,
    displayer: string,
    defaultImage?: string
  ) => {
    return {
      type: "object",
      key: key,
      displayer: displayer,
      value: [
        {
          type: "image",
          key: "image",
          value:
            defaultImage ||
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
          displayer: "Image",
        },
        {
          type: "page",
          key: "imageLink",
          value: "",
          displayer: "Image Link",
        },
      ],
    } as TypeUsableComponentProps;
  };
  export const NAVBAR_POSITION = (
    key: string,
    displayer: string,
    defaultValue: string = "Default"
  ) => {
    return {
      type: "select",
      key: key,
      displayer: displayer,
      value: defaultValue,
      additionalParams: {
        selectItems: [
          "Absolute",
          "Sticky Colorful",
          "Sticky Transparent",
          "Default",
        ],
      },
    } as TypeUsableComponentProps;
  };

  export type TYPE_SLIDER_SETTINGS = {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    adaptiveHeight?: boolean;
  };
  export const SLIDER_SETTINGS = (
    key: string,
    displayer: string,
    defaultValues: TYPE_SLIDER_SETTINGS = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
    }
  ): TypeUsableComponentProps => {
    return {
      type: "object",
      key: key,
      displayer: displayer,
      value: [
        {
          type: "boolean",
          key: "dots",
          displayer: "Dots",
          value: defaultValues.dots,
        },
        {
          type: "boolean",
          key: "infinite",
          displayer: "Infinite",
          value: defaultValues.infinite,
        },
        {
          type: "number",
          key: "speed",
          displayer: "Speed",
          value: defaultValues.speed,
          min: 0
        },
        {
          type: "boolean",
          key: "autoplay",
          displayer: "Autoplay",
          value: defaultValues.autoplay,
        },
        {
          type: "number",
          key: "autoplaySpeed",
          displayer: "Autoplay Speed",
          value: defaultValues.autoplaySpeed,
          min: 30
        },
        {
          type: "number",
          key: "slidesToShow",
          displayer: "Slides to Show",
          value: defaultValues.slidesToShow,
          min: 1,
        },
        {
          type: "number",
          key: "slidesToScroll",
          displayer: "Slides to Scroll",
          value: defaultValues.slidesToScroll,
          min: 1,
        },
        {
          type: "boolean",
          key: "adaptiveHeight",
          displayer: "Adaptive Height",
          value: defaultValues.adaptiveHeight,
        },
      ] as TypeUsableComponentProps[],
    };
  };
}
