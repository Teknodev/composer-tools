import * as React from "react";
import { BaseContent, Team } from "../../EditorComponent";
import styles from "./content3.module.scss";
import { Content } from "../../../../components/section-card/section-card";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Card = {
  icon:string;
  image: string;
  title: string;
  description: string;
};

class Content3 extends BaseContent {
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
              type:"icon",
              key:"icon",
              displayer:"Icon",
              value:"LiaBicycleSolid",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "CREATE AMAZING DESING WITH MINT THEME",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Creating a higher spacing for people through a unique campaigns.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://20148114.fs1.hubspotusercontent-na1.net/hubfs/20148114/photographer600.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type:"icon",
              key:"icon",
              displayer:"Icon",
              value:"LiaBicycleSolid",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "WE CRAFT BEAUTIFUL & AWESOME THEMES",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Creating a higher spacing for people through a unique campaigns.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://20148114.fs1.hubspotusercontent-na1.net/hubfs/20148114/oldcity600.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type:"icon",
              key:"icon",
              displayer:"Icon",
              value:"LiaBicycleSolid",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "READY TO START YOUR NEXT WEB PROJECT NOW?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Creating a higher spacing for people through a unique campaigns.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://20148114.fs1.hubspotusercontent-na1.net/hubfs/20148114/magazine.jpg",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type:"icon",
              key:"icon",
              displayer:"Icon",
              value:"LiaBicycleSolid",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "WE BELIEVE IN THE POWER OF GREAT DESIGN",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Creating a higher spacing for people through a unique campaigns.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://20148114.fs1.hubspotusercontent-na1.net/hubfs/20148114/team04-1.jpg",
            },
          ],
        },
      ],
    });
     
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
    });
  }

  getName(): string {
    return "Content 3";
  }

  setDescriptionHeight(elementIndex: number): void {

    let descriptionElement = document.querySelector(`#description-${elementIndex}`);
    if(descriptionElement)
      this.setComponentState(`hoveredElementHeight-${elementIndex}`, -1 * descriptionElement.clientHeight);
  }

  render() {
    console.log(this.castToObject<Card[]>("cards"));
    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<Card[]>("cards").map(
  (card: Card, indexCard: number) => (
    <div key={indexCard} className={this.decorateCSS("card-item-count")} style={{
      width: 100 / this.getPropValue("itemCount") + "%",
    }}>
      <div className={this.decorateCSS("card")} onMouseLeave={(e) => this.setComponentState(`hoveredElementHeight-${indexCard}`, 0)}>
        <div className={this.decorateCSS("image-container")}>
          <img className={this.decorateCSS("image")} src={card.image} alt=""/>
        </div>
        <div className={this.decorateCSS("little-container")} onMouseEnter={() => this.setDescriptionHeight(indexCard)}>
          <div className={this.decorateCSS("icon-title-container")}>
            <ComposerIcon name={card.icon} propsIcon={{className:this.decorateCSS("icon")}}/>  
            <h3 className={this.decorateCSS("title")} style={{transform: `translateY(${this.getComponentState(`hoveredElementHeight-${indexCard}`)}px)`}}>
              {card.title}
            </h3>
          </div>
          <p id={`description-${indexCard}`} className={this.decorateCSS("description")}>
            {card.description}
          </p>
        </div>
      </div>
    </div>
  )
)}

        </div>
      </div>
    );
  }
}

export default Content3;
