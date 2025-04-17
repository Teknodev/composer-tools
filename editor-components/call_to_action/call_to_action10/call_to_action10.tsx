import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action10.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
interface CardItem {
  cardIcon: string,
  cardTitle: React.JSX.Element,
  cardDescription: React.JSX.Element
}

class CallToAction10Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Ready to give your brain a boost?",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "BsHandIndexThumb"
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Fast and easy setup.14-day free trial.No credit card required.",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Create Account", "", null, null, "Primary"));

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "array",
      key: "cardItems",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "icon",
              key: "cardIcon",
              displayer: "Card Icon",
              value: "HiOutlineDocumentText"
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Card Title",
              value: "Spectacular team plan"
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "Fairly assigning daily tasks to your employess"
            },
          ]
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "icon",
              key: "cardIcon",
              displayer: "Card Icon",
              value: "BsUpload"
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Card Title",
              value: "Sharable showcase"
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "Team members will be up to date on the project"
            },
          ]
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "icon",
              key: "cardIcon",
              displayer: "Card Icon",
              value: "CiMail"
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Card Title",
              value: "Generate messages"
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Card Description",
              value: "More interesting writings for your customers"
            },
          ]
        }
      ]
    });

  }

  static getName(): string {
    return "Call To Action 10";
  }

  render() {
    const cardItem = this.castToObject<CardItem[]>("cardItems");
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("call-to-action10-page")}>
            {this.castToString(this.getPropValue("title") || this.getPropValue("icon")) && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
                {this.getPropValue("icon") && (
                  <ComposerIcon name={this.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("icon") }} />
                )}
              </Base.SectionTitle>
            )}
            {this.castToString(this.getPropValue("description")) && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}
            {this.castToString(button.text) && (
              <ComposerLink path={button.url}>
                <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                  {button.text}
                </Base.Button>
              </ComposerLink>
            )}
            {(cardItem.length > 0) && (
              <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("card-container")}>
                {cardItem.map((item: CardItem, index: number) => (
                  <Base.VerticalContent className={this.decorateCSS("card")}>
                    {item.cardIcon && (
                      <div className={this.decorateCSS("icon-wrapper")}>
                        <ComposerIcon name={item.cardIcon} propsIcon={{ className: this.decorateCSS("icon") }} />
                      </div>
                    )}
                    {this.castToString(item.cardTitle) && (
                      <Base.H3 className={this.decorateCSS("card-title")}>
                        {item.cardTitle}
                      </Base.H3>
                    )}
                    {this.castToString(item.cardDescription) && (
                      <Base.P className={this.decorateCSS("card-description")}>
                        {item.cardDescription}
                      </Base.P>
                    )}
                  </Base.VerticalContent>
                ))}
              </Base.ListGrid>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container >

    )
  }
}

export default CallToAction10Page;