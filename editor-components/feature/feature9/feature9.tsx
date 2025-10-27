import React from "react";

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Card = {
  icon: TypeMediaInputValue;
  title: React.JSX.Element;
  description: React.JSX.Element;
  num: React.JSX.Element;
};


class Feature9 extends BaseFeature {
  observer: IntersectionObserver;

  constructor(props?: any) {
    super(props, styles);
    this.setupObserver = this.setupObserver.bind(this);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our process of building a successful digital product."
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
              key: "num",
              displayer: "Card Number",
              value: "1"
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaRegLightbulb"
              }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Discovery"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "The first thing we do is conduct comprehensive research to understand your business and users' goals. We also identify your competition's strengths and weaknesses and define a plan to use all of the findings in your favor. "
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "num",
              displayer: "Card Number",
              value: "2"
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaRegMessage"
              }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Foundation"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Based on research findings, we start setting up navigation and content hierarchy with the primary goal of making the whole experience as intuitive as possible. Next, we sharpen our pencils and lay out the ideas on paper. We believe in 'sketch twice, design once'!"
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "num",
              displayer: "Card Number",
              value: "3"
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FiLayers"
              }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Prototyping"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "We create a digital version of the best ideas from previous phase and create a medium-fidelity prototype. By presenting the initial version of the product to your target audience, we can quickly validate the concept and iterate the design efficiently."
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "num",
              displayer: "Card Number",
              value: "4"
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaRegLightbulb"
              }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Design"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Our design process is about making simple but eye-catching experiences. The primary goal is to achieve the wow factor and set you apart with that premium look. We also take care of the smallest details and prepare a comprehensive design system for you to keep scaling and growing your business."
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "num",
              displayer: "Card Number",
              value: "5"
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "BsCodeSquare"
              }
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Development"
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "By leveraging the latest technologies, we share your brand and products with the world while focusing on a perfect visual output through stable and high-performing code. As a team with a user-centered design approach, it's crucial to ensure the end product remains the same as envisioned in previous phases."
            }
          ]
        },
      ]
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "View our services", "", null, null, "Primary")
      ]
    });
  }

  static getName(): string {
    return "Feature 9";
  }

  setupObserver() {
    const cardElements = document.querySelectorAll("." + this.decorateCSS("card"));

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        entry.target.classList.toggle(this.decorateCSS("show"), entry.isIntersecting);
      });
    };

    const options = {
      rootMargin: "100px",
      threshold: 0.7,
    };

    this.observer = new IntersectionObserver(callback, options);

    cardElements.forEach((card) => {
      this.observer.observe(card);
    });

    this.setComponentState(`cardLength`, cardElements.length);
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const cardElements = document.querySelectorAll("." + this.decorateCSS("card"));
    const title = this.getPropValue("title");

    const cardsLengthIsChanged = this.getComponentState("cardLength") != cardElements.length;

    if (cardsLengthIsChanged) {
      this.setupObserver();
    }

    const wrapperExist = this.castToString(title) || cards?.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        {wrapperExist && <div className={this.decorateCSS("wrapper")}>
            {this.castToString(title) &&
              <Base.VerticalContent className={this.decorateCSS("title-container")}>
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              </Base.VerticalContent>
            }
            {cards?.length > 0 &&
              <div className={this.decorateCSS("cards-container")}>
                {cards.map((card: Card, index: number) => {
                  const titleExist = !!this.castToString(card.title);
                  const descExist = !!this.castToString(card.description);
                  const numExist = !!this.castToString(card.num);

                  const render = titleExist || descExist || card.icon;

                  if (!render) return null;
                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("card")}
                    >
                      <div className={this.decorateCSS("card-inner")}>
                        {(card.icon || titleExist) &&
                          <div className={this.decorateCSS("card-header")}>
                            {card.icon &&
                              <div className={this.decorateCSS("icon-container")}>
                                <Base.Media
                                  value={card.icon}
                                  className={this.decorateCSS("icon")}
                                />
                              </div>
                            }
                            <div className={this.decorateCSS("card-title-container")}>
                              {numExist &&
                                <Base.H2 className={this.decorateCSS("card-number")}>
                                  {card.num}
                                </Base.H2>
                              }
                              {titleExist &&
                                <Base.H2 className={this.decorateCSS("card-title")}>
                                  {card.title}
                                </Base.H2>
                              }
                            </div>
                          </div>
                        }
                        {descExist &&
                          <div className={this.decorateCSS("description-container")}>
                            <Base.H4 className={this.decorateCSS("description")}>
                              {card.description}
                            </Base.H4>
                          </div>
                        }
                      </div>
                    </div>
                  );
                })}
              </div>
            }
          </div>}
          {(buttons?.length > 0) && (
            <div className={this.decorateCSS("buttons-container")}>
              {buttons.map((button: INPUTS.CastedButton, index: number) => {
                if (this.castToString(button.text)) {
                  return (
                    <ComposerLink key={index} path={button.url}>
                      <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                        {button.text}
                      </Base.Button>
                    </ComposerLink>
                  );
                }
                return null;
              })}
            </div>
          )}

        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature9;
