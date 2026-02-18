import * as React from "react";
import styles from "./hero-section19.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class HeroSection19 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      displayer: "Item Left",
      key: "item-left",
      value: [
        {
          type: "boolean",
          displayer: "Visibility",
          key: "visibility",
          value: true,
        },
        {
          type: "string",
          displayer: "Subtitle",
          key: "subtitle",
          value: "MATTIS LAOREET SAPIEN",
        },
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "Porta Consectetur Imperdiet Frigilla",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "",
        },
        {
          type: "media",
          displayer: "Media",
          key: "image",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f79?alt=media&timestamp=1719483639150",
          },
        },
        {
          type: "boolean",
          displayer: "Overlay",
          key: "overlay",
          value: false,
        },
       INPUTS.BUTTON("button", "Button", "READ MORE", "", null, null, "Primary")
      ],
    });

    this.addProp({
      type: "object",
      displayer: "Item Right Top",
      key: "item-right-top",
      value: [
        {
          type: "boolean",
          displayer: "Visibility",
          key: "visibility",
          value: true,
        },
        {
          type: "string",
          displayer: "Subtitle",
          key: "subtitle",
          value: "SEMPER",
        },
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "Feugiat Scelerisque Imperdiet",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "",
        },
        {
          type: "media",
          displayer: "Media",
          key: "image",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f78?alt=media&timestamp=1719483639150",
          },
        },
        {
          type: "boolean",
          displayer: "Overlay",
          key: "overlay",
          value: false,
        },
        INPUTS.BUTTON("button", "Button", "READ MORE", "", null, null, "Primary")
      ],
    });

    this.addProp({
      type: "object",
      displayer: "Item Right Bottom Left",
      key: "item-right-bottom-left",
      value: [
        {
          type: "boolean",
          displayer: "Visibility",
          key: "visibility",
          value: true,
        },
        {
          type: "string",
          displayer: "Subtitle",
          key: "subtitle",
          value: "SEMPER",
        },
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "Adipiscing Sodales",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "",
        },
        {
          type: "media",
          displayer: "Media",
          key: "image",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f7a?alt=media&timestamp=1719483639150",
          },
        },
        {
          type: "boolean",
          displayer: "Overlay",
          key: "overlay",
          value: false,
        },
       INPUTS.BUTTON("button", "Button", "READ MORE", "", null, null, "Primary")
      ],
    });

    this.addProp({
      type: "object",
      displayer: "Item Right Bottom Right",
      key: "item-right-bottom-right",
      value: [
        {
          type: "boolean",
          displayer: "Visibility",
          key: "visibility",
          value: true,
        },
        {
          type: "string",
          displayer: "Subtitle",
          key: "subtitle",
          value: "",
        },
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "",
        },
        {
          type: "media",
          displayer: "Media",
          key: "image",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f7b?alt=media&timestamp=1719483639150",
          },
        },
        {
          type: "boolean",
          displayer: "Overlay",
          key: "overlay",
          value: false,
        },
       INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")
      ],
    });
    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });
  }

  static getName(): string {
    return "Hero Section 19";
  }

  render() {
    const itemLeft = this.castToObject<any>("item-left");
    const itemRightTop = this.castToObject<any>("item-right-top");
    const itemBottomLeft = this.castToObject<any>("item-right-bottom-left");
    const itemBottomRight = this.castToObject<any>("item-right-bottom-right");

    const getButton = (parentButton) => ({
      text: this.getPropValue("text", { parent_object: parentButton }),
      type: this.getPropValue("type", { parent_object: parentButton }),
      url: this.getPropValue("url", { parent_object: parentButton }),
    });

    const buttonLeft = getButton(itemLeft.button);
    const buttonRightTop = getButton(itemRightTop.button);
    const buttonBottomLeft = getButton(itemBottomLeft.button);
    const buttonBottomRight = getButton(itemBottomRight.button);

    const items = [
      { name: "Left", data: itemLeft, button: buttonLeft },
      { name: "RightTop", data: itemRightTop, button: buttonRightTop },
      { name: "BottomLeft", data: itemBottomLeft, button: buttonBottomLeft },
      { name: "BottomRight", data: itemBottomRight, button: buttonBottomRight },
    ];

    let visibleContents: any = {};

    items.forEach(({ name, data, button }) => {
      let isVisible = Boolean(this.castToString(data.subtitle) || this.castToString(data.title) || this.castToString(data.description) || this.castToString(button.text));
      visibleContents[`isContentVisible${name}`] = isVisible;
    });

    const isContentVisibleLeft = visibleContents["isContentVisibleLeft"];
    const isContentVisibleRightTop = visibleContents["isContentVisibleRightTop"];
    const isContentVisibleBottomLeft = visibleContents["isContentVisibleBottomLeft"];
    const isContentVisibleBottomRight = visibleContents["isContentVisibleBottomRight"];

    const animationActive = this.getPropValue("animation");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${animationActive && this.decorateCSS("has-animation")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {itemLeft.visibility && (
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("item")}>
                {itemLeft.image && (
                  <div className={this.decorateCSS("background-image")}>
                    <Base.Media value={itemLeft.image} className={this.decorateCSS("image")} autoPlay muted loop playsInline />
                    {itemLeft.overlay && <div className={this.decorateCSS("overlay")} />}
                  </div>
                )}
                {isContentVisibleLeft && (
                  <div className={`${this.decorateCSS("content")} ${!itemLeft.image && this.decorateCSS("no-bg-img")}`}>
                    {this.castToString(itemLeft.subtitle) && <div className={this.decorateCSS("subtitle")}>{itemLeft.subtitle}</div>}
                    {this.castToString(itemLeft.title) && <div className={this.decorateCSS("title")}>{itemLeft.title}</div>}
                    {this.castToString(itemLeft.description) && <div className={this.decorateCSS("description")}>{itemLeft.description}</div>}
                    {this.castToString(buttonLeft.text) && (
                      <ComposerLink path={buttonLeft.url}>
                        <Base.Button buttonType={buttonLeft.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>{buttonLeft.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {(itemRightTop.visibility || itemBottomLeft.visibility || itemBottomRight.visibility) && (
            <div className={this.decorateCSS("right")}>
              {itemRightTop.visibility && (
                <div className={this.decorateCSS("top")}>
                  <div className={this.decorateCSS("item")}>
                    {itemRightTop.image && (
                      <div className={this.decorateCSS("background-image")}>
                        <Base.Media value={itemRightTop.image} className={this.decorateCSS("image")} autoPlay muted loop playsInline />
                        {itemRightTop.overlay && <div className={this.decorateCSS("overlay")} />}
                      </div>
                    )}
                    {isContentVisibleRightTop && (
                      <div className={`${this.decorateCSS("content")} ${!itemRightTop.image && this.decorateCSS("no-bg-img")}`}>
                        {this.castToString(itemRightTop.subtitle) && <div className={this.decorateCSS("subtitle")}>{itemRightTop.subtitle}</div>}
                        {this.castToString(itemRightTop.title) && <div className={this.decorateCSS("title")}>{itemRightTop.title}</div>}
                        {this.castToString(itemRightTop.description) && <div className={this.decorateCSS("description")}>{itemRightTop.description}</div>}
                        {this.castToString(buttonRightTop.text) && (
                          <ComposerLink path={buttonRightTop.url}>
                            <Base.Button buttonType={buttonRightTop.type} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>{buttonRightTop.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {(itemBottomLeft.visibility || itemBottomRight.visibility) && (
                <div className={this.decorateCSS("bottom")}>
                  {itemBottomLeft.visibility && (
                    <div className={`${this.decorateCSS("item")} ${this.decorateCSS("bottom-left")}`}>
                      {itemBottomLeft.image && (
                        <div className={this.decorateCSS("background-image")}>
                          <Base.Media value={itemBottomLeft.image} className={this.decorateCSS("image")} autoPlay loop />
                          {itemBottomLeft.overlay && <div className={this.decorateCSS("overlay")} />}
                        </div>
                      )}
                      {isContentVisibleBottomLeft && (
                        <div className={`${this.decorateCSS("content")} ${!itemBottomLeft.image && this.decorateCSS("no-bg-img")}`}>
                          {this.castToString(itemBottomLeft.subtitle) && <div className={this.decorateCSS("subtitle")}>{itemBottomLeft.subtitle}</div>}
                          {this.castToString(itemBottomLeft.title) && <div className={this.decorateCSS("title")}>{itemBottomLeft.title}</div>}
                          {this.castToString(itemBottomLeft.description) && <div className={this.decorateCSS("description")}>{itemBottomLeft.description}</div>}
                          {this.castToString(buttonBottomLeft.text) && (
                            <ComposerLink path={buttonBottomLeft.url}>
                              <Base.Button buttonType={buttonBottomLeft.type} className={this.decorateCSS("button")}>
                                <Base.P className={this.decorateCSS("button-text")}>{buttonBottomLeft.text}</Base.P>
                              </Base.Button>
                            </ComposerLink>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  {itemBottomRight.visibility && (
                    <div className={`${this.decorateCSS("item")} ${this.decorateCSS("bottom-right")}`}>
                      {itemBottomRight.image && (
                        <div className={this.decorateCSS("background-image")}>
                          <Base.Media value={itemBottomRight.image} className={this.decorateCSS("image")} autoPlay loop />
                          {itemBottomRight.overlay && <div className={this.decorateCSS("overlay")} />}
                        </div>
                      )}
                      {isContentVisibleBottomRight && (
                        <div className={`${this.decorateCSS("content")} ${!itemBottomRight.image && this.decorateCSS("no-bg-img")}`}>
                          {this.castToString(itemBottomRight.subtitle) && <div className={this.decorateCSS("subtitle")}>{itemBottomRight.subtitle}</div>}
                          {this.castToString(itemBottomRight.title) && <div className={this.decorateCSS("title")}>{itemBottomRight.title}</div>}
                          {this.castToString(itemBottomRight.description) && <div className={this.decorateCSS("description")}>{itemBottomRight.description}</div>}
                          {this.castToString(buttonBottomRight.text) && (
                            <ComposerLink path={buttonBottomRight.url}>
                              <Base.Button buttonType={buttonBottomRight.type} className={this.decorateCSS("button")}>
                                {buttonBottomRight.text}
                              </Base.Button>
                            </ComposerLink>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection19;

