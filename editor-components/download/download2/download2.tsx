import * as React from "react";
import styles from "./download2.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  icon: string;
  device: React.JSX.Element;
  platform: React.JSX.Element;
  description: React.JSX.Element;
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
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaDesktop",
              },
            },
            {
              type: "string",
              key: "device",
              displayer: "Device",
              value: "Desktop",
            },
            {
              type: "string",
              key: "platform",
              displayer: "Platform",
              value: "PC/MAC",
            },
            {
              type: "string",
              key: "description",
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
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaApple",
              },
            },
            {
              type: "string",
              key: "device",
              displayer: "Device",
              value: "Mobile Phone",
            },
            {
              type: "string",
              key: "platform",
              displayer: "Platform",
              value: "IOS",
            },
            {
              type: "string",
              key: "description",
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
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "IoLogoAndroid",
              },
            },
            {
              type: "string",
              key: "device",
              displayer: "Device",
              value: "Mobile Phone / Tablet",
            },
            {
              type: "string",
              key: "platform",
              displayer: "Platform",
              value: "Android",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
            },
            INPUTS.BUTTON("button", "Button", "", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732203035257", "Primary"),
          ],
        },
      ],
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
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const subtitleExist = this.castToString(subtitle);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
              {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
              {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("cards-container")}>
            <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 1, phone: 1 }} className={this.decorateCSS("cards")}>
              {this.castToObject<any[]>("cards").map((card: Card, index: number) => {
                const deviceExist = this.castToString(card.device);
                const platformExist = this.castToString(card.platform);
                const descriptionExist = this.castToString(card.description);
                const buttonTextExist = this.castToString(card.button.text);
                const buttonIconExist = card.button.icon && card.button.icon.name;
                const buttonImageExist = card.button.image && card.button.image.url;
                const buttonExist = buttonTextExist || buttonIconExist || buttonImageExist;
                const cardExist = deviceExist || platformExist || descriptionExist || buttonExist;
                return cardExist && (
                  <Base.VerticalContent className={this.decorateCSS("card")} key={index}>
                    {card.icon && (
                      <Base.Row className={this.decorateCSS("icon-container")}>
                        <Base.Media value={card.icon} className={this.decorateCSS("icon")} />
                      </Base.Row>
                    )}

                    {deviceExist && <Base.H4 className={this.decorateCSS("device")}>{card.device}</Base.H4>}

                    {platformExist && <Base.H2 className={this.decorateCSS("platform")}>{card.platform}</Base.H2>}

                    {descriptionExist && <Base.H4 className={this.decorateCSS("card-description")}>{card.description}</Base.H4>}

                   {buttonExist && 
                    <div className={this.decorateCSS("button-container")}>
                      <ComposerLink path={card?.button.url}>
                        {card?.button.image && card?.button.image.url ? (
                          <div className={this.decorateCSS("button-element")}>
                            <div className={this.decorateCSS("button")}>
                              <Base.Media value={card?.button.image} className={this.decorateCSS("image")} />
                            </div>
                          </div>
                        ) : (
                            <Base.Button buttonType={card.button.type} className={this.decorateCSS("button")}>
                              {card.button.icon && card.button.icon.name && (
                                <Base.Media value={card.button.icon} className={this.decorateCSS("button-icon")} />
                              )}
                              {this.castToString(card.button.text) && <Base.P className={this.decorateCSS("button-text")}>{card.button.text}</Base.P>}
                            </Base.Button>
                        )}
                      </ComposerLink>
                    </div>}
                  </Base.VerticalContent>
                );
              })}
            </Base.ListGrid>
          </div >
        </Base.MaxContent >
      </Base.Container >
    );
  }
}

export default Download2;
