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

  export const BUTTON = (buttonKey: string, displayer: string, text: string, url: string | null, icon: string | null, image: string | null, type: TypeButton = "Primary") => {
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
            selectItems: ["Primary", "Secondary", "Tertiary", "Link", "White", "Black"],
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

  export const LOGO = (key: string, displayer: string, defaultImage?: string) => {
    return {
      type: "object",
      key: key,
      displayer: displayer,
      value: [
        {
          type: "image",
          key: "image",
          value: defaultImage || "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
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
  export const NAVBAR_POSITION = (key: string, displayer: string, defaultValue: string = "Default") => {
    return {
      type: "select",
      key: key,
      displayer: displayer,
      value: defaultValue,
      additionalParams: {
        selectItems: ["Absolute", "Sticky Colorful", "Sticky Transparent", "Default"],
      },
    } as TypeUsableComponentProps;
  };
}
