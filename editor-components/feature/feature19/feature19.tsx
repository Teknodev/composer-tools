import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature19.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ListItem {
  title: string;
  text: string;
  icon: { type: "icon"; name: string };
}
class Feature19 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "A Better Life",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get your house in order with our smart cleaning service!",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "A better way to get your home, rental, or office clean.",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661bad1bd2970002c628768?alt=media&timestamp=1719564173697",
    });
    
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
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
              value: "Smart & Creative",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "Each member of our team has at least 5 years of experience in the industry.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaTwitter"
              },
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
              value: "Distributed",
            },
            {
              type: "string",
              key: "text",
              displayer: "Description",
              value:
                "More than 2 500 private and corporate facilities were cleaned this year.",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaFacebook"
              },
            },
          ],
        },
      ],
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "Get In Tocuh!", "", null, null, "Primary"));
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
    return "Feature 19";
  }

  render() {
    const subTitle = this.getPropValue("subtitle");
    const overlay = this.getPropValue("overlay") as boolean;
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const list = this.castToObject<ListItem[]>("items");
    const isAnyContentExists =
      this.castToString(subTitle) ||
      this.castToString(title) ||
      this.castToString(description) ||
      this.castToString(button.text) ||
      list.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isAnyContentExists && (
            <Base.VerticalContent className={this.decorateCSS("content")}>
              {(this.castToString(subTitle) ||
                this.castToString(title) ||
                this.castToString(description)) && (
                  <Base.VerticalContent className={this.decorateCSS("header")}>
                    {this.castToString(subTitle) && (
                      <Base.SectionSubTitle
                        className={this.decorateCSS("subtitle")}
                      >
                        {subTitle}
                      </Base.SectionSubTitle>
                    )}
                    {this.castToString(title) && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {title}
                      </Base.SectionTitle>
                    )}
                    {this.castToString(description) && (
                      <Base.SectionDescription
                        className={this.decorateCSS("description")}
                      >
                        {description}
                      </Base.SectionDescription>
                    )}
                  </Base.VerticalContent>
                )}

              {list.length > 0 && (
                <div className={this.decorateCSS("item-block")}>
                  {list.map((listItem: any, index: number) => (
                    <Base.VerticalContent className={this.decorateCSS("list-item-content")}>
                      <Base.Row className={this.decorateCSS("item-content-top")}>
                        {listItem.icon?.name && (
                          <Base.Media
                            value={listItem.icon}
                            className={this.decorateCSS("icon")}
                          />
                        )}
                        {this.castToString(listItem.title) && (
                          <Base.H2
                            className={this.decorateCSS("list-item-title")}
                          >
                            {listItem.title}
                          </Base.H2>
                        )}
                      </Base.Row>

                      {this.castToString(listItem.text) && (
                        <Base.P className={this.decorateCSS("texts-inside")}>
                          {listItem.text}
                        </Base.P>
                      )}
                    </Base.VerticalContent>

                  ))}
                </div>
              )}
              {this.castToString(button.text) && (
                <ComposerLink path={button.url}>
                  <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                    {button.text}
                  </Base.Button>
                </ComposerLink>
              )}
            </Base.VerticalContent>
          )}
          {this.getPropValue("image") && (
            <div 
              className={`${this.decorateCSS("right-image")} ${!isAnyContentExists ? this.decorateCSS("no-content") : ""}`}
              data-animation={this.getPropValue("hoverAnimation").join(" ")}
              style={{ position: "relative" }}
            >
              <img
                src={this.getPropValue("image")}
                alt="blockPhoto"
                className={this.decorateCSS("img")}
              />
              {overlay && <div className={this.decorateCSS("overlay")} />}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature19;
