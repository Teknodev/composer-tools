import * as React from "react";
import styles from "./header19.module.scss";
import { BaseHeader } from "../../EditorComponent";
import { object } from "yup";

class Header19 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "left-side",
      displayer: "Left Side",
      value: [
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title-top",
              displayer: "Title Top",
              value: "Hot &",
            },
            {
              type: "string",
              key: "title-mid",
              displayer: "Title Middle",
              value: "Stylish",
            },
            {
              type: "string",
              key: "title-bottom",
              displayer: "Title Bottom",
              value: "Tshirt",
            },
            {
              type: "string",
              key: "content",
              displayer: "Content",
              value: "Some Italian writings",
            },
            {
              type: "string",
              key: "side-text",
              displayer: "Side Text",
              value: "SUMMER COLLECTION 2022",
            },
            {
              type: "string",
              key: "button-text",
              displayer: "Button Text",
              value: "SHOP COLLECTION",
            },
            {
              type: "image",
              key: "left-image",
              displayer: "Image",
              value: "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2017/01/fashion-split-1-left.jpg",
            }

          ]
        }
      ],
    });

    this.addProp({
      type: "array",
      key: "right-side",
      displayer: "Right Side",
      value: [
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "side-text",
              displayer: "Side Text",
              value: "NEW MAN SUMMER LOOK",
            },
            {
              type: "image",
              key: "left-image",
              displayer: "Image",
              value: "https://cdn.fashiola.co.uk/L356474659/men-tops-zara-flowers-top-available-in-more-colours.jpg",
            }
          ]
        }
      ],
    });



  
  }

  getName(): string {
    return "Header-19";
  }

  render() {
    let leftImg = this.getPropValue("left-side")[0].value[6].value;
    let topTxt = this.getPropValue("left-side")[0].value[0].value;
    let midTxt = this.getPropValue("left-side")[0].value[1].value;
    let bottomTxt = this.getPropValue("left-side")[0].value[2].value;
    let leftSideText = this.getPropValue("left-side")[0].value[4].value;
    let text = this.getPropValue("left-side")[0].value[3].value;
    let buttonText = this.getPropValue("left-side")[0].value[5].value;


    let rightImg = this.getPropValue("right-side")[0].value[1].value;
    let rightSideText = this.getPropValue("right-side")[0].value[0].value;


    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>

              <div className={this.decorateCSS("left")}>
                <img src={leftImg} alt="" />
              <div className={this.decorateCSS("text-content")}>
              <div className={this.decorateCSS("tittle-wrapper")}>

              <div className={this.decorateCSS("top")}>
                <div> 
                {topTxt}
                </div>
              </div>

              <div className={this.decorateCSS("middle")}>
                <div>
                {midTxt}
                
                </div>
              </div>

              <div className={this.decorateCSS("bottom")}>
                <div>
                {bottomTxt}
                </div>
              </div>

              </div>

              <div className={this.decorateCSS("text")}>
                {text}
              </div>

              <button className={this.decorateCSS("action-button")}>
                {buttonText}
              </button>

            </div>
            <div className={this.decorateCSS("side-text")}>
              {leftSideText}
            </div>

          </div>

          <div className={this.decorateCSS("right")}>
            <img src={rightImg} alt="" />

            <div className={this.decorateCSS("side-text")}>
              {rightSideText}
            </div>

          </div>



            </div>
          </div>
      </div>
    );
  }
}

export default Header19;
