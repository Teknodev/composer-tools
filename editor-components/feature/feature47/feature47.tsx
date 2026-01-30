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
  buttons: PrimaryButton[];
};

type PrimaryButton = {
  type: TypeButton;
  text: Element;
  url: string;
  icon?: any;
};

class Feature47 extends BaseFeature {
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
      value: "Our Services",
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
                  "",
                  null,
                  null,
                  "Primary",
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
                  "",
                  null,
                  null,
                  "Primary",
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
                  "",
                  null,
                  null,
                  "Primary",
                ),
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
      value: 3,
    });

    this.addProp(
      INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
    );
  }

  static getName(): string {
    return "Feature 47";
  }

  render() {
    const sectionSubtitle = this.castToString(this.getPropValue("subtitle"));
    const sectionTitle = this.castToString(this.getPropValue("title"));
    const sectionDescription = this.castToString(
      this.getPropValue("description"),
    );

    const cards = this.castToObject<Card[]>("cards");
    const primaryButton = this.castToObject<PrimaryButton>("button");
    const itemCountPerRow = this.getPropValue("itemCount");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent>
            {sectionSubtitle && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </Base.SectionSubTitle>
            )}

            {sectionTitle && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}

            {sectionDescription && (
              <Base.SectionDescription
                className={this.decorateCSS("description")}
              >
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}
          </Base.VerticalContent>

          <Base.ListGrid
            gridCount={{
              pc: itemCountPerRow || 3,
              tablet: itemCountPerRow || 3,
              phone: 1,
            }}
            className={this.decorateCSS("cards-list")}
          >
            {cards?.map((card, index) => (
              <div key={index} className={this.decorateCSS("card")}>
                <Base.VerticalContent>
                  <span className={this.decorateCSS("subtitle")}>
                    {this.castToString(card.subtitle)?.toUpperCase() || ""}
                  </span>
                  <Base.H3 className={this.decorateCSS("title")}>
                    {this.castToString(card.title) || ""}
                  </Base.H3>
                  <Base.P className={this.decorateCSS("description")}>
                    {this.castToString(card.description) || ""}
                  </Base.P>
                </Base.VerticalContent>
                <div className={this.decorateCSS("buttons-wrapper")}>
                  {card.buttons.map((button, index) => (
                    <ComposerLink path={button.url}>
                      <Base.Button
                        className={this.decorateCSS("card-button")}
                        key={index}
                        buttonType={button.type}
                      >
                        {button.icon && (
                          <Base.Icon
                            name={button.icon.name}
                            propsIcon={{
                              className: this.decorateCSS("card-icon"),
                            }}
                          />
                        )}
                        <Base.P
                          className={this.decorateCSS("card-button-text")}
                        >
                          {this.castToString(button.text)}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              </div>
            ))}
          </Base.ListGrid>

          {this.castToString(primaryButton.text) && (
            <div className={this.decorateCSS("section-button")}>
              <ComposerLink path={primaryButton.url}>
                <Base.Button
                  buttonType={primaryButton.type}
                  className={this.decorateCSS("button")}
                >
                  {primaryButton.icon && (
                    <Base.Icon
                      name={primaryButton.icon.name}
                      propsIcon={{
                        className: this.decorateCSS("icon"),
                      }}
                    />
                  )}
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
