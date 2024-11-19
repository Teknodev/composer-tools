import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content11.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { Type } from "react-toastify/dist/utils";

interface ListItem {
  title: string;
  description: string;
}
class Content11 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "sectionTitle",
      displayer: "title",
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
  }
  getName(): string {
    return "Content 11";
  }
  render() {
    const image = this.getPropValue("image");
    const title = this.getPropValue("sectionTitle");
    const icon = this.getPropValue("icon");
    const rightItems = this.getPropValue("right-items");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {title && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              <Base.SectionTitle className={this.decorateCSS("section-title")}>
                {this.getPropValue("sectionTitle")}
              </Base.SectionTitle>
              {icon && (
                <ComposerIcon
                  propsIcon={{ className: this.decorateCSS("icon") }}
                  name={this.getPropValue("icon")}
                />
              )}
            </Base.VerticalContent>
          )}
          <Base.ContainerGrid className={this.decorateCSS("content")}>
            {image && (
              <Base.GridCell className={this.decorateCSS("image-box")}>
                <img
                  className={this.decorateCSS("image")}
                  src={image}
                  alt={this.castToString(title)}
                />
              </Base.GridCell>
            )}
            <Base.GridCell className={this.decorateCSS("content-right")}>
              {this.castToObject<ListItem[]>("items").map((item) => (
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
          </Base.ContainerGrid>
          {rightItems.length > 0 && (
            <div className={this.decorateCSS("icons")}>
              {rightItems.map((leftItem: any) => {
                return (
                  leftItem.value[0].value && (
                    <ComposerLink path={leftItem.value[1].value}>
                      <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("Icon") }}
                        name={leftItem.value[0].value}
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

export default Content11;
