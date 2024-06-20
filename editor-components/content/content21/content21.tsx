import * as React from "react";
import styles from "./content21.module.scss";
import { BaseContent } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


interface Card {
  image: string;
  title: string;
  url: string;
}
class ContentComponent21 extends BaseContent {
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
          displayer: "card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "PORTRAIT",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.unsplash.com/photo-1617078262771-c2c39ac6867b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "ARCHITECTURE",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://plus.unsplash.com/premium_photo-1671734046045-6ffc442d068b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "COMMERCIAL",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "WEDDING",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "EDITORİAL",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.unsplash.com/photo-1670767151026-a12c78844398?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FOOD&BEVERAGE",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "EVENTS",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "CELEBRİTY",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://plus.unsplash.com/premium_photo-1661894594113-58d909942880?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FASHION",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
              value: ""
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "DESIGN",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "reverse",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4
    });

  }

  getName(): string {
    return "Content-21";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("image-container")}>
            {this.castToObject<Card[]>("cards").map(
              (item: Card, indexCards: number) => {
                return (
                  <div
                    key={indexCards}
                    className={this.decorateCSS("card")}
                    style={{ width: 90 / this.getPropValue("reverse") + "%" }}
                  >
                    <ComposerLink path={item.url} isFullWidth={true}>

                      {item.image && <img
                        src={item.image}
                        alt="category"
                        className={this.decorateCSS("image")}
                      />}
                      <div className={`${this.decorateCSS("category")} ${!item.image && this.decorateCSS("text-visible")}`}>
                        <h2 className={this.decorateCSS("title")}>{item.title}</h2>

                      </div>
                    </ComposerLink>

                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentComponent21;
