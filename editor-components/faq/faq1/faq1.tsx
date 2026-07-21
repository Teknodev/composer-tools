import * as React from "react";
import styles from "./faq1.module.scss";
import { BaseFAQ, TypeUsableComponentProps } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type FAQ = {
  subtitle: React.JSX.Element;
  text: React.JSX.Element;
  image: string;
};

class Faq1 extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Frequently Asked Questions"
    })
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Have Any Questions?"
    })
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    })
    this.addProp({
      type: "media",
      key: "activeIcon",
      displayer: "Active Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowUp",
      },
    })
    this.addProp({
      type: "media",
      key: "inactiveIcon",
      displayer: "Inactive Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "IoIosArrowDown",
      },
    })

    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Which payment options are available?",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value: "Cash",
            },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Which payment options are available?",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value: "Checks",
            },
          ],
        },
        {
          type: "object",
          key: "block",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Question",
              value: "Do you accept credit cards or other forms of payment?",
            },
            {
              type: "string",
              key: "text",
              displayer: "Answer",
              value: "Yes, I do",
            },
          ],
        },
      ],
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
      key: "bottomContainer",
      displayer: "Bottom Container",
      value: [
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: "Still have any questions?",
        },
        INPUTS.BUTTON("button", "Button", "Contact us", "", null, null, "Link"),
      ],
    });

    this.setComponentState("selectCardIndex", null);
    this.setComponentState("showMore", false);
  }

  static getName(): string {
    return "FAQ 1";
  }

  cardClicked(index: number) {
    const currentSelectCardIndex = this.getComponentState("selectCardIndex");

    if (currentSelectCardIndex === index) {
      this.setComponentState("selectCardIndex", null);
    }
    else {
      this.setComponentState("selectCardIndex", index);
    }
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"))
    const title = this.castToString(this.getPropValue("title"))
    const description = this.castToString(this.getPropValue("description"))
    const hasContent = subtitle || title || description
    const bottomContainerProp = this.getProp("bottomContainer")
    const bottomContainerValues = (bottomContainerProp?.value ?? []) as TypeUsableComponentProps[]
    const bottomTextValue = this.getPropValue("text", { parent_object: bottomContainerValues })
    const bottomText = this.castToString(bottomTextValue)
    const bottomButtonProp = bottomContainerValues.find((prop) => prop.key === "button")
    const bottomButton: INPUTS.CastedButton | null = bottomButtonProp
      ? (this as any).castingProcess(bottomButtonProp)
      : null
    const bottomButtonText = bottomButton && this.castToString(bottomButton.text)

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || []
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text))

    const allCards = this.castToObject<FAQ[]>("card") || []
    const showMore = this.getComponentState("showMore")
    const cardsCollapsed = allCards.length > 3 && !showMore
    const renderedCards = cardsCollapsed && visibleButtons.length > 0 ? allCards.slice(0, 3) : allCards
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
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
            </Base.VerticalContent>
          )}
          {renderedCards.length > 0 && (
            <div className={this.decorateCSS("page")}>
              {renderedCards.map((card: FAQ, indexCard: number) => (
                <div
                  key={indexCard}
                  className={this.decorateCSS("card")}
                  onClick={() => {
                    this.cardClicked(indexCard);
                  }}
                >
                  {(this.castToString(card.subtitle) || this.getPropValue("activeIcon") || this.getPropValue("inactiveIcon")) && (
                    <div className={this.decorateCSS("in-box")}>
                      {this.castToString(card.subtitle) && (
                        <Base.H6 className={this.decorateCSS("card-subtitle")}>{card.subtitle}</Base.H6>
                      )}
                      {(this.getPropValue("activeIcon") || this.getPropValue("inactiveIcon")) && (
                        <Base.Media
                          value={this.getComponentState("selectCardIndex") === indexCard
                            ? this.getPropValue("activeIcon")
                            : this.getPropValue("inactiveIcon")}
                          className={this.decorateCSS("icon")}
                        />
                      )}
                    </div>
                  )}
                  {this.castToString(card.text) && (
                    <div className={`${this.decorateCSS("card-inner")} ${this.getComponentState("selectCardIndex") === indexCard ? this.decorateCSS("cardActive") : ""}`}>
                      <Base.P className={this.decorateCSS("card-text")}>
                        {card.text}
                      </Base.P>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {visibleButtons.length > 0 && (
            <div className={this.decorateCSS("buttons-wrapper")}>
              {visibleButtons.map((button: INPUTS.CastedButton, index: number) => (
                cardsCollapsed ? (
                  <Base.Button
                    key={index}
                    buttonType={button.type}
                    className={this.decorateCSS("button")}
                    onClick={(e) => {
                      e.stopPropagation();
                      this.setComponentState("showMore", true);
                    }}
                  >
                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                  </Base.Button>
                ) : (
                  <ComposerLink key={index} path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                )
              ))}
            </div>
          )}

          {(bottomText || bottomButtonText) && (
            <div className={this.decorateCSS("bottom-container")}>
              {bottomText && (
                <Base.P className={this.decorateCSS("bottom-text")}>
                  {bottomTextValue}
                </Base.P>
              )}
              {bottomButtonText && (
                <div className={this.decorateCSS("buttons-wrapper")}>
                  <ComposerLink path={bottomButton.url}>
                    <Base.Button buttonType={bottomButton.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{bottomButton.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Faq1;