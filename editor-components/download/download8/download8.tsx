import * as React from "react";
import styles from "./download8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = {
  buttonText: React.JSX.Element;
  buttonIcon: string;
  url: string;
  buttonImage: string;
};

class Download8 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Background Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436af8368c3c2002cd2fa67?alt=media&timestamp=1719564433794",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "If you want to download it",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "By offering a clear call-to-action, businesses and developers can increase the chances that users will download and use their product.",
    });

    this.addProp({
      type: "string",
      key: "cardTitle",
      displayer: "Card Title",
      value: "Download now by clicking the button",
    });

    this.addProp({
      type: "array",
      key: "list",
      displayer: "List",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value: "App Store",
            },
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["icon","image"],
              },
              value: {
                type: "icon",
                name: "FaApple",
              },
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value: "Google Play",
            },
            {
              type: "media",
              key: "itemIcon",
              displayer: "Item Icon",
              additionalParams: {
                availableTypes: ["icon","image"],
              },
              value: {
                type: "icon",
                name: "FaGooglePlay",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download", "", "FaAndroid", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732790517206", "Primary"),
        INPUTS.BUTTON("button", "Button", "Download", "", "FaApple", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68e79205ffd791002b7e7482?alt=media", "Primary"),
      ],
      additionalParams: {
        maxElementCount: 4,
      },
    });
  }

  static getName(): string {
    return "Download 8";
  }

  render() {
    const imageExist = this.getPropValue("image");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const cardTitle = this.getPropValue("cardTitle");
    const overlay = this.getPropValue("overlay");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const cardTitleExist = this.castToString(cardTitle);
    const listExist = this.castToObject<any[]>("list").length > 0;

    const rightContent = document.getElementById("right-content");
    const leftContent = document.getElementById("left-content");

    if (rightContent && leftContent) {
      const rightHeight = rightContent.clientHeight;
      leftContent.setAttribute("style", `min-height: ${rightHeight}px`);
    }

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("page")}>
          {imageExist && (
            <div className={this.decorateCSS("image-child")}>
              <div className={overlay && this.decorateCSS("overlay")}></div>
              <Base.Media value={this.getPropValue("image")} className={this.decorateCSS("background-image")} />
            </div>
          )}
          <Base.MaxContent className={`${this.decorateCSS("max-content")} ${imageExist ? this.decorateCSS("image") : this.decorateCSS("no-image")}`}>
            {(titleExist || descriptionExist) && (
              <Base.VerticalContent id={"left-content"} className={`${this.decorateCSS("left-content")} ${imageExist && this.decorateCSS("center")}`}>
                {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={`${this.decorateCSS("description")} ${imageExist && this.decorateCSS("image")}`}>{this.getPropValue("description")}</Base.SectionDescription>}
              </Base.VerticalContent>
            )}
          </Base.MaxContent>
          <div id={"right-content"} className={this.decorateCSS("right-content")}>
            <Base.VerticalContent className={this.decorateCSS("card")}>
              <div className={this.decorateCSS("card-up")}>
                {cardTitleExist && <Base.H3 className={this.decorateCSS("cardTitle")}>{this.getPropValue("cardTitle")}</Base.H3>}
                {listExist && (
                  <Base.VerticalContent className={this.decorateCSS("list-group")}>
                    {this.castToObject<any[]>("list").map((item: any, index: number) => {
                      const itemTextExist = this.castToString(item.itemText);
                      const hasItemExist = itemTextExist || item.itemIcon;
                      return (
                        hasItemExist && (
                          <Base.Row className={this.decorateCSS("list-element")}>
                            {item.itemIcon && (
                              <Base.Media
                                value={item.itemIcon}
                                className={this.decorateCSS("icon")}
                              />
                            )}
                            {itemTextExist && <Base.P className={this.decorateCSS("text")}>{item.itemText}</Base.P>}
                          </Base.Row>
                        )
                      );
                    })}
                  </Base.VerticalContent>
                )}
              </div>
              {this.castToObject<INPUTS.CastedButton[]>("buttons").length > 0 && (
                <Base.Row className={this.decorateCSS("card-down")}>
                  <div className={this.decorateCSS("buttons-container")}>
                    {this.castToObject<INPUTS.CastedButton[]>("buttons").map((item: INPUTS.CastedButton, index: number) => {
                      const buttonTextExist = this.castToString(item.text);
                      const iconExist = item.icon && item.icon.name;
                      const imageExist = item.image && item.image.url;
                      const buttonExist = buttonTextExist || iconExist || imageExist;
                      return buttonExist && (
                        <ComposerLink key={`dw-8-btn-${index}`} path={item.url}>
                          {imageExist ? (
                            <div className={this.decorateCSS("image-container")}>
                              <Base.Media value={item.image} className={this.decorateCSS("image")} />
                            </div>
                          ) : (
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              {iconExist && <Base.Media value={item.icon} className={this.decorateCSS("icon")} />}
                              {buttonTextExist && <Base.P className={this.decorateCSS("text")}>{item.text}</Base.P>}
                            </Base.Button>
                          )}
                        </ComposerLink>
                      );
                    })}
                  </div>
                </Base.Row>
              )}
            </Base.VerticalContent>
          </div>
        </div>
      </Base.Container>
    );
  }
}

export default Download8;
