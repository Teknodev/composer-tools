import * as React from "react";
import { BaseFeature, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./feature6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


type Card = {
  image: string;
  title: string;
};

type Button = {
  icon: string;
  url: string;
}

type Buttons = {
  buttonText: string;
  url: string;
}

class Feature6 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "header",
      displayer: "Header",
      value: "CASE STUDIES"
    })


    this.addProp({
      type: "string",
      key: "subHeader",
      displayer: "Sub Header",
      value: "from vision to reality"
    })

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://demo.tagdiv.com/newspaper_interior_designer_pro/wp-content/uploads/2023/11/10-3-696x928.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Lakeside Redesign: a Rustic House for Modern Living",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://demo.tagdiv.com/newspaper_interior_designer_pro/wp-content/uploads/2023/11/9-3-696x614.jpg",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Minimalist Magic: A Contemporary Studio Apartment",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "card",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://demo.tagdiv.com/newspaper_interior_designer_pro/wp-content/uploads/2023/11/50-3-696x510.jpg"
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Heritage Home: Restoring Charm in a Victorian House",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 3,
    });
    
    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "VIEW ALL CASE STUDIES",
        },
        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "",
        },
      ],
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
      additionalParams: {
        maxElementCount:  2
      }
    });
  }

  getName(): string {
    return "Feature 6";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
    <div className={this.decorateCSS("max-content")}>
        <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("header-title")}>{this.getPropValue("header")}</div>
            <div className={this.decorateCSS("header-subtitle")}>{this.getPropValue("subHeader")}</div>

            {this.castToObject<Card[]>("cards").map((card: Card, indexCards: number) => (
                <div className={this.decorateCSS("card-item-count")} style={{
                    width: 90 / this.getPropValue("itemCount") + "%",
                }}>
                    <div key={indexCards} className={this.decorateCSS("listed")}>
                        <img className={this.decorateCSS("image")} src={card.image} alt=""></img>
                        <div className={this.decorateCSS("image-shadow")}>
                            <p className={this.decorateCSS("title")}>{card.title}</p>
                        </div>
                    </div>
                </div>
            ))}

        <div className={this.decorateCSS("button-position")}>
              {this.castToObject<Buttons[]>("buttons").map(
                (item: Buttons, index: number) => {
                  return (
                    <ComposerLink path={item.url} key={index}>
                      <div className={this.decorateCSS("button")}>
                        {item.buttonText}
                      </div>
                    </ComposerLink>
                  );
                })}

            </div>

            
        </div>
    </div>
</div>

    );
  }
}

export default Feature6;
