import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about1.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base, TypeButton } from "../../../composer-base-components/base/base";

type ListItem = {
  title: React.JSX.Element;
  description: React.JSX.Element;
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
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
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
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
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
          ],
        },
      ],
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
    const subtitleStr = this.castToString(this.getPropValue("subtitle"));
    const titleStr = this.castToString(this.getPropValue("title"));
    const descriptionStr = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<ButtonType[]>("buttons");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text) || btn.image?.url || btn.icon?.name);
    const rightItems = this.castToObject<Icon[]>("right-items");
    const textContent = this.castToObject<ListItem[]>("items");
    const hasTextContent = textContent.some(
      (item) => this.castToString(item.title) || this.castToString(item.description)
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
                    const hasContent = this.castToString(item.text) || item.image?.url || item.icon?.name;
                    if (!hasContent) return null;

                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={`${this.decorateCSS("button")} ${item.type === "Bare" ? this.decorateCSS("button-bare") : ""}`}>
                          {this.castToString(item.text) && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {item.text}
                            </Base.P>
                          )}
                          {(item.image?.url || item.icon?.name) && (
                            <Base.Media
                              value={item.image?.url ? { type: "image", url: item.image.url } : { type: "icon", name: item.icon?.name }}
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
          <Base.ContainerGrid className={this.decorateCSS("content")}>
            {imageValue && (
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
                {textContent.map((item, index) => (
                  <Base.VerticalContent key={index} className={this.decorateCSS("item")}>
                    {this.castToString(item.title) && (
                      <Base.H4 className={this.decorateCSS("title")}>
                        {item.title}
                      </Base.H4>
                    )}
                    {this.castToString(item.description) && (
                      <Base.P className={this.decorateCSS("item-description")}>
                        {item.description}
                      </Base.P>
                    )}
                  </Base.VerticalContent>
                ))}
              </Base.GridCell>
            )}
          </Base.ContainerGrid>
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
