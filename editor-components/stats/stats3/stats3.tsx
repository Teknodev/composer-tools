import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Stats3Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subTitle",
      displayer: "subTitle",
      value: "ABOUT PERSONA",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Passionate Minds , Compassionate Hearts",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Nullam fermentum ullamcorper diam sit amet porta. Etiam ac enim velit.Ut ut mi sed turpis accumsan sagittis ac eu magna.Etiam ac nisi tellus.Morbi at velit nisl.Donec ut felis libero.",
    });
    this.addProp({
      type: "string",
      key: "descriptionMore",
      displayer: "DescriptionMore",
      value:
        "Nullam fermentum ullamcorper diam sit amet porta. Etiam ac enim velit.Ut ut mi sed turpis accumsan sagittis ac eu magna.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Read More",
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
            },
            {
              type: "boolean",
              key: "isPrimary",
              displayer: "Is primary",
              value: false,
              max: 3,
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Card Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661ced0bd2970002c6298e9?alt=media&timestamp=1719584962578",
    });
    this.addProp({
      type: "array",
      key: "card-content",
      displayer: "Card Content",
      value: [
        {
          type: "object",
          key: "cards",
          displayer: "Cards",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "icon",
              value: "FaMedal",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "12 th",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Years Experience",
            },
          ],
        },
        {
          type: "object",
          key: "cards",
          displayer: "Cards",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "icon",
              value: "GoPeople",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "800 +",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Happy Clients",
            },
          ],
        },
        {
          type: "object",
          key: "cards",
          displayer: "Cards",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "icon",
              value: "TbHeartPlus",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "100 +",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Psycologist",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "is_box_visible",
      displayer: "is box visible",
      value: true,
    });
  }
  getName(): string {
    return "Stats 3";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats3-page")}>
            <div className={this.decorateCSS("bottom-child")}>
              <div className={this.decorateCSS("text")}>
                <h1 className={this.decorateCSS("subTitle")}>
                  {this.getPropValue("subTitle")}
                </h1>
                <h1 className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </h1>
                <h1 className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </h1>
                {this.getPropValue("descriptionMore") !== "" && (
                  <h3 className={this.decorateCSS("descriptionMore")}>
                    {this.getPropValue("descriptionMore")}
                  </h3>
                )}

                <div className={this.decorateCSS("box")}>
                  {this.castToObject<any>("buttons").map((item: any, index: number) => {
                    return (
                      <ComposerLink key={`stats-${index}`} path={item.url}>
                        <button
                          className={`${this.decorateCSS("button")} ${
                            item.isPrimary && this.decorateCSS("button-color")
                          }`}
                        >
                          <span className={this.decorateCSS("button-text")}>{item.buttonText}</span>
                        </button>
                      </ComposerLink>
                    );
                  })}
                </div>
              </div>

              <div className={this.decorateCSS("card")}>
                <img
                  src={this.getPropValue("backgroundImage")}
                  alt="image"
                  className={this.decorateCSS("image")}
                />
                {this.getPropValue("is_box_visible") && (
                  <div className={this.decorateCSS("boxs")}>
                    {this.castToObject<any>("card-content").map(
                      (item: any, index: number) => {
                        return (
                          <ComposerLink key={`stats-${index}`} path={item.url}>
                            <button>
                              <ComposerIcon
                                name={item.icon}
                                propsIcon={{ className: this.decorateCSS("icon") }}
                              />
                              <div className={this.decorateCSS("text")}>
                                <span className={this.decorateCSS("button-text")}>
                                  {item.text}
                                </span>
                                <span className={this.decorateCSS("button-text")}>
                                  {item.buttonText}
                                </span>
                              </div>
                            </button>
                          </ComposerLink>
                        );
                      }
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats3Page;
