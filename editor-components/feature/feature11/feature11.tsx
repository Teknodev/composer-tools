import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Button = {
  text: JSX.Element;
  link: string;
  icon: string;
};

type LeftContent = {
  subtitle: JSX.Element;
  title: JSX.Element;
  description: JSX.Element;
  button: Button;
};

type Card = {
  icon: string;
  title: JSX.Element;
  description: JSX.Element;
};

class Feature11 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "leftContent",
      displayer: "Left Content",
      value: [
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Everything You Need"
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "The universal UI kit and design system"
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Powerful tool for creating landing pages, websites and dashboards in Figma. Contains UI Kit (web), Data Visualization, Icon Set."
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Start Creating"
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: ""
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaArrowRight"
            }
          ]
        }
      ]
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
              value: "GrDrag"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Easy drag & drop"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "To add an element just drag component from the Assets panel and drop it to the work area."
            }
          ]
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
              value: "CgDisplayFlex"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Flexible modification"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You can easily change an instance setting depending on your goals."
            }
          ]
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
              value: "IoColorFilterSharp"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Quick color and font changes"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You can use the default color scheme and font or change them to create your own design."
            }
          ]
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
              value: "FaBox"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Pre-made blocks"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "A large variety of ready-made blocks for your project."
            }
          ]
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
              value: "FaFileArchive"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "All-in-one file"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You will find everything to create your design in one Figma file."
            }
          ]
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
              value: "LuReplaceAll"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Essential elements in one place"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Use them for any websites, dashboards, and even in your TED Talks."
            }
          ]
        },
      ]
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Feature 11";
  }

  render() {
    const leftContent = this.castToObject<LeftContent>("leftContent");
    const cards = this.castToObject<Card[]>("cards");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ListGrid
            className={this.decorateCSS("wrapper")}
            gridCount={{ pc: 2, tablet: 1, phone: 1 }}
          >
            <Base.VerticalContent className={this.decorateCSS("left")}>
              {!!this.castToString(leftContent.subtitle) && (
                <Base.SectionSubTitle className={this.decorateCSS("section-subtitle")}>
                  {leftContent.subtitle}
                </Base.SectionSubTitle>
              )}

              {!!this.castToString(leftContent.title) && (
                <Base.SectionTitle className={this.decorateCSS("section-title")}>
                  {leftContent.title}
                </Base.SectionTitle>
              )}

              {!!this.castToString(leftContent.description) && (
                <Base.SectionDescription className={this.decorateCSS("section-description")}>
                  {leftContent.description}
                </Base.SectionDescription>
              )}

              {(!!this.castToString(leftContent.button.text) || !!leftContent.button.icon) && (
                <div className={this.decorateCSS("button")}>
                  <ComposerLink path={leftContent.button.link}>
                    {leftContent.button.text}
                    <ComposerIcon name={leftContent.button.icon} propsIcon={{ className: this.decorateCSS("button-icon") }} />
                  </ComposerLink>
                </div>
              )}

            </Base.VerticalContent>

            {cards?.length > 0 && (
              <Base.ListGrid
                className={this.decorateCSS("right")}
                gridCount={{ pc: this.getPropValue("itemCount") }}
              >
                {cards.map((card: Card, index: number) => {
                  const titleExist = !!this.castToString(card.title);
                  const descExist = !!this.castToString(card.description);

                  if (!titleExist && !descExist && !card.icon) return null;

                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("card-container")}
                    >
                      {card.icon && <ComposerIcon name={card.icon} propsIcon={{ className: this.decorateCSS("card-icon") }} />}
                      <Base.VerticalContent className={this.decorateCSS("card-content")}>
                        {titleExist && (
                          <Base.H3 className={this.decorateCSS("card-title")}>
                            {card.title}
                          </Base.H3>
                        )}
                        {descExist && (
                          <Base.P className={this.decorateCSS("card-description")}>
                            {card.description}
                          </Base.P>
                        )}
                      </Base.VerticalContent>
                    </div>
                  );
                })}
              </Base.ListGrid>
            )}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature11;
