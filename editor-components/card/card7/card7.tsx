import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./card7.module.scss";

type listedListItem = {
  listedItem: string;
};
type Listed = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
  listedListItem: listedListItem[];
};
class Card7 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    let card: TypeUsableComponentProps = {
      type: "object",
      key: "listed",
      displayer: "Listed",
      value: [
        {
          type: "string",
          key: "title",
          value: PlaceholderFiller.string(),
          displayer: "Title",
        },
        {
          type: "string",
          key: "description",
          value: PlaceholderFiller.shortText(),
          displayer: "Description",
        },
        {
          type: "image",
          key: "image",
          value: "https://static.thenounproject.com/png/105256-200.png",
          displayer: "Image",
        },
        {
          type: "string",
          key: "buttonText",
          value: "LEARN MORE",
          displayer: "Button Text",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
        {
          type: "array",
          key: "listedListItem",
          displayer: "Listed Item",
          value: [
            {
              type: "object",
              key: "listItem",
              displayer: "List Item",
              value: [
                {
                  type: "string",
                  key: "listedItem",
                  value: PlaceholderFiller.string(),
                  displayer: "Item",
                },
              ],
            },
          ],
        },
      ],
    }
    this.addProp({
      type: "array",
      key: "listed-card",
      displayer: "Listed Card",
      value: [
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
      ],
    });
  }

  getName(): string {
    return "Card 7";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            {this.castToObject<Listed[]>("listed-card").map(
              (listed: any, index: number) => (
                <div
                  key={index}
                  className={this.decorateCSS("listed")}
                  
                >
                  <img src={listed.image}></img>
                  <h3
                    className={this.decorateCSS("title")}
                    
                  >
                    {listed.title}
                  </h3>
                  <p
                    className={this.decorateCSS("long-text")}
                    
                  >
                    {listed.description}
                  </p>

                  <ComposerLink path={listed.link}>
                    <a
                      className={this.decorateCSS("button")}
                      
                    >
                      {listed.buttonText}
                    </a>
                  </ComposerLink>
                  <ul className={this.decorateCSS("list")}>
                    {listed.listedListItem.map(
                      (tableData: listedListItem, index: number) => {
                        return <li key={index}>{tableData.listedItem}</li>;
                      }
                    )}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card7;
