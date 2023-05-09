import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCard, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./card11.module.scss";

type TopImages = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
};
class Card11 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);

    let card: TypeUsableComponentProps = {
      type: "object",
      key: "top-image",
      displayer: "TopImage",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: PlaceholderFiller.string(),
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: PlaceholderFiller.shortText(),
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
        },
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "LEARN MORE",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
      ],
    }
    this.addProp({
      type: "array",
      key: "top-image-card",
      displayer: "TopImage Card",
      value: [
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
        JSON.parse(JSON.stringify(card)),
      ],
    });
  }

  getName(): string {
    return "Card 11";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")} >
            {this.castToObject<TopImages[]>("top-image-card").map(
              (top_image: any, index: number) => (
                <div
                  className={this.decorateCSS("top-image")}
                  
                  key={index}
                >
                  <div className={this.decorateCSS("image-background")}></div>
                  <div
                    className={this.decorateCSS("child")}
                    
                  >
                    <img
                      className={this.decorateCSS("image")}
                      
                      src={top_image.image}
                    ></img>
                    <h3
                      className={this.decorateCSS("title")}
                      
                    >
                      {top_image.title}
                    </h3>
                    <p
                      className={this.decorateCSS("long-text")}
                      
                    >
                      {top_image.description}
                    </p>
                    <ComposerLink path={top_image.link}>
                      {top_image.buttonText}
                    </ComposerLink>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card11;
