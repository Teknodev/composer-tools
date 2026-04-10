import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about1.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base, TypeButton } from "../../../composer-base-components/base/base";

type ListItem = {
  subtitle: string;
  title: string;
  description: string;
  buttons: ButtonType[];
}
type Icon = {
  icon: TypeMediaInputValue;
  link: string;
}

type ButtonType = {
  text: string;
  url: string;
  type: TypeButton;
  icon?: TypeMediaInputValue;
  image?: TypeMediaInputValue;
};

class About1 extends BaseAbout {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Story",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "ABOUT",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We are a creative agency distinctively defined by our commitment to design excellence and innovation.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", "GoChevronDown", "", "Bare"),
      ],
    });

    this.addProp({
      type: "object",
      key: "image",
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
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b9f9bd2970002c6286f3?alt=media&timestamp=1719564173697",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "b.1991, LA, America",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nulla, tenetur necessitatibus asperiores voluptatum hic animi natus nisi quaerat cumque tempora laudantium ad voluptas dolorem neque repellendus totam aperiam alias! Similique nulla, tenetur necessitatibus asperiores voluptatum, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nulla, tenetur necessitatibus asperiores voluptatum hic animi natus nisi quaerat cumque tempora laudantium ad voluptas dolorem neque repellendus totam aperiam alias! Similique nulla, tenetur necessitatibus asperiores voluptatum",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", "", "", "Primary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Education",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quibusdam similique expedita, unde tempore necessitatibus possimus maiores corrupti nostrum. Sed quos culpa vero labore magnam, impedit asperiores ullam inventore quidem?",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", "", "", "Primary"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Exhibitions - Workshop",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quibusdam similique expedita, unde tempore necessitatibus possimus maiores corrupti nostrum. Sed quos culpa vero labore magnam, impedit asperiores ullam inventore quidem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quibusdam similique expedita, unde tempore necessitatibus possimus maiores corrupti nostrum. Sed quos culpa vero labore magnam, impedit asperiores ullam inventore quidem?",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", "", "", "Primary"),
              ],
            },
          ],
        }
      ]
    });
    this.addProp({
      type: "array",
      key: "right-items",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaFacebook",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaInstagram",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaPinterest",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaLinkedin",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"],
      },
    });
  }
  static getName(): string {
    return "About 1";
  }
  render() {
    type ImageGroup = { media: TypeMediaInputValue; overlay: boolean };
    const imageGroup = this.castToObject<ImageGroup>("image");
    const imageValue = imageGroup.media;
    const hasImage = imageValue && (imageValue.url || imageValue.name);

    const subtitleStr = this.castToString(this.getPropValue("subtitle"));
    const titleStr = this.castToString(this.getPropValue("title"));
    const descriptionStr = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<ButtonType[]>("buttons");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text) || btn.image?.url || btn.icon?.name);
    const rightItems = this.castToObject<Icon[]>("right-items");
    const textContent = this.castToObject<ListItem[]>("items");
    const hasTextContent = textContent.some(
      (item) => this.castToString(item.subtitle) || this.castToString(item.title) || this.castToString(item.description) || (item.buttons && item.buttons.length > 0)
    );

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={`${this.decorateCSS("max-content")} ${this.decorateCSS(Base.getContentAlignment())}`}>
          {(subtitleStr || titleStr || descriptionStr || hasValidButtons) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {subtitleStr && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleStr && (
                <Base.SectionTitle className={this.decorateCSS("section-title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionStr && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: ButtonType, index: number) => {
                    const itemText = this.castToString(item.text);
                    const itemIcon = item.icon;
                    const itemImage = item.image;

                    const hasContent = itemText || itemImage?.url || itemIcon?.name;
                    if (!hasContent) return null;

                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={`${this.decorateCSS("button")} ${item.type === "Bare" ? this.decorateCSS("button-bare") : ""}`}>
                          {itemText && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {item.text}
                            </Base.P>
                          )}
                          {(itemImage?.url || itemIcon?.name) && (
                            <Base.Media
                              value={itemImage?.url ? { type: "image", url: itemImage.url } : { type: "icon", name: itemIcon?.name }}
                              className={this.decorateCSS("icon")}
                            />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          <Base.ListGrid gridCount={{ pc: hasImage && hasTextContent ? 2 : 1, tablet: hasImage && hasTextContent ? 2 : 1, phone: 1 }} className={`${this.decorateCSS("content")} ${!hasImage ? this.decorateCSS("no-image") : ""}`}>
            {hasImage && (
              <Base.GridCell
                className={`${this.decorateCSS("image-box")} ${!hasTextContent ? this.decorateCSS("no-content") : ""}`}
                data-animation={this.getPropValue("hoverAnimation").join(" ")}
              >
                <Base.Media
                  value={imageValue}
                  className={this.decorateCSS("image")}
                />
                {imageGroup.overlay && (
                  <div className={this.decorateCSS("overlay")} />
                )}
              </Base.GridCell>
            )}
            {hasTextContent && (
              <Base.GridCell className={this.decorateCSS("content-right")}>
                {textContent.map((item, index) => {
                  const itemButtons = item.buttons || [];
                  const hasItemButtons = itemButtons?.some((btn) => this.castToString(btn.text) || btn.image?.url || btn.icon?.name);

                  return (
                    <Base.VerticalContent key={index} className={this.decorateCSS("item")}>
                      {this.castToString(item.subtitle) && (
                        <Base.H6 className={this.decorateCSS("item-subtitle")}>
                          {item.subtitle}
                        </Base.H6>
                      )}
                      {this.castToString(item.title) && (
                        <Base.H5 className={this.decorateCSS("title")}>
                          {item.title}
                        </Base.H5>
                      )}
                      {this.castToString(item.description) && (
                        <Base.P className={this.decorateCSS("item-description")}>
                          {item.description}
                        </Base.P>
                      )}
                      {hasItemButtons && (
                        <div className={this.decorateCSS("item-button-container")}>
                          {itemButtons.map((btn: ButtonType, btnIndex: number) => {
                            const btnText = this.castToString(btn.text);
                            const btnIcon = btn.icon;
                            const btnImage = btn.image;

                            const hasContent = btnText || btnImage?.url || btnIcon?.name;
                            if (!hasContent) return null;

                            return (
                              <ComposerLink key={btnIndex} path={btn.url}>
                                <Base.Button buttonType={btn.type} className={this.decorateCSS("item-button")}>
                                  {btnText && (
                                    <Base.P className={this.decorateCSS("item-button-text")}>
                                      {btn.text}
                                    </Base.P>
                                  )}
                                  {(btnImage?.url || btnIcon?.name) && (
                                    <Base.Media
                                      value={btnImage?.url ? { type: "image", url: btnImage.url } : { type: "icon", name: btnIcon?.name }}
                                      className={this.decorateCSS("item-icon")}
                                    />
                                  )}
                                </Base.Button>
                              </ComposerLink>
                            );
                          })}
                        </div>
                      )}
                    </Base.VerticalContent>
                  )
                })}
              </Base.GridCell>
            )}
          </Base.ListGrid>
          {rightItems.length > 0 && (
            <div className={this.decorateCSS("icons")}>
              {rightItems.map((icons: Icon, index: number) => {
                return (
                  icons.icon && (
                    <ComposerLink key={index} path={icons.link}>
                      <Base.Media
                        value={icons.icon}
                        className={this.decorateCSS("icon-item")}
                      />
                    </ComposerLink>
                  )
                );
              })}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About1;
