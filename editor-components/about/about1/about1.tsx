import * as React from "react";
import { BaseAbout } from "../../EditorComponent";
import styles from "./about1.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";

interface ListItem {
  title: string;
  description: string;
}
interface Icon {
  icon: string;
  link: string;
}
class About1 extends BaseAbout {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "sectionTitle",
      displayer: "Title",
      value: "ABOUT",
    });

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "GoChevronDown",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b9f9bd2970002c6286f3?alt=media&timestamp=1719564173697",
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
              type: "icon",
              key: "icon",
              value: "FaFacebook",
              displayer: "Icon",
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
              type: "icon",
              key: "icon",
              value: "FaInstagram",
              displayer: "Icon",
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
              type: "icon",
              key: "icon",
              value: "FaPinterest",
              displayer: "Icon",
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
              type: "icon",
              key: "icon",
              value: "FaLinkedin",
              displayer: "Icon",
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
        selectItems: ["animate1", "animate2"]
      }
    });
  }
  static getName(): string {
    return "About 1";
  }
  render() {
    const image = this.getPropValue("image");
    const title = this.getPropValue("sectionTitle");
    const icon = this.getPropValue("icon");
    const rightItems = this.castToObject<Icon[]>("right-items")
    const textContent = this.castToObject<ListItem[]>("items");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {title && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              <Base.Row className={this.decorateCSS("title")}>
                <Base.SectionTitle className={this.decorateCSS("section-title")}>
                  {this.getPropValue("sectionTitle")}
                </Base.SectionTitle>
                {icon && (
                  <Base.Icon
                    propsIcon={{ className: this.decorateCSS("icon") }}
                    name={this.getPropValue("icon")}
                  />
                )}
              </Base.Row>
            </Base.VerticalContent>
          )}
          <Base.ContainerGrid className={this.decorateCSS("content")}>
            {image && (
              <Base.GridCell 
                className={`${this.decorateCSS("image-box")} ${!textContent.length ? this.decorateCSS("no-content") : ""}`}
                data-animation={this.getPropValue("hoverAnimation").join(" ")}
              >
                <img
                  className={this.decorateCSS("image")}
                  src={image}
                  alt={this.castToString(title)}
                />
              </Base.GridCell>
            )}
            {textContent.length > 0 && (
              <Base.GridCell className={this.decorateCSS("content-right")}>
                {textContent.map((item) => (
                  <Base.VerticalContent className={this.decorateCSS("item")}>
                    {item.title && (
                      <Base.H2 className={this.decorateCSS("title")}>
                        {item.title}
                      </Base.H2>
                    )}
                    {item.description && (
                      <Base.P className={this.decorateCSS("description")}>
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
              {rightItems.map((icons: Icon) => {
                return (
                  icons.icon && (
                    <ComposerLink path={icons.link}>
                      <Base.Icon
                        propsIcon={{ className: this.decorateCSS("Icon") }}
                        name={icons.icon}
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
