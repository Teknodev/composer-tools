import * as React from "react";
import styles from "./download8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Button = {
  buttonText: JSX.Element;
  buttonIcon: string;
  url: string;
  buttonImage: string;
};

class Download8 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436af8368c3c2002cd2fa67?alt=media&timestamp=1719564433794",
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
              type: "icon",
              key: "itemIcon",
              displayer: "Item Icon",
              value: "FaApple",
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
              type: "icon",
              key: "itemIcon",
              displayer: "Item Icon",
              value: "FaGooglePlay",
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
        {
          type: "object",
          key: "button",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "Button Icon",
              value: "FaApple",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "image",
              key: "buttonImage",
              displayer: "Button Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67586eb80655f8002ca57e58?alt=media",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Displayer",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Download",
            },
            {
              type: "icon",
              key: "buttonIcon",
              displayer: "Button Icon",
              value: "FaGooglePlay",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "image",
              key: "buttonImage",
              displayer: "Button Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732790517206",
            },
          ],
        },
      ],
      additionalParams: {
        maxElementCount: 4,
      },
    });
  }

  getName(): string {
    return "Download-8";
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
              <img className={this.decorateCSS("background-image")} src={this.getPropValue("image")} alt="" />
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
                              <ComposerIcon
                                name={item.itemIcon}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                }}
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
              {this.castToObject<Button[]>("buttons").length > 0 && (
                <Base.Row className={this.decorateCSS("card-down")}>
                  <div className={this.decorateCSS("buttons-container")}>
                    {this.castToObject<Button[]>("buttons").map((item: Button, index: number) => {
                      const buttonTextExist = this.castToString(item.buttonText);
                      return (
                        <ComposerLink key={`dw-8-btn-${index}`} path={item.url}>
                          {item.buttonImage ? (
                            <div className={this.decorateCSS("image-container")}>
                              <img src={item.buttonImage} className={this.decorateCSS("image")} alt="button" />
                            </div>
                          ) : (
                            (item.buttonIcon || buttonTextExist) && (
                              <Base.Button className={this.decorateCSS("button")}>
                                {item.buttonIcon && <ComposerIcon name={item.buttonIcon} propsIcon={{ className: this.decorateCSS("icon") }} />}
                                {buttonTextExist && item.buttonText && <Base.P className={this.decorateCSS("text")}>{item.buttonText}</Base.P>}
                              </Base.Button>
                            )
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
