import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import { head } from "lodash";

type headerIcon = {
  headerIcon: TypeMediaInputValue;
  headerIconBackground: boolean;
}

interface CardItem {
  cardIcon: TypeMediaInputValue;
  iconBackground: boolean;
  cardSubtitle: React.JSX.Element;
  cardTitle: React.JSX.Element;
  cardDescription: React.JSX.Element;
  button: INPUTS.CastedButton;
}

class CallToAction10Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Features",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Ready to give your brain a boost?",
    });

    this.addProp({
      type: "object",
      key: "headerIconObject",
      displayer: "Header Icon",
      value: [
        {
          type: "media",
          key: "headerIcon",
          displayer: "Header Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "BsHandIndexThumb",
          },
        },
        {
          type: "boolean",
          key: "headerIconBackground",
          displayer: "Header Icon Background",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Fast and easy setup.14-day free trial.No credit card required.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Create Account", "", null, null, "Primary"),
      ],
    });

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
              type: "media",
              key: "cardIcon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "HiOutlineDocumentText",
              },
            },
            {
              type: "boolean",
              key: "iconBackground",
              displayer: "Icon Background",
              value: true,
            },
            {
              type: "string",
              key: "cardSubtitle",
              displayer: "Card Subtitle",
              value: "",
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
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ]
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "media",
              key: "cardIcon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "BsUpload",
              },
            },
            {
              type: "boolean",
              key: "iconBackground",
              displayer: "Icon Background",
              value: true,
            },
            {
              type: "string",
              key: "cardSubtitle",
              displayer: "Card Subtitle",
              value: "",
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
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ]
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "media",
              key: "cardIcon",
              displayer: "Card Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "CiMail",
              },
            },
            {
              type: "boolean",
              key: "iconBackground",
              displayer: "Icon Background",
              value: true,
            },
            {
              type: "string",
              key: "cardSubtitle",
              displayer: "Card Subtitle",
              value: "",
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
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
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
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const headerIconObject = this.castToObject<headerIcon>("headerIconObject");
    const headerIcon = headerIconObject?.headerIcon;
    const enableIconBackground = headerIconObject?.headerIconBackground;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {this.castToString(this.getPropValue("subtitle")) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.castToString(this.getPropValue("subtitle"))}
                </Base.SectionSubTitle>
              )}
              {(this.castToString(this.getPropValue("title")) || headerIcon) && (
                <div className={`${this.decorateCSS("title-container")} ${!headerIcon && this.decorateCSS("no-header-icon")}`}>
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                  {headerIcon && (
                    <div className={`${this.decorateCSS("header-icon-wrapper")} ${enableIconBackground && this.decorateCSS("icon-bg")}`}>
                      <Base.Media value={headerIcon} className={this.decorateCSS("header-icon")} />
                    </div>
                  )}
                </div>
              )}
              {this.castToString(this.getPropValue("description")) && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.castToString(this.getPropValue("description"))}
                </Base.SectionDescription>
              )}
              {buttons.length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((button: INPUTS.CastedButton, index: number) => (
                    this.castToString(button.text) && (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                          <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    )
                  ))}
                </div>
              )}
            </Base.VerticalContent>
            {(cardItem.length > 0) && (
              <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3, phone: 1 }} className={this.decorateCSS("card-container")}>
                {cardItem.map((item: CardItem, index: number) => (
                  <Base.VerticalContent key={index} className={this.decorateCSS("card")}>
                    {item.cardIcon && (
                      <div className={`${this.decorateCSS("icon-wrapper")} ${!item.iconBackground && this.decorateCSS("no-bg")}`}>
                        <Base.Media value={item.cardIcon} className={this.decorateCSS("icon")} />
                      </div>
                    )}
                    {this.castToString(item.cardSubtitle) && (
                      <Base.H6 className={this.decorateCSS("card-subtitle")}>
                        {item.cardSubtitle}
                      </Base.H6>
                    )}
                    {this.castToString(item.cardTitle) && (
                      <Base.H5 className={this.decorateCSS("card-title")}>
                        {item.cardTitle}
                      </Base.H5>
                    )}
                    {this.castToString(item.cardDescription) && (
                      <Base.P className={this.decorateCSS("card-description")}>
                        {item.cardDescription}
                      </Base.P>
                    )}
                    {item.button && (
                      this.castToString(item.button.text) && (
                        <ComposerLink path={item.button.url}>
                          <Base.Button className={this.decorateCSS("card-button")} buttonType={item.button.type}>
                            <Base.P className={this.decorateCSS("card-button-text")}>{item.button.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      ))
                    }
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