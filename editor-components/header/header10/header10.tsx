import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header10.module.scss";

class Header10 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Effective Advertising",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "How to Create Effective Ads",
    });
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "Advertising",
    });
    this.addProp({
      type: "string",
      key: "cardTitle",
      displayer: "Card Title",
      value: "The Power of Advertising",
    });
    this.addProp({
      type: "string",
      key: "cardDescription",
      displayer: "Card Description",
      value:
        "Effective advertising is crucial to the success of any business. By understanding your audience and crafting a compelling message, you can create ads that capture attention and drive action. Whether you're running ads on social media, television, or radio, it's important to remember that the goal is not just to create awareness but to ultimately generate sales.",
    });
    this.addProp({
      type: "image",
      key: "cardImage",
      displayer: "Card Image",
      value:
        "https://assets.website-files.com/62d901050b694cd462d2879c/62ed19dbdf1bb80122008552_620bea4ea84d32768b6235c6_1aa.jpeg",
    });
  }

  getName(): string {
    return "Header 10";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <section className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("child")}>
            <span className={this.decorateCSS("subtitle")}>
              {this.getPropValue("subtitle")}
            </span>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            <div className={this.decorateCSS("card")}>
              <div className={this.decorateCSS("left-content")}>
                <span className={this.decorateCSS("badge")}>
                  {this.getPropValue("badge")}
                </span>
                <div className={this.decorateCSS("text-child")}>
                  <h1 className={this.decorateCSS("cardTitle")}>{this.getPropValue("cardTitle")}</h1>
                  <p className={this.decorateCSS("description")}>{this.getPropValue("cardDescription")}</p>
                </div>
              </div>
              <div className={this.decorateCSS("right-content")}>
                <img src={this.getPropValue("cardImage")} alt=""/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header10;
