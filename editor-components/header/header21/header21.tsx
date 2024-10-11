import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header21.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type CardState = {
  subtitle: JSX.Element;
  title: JSX.Element;
  description: JSX.Element;
};

type Button = {
  buttonText: JSX.Element;
  buttonLink: string;
};

class Header21 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Quick parcel delivery, from.",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Get used to better entertaining",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value:
            "Holiday shopping with 3% back in rewards. Offer expires 12/31/2024",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "More Projects",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "More Projects",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08ed003b007002cc77884?alt=media",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "MdOutlinePlayCircleOutline",
    });
    this.addProp({
      type: "video",
      displayer: "Video",
      key: "video",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b08ebb03b007002cc77877?alt=media",
    });

    this.setComponentState("is_video_visible", false);
  }
  getName(): string {
    return "Header 21";
  }
  render() {
    const card = this.castToObject<CardState>("card");
    const buttons = this.castToObject<Button[]>("buttons");

    const titleExist = this.castToString(card.title);
    const subtitleExist = this.castToString(card.subtitle);
    const descExist = this.castToString(card.description);

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(titleExist || subtitleExist || descExist || buttons?.length) && (
              <div className={this.decorateCSS("card")}>
                <div className={this.decorateCSS("card-box")}>
                  {subtitleExist && (
                    <h3 className={this.decorateCSS("card-subtitle")}>
                      {card.subtitle}
                    </h3>
                  )}
                  {titleExist && (
                    <h1 className={this.decorateCSS("card-title")}>
                      {card.title}
                    </h1>
                  )}
                  {descExist && (
                    <p className={this.decorateCSS("card-description")}>
                      {card.description}
                    </p>
                  )}
                  {buttons.length > 0 && (
                    <div className={this.decorateCSS("buttons")}>
                      {buttons.map((button: Button, index: number) => {
                        if(this.castToString(button.buttonText))
                        return (
                          <div
                            key={index}
                            className={this.decorateCSS("card-button")}
                          >
                            <ComposerLink path={button.buttonLink}>
                              {button.buttonText}
                            </ComposerLink>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}
            {(this.getPropValue("image", { as_string: true }) ||
              this.getPropValue("video", { as_string: true })) && (
              <div className={this.decorateCSS("image-box")}>
                <button
                  className={this.decorateCSS("button")}
                  onClick={() => {
                    this.setComponentState("is_video_visible", true);
                  }}
                >
                  <ComposerIcon
                    name={this.getPropValue("icon")}
                    propsIcon={{ className: this.decorateCSS("btn-icon") }}
                  />
                </button>
                <img src={this.getPropValue("image")} alt="image" />
                {this.getComponentState("is_video_visible") && (
                  <div
                    className={this.decorateCSS("video")}
                    onClick={() =>
                      this.setComponentState("is_video_visible", false)
                    }
                  >
                    <video
                      onClick={(event) => event.stopPropagation()}
                      controls
                      className={this.decorateCSS("player")}
                      src={this.getPropValue("video")}
                    ></video>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header21;
