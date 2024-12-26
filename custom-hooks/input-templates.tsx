import { TypeButton } from "composer-tools/composer-base-components/base/base";
import { TypeUsableComponentProps } from "composer-tools/editor-components/EditorComponent";

export namespace INPUTS {
  export type CastedButton = { text: JSX.Element; url: string; type: TypeButton };

  export const BUTTON = (
    buttonKey: string,
    displayer: string,
    text: string,
    url: string = "",
    type: TypeButton = "Primary"
  ) => {
    return {
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
          type: "page",
          key: "url",
          displayer: "URL",
          value: url,
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
    } as TypeUsableComponentProps;
  };

  export const LOGO = (key: string, displayer: string) => {
    return {
      type: "object",
      key: key,
      displayer: displayer,
      value: [
        {
          type: "image",
          key: "image",
          value:
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
}
