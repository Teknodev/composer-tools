import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature12.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";
import { TypeMediaInputValue } from "../../EditorComponent";

type Card = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  icon: TypeMediaInputValue;
  buttons: Button[];
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

type FirstItem = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  icon: TypeMediaInputValue;
  backgroundImage: TypeMediaInputValue;
  overlay: boolean;
  buttons: Button[];
};

class Feature12 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Best Features",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Services",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });
    this.addProp({
      type: "object",
      key: "firstItem",
      displayer: "First Card",
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
            name: "",
          },
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Card Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Best Of Our Features",
        },
        {
          type: "media",
          key: "backgroundImage",
          displayer: "Background Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a356692f8a5b002ce695ac?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON("button", "Button", "SEE ALL SERVICES", "", null, null, "Primary"),
          ],
        },
      ],
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
                name: "FiBook",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Graphic Clean Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Consectetur adipiscing elit",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            },
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
                name: "IoPhonePortrait",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Web & Mobile Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Sed do eiusmod tempor incididunt.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
            },
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
                name: "HiPresentationChartLine",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Card Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Social Media Marketing",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Uttt labore et dolore magna aliqua.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
      max: 4,
    });
  }

  static getName(): string {
    return "Feature 12";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const description = this.getPropValue("description");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");

    const itemCount = this.getPropValue("itemCount");

    const cards = this.castToObject<Card[]>("cards");
    const firstItem = this.castToObject<FirstItem>("firstItem");

    const firstCardTitleExist = this.castToString(firstItem.title);
    const firstCardSubtitleExist = this.castToString(firstItem.subtitle);
    const firstCardIconExist = !!(firstItem.icon && (firstItem.icon.type === "icon" ? firstItem.icon.name : firstItem.icon.url));

    const firstItemBackground = firstItem.backgroundImage;
    const firstItemBackgroundUrl = firstItemBackground?.url ?? firstItemBackground;
    const firstItemBackgroundIsVideo = firstItemBackground?.type === "video";
    const firstItemOverlay = firstItem.overlay;

    const firstItemButtonsProp = this.getProp("firstItem")?.value?.find((p: any) => p.key === "buttons");
    const firstItemButtons = firstItemButtonsProp ? (this.castingProcess(firstItemButtonsProp) as Button[]) : [];

    const firstItemHasValidButtons = firstItemButtons && firstItemButtons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });

    const buttons = this.castToObject<Button[]>("buttons");
    const hasValidButtons = buttons && buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });

    const renderFirstItem =
      firstCardIconExist || firstCardSubtitleExist || firstCardTitleExist || firstItemHasValidButtons || !!firstItemBackgroundUrl;
    const hasAnyTopContent = subtitleExist || titleExist || descriptionExist || hasValidButtons;
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasAnyTopContent && (
            <Base.VerticalContent className={this.decorateCSS("top-content")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: Button, index: number) => {
                    const buttonText = this.castToString(item.text);
                    const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                    if (!buttonText && !iconExist) return null;
                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {buttonText && (
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          )}
                          {iconExist && (
                            <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          <Base.ListGrid gridCount={{ pc: itemCount, tablet: itemCount }} className={this.decorateCSS("wrapper")}>
            {renderFirstItem && (
              <div
                className={this.decorateCSS("card-item-first")}
                {...(!firstItemBackgroundIsVideo && firstItemBackgroundUrl && {
                  style: {
                    backgroundImage: `${firstItemOverlay
                      ? "linear-gradient(color-mix(in srgb, rgba(var(--composer-html-background-rgb), 0.7), rgba(var(--composer-font-color-primary-rgb), 0.8) 5%), color-mix(in srgb, rgba(var(--composer-html-background-rgb), 0.7), rgba(var(--composer-font-color-primary-rgb), 0.8) 5%)),"
                      : ""
                      } url(${firstItemBackgroundUrl})`,
                  },
                })}
              >
                {firstItemBackgroundIsVideo && firstItemBackground && (
                  <div className={this.decorateCSS("background-media")}>
                    <Base.Media value={firstItemBackground} className={this.decorateCSS("background-media-element")} />
                    {firstItemOverlay && <div className={this.decorateCSS("background-overlay")} />}
                  </div>
                )}
                <Base.VerticalContent className={this.decorateCSS("card-first-content")}>
                  {firstCardIconExist && (
                    <div className={this.decorateCSS("icon-container")}>
                      <Base.Media
                        value={firstItem.icon}
                        className={this.decorateCSS("icon")}
                      />
                    </div>
                  )}
                  {firstCardSubtitleExist && (
                    <Base.H6 className={this.decorateCSS("first-card-subtitle")}>
                      {firstItem.subtitle}
                    </Base.H6>
                  )}
                  {firstCardTitleExist && (
                    <Base.H5 className={this.decorateCSS("first-card-title")}>
                      {firstItem.title}
                    </Base.H5>
                  )}
                  {firstItemHasValidButtons && (
                    <div className={this.decorateCSS("buttons-container")}>
                      {firstItemButtons.map((item: Button, index: number) => {
                        const buttonText = this.castToString(item.text);
                        const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                        if (!buttonText && !iconExist) return null;
                        return (
                          <ComposerLink key={index} path={item.url}>
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              {buttonText && (
                                <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                              )}
                              {iconExist && (
                                <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
                              )}
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </Base.VerticalContent>
              </div>
            )}

            {cards?.length > 0 &&
              cards.map((card: Card, index: number) => {
                const subtitleExist = !!this.castToString(card.subtitle);
                const descExist = !!this.castToString(card.description);
                const titleExist = !!this.castToString(card.title);
                const iconExist = !!(card.icon && (card.icon.type === "icon" ? card.icon.name : card.icon.url));
                const cardButtons = card.buttons;
                const hasCardButton = !!(cardButtons && cardButtons.some((btn: Button) => {
                  const buttonText = this.castToString(btn.text);
                  const btnIconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
                  return buttonText || btnIconExist;
                }));

                const shouldRender = subtitleExist || descExist || titleExist || iconExist;

                if (!shouldRender) return null;
                else
                  return (
                    <div
                      className={this.decorateCSS("card-item-count")}
                      style={{
                        backgroundColor: `
                        color-mix(
                        in srgb,
                        var(--composer-html-background),
                        var(--composer-font-color-primary) ${5 + ((index + 1) % 4) * 5}%
                      )`,
                        animationDelay: `${index * 0.3}s`,
                      }}
                      key={index}
                    >
                      {(iconExist || subtitleExist || titleExist || descExist || hasCardButton) && (
                        <Base.VerticalContent className={this.decorateCSS("message")}>
                          {iconExist && (
                            <div className={this.decorateCSS("icon-container")}>
                              <Base.Media
                                value={card.icon}
                                className={this.decorateCSS("icon")}
                              />
                            </div>
                          )}
                          {subtitleExist && (
                            <Base.H6 className={this.decorateCSS("card-subtitle")}>
                              {card.subtitle}
                            </Base.H6>
                          )}
                          {titleExist && (
                            <Base.H5 className={this.decorateCSS("card-title")}>
                              {card.title}
                            </Base.H5>
                          )}
                          {descExist && (
                            <Base.P className={this.decorateCSS("card-description")}>
                              {card.description}
                            </Base.P>
                          )}
                          {hasCardButton && (
                            <div className={this.decorateCSS("card-buttons-container")}>
                              {cardButtons.map((item: Button, btnIndex: number) => {
                                const buttonText = this.castToString(item.text);
                                const btnIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                                if (!buttonText && !btnIconExist) return null;
                                return (
                                  <ComposerLink key={btnIndex} path={item.url}>
                                    <Base.Button buttonType={item.type} className={this.decorateCSS("card-button")}>
                                      {buttonText && (
                                        <Base.P className={this.decorateCSS("card-button-text")}>{item.text}</Base.P>
                                      )}
                                      {btnIconExist && (
                                        <Base.Media className={this.decorateCSS("card-button-icon")} value={item.icon!} />
                                      )}
                                    </Base.Button>
                                  </ComposerLink>
                                );
                              })}
                            </div>
                          )}
                        </Base.VerticalContent>
                      )}
                    </div>
                  );
              })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature12;
