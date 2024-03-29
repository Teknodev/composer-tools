import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header4.module.scss";

class Header4 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "string",
          key: "sub-title",
          displayer: "Subtitle",
          value: "Build perfect websites",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Unlimited power",
        },
        {
          type: "string",
          key: "desc1",
          displayer: "Description",
          value:
            "Most of our wrtings have centered on implementing strategies for business units,with their unique",
        },
        {
          type: "string",
          key: "desc2",
          displayer: "Description",
          value:
            "Most of our wrtings have centered on implementing strategies for business units,with their unique",
        },
        {
          type: "string",
          key: "btn",
          displayer: "Button",
          value: "More Projects",
        },
        {
          type: "string",
          key: "note",
          displayer: "Note",
          value: "NOTE : Some details are very important.",
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://eremia-react.vercel.app/img/project/project3/2.jpg",
    });
  }

  getName(): string {
    return "Header 4";
  }

  render() {
    let card: any = this.castToObject("card");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("image-container")}>
            <img
              alt=""
              className={this.decorateCSS("image")}
              src={this.getPropValue("image")}
            ></img>
          </div>
          <div className={this.decorateCSS("card")}>
            <div className={this.decorateCSS("box")}>
              {/* heading */}
              <div className={this.decorateCSS("heading")}>
                <div className={this.decorateCSS("heading-title")}>
                  <p className={this.decorateCSS("sub-title")}>
                    {card[0].value}
                  </p>
                  <h2 className={this.decorateCSS("title")}>{card[1].value}</h2>
                </div>
              </div>
              {/* end of heading */}
              <p className={this.decorateCSS("desc1")}>{card[2].value}</p>
              <p className={this.decorateCSS("desc2")}>{card[3].value}</p>
              <button className={this.decorateCSS("btn")}>
                {card[4].value}
              </button>
              <p className={this.decorateCSS("note")}>{card[5].value}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header4;
