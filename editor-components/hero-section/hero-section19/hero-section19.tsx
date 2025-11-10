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
          displayer: "Title",
          key: "title",
          value: "MATTIS LAOREET SAPIEN",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "Porta Consectetur Imperdiet Frigilla",
        },
        {
          type: "media",
          displayer: "Image",
          key: "image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f79?alt=media&timestamp=1719483639150",
          },
        },
      ],
    });

    this.addProp(INPUTS.BUTTON("button1", "Button", "READ MORE", "", null, null, "Primary"));

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
          displayer: "Title",
          key: "title",
          value: "SEMPER",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "Feugiat Scelerisque Imperdiet",
        },
        {
          type: "media",
          displayer: "Image",
          key: "image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f78?alt=media&timestamp=1719483639150",
          },
        },
      ],
    });

    this.addProp(INPUTS.BUTTON("button2", "Button", "READ MORE", "", null, null, "Primary"));

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
          displayer: "Title",
          key: "title",
          value: "SEMPER",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "Adipiscing Sodales",
        },

        {
          type: "media",
          displayer: "Image",
          key: "image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f7a?alt=media&timestamp=1719483639150",
          },
        },
      ],
    });

    this.addProp(INPUTS.BUTTON("button3", "Button", "READ MORE", "", null, null, "Primary"));

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
          displayer: "Image",
          key: "image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661958fbd2970002c625f7b?alt=media&timestamp=1719483639150",
          },
        },
      ],
    });

    this.addProp(INPUTS.BUTTON("button4", "Button", "", "", null, null, "Primary"));
  }

  static getName(): string {
    return "Hero Section 19";
  }

  render() {
    const itemLeft = this.castToObject<any>("item-left");
    const itemRightTop = this.castToObject<any>("item-right-top");
    const itemBottomLeft = this.castToObject<any>("item-right-bottom-left");
    const itemBottomRight = this.castToObject<any>("item-right-bottom-right");

    const button1: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button1");
    const button2: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button2");
    const button3: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button3");
    const button4: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button4");

    const items = [
      { name: "Left", data: itemLeft },
      { name: "RightTop", data: itemRightTop },
      { name: "BottomLeft", data: itemBottomLeft },
      { name: "BottomRight", data: itemBottomRight },
    ];

    let visibleContents: any = {};

    items.forEach(({ name, data }) => {
      let isVisible = Boolean(this.castToString(data.title) || this.castToString(data.description));

      const buttons = ["button1", "button2", "button3", "button4"];
      buttons.forEach((buttonName) => {
        const button = this.castToObject<INPUTS.CastedButton>(buttonName);
        if (this.castToString(button.text)) {
          isVisible = true;
        }
      });

      visibleContents[`isContentVisible${name}`] = isVisible;
    });

    const isContentVisibleLeft = visibleContents["isContentVisibleLeft"];
    const isContentVisibleRightTop = visibleContents["isContentVisibleRightTop"];
    const isContentVisibleBottomLeft = visibleContents["isContentVisibleBottomLeft"];
    const isContentVisibleBottomRight = visibleContents["isContentVisibleBottomRight"];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {itemLeft.visibility && (
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("item")}>
                {itemLeft.image && (
                  <div className={this.decorateCSS("background-image")}>
                    <Base.Media value={itemLeft.image} className={this.decorateCSS("image")} />
                  </div>
                )}
                {isContentVisibleLeft && (
                  <div className={`${this.decorateCSS("content")} ${!itemLeft.image && this.decorateCSS("no-bg-img")}`}>
                    {this.castToString(itemLeft.title) && <div className={this.decorateCSS("title")}>{itemLeft.title}</div>}
                    {this.castToString(itemLeft.description) && <div className={this.decorateCSS("description")}>{itemLeft.description}</div>}
                    {this.castToString(button1.text) && (
                      <ComposerLink path={button1.url}>
                        <Base.Button buttonType={button1.type} className={this.decorateCSS("button")}>
                          {button1.text}
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
                        <Base.Media value={itemRightTop.image} className={this.decorateCSS("image")} />
                      </div>
                    )}
                    {isContentVisibleRightTop && (
                      <div className={`${this.decorateCSS("content")} ${!itemRightTop.image && this.decorateCSS("no-bg-img")}`}>
                        {this.castToString(itemRightTop.title) && <div className={this.decorateCSS("title")}>{itemRightTop.title}</div>}
                        {this.castToString(itemRightTop.description) && <div className={this.decorateCSS("description")}>{itemRightTop.description}</div>}
                        {this.castToString(button2.text) && (
                          <ComposerLink path={button2.url}>
                            <Base.Button buttonType={button2.type} className={this.decorateCSS("button")}>
                              {button2.text}
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
                          <Base.Media value={itemBottomLeft.image} className={this.decorateCSS("image")} />
                        </div>
                      )}
                      {isContentVisibleBottomLeft && (
                        <div className={`${this.decorateCSS("content")} ${!itemBottomLeft.image && this.decorateCSS("no-bg-img")}`}>
                          {this.castToString(itemBottomLeft.title) && <div className={this.decorateCSS("title")}>{itemBottomLeft.title}</div>}
                          {this.castToString(itemBottomLeft.description) && <div className={this.decorateCSS("description")}>{itemBottomLeft.description}</div>}
                          {this.castToString(button3.text) && (
                            <ComposerLink path={button3.url}>
                              <Base.Button buttonType={button3.type} className={this.decorateCSS("button")}>
                                {button3.text}
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
                          <Base.Media value={itemBottomRight.image} className={this.decorateCSS("image")} />
                        </div>
                      )}
                      {isContentVisibleBottomRight && (
                        <div className={`${this.decorateCSS("content")} ${!itemBottomRight.image && this.decorateCSS("no-bg-img")}`}>
                          {this.castToString(itemBottomRight.title) && <div className={this.decorateCSS("title")}>{itemBottomRight.title}</div>}
                          {this.castToString(itemBottomRight.description) && <div className={this.decorateCSS("description")}>{itemBottomRight.description}</div>}
                          {this.castToString(button4.text) && (
                            <ComposerLink path={button4.url}>
                              <Base.Button buttonType={button4.type} className={this.decorateCSS("button")}>
                                {button4.text}
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

