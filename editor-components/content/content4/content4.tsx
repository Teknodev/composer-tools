import * as React from "react";
import styles from "./content4.module.scss";
import { BaseContent } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

interface Card {
  image: string;
  title: string;
  icon: string;
  url: string;
}
class Content4 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

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
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://halstein.qodeinteractive.com/portfolio-item/expertise-advice/",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-01.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://halstein.qodeinteractive.com/portfolio-item/rebranding/",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-02.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://halstein.qodeinteractive.com/portfolio-item/golden-hello/",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Start business with mentors",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "LiaBicycleSolid",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-03.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://halstein.qodeinteractive.com/portfolio-item/intern-program/",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Achieve goals & coach fast",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "LiaBicycleSolid",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-04.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "https://halstein.qodeinteractive.com/portfolio-item/expertise-advice/",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-05.jpg",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Content-4";
  }

  render() {
    const cards = this.castToObject<Card[]>("cards");
    const leftPageCards = cards.slice(0, 1);
    const rightPageCards = cards.slice(1);
  
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("left-page")}>
            {leftPageCards.map((item: Card, index: number) => (
              <div key={index} className={this.decorateCSS("card")}>
                <ComposerLink path={item.url} isFullWidth={true}>
                  <img
                    src={item.image}
                    alt="category"
                    className={this.decorateCSS("image")}
                  />
                  <div className={this.decorateCSS("category")}>
                    <h2 className={this.decorateCSS("title")}>{item.title}</h2>
                  </div>
                </ComposerLink>
              </div>
            ))}
          </div>
          <div className={this.decorateCSS("right-page")}>
            {rightPageCards.map((item: Card, index: number) => (
              <div key={index} className={this.decorateCSS("card")}>
                <ComposerLink path={item.url} isFullWidth={true}>
                  <img
                    src={item.image}
                    alt="category"
                    className={this.decorateCSS("image")}
                  />
                  <div className={this.decorateCSS("category")}>
                    <h2 className={this.decorateCSS("title")}>{item.title}</h2>
                  </div>
                </ComposerLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
}


export default Content4;
