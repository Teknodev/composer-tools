import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature20.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface Item {
  image: TypeMediaInputValue;
  sectionHeading: React.JSX.Element;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
}

class Feature20 extends BaseFeature {
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
      displayer: "Line",
      value: true,  
    });
    this.addProp({
      type: "boolean",
      key: "showDividers",
      displayer: "Dividers",
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
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],
              },
              value: {
                type: "image",
                url: "https://www.keydesign-themes.com/intact/business/wp-content/uploads/sites/2/2017/02/photo3.jpg",
              },
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Title",
              value: "Strategy",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
            INPUTS.BUTTON("button","Button","READ MORE","",null,null,"Tertiary"),
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],

              },
              value: {
                type: "image",
                url: "https://www.keydesign-themes.com/intact/business/wp-content/uploads/sites/2/2017/02/photo2.jpg",
              },
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Title",
              value: "Planning",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
            INPUTS.BUTTON("button","Button","READ MORE","",null,null,"Tertiary"),
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],

              },
              value: {
                type: "image",
                url: "https://www.keydesign-themes.com/intact/business/wp-content/uploads/sites/2/2017/02/photobox.jpg",
              },
            },
            {
              type: "string",
              key: "sectionHeading",
              displayer: "Title",
              value: "Development",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, consectetur adipisicing elit, sed do eiusmod.",
            },
            INPUTS.BUTTON("button","Button","READ MORE","",null,null,"Tertiary"),
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
  }

  static getName(): string {
    return "Feature 20";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const items = this.castToObject<Item[]>("items") || [];
    const showLine = this.getPropValue("showLine") as boolean;
    const showDividers = this.getPropValue("showDividers") as boolean;
    const overlay = this.getPropValue("overlay") as boolean;
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
           {(this.castToString(title) || this.castToString(description)) && <div className={this.decorateCSS("header")}>
              {this.castToString(title) && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {showLine && <div className={this.decorateCSS("line")} />}
              {this.castToString(description) && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
            </div>}

            {items.map((item, i) => {
              const hasTextContent = this.castToString(item.sectionHeading) || this.castToString(item.description) || this.castToString(item.button.text);
              return (hasTextContent || item.image) && (
              <React.Fragment key={i}>
                <div
                  className={`${this.decorateCSS("content")} ${
                    i % 2 === 1 ? this.decorateCSS("reverse") : ""
                  }`}
                >
                  <div className={`${this.decorateCSS("image-container")} ${!hasTextContent ? this.decorateCSS("full-width-container") : ""}`}>
                    {item.image && (
                      <Base.Media
                        value={item.image}
                        className={`${this.decorateCSS("image")} ${!hasTextContent ? this.decorateCSS("full-width-image") : ""}`}
                      />
                    )}
                    {overlay && item.image && <div className={this.decorateCSS("overlay")} />}
                  </div>
                  {(this.castToString(item.sectionHeading) || this.castToString(item.description) || this.castToString(item.button.text)) && <Base.VerticalContent className={this.decorateCSS("text")}>
                    {this.castToString(item.sectionHeading) && <Base.H4 className={this.decorateCSS("section-heading")}>{item.sectionHeading}</Base.H4>}
                    {this.castToString(item.description) && <Base.P className={this.decorateCSS("desc")}>{item.description}</Base.P>}
                    {this.castToString(item.button.text) && (
                      <ComposerLink path={item.button.url || '#'}>
                        <Base.Button buttonType={item.button.type} className={this.decorateCSS("button")}>
                          {item.button.text && <Base.P className={this.decorateCSS("button-text")}>{item.button.text}</Base.P>}
                        </Base.Button>
                      </ComposerLink>
                    )}
                  </Base.VerticalContent>}
                </div>
                {showDividers && i < items.length - 1 && <div className={this.decorateCSS("divider")} />}
              </React.Fragment>
            )})}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature20;