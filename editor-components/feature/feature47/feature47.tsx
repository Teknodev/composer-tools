import { BaseFeature } from "composer-tools/editor-components/EditorComponent";
import styles from "./feature47.module.scss";
import {
  Base,
  TypeButton,
} from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type Card = {
  title: Element;
  subtitle: Element;
  description: Element;
  buttons: {
    type: TypeButton;
    text: Element;
    url: string;
  }[];
};

type PrimaryButton = {
  type: TypeButton;
  text: Element;
  url: string;
};

class Feature47 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "baseSubTitle",
      displayer: "Base Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "baseTitle",
      displayer: "Base Title",
      value: "Our Services",
    });

    this.addProp({
      type: "string",
      key: "baseDescription",
      displayer: "Base Description",
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
              key: "subtitle",
              displayer: "Subtitle",
              value: "Our Experience",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "12 Years of Development",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Imagination is more important than knowledge. Knowledge is limited.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON(
                  "button",
                  "Button",
                  "Learn More",
                  "#",
                  "",
                  "",
                  "Link",
                ),
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
              key: "subtitle",
              displayer: "Subtitle",
              value: "Always in Touch",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Professional Managers",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Imagination is more important than knowledge. Knowledge is limited.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON(
                  "button",
                  "Button",
                  "Learn More",
                  "#",
                  "",
                  "",
                  "Link",
                ),
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
              key: "subtitle",
              displayer: "Subtitle",
              value: "Our Values",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Modern Clean Design",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Imagination is more important than knowledge. Knowledge is limited.",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON(
                  "button",
                  "Button",
                  "Learn More",
                  "#",
                  "",
                  "",
                  "Link",
                ),
              ],
            },
          ],
        },
      ],
    });

    this.addProp(
      INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
    );
  }

  static getName(): string {
    return "Feature 47";
  }

  render() {
    const baseSubTitle = this.castToString(this.getPropValue("baseSubTitle"));
    const baseTitle = this.castToString(this.getPropValue("baseTitle"));
    const baseDescription = this.castToString(
      this.getPropValue("baseDescription"),
    );

    const cards = this.castToObject<Card[]>("cards");
    const primaryButton = this.castToObject<PrimaryButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {baseSubTitle && (
            <Base.SectionSubTitle>{baseSubTitle}</Base.SectionSubTitle>
          )}
          {baseTitle && (
            <Base.SectionTitle className={this.decorateCSS("section-title")}>
              {baseTitle}
            </Base.SectionTitle>
          )}
          {baseDescription && (
            <Base.SectionSubTitle>{baseDescription}</Base.SectionSubTitle>
          )}

          <Base.ListGrid
            gridCount={{ pc: cards.length || 1, tablet: 1 }}
            className={this.decorateCSS("cards-list")}
          >
            {cards?.map((card, index) => (
              <div key={index} className={this.decorateCSS("card")}>
                <div>
                  <span className={this.decorateCSS("subtitle")}>
                    {this.castToString(card.subtitle)?.toUpperCase() || ""}
                  </span>
                  <Base.H3 className={this.decorateCSS("title")}>
                    {this.castToString(card.title) || ""}
                  </Base.H3>
                  <Base.P className={this.decorateCSS("description")}>
                    {this.castToString(card.description) || ""}
                  </Base.P>
                </div>
                {card.buttons.map((button, index) => (
                  <Base.Button
                    className={this.decorateCSS("button")}
                    key={index}
                    buttonType={"Primary"}
                  >
                    <ComposerLink path={button.url}>
                      {this.castToString(button.text)}
                    </ComposerLink>
                  </Base.Button>
                ))}
              </div>
            ))}
          </Base.ListGrid>

          {!!this.castToString(primaryButton.text) && (
            <div className={this.decorateCSS("button-container")}>
              <ComposerLink path={primaryButton.url}>
                <Base.Button
                  buttonType={primaryButton.type}
                  className={this.decorateCSS("button")}
                >
                  <Base.P className={this.decorateCSS("button-text")}>
                    {this.castToString(primaryButton.text)}
                  </Base.P>
                </Base.Button>
              </ComposerLink>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature47;
