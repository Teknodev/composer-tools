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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaDesktop",
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaApple",
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
            INPUTS.BUTTON("button", "Button", "", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67586eb80655f8002ca57e58?alt=media", "Primary"),
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoLogoAndroid",
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
      displayer: "Item count in a row",
      value: 3,
    });
  }

  static getName(): string {
    return "Download 2";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("header")}>
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
                return (
                  <Base.VerticalContent className={this.decorateCSS("card")} key={index}>
                    {card.icon && (
                      <Base.Row className={this.decorateCSS("icon-container")}>
                        <Base.Icon name={card.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                      </Base.Row>
                    )}

                    {deviceExist && <Base.P className={this.decorateCSS("device")}>{card.device}</Base.P>}

                    {platformExist && <Base.P className={this.decorateCSS("platform")}>{card.platform}</Base.P>}

                    {descriptionExist && <Base.P className={this.decorateCSS("description")}>{card.description}</Base.P>}

                    {(card.button.image || card.button.text || card.button.icon) && (
                      <div className={this.decorateCSS("button-container")}>
                        <ComposerLink path={card?.button.url}>
                          {card?.button.image ? (
                            <div className={this.decorateCSS("button-element")}>
                              <div className={this.decorateCSS("button")}>
                                <img src={card?.button.image} alt="" className={this.decorateCSS("image")} />
                              </div>
                            </div>
                          ) : (
                            (buttonTextExist || card.button.icon) && (
                              <div className={this.decorateCSS("button-element")}>
                                {(buttonTextExist || card.button.icon) && (
                                  <Base.Button buttonType={card.button.type} className={this.decorateCSS("button")}>
                                    {card.button.icon && (
                                      <Base.Icon name={card.button.icon} propsIcon={{ className: this.decorateCSS("button-icon") }} />
                                    )}
                                    {this.castToString(card.button.text) && <div className={this.decorateCSS("button-text")}>{card.button.text}</div>}
                                  </Base.Button>
                                )}
                              </div>
                            )
                          )}
                        </ComposerLink>
                      </div>
                    )}
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
