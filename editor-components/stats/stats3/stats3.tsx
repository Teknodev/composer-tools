import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

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
        "Nullam fermentum ullamcorper, diam sit amet porta. Etiam ac enim velit.Ut ut mi sed turpis accumsan sagittis ac eu magna.Etiam ac nisi tellus.Morbi at velit nisl.Donec ut felis libero. Nullam fermentum ullamcorper diam sit amet porta. Etiam ac enim velit.Ut ut mi sed turpis accumsan sagittis ac eu magna.Etiam ac nisi tellus.Morbi at velit nisl.Donec ut felis libero. Nullam fermentum ullamcorper diam sit amet porta. Etiam ac enim velit.Ut ut mi sed turpis accumsan sagittis ac eu magna.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button",
      additionalParams: {
        maxElementCount: 2,
      },
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
              value: "READ MORE",
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
        "https://vzkit.rometheme.pro/persona/wp-content/uploads/sites/15/2024/01/group-therapy-support-or-mental-health-community-2023-11-27-05-33-38-utc.jpg",
    });
    this.addProp({
      type: "array",
      key: "card-content",
      displayer: "Card Content",
      additionalParams: {
        maxElementCount: 3,
      },
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
              key: "number",
              displayer: "Number",
              value: "12 th",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
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
              key: "number",
              displayer: "Number",
              value: "800 +",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
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
              value: "BsHeartPulse",
            },
            {
              type: "string",
              key: "number",
              displayer: "Number",
              value: "100 +",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
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
    const subtitle = this.castToString(this.getPropValue("subTitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.getPropValue("buttons");
    const image = this.getPropValue("backgroundImage");
    const cardContent = this.getPropValue("card-content")
    const isBoxVisible = this.getPropValue("is_box_visible");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("page")}>
            {(subtitle || title || description || buttons.length > 0) && (
              <Base.VerticalContent className={this.decorateCSS(image ? "left-page" : "left-page-without-image")}>
                {
                  subtitle && (
                    <Base.SectionSubTitle
                      className={this.decorateCSS("subTitle")}
                    >
                      {this.getPropValue("subTitle")}
                    </Base.SectionSubTitle>
                  )
                }
                {title && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {description && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.SectionDescription>
                )}
                {buttons.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {this.castToObject<any>("buttons").map((item: any, index: number) => {
                      return (
                        <ComposerLink key={`stats-${index}`} path={item.url}>
                          <button
                            className={`${this.decorateCSS("button")} ${item.isPrimary && this.decorateCSS("button-color")
                              }`}
                          >
                            <span className={this.decorateCSS("button-text")}>{item.buttonText}</span>
                          </button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )
                }
              </Base.VerticalContent>
            )
            }
            {(image || (cardContent.length > 0 && isBoxVisible)) && (
              <Base.VerticalContent className={this.decorateCSS(image ? "right-container" : "right-container-without-image")}>
                {image && (
                  <img
                    src={this.getPropValue("backgroundImage")}
                    alt="image"
                    className={this.decorateCSS("image")}
                  />
                )}
                {(isBoxVisible && cardContent.length > 0) && (
                  <div className={this.decorateCSS(image ? "card-container" : "card-container-without-image")}>
                    <div className={this.decorateCSS("card")}>
                      {this.castToObject<any>("card-content").map(
                        (item: any, index: number) => {
                          return (
                            <div className={this.decorateCSS("content")}>
                              <div className={this.decorateCSS("inner-content")}>
                                <Base.VerticalContent className={this.decorateCSS("text-container")}>
                                  <div className={this.decorateCSS("first-container")}>
                                    <ComposerIcon
                                      name={item.icon}
                                      propsIcon={{ className: this.decorateCSS("icon") }}
                                    />
                                    <Base.VerticalContent className={this.decorateCSS("text")}>
                                      <div className={this.decorateCSS("number")}>
                                        {item.number}
                                      </div>

                                      <div className={this.decorateCSS("right-text")}>
                                        {item.text}
                                      </div>
                                    </Base.VerticalContent>
                                  </div>
                                </Base.VerticalContent>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
              </Base.VerticalContent>
            )}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats3Page;
