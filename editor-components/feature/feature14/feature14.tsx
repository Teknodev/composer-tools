import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature14.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type CardItem = {
  icon: TypeMediaInputValue,
  title: string,
  description: string,
};

class Feature14 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Here are couple reasons why We are the best",
    });
    this.addProp({
      type: "string",
      key: "firstdescription",
      displayer: "First Description",
      value: "New Concept Staining (NCS) is a woman-owned company that provides color concreate staining services to commercial and residential customers.",
    });
    this.addProp({
      type: "string",
      key: "seconddescription",
      displayer: "Second Description",
      value: "The company was formed in response to an overwhelming market demand for concreate staining services, predominantly in the commercial construction industry. NCS'work commonly includes the artisanal staining of bridges, sound walls, abutments, and buildings.",
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "About Us", "", "GoArrowRight", null, "Link"));
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "IoPricetagsOutline"
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Best price guaranteed",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "MdSupportAgent"
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "Great communication",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "CiStar"
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "We provide high standards",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "GrUserManager"
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Card Title",
              value: "We worked with many big companies",
            },
            {
              type: "string",
              key: "description",
              displayer: "Card Description",
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vivamus semper vulputate venenatis vitae egestas commodo porta.",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
    });
  }

  static getName(): string {
    return "Feature 14";
  }

  render() {

    const cardItems = this.castToObject<CardItem[]>("cards");

    const alignment = Base.getContentAlignment();

    const button = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(this.castToString(this.getPropValue("title")) || this.castToString(button.text)
            || this.castToString(this.getPropValue("firstdescription")) || this.castToString(this.getPropValue("seconddescription"))) && (
              <div className={`${this.decorateCSS("title-wrapper")} ${alignment == "center" && this.decorateCSS("center")}`}>
                {(this.castToString(this.getPropValue("title")) || this.castToString(button.text)) && <Base.VerticalContent className={this.decorateCSS("title-left")}>
                  {this.castToString(this.getPropValue("title")) && (
                    <Base.SectionTitle className={this.decorateCSS("header")}>
                      {this.getPropValue("title")}
                    </Base.SectionTitle>
                  )}
                  {(alignment == "left" && (this.castToString(button.text) || button.icon)) && (
                    <div className={this.decorateCSS("link")}>
                      <ComposerLink path={button.url}>
                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                          {this.castToString(button.text) && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                          {button.icon && <Base.Media value={typeof button.icon === "string" ? {type: "icon", name: button.icon} : button.icon} className={this.decorateCSS("button-icon")} />}
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  )}
                </Base.VerticalContent>}
                {(this.castToString(this.getPropValue("firstdescription")) || this.castToString(this.getPropValue("seconddescription"))) && <Base.VerticalContent className={this.decorateCSS("title-right")}>
                  {this.castToString(this.getPropValue("firstdescription")) && (
                    <Base.SectionDescription className={this.decorateCSS("description-1")}>
                      {this.getPropValue("firstdescription")}
                    </Base.SectionDescription>
                  )}

                  {this.castToString(this.getPropValue("seconddescription")) && (
                    <Base.SectionDescription className={this.decorateCSS("description-2")}>
                      {this.getPropValue("seconddescription")}
                    </Base.SectionDescription>
                  )}
                  {(alignment == "center" && (this.castToString(button.text) || button.icon)) && (
                    <div className={this.decorateCSS("link")}>
                      <ComposerLink path={button.url}>
                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                          {this.castToString(button.text) && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                          {button.icon && <Base.Media value={typeof button.icon === "string" ? {type: "icon", name: button.icon} : button.icon} className={this.decorateCSS("button-icon")} />}
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  )}
                </Base.VerticalContent>}
              </div>
            )
          }

          <div className={this.decorateCSS("section")}>
            <Base.ListGrid className={this.decorateCSS("cards")} gridCount={{ pc: this.getPropValue("itemCount") }}>
              {cardItems.map((item: any, index: number) => {
                return (
                  <Base.VerticalContent className={this.decorateCSS("card")}>
                    {item.icon && (
                      <div className={this.decorateCSS("icon-box")}>
                        <Base.Media value={item.icon} className={this.decorateCSS("icon")} />
                      </div>
                    )}

                    <div className={this.decorateCSS("card-content")}>
                      {this.castToString(item.title) && (
                        <Base.H3 className={this.decorateCSS("card-title")}>{item.title}</Base.H3>
                      )}
                      {this.castToString(item.description) && (
                        <Base.P className={this.decorateCSS("card-description")}>{item.description}</Base.P>
                      )}
                    </div>
                  </Base.VerticalContent>
                );
              })}
            </Base.ListGrid>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature14;