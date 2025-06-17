import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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
      value: [INPUTS.BUTTON("button", "Button", "READ MORE", "", null, null, "Primary")],
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Card Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6773f9390655f8002caf5eca?alt=media",
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
  static getName(): string {
    return "Stats 3";
  }
  render() {
    const subtitle = this.castToString(this.getPropValue("subTitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.getPropValue("buttons");
    const image = this.getPropValue("backgroundImage");
    const cardContent = this.getPropValue("card-content");
    const isBoxVisible = this.getPropValue("is_box_visible");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("page")}>
            {(subtitle || title || description || buttons.length > 0) && (
              <Base.VerticalContent className={`${this.decorateCSS("left-page")} ${!image && this.decorateCSS("left-page-without-image")}`}>
                {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subTitle")}>{this.getPropValue("subTitle")}</Base.SectionSubTitle>}
                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                {buttons.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {this.castToObject<any>("buttons").map((item: any, index: number) => {
                      const buttonTextExist = this.castToString(item.text);
                      return (
                        buttonTextExist && (
                          <ComposerLink key={`stats-${index}`} path={item.url}>
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              {item.text}
                            </Base.Button>
                          </ComposerLink>
                        )
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}
            {(image || (cardContent.length > 0 && isBoxVisible)) && (
              <Base.VerticalContent className={`${this.decorateCSS("right-container")} ${!image && this.decorateCSS("right-container-without-image")}`}>
                {image && <img src={this.getPropValue("backgroundImage")} alt="" className={this.decorateCSS("image")} />}
                {isBoxVisible && cardContent.length > 0 && (
                  <div className={`${this.decorateCSS("card-container")} ${!image && this.decorateCSS("card-container-without-image")}`}>
                    <div className={this.decorateCSS("card")}>
                      {this.castToObject<any>("card-content").map((item: any, index: number) => {
                        return (
                          <div className={this.decorateCSS("content")}>
                            <div className={this.decorateCSS("inner-content")}>
                              <Base.VerticalContent className={this.decorateCSS("text-container")}>
                                <div className={this.decorateCSS("first-container")}>
                                  <Base.Icon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                                  <Base.VerticalContent className={this.decorateCSS("text")}>
                                    {this.castToString(item.number) && <Base.H5 className={this.decorateCSS("number")}>{item.number}</Base.H5>}
                                    {this.castToString(item.text) && <Base.P className={this.decorateCSS("right-text")}>{item.text}</Base.P>}
                                  </Base.VerticalContent>
                                </div>
                              </Base.VerticalContent>
                            </div>
                          </div>
                        );
                      })}
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
