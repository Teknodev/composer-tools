import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content22.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface Item {
  image: string;
  sectionHeading: string;
  description: string;
  button: INPUTS.CastedButton;
}

class Content22 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "High Quality Services",
    });
    
    this.addProp({
      type: "boolean",
      key: "showLine",
      displayer: "Show Line Under Title",
      value: true,  
    });
    this.addProp({
      type: "boolean",
      key: "showDividers",
      displayer: "Show Dividers Between Items",
      value: true,  
    });
    
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Build a positive impact on your business. Check out what we have to offer.",
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
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://www.keydesign-themes.com/intact/business/wp-content/uploads/sites/2/2017/02/photo3.jpg",
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Section Heading",
              value: "Strategy",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
            INPUTS.BUTTON(
                "button", 
                "Button", 
                "READ MORE", 
                "", 
                null, 
                null, 
                "Tertiary"
            )
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://www.keydesign-themes.com/intact/business/wp-content/uploads/sites/2/2017/02/photo2.jpg",
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Section Heading",
              value: "Planning",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
            INPUTS.BUTTON(
                "button", 
                "Button", 
                "READ MORE", 
                "", 
                null, 
                null, 
                "Tertiary"
            )
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image URL",
              value:
                "https://www.keydesign-themes.com/intact/business/wp-content/uploads/sites/2/2017/02/photobox.jpg",
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Section Heading",
              value: "Development",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
            INPUTS.BUTTON(
                "button", 
                "Button", 
                "READ MORE", 
                "", 
                null, 
                null, 
                "Tertiary"
            )
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Content 22";
  }

  render() {
    const title = this.getPropValue("title") as string;
    const description = this.getPropValue("description") as string;
    const items = this.castToObject<Item[]>("items") || [];
    const showLine = this.getPropValue("showLine") as boolean;
    const showDividers = this.getPropValue("showDividers") as boolean;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("header")}>
              <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
              {showLine && <div className={this.decorateCSS("line")} />}
              <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>
            </div>

            {items.map((item, i) => (
              <React.Fragment key={i}>
                <div
                  className={`${this.decorateCSS("content")} ${
                    i % 2 === 1 ? this.decorateCSS("reverse") : ""
                  }`}
                >
                  <div className={this.decorateCSS("image-container")}>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.sectionHeading}
                        className={this.decorateCSS("image")}
                      />
                    )}
                  </div>
                  <div className={this.decorateCSS("text")}>
                    <h3>{item.sectionHeading}</h3>
                    <Base.SectionDescription className={this.decorateCSS("desc")}>{item.description}</Base.SectionDescription>
                    {item.button && (
                      <ComposerLink path={item.button.url || '#'}>
                        <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                          {item.button.text}
                        </Base.Button>
                      </ComposerLink>
                    )}
                  </div>
                </div>
                {showDividers && i < items.length - 1 && <div className={this.decorateCSS("divider")} />}
              </React.Fragment>
            ))}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content22;