import React from "react";
import styles from "./download10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Background = {
  media: TypeMediaInputValue;
  overlay: boolean;
};

type IconItem = {
  icon: TypeMediaInputValue;
};

class Download10 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Subtitle",
      value: "MEET THE APP",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Start with lucky,Grow your business",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "To grow a business, it's important to establish clear goals, identify and target the right audience, continually innovate and adapt to changing market trends, and build strong relationships with customers and stakeholders. ",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Download", "", "FaApple", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68e79205ffd791002b7e7482?alt=media", "Primary"),]
    })

    this.addProp({
      type: "string",
      key: "text1",
      displayer: "Review Title",
      value: "Trustes by 2M+ customers",
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Icon",
      value: [
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BsFillStarFill",
              },
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BsFillStarFill",
              },
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BsFillStarFill",
              },
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BsFillStarFill",
              },
            },
          ],
        },
        {
          type: "object",
          key: "icon",
          displayer: "Icon",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BsFillStarFill",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "text2",
      displayer: "Review Score",
      value: "4.3/5 (55k Reviews)",
    });

    this.addProp({
      type: "object",
      key: "media",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67438ea6506a40002c2dca7f?alt=media&timestamp=1732480731550",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
  }

  static getName(): string {
    return "Download 10";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("badge"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasContent = subtitle || title || description;
    const reviewTitle = this.castToString(this.getPropValue("text1"));
    const reviewScore = this.castToString(this.getPropValue("text2"));
    const icons = this.castToObject<IconItem[]>("icons");
    const background = this.castToObject<Background>("media");
    const image = background?.media;
    const overlay = background?.overlay;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasLeftContainer = hasContent || buttons.length > 0 || reviewTitle || reviewScore || icons.length > 0;

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${image && this.decorateCSS("with-image")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("page")} ${image && this.decorateCSS("has-image")}`}>
            {hasLeftContainer && (
              <div className={this.decorateCSS("left-container")}>
                {(hasContent || buttons.length > 0) && (
                  <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                    {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("badge")}</Base.SectionSubTitle>}
                    {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                    {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                    {buttons.length > 0 && (
                      <Base.Row className={this.decorateCSS("button-group")}>
                        {this.castToObject<INPUTS.CastedButton[]>("buttons").map((item: INPUTS.CastedButton, index: number) => {
                          const buttonTextExist = this.castToString(item?.text);
                          const iconExist = item.icon && item.icon.name;
                          const imageExist = item.image && item.image.url;
                          return (buttonTextExist || iconExist || imageExist) && (
                            <ComposerLink key={`dw-10-btn-${index}`} path={item.url}>
                              {imageExist ? (
                                <Base.Media value={item.image} className={this.decorateCSS("button-image")} />
                              ) : (
                                <Base.Button buttonType={item.type} className={this.decorateCSS("button-element")}>
                                  {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                                  {iconExist && <Base.Media value={item.icon} className={this.decorateCSS("button-icon")} />}
                                </Base.Button>
                              )}
                            </ComposerLink>
                          );
                        })}
                      </Base.Row>
                    )}
                  </Base.VerticalContent>
                )}
                {(reviewTitle || reviewScore || icons.length > 0) && (
                  <Base.VerticalContent className={this.decorateCSS("stats")}>
                    {reviewTitle && <Base.H5 className={this.decorateCSS("stats-title")}>{this.getPropValue("text1")}</Base.H5>}
                    <Base.Row className={this.decorateCSS("down-description")}>
                      <div className={this.decorateCSS("stars")}>{icons.map((item: IconItem) => item.icon && <Base.Media value={item.icon} className={this.decorateCSS("icon")} />)}</div>
                      {reviewScore && <Base.P className={this.decorateCSS("info")}>{this.getPropValue("text2")}</Base.P>}
                    </Base.Row>
                  </Base.VerticalContent>
                )}
              </div>
            )}
            {image && (
              <div className={`${this.decorateCSS("right-container")} ${!hasContent && this.decorateCSS("no-image")}`}>
                <Base.Media value={image} className={this.decorateCSS("right-image")} />
                {overlay && <div className={this.decorateCSS("overlay")} />}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Download10;