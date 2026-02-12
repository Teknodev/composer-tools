import {
  BaseFeature,
  TypeMediaInputValue,
} from "composer-tools/editor-components/EditorComponent";
import styles from "./feature45.module.scss";
import {
  Base,
  TypeButton,
} from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type Card = {
  title: Element;
  overlayTitle: Element;
  subtitle: Element;
  description: Element;
  buttons: PrimaryButton[];
  media: TypeMediaInputValue;
  overlay: boolean;
};

type PrimaryButton = {
  type: TypeButton;
  text: Element;
  url: string;
  icon?: TypeMediaInputValue;
};

class Feature45 extends BaseFeature {
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
      value: "Key Advantages",
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6986010b2631ba002c0126f7?alt=media",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
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
              value: "12 Years of",
            },
            {
              type: "string",
              key: "overlayTitle",
              displayer: "Overlay Title",
              value: "Development",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON(
                  "button",
                  "Button",
                  "",
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698601752631ba002c012777?alt=media",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
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
              value: "Professional",
            },
            {
              type: "string",
              key: "overlayTitle",
              displayer: "Overlay Title",
              value: "Managers",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON(
                  "button",
                  "Button",
                  "",
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
              type: "media",
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6986019a2631ba002c0127a6?alt=media",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
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
              value: "High Visual",
            },
            {
              type: "string",
              key: "overlayTitle",
              displayer: "Overlay Title",
              value: "Quality",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON(
                  "button",
                  "Button",
                  "",
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

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });
  }

  static getName(): string {
    return "Feature 45";
  }

  render() {
    const sectionSubtitle = this.castToString(this.getPropValue("subtitle"));
    const sectionTitle = this.castToString(this.getPropValue("title"));
    const sectionDescription = this.castToString(
      this.getPropValue("description"),
    );
    const isSectionHeadingExist =
      sectionSubtitle || sectionTitle || sectionDescription;

    const cards = this.castToObject<Card[]>("cards");
    const itemCountPerRow = this.getPropValue("itemCount");
    const isCardButtonsExist = (cardButtons: PrimaryButton[]) =>
      cardButtons.some((button) => this.castToString(button.text));

    const buttons = this.castToObject<PrimaryButton[]>("buttons");
    const buttonsExist = buttons.some(
      (button) => !!this.castToString(button.text),
    );

    const isCardHasMedia = (card: Card) => {
      return (
        (card.media?.type === "image" || card.media?.type === "video") &&
        "url" in card.media &&
        card.media.url
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isSectionHeadingExist && (
            <Base.VerticalContent
              className={this.decorateCSS("header-container")}
            >
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
          )}

          {cards && cards.length > 0 && (
            <Base.ListGrid
              gridCount={{
                pc: itemCountPerRow || 3,
                tablet: 3,
                phone: 1,
              }}
              className={this.decorateCSS("cards-list")}
            >
              {cards?.map((card, index) => (
                <Base.VerticalContent
                  key={index}
                  className={this.decorateCSS("card")}
                >
                  <Base.VerticalContent
                    className={this.decorateCSS("card-header")}
                  >
                    {this.castToString(card.subtitle) && (
                      <Base.H6 className={this.decorateCSS("card-subtitle")}>
                        {card.subtitle}
                      </Base.H6>
                    )}
                    {this.castToString(card.title) && (
                      <Base.H3 className={this.decorateCSS("card-title")}>
                        {card.title}
                      </Base.H3>
                    )}
                  </Base.VerticalContent>

                  <div className={this.decorateCSS("media-wrapper")}>
                    {(this.castToString(card.overlayTitle) ||
                      this.castToString(card.description)) && (
                      <Base.VerticalContent
                        className={`${this.decorateCSS("media-text-wrapper")} ${isCardHasMedia(card) ? this.decorateCSS("with-image") : ""}`}
                      >
                        {this.castToString(card.overlayTitle) && (
                          <Base.H3
                            className={this.decorateCSS("card-overlay-title")}
                          >
                            {card.overlayTitle}
                          </Base.H3>
                        )}
                        {this.castToString(card.description) && (
                          <Base.P
                            className={this.decorateCSS(
                              "card-overlay-description",
                            )}
                          >
                            {card.description}
                          </Base.P>
                        )}
                        {isCardButtonsExist(card.buttons) && (
                          <Base.Row
                            className={this.decorateCSS("card-buttons-wrapper")}
                          >
                            {card.buttons.map((button, index) => {
                              const buttonText = this.castToString(button.text);
                              const buttonExist = buttonText || button.icon;
                              return (
                                buttonExist && (
                                  <ComposerLink path={button.url}>
                                    <Base.Button
                                      className={this.decorateCSS(
                                        "card-button",
                                      )}
                                      key={index}
                                      buttonType={button.type}
                                    >
                                      {button.icon && (
                                        <Base.Media
                                          value={button.icon}
                                          className={this.decorateCSS(
                                            "card-button-icon",
                                          )}
                                        />
                                      )}
                                      {buttonText && (
                                        <Base.P
                                          className={this.decorateCSS(
                                            "card-button-text",
                                          )}
                                        >
                                          {button.text}
                                        </Base.P>
                                      )}
                                    </Base.Button>
                                  </ComposerLink>
                                )
                              );
                            })}
                          </Base.Row>
                        )}
                      </Base.VerticalContent>
                    )}

                    {isCardHasMedia(card) && (
                      <div className={this.decorateCSS("child-media-wrapper")}>
                        <Base.Media
                          value={card.media}
                          className={this.decorateCSS("media")}
                        />
                        {card.overlay && (
                          <div className={this.decorateCSS("overlay")} />
                        )}
                      </div>
                    )}
                  </div>
                </Base.VerticalContent>
              ))}
            </Base.ListGrid>
          )}

          {buttonsExist && (
            <Base.Row className={this.decorateCSS("buttons-wrapper")}>
              {buttons.map((button, index) => {
                const buttonText = this.castToString(button.text);
                const buttonExist = buttonText || button.icon;
                return (
                  buttonExist && (
                    <ComposerLink path={button.url}>
                      <Base.Button
                        className={this.decorateCSS("button")}
                        key={index}
                        buttonType={button.type}
                      >
                        {button.icon && (
                          <Base.Media
                            value={button.icon}
                            className={this.decorateCSS("button-icon")}
                          />
                        )}
                        {buttonText && (
                          <Base.P className={this.decorateCSS("button-text")}>
                            {button.text}
                          </Base.P>
                        )}
                      </Base.Button>
                    </ComposerLink>
                  )
                );
              })}
            </Base.Row>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature45;
