import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface ListItem {
  description: JSX.Element
}
interface ButtonItem {
  buttonText: JSX.Element,
  buttonLink: string
}

class CallToAction4Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: "Ready to Start Your Journey?",
      displayer: "Title",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "FaCheck",
    });
    this.addProp({
      type: "array",
      key: "listItems",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Unlimited update and project"
            },
          ]
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "24+7 service"
            },
          ]
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Chat support"
            },
          ]
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Analytic and chart"
            },
          ]
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Darks light mode"
            },
          ]
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Library of our specialist"
            },
          ]
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Own analytic platfrom"
            },
          ]
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Unlimited advice"
            },
          ]
        }

      ]
    })
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436958968c3c2002cd2f2d8?alt=media&timestamp=1719584962572",
    });
    this.addProp({
      type: "array",
      key: "buttonItems",
      displayer: "Button Items",
      value: [
        {
          type: "object",
          key: "buttonItem",
          displayer: "Button Item",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Learn More",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
          ]
        },
        {
          type: "object",
          key: "buttonItem",
          displayer: "Button Item",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Enroll Now",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            }
          ]
        }
      ]
    })
  }

  getName(): string {
    return "Call To Action 4";
  }

  render() {
    const listItems = this.castToObject<ListItem[]>("listItems");
    const buttonItems = this.castToObject<ButtonItem[]>("buttonItems")
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <Base.VerticalContent className={this.decorateCSS("left-page")}>
              <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
              <Base.ListGrid gridCount={{ pc: 2 }} className={this.decorateCSS("list-container")}>
                {listItems.map((item: ListItem, index: number) => (
                  <div className={this.decorateCSS("list")}>
                    <div className={this.decorateCSS("icon-container")}>
                      <ComposerIcon name={this.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("icon") }} />
                    </div>
                    <div className={this.decorateCSS("description")}>
                      {item.description}
                    </div>
                  </div>
                ))}
              </Base.ListGrid>

              {buttonItems.map((item: ButtonItem, index: number) => (
                <div className={this.decorateCSS("buttons")}>
                  <ComposerLink path={item.buttonLink}>
                    <div
                      className={this.decorateCSS("button")}
                    >
                      {item.buttonText}
                    </div>
                  </ComposerLink>
                </div>
              ))
              }
            </Base.VerticalContent>
            <div className={this.decorateCSS("right-page")}>
              <div className={this.decorateCSS("image-container")}>
                <img src={this.getPropValue("image")} alt="" />
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction4Page;
