import * as React from "react";
import styles from "./header18.module.scss";
import { BaseHeader } from "../../EditorComponent";

class Header19 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "year",
      value: "2023",
      displayer: "Year",
    });

    this.addProp({
      type: "string",
      key: "title",
      value: "Scandinavian Style House",
      displayer: "Title",
    });

    this.addProp({
      type: "image",
      key: "background",
      value: "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2021/05/w-architecture-slider-2-opt-1.jpg",
      displayer: "Image",
    });

    this.addProp({
          type: "string",
          displayer: "button text",
          key: "button-text",
          value: "View content",
    })

    this.addProp({
      type: "string",
          displayer: "button url",
          key: "button url",
          value: "A",
    })


  
  }

  getName(): string {
    return "Header-19";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>

            <div className={this.decorateCSS("background-img")}>
            <img src={this.getPropValue("background")} alt={this.getPropValue(this.getPropValue("background"))} />

            </div>

            <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("left")}>

              <div className={this.decorateCSS("item")}>
                <div className={this.decorateCSS("year")}>
                  {this.getPropValue("year")}
                </div>

                <div className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}

                </div>
              </div>

            </div>

            <div className={this.decorateCSS("right")}>
              <div>
              <button  className={this.decorateCSS("action-button")}>
                {this.getPropValue("button-text")}
              </button>
              
              <div>
              </div>
              </div>
            </div>
            </div>

           

          </div>
        </div>
      </div>
    );
  }
}

export default Header19;
