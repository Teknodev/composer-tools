import * as React from "react";
import styles from "./download2.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  icon: string;
  cardSubtitle: React.JSX.Element;
  cardTitle: React.JSX.Element;
  cardDescription: React.JSX.Element;
  button: INPUTS.CastedButton;
};

class Download2 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Let's start now!",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Transform your Communication with Instant Connectivity",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Install snappy on all your devices to stay engaged and continue every conversation.",
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaDesktop",
              },
            },
            {
              type: "string",
              key: "cardSubtitle",
              displayer: "Subtitle",
              value: "Desktop",
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Title",
              value: "PC/MAC",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
            },
            INPUTS.BUTTON("button", "Button", "Download", "", "RiDownloadLine", "", "Primary"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "FaApple",
              },
            },
            {
              type: "string",
              key: "cardSubtitle",
              displayer: "Subtitle",
              value: "Mobile Phone",
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Title",
              value: "IOS",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68e79205ffd791002b7e7482?alt=media", "Primary"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "IoLogoAndroid",
              },
            },
            {
              type: "string",
              key: "cardSubtitle",
              displayer: "Subtitle",
              value: "Mobile Phone / Tablet",
            },
            {
              type: "string",
              key: "cardTitle",
              displayer: "Title",
              value: "Android",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732203035257", "Primary"),
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
  }

  static getName(): string {
    return "Download 2";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const hasContent = title || description || subtitle;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => btn && this.castToString(btn.text));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("cards-container")}>
            <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3, phone: 1 }} className={this.decorateCSS("cards")}>
              {(this.castToObject<Card[]>("cards") || []).map((card: Card, index: number) => {
                const cardSubtitleExist = this.castToString(card.cardSubtitle);
                const cardTitleExist = this.castToString(card.cardTitle);
                const cardDescriptionExist = this.castToString(card.cardDescription);
                const buttonTextExist = this.castToString(card.button?.text);
                const buttonIconExist = card.button?.icon && card.button?.icon?.name;
                const buttonImageExist = card.button?.image && card.button?.image?.url;
                const buttonExist = buttonTextExist || buttonIconExist || buttonImageExist;
                const cardExist = cardSubtitleExist || cardTitleExist || cardDescriptionExist || buttonExist;
                return cardExist && (
                  <Base.VerticalContent className={this.decorateCSS("card")} key={index}>
                    {card.icon && (
                      <Base.Row className={this.decorateCSS("icon-container")}>
                        <Base.Media value={card.icon} className={this.decorateCSS("icon")} />
                      </Base.Row>
                    )}
                    {card.cardSubtitle && <Base.H4 className={this.decorateCSS("card-subtitle")}>{card.cardSubtitle}</Base.H4>}
                    {card.cardTitle && <Base.H2 className={this.decorateCSS("card-title")}>{card.cardTitle}</Base.H2>}
                    {card.cardDescription && <Base.P className={this.decorateCSS("card-description")}>{card.cardDescription}</Base.P>}
                    {buttonExist &&
                      <div className={this.decorateCSS("card-button-container")}>
                        <ComposerLink path={card?.button?.url}>
                          {card?.button?.image && card?.button?.image?.url ? (
                            <div className={this.decorateCSS("card-button-element")}>
                              <div className={this.decorateCSS("card-button")}>
                                <Base.Media value={card?.button?.image} className={this.decorateCSS("card-button-image")} />
                              </div>
                            </div>
                          ) : (
                            <Base.Button buttonType={card.button?.type} className={this.decorateCSS("card-button")}>
                              {this.castToString(card.button?.text) && <Base.P className={this.decorateCSS("card-button-text")}>{card.button?.text}</Base.P>}
                              {card.button?.icon && card.button?.icon?.name && (<Base.Media value={card.button?.icon} className={this.decorateCSS("card-button-icon")} />)}
                            </Base.Button>
                          )}
                        </ComposerLink>
                      </div>}
                  </Base.VerticalContent>
                );
              })}
            </Base.ListGrid>
          </div >
          {visibleButtons.length > 0 && (
            <Base.Row className={this.decorateCSS("button-container")}>
              {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                return this.castToString(item.text) && (
                  <ComposerLink key={`button-${index}`} path={item.url}>
                    <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </Base.Row>
          )}
        </Base.MaxContent >
      </Base.Container >
    );
  }
}

export default Download2;