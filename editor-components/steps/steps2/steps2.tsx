import * as React from "react";
import { BaseSteps } from "../../EditorComponent";
import styles from "./steps2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Card = {
  stepNumber: React.JSX.Element;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  buttons: INPUTS.CastedButton[];
};

class Steps2 extends BaseSteps {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "How It Works",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
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
              type: "string",
              key: "stepNumber",
              displayer: "Step Number",
              value: "01",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Backup & Recovery",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from immersion along the highway will close the loop.",
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
              type: "string",
              key: "stepNumber",
              displayer: "Step Number",
              value: "02",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Network Service",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball.",
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
              type: "string",
              key: "stepNumber",
              displayer: "Step Number",
              value: "03",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Stability Fixes",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence.",
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
              type: "string",
              key: "stepNumber",
              displayer: "Step Number",
              value: "04",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "System Administration",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence.",
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
              type: "string",
              key: "stepNumber",
              displayer: "Step Number",
              value: "05",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Server Migration",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer.",
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
              type: "string",
              key: "stepNumber",
              displayer: "Step Number",
              value: "06",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Technical Consultation",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains.",
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
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "number",
      key: "itemCountInRow",
      displayer: "Item Count in a Row",
      value: 2,
    });
  }

  static getName(): string {
    return "Steps 2";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const cards = this.castToObject<Card[]>("cards");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const itemCountInRow = this.getPropValue("itemCountInRow");
    const showLine = this.getPropValue("line");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
    const contentAlignment = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitle || title || description) && (
            <div className={this.decorateCSS("header")}>
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
            </div>
          )}
          {cards?.length > 0 && (
            <Base.ListGrid
              gridCount={{ pc: itemCountInRow, tablet: 2, phone: 1 }}
              className={this.decorateCSS("cards-container")}
            >
              {cards.map((card: Card, index: number) => {
                const cardStepNumberExist = this.castToString(card.stepNumber);
                const cardSubtitleExist = this.castToString(card.subtitle);
                const cardTitleExist = this.castToString(card.title);
                const cardDescriptionExist = this.castToString(card.description);
                const cardButtonsExist = card.buttons?.some((btn) => this.castToString(btn.text));

                return (cardStepNumberExist || cardSubtitleExist || cardTitleExist || cardDescriptionExist || cardButtonsExist) && (
                  <Base.VerticalContent key={index} className={`${this.decorateCSS("card")} ${showLine && this.decorateCSS("with-line")} ${contentAlignment === "center" && this.decorateCSS("center-align")}`}>
                    {cardSubtitleExist && (
                      <Base.H6 className={this.decorateCSS("card-subtitle")}>
                        {card.subtitle}
                      </Base.H6>
                    )}
                    {(cardStepNumberExist || cardTitleExist) && (
                      <div className={this.decorateCSS("card-header")}>
                        {cardStepNumberExist && (
                          <Base.H4 className={this.decorateCSS("step-number")}>
                            {card.stepNumber}
                          </Base.H4>
                        )}
                        {cardTitleExist && (
                          <Base.H5 className={this.decorateCSS("card-title")}>
                            {card.title}
                          </Base.H5>
                        )}
                      </div>
                    )}
                    {cardDescriptionExist && (
                      <Base.P className={this.decorateCSS("card-description")}>
                        {card.description}
                      </Base.P>
                    )}
                    {cardButtonsExist && (
                      <div className={this.decorateCSS("card-buttons")}>
                        {card.buttons.map((button: INPUTS.CastedButton, btnIndex: number) =>
                          this.castToString(button.text) && (
                            <ComposerLink key={`card-${index}-btn-${btnIndex}`} path={button.url}>
                              <Base.Button buttonType={button.type} className={this.decorateCSS("card-button")}>
                                <Base.P className={this.decorateCSS("card-button-text")}>{button.text}</Base.P>
                              </Base.Button>
                            </ComposerLink>
                          )
                        )}
                      </div>
                    )}
                  </Base.VerticalContent>
                );
              })}
            </Base.ListGrid>
          )}

          {hasValidButtons && (
            <div className={this.decorateCSS("button-container")}>
              {buttons.map((button: INPUTS.CastedButton, index: number) =>
                this.castToString(button.text) && (
                  <ComposerLink key={`steps2-btn-${index}`} path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                )
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Steps2;
