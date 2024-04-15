import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content11.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";


class Content11 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "box",
      displayer: "title",
      value: "ABOUT",
    });

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "GoChevronDown"
    })

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
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
              value: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nulla, tenetur necessitatibus asperiores voluptatum hic animi natus nisi quaerat cumque tempora laudantium ad voluptas dolorem neque repellendus totam aperiam alias! Similique nulla, tenetur necessitatibus asperiores voluptatum, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nulla, tenetur necessitatibus asperiores voluptatum hic animi natus nisi quaerat cumque tempora laudantium ad voluptas dolorem neque repellendus totam aperiam alias! Similique nulla, tenetur necessitatibus asperiores voluptatum"
            }
          ]
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
              value: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quibusdam similique expedita, unde tempore necessitatibus possimus maiores corrupti nostrum. Sed quos culpa vero labore magnam, impedit asperiores ullam inventore quidem?"
            }
          ]
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
              value: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quibusdam similique expedita, unde tempore necessitatibus possimus maiores corrupti nostrum. Sed quos culpa vero labore magnam, impedit asperiores ullam inventore quidem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quibusdam similique expedita, unde tempore necessitatibus possimus maiores corrupti nostrum. Sed quos culpa vero labore magnam, impedit asperiores ullam inventore quidem?"
            }
          ]
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
              type: "icon",
              key: "icon",
              value:
                "FaFacebook",
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
              value:
                "FaInstagram",
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
              value:
                "FaPinterest",
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
              value:
                "FaLinkedin",
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
    const title = this.getPropValue("box");
    const icon = this.getPropValue("icon");
    const rightItems = this.getPropValue("right-items");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {title && <div className={this.decorateCSS("boxs-text-left")}>
            <div className={this.decorateCSS("box-up")}>
              <h2 className={this.decorateCSS("box")}>{this.getPropValue("box")}</h2>
            </div>
            {icon && <div className={this.decorateCSS("text-left")}>
              <ComposerIcon
                propsIcon={{ className: this.decorateCSS("text") }}
                name={this.getPropValue("icon")}
              />

            </div>}
          </div>}
          <div className={this.decorateCSS("content")}>
            {image && <div className={this.decorateCSS("image-box")}>
              <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt="faq image" />
            </div>}
            <div className={this.decorateCSS("content-right")}>
              {this.castToObject<Array<{ title: string, description: string }>>("items").map(item =>
                <div>
                  <h2 className={this.decorateCSS("title")}>{item.title}</h2>
                  <span className={this.decorateCSS("description")}>{item.description}</span>
                </div>
              )}
            </div>
          </div>
          {rightItems.length > 0 && <div className={this.decorateCSS("icons")}>
            {rightItems.map((leftItem: any) => {
              return (
                <ComposerLink path={leftItem.value[1].value}>
                  <ComposerIcon
                    propsIcon={{ className: this.decorateCSS("Icon") }}
                    name={leftItem.value[0].value}
                  />
                </ComposerLink>
              );
            })}
          </div>}

        </div>
      </div>

    );
  }
}

export default Content11;
