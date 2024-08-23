import React from "react";

import { BaseFeature } from "../../EditorComponent";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import styles from "./feature9.module.scss";

type Card = {
  icon: string;
  title: JSX.Element;
  description: JSX.Element;
};

type Button = {
  text: JSX.Element;
  link: string;
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaRegLightbulb"
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaRegMessage"
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FiLayers"
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "PiShootingStarLight"
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
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "BsCodeSquare"
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
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "View our services"
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: ""
            }
          ]
        }
      ]
    });
  }

  getName(): string {
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

    document.onscroll = () => {
      document.write("slm");
    };
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const buttons = this.castToObject<Button[]>("buttons");

    const titleExist = this.getPropValue("title", { as_string: true });
    const title = this.getPropValue("title");

    return (
      <div
        ref={this.setupObserver}
        className={this.decorateCSS("container")}
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {/* left page */}
            {titleExist &&
              <div className={this.decorateCSS("title-container")}>
                <div className={this.decorateCSS("title-wrapper")}>
                  <h1 className={this.decorateCSS("title")}>
                    {title}
                  </h1>
                </div>
              </div>
            }
            {/* right page */}
            {cards?.length > 0 &&
              <div
                className={this.decorateCSS("cards-container")}
              >
                {cards.map((card: Card, index: number) => {
                  const titleExist = this.castToString(card.title);
                  const descExist = this.castToString(card.description);
                  const render = titleExist || descExist || card.icon;

                  if (!render) return null;
                  return (
                    <div
                      key={index}
                      className={this.decorateCSS("card")}
                    >
                      <div className={this.decorateCSS("card-number")}>
                        {index.toString().length > 1
                          ? index + 1
                          : `0${index + 1}`
                        }
                      </div>
                      {/* card header */}
                      {(card.icon || titleExist) &&
                        <header className={this.decorateCSS("card-header")}>
                          {/* card icon */}
                          {card.icon &&
                            <div className={this.decorateCSS("icon-container")}>
                              <ComposerIcon name={card.icon}
                                propsIcon={{
                                  className: this.decorateCSS("icon"),
                                  size: "40px"
                                }}
                              />
                            </div>
                          }
                          {/* card title */}
                          {titleExist &&
                            <div className={this.decorateCSS("card-title-container")}>
                              <h2 className={this.decorateCSS("card-title")}>
                                {card.title}
                              </h2>
                            </div>
                          }
                        </header>
                      }
                      {/* card content */}
                      {descExist &&
                        <main className={this.decorateCSS("description-container")}>
                          <p className={this.decorateCSS("description")}>
                            {card.description}
                          </p>
                        </main>
                      }
                    </div>
                  );
                })}
              </div>
            }
          </div>
          {/* buttons */}
          {buttons?.length > 0 &&
            <footer className={this.decorateCSS("buttons-container")}>
              {buttons.map((button: Button, index: number) => {
                const textExist = this.castToString(button.text);
                if (!textExist) return null;
                return (
                  <ComposerLink key={index} path={button.link}>
                    <button className={this.decorateCSS("button")}>
                      {button.text}
                    </button>
                  </ComposerLink>
                );
              })}
            </footer>
          }
        </div>
      </div>
    );
  }
}

export default Feature9;
