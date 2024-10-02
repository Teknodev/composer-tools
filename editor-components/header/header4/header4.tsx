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
          key: "subtitle",
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
            "Most of our writings have centered on implementing strategies for business units, with their unique",
        },
        {
          type: "string",
          key: "desc2",
          displayer: "Description",
          value:
            "Most of our writings have centered on implementing strategies for business units, with their unique",
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
          value: "NOTE: Some details are very important.",
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "card-anm",
      displayer: "Card Animation",
      value: true
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f0abd2970002c62451a?alt=media&timestamp=1719483639150",
    });
    this.addProp({
      type: "boolean",
      key: "image-anm",
      displayer: "Image Animation",
      value: true
    });

    this.setComponentState("scrollY", 1);
  }

  handleScroll = (e: any) => {
    const container = e.target;
    const scrollY = container.scrollTop;
    const containerHeight = container.scrollHeight;

    this.setComponentState("scrollY", scrollY);
    console.log("Container Scroll Position:", scrollY);
    console.log("Container Height:", containerHeight);
  };



  getName(): string {
    return "Header 4";
  }

  render() {
    let card: any = this.castToObject("card");
    const imageAnm = this.getPropValue("image-anm");
    const cardAnm = this.getPropValue("card-anm");

    return (
      <div className={this.decorateCSS("container")} onScroll={this.handleScroll}>
        <div className={this.decorateCSS("max-content")}>
          {this.getPropValue("image") && (
            <div className={this.decorateCSS("image-container")}>
              <img
                alt=""
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
                style={
                  imageAnm ? {
                    transform: `translate(0%, ${this.getComponentState("scrollY") / 25}%) translate3d(0px, 0px, 0px)`
                  } : {}
                }
              />
            </div>
          )}

          {(this.castToString(card.subtitle) ||
            this.castToString(card.title) ||
            this.castToString(card.desc1) ||
            this.castToString(card.desc2) ||
            this.castToString(card.btn) ||
            this.castToString(card.note)) && (
              <div className={this.decorateCSS("card")}
                style={
                  cardAnm ? {
                    transform: `translate(0%, ${this.getComponentState("scrollY") / 25}%) translate3d(0px, 0px, 0px)`
                  } : {}
                }>
                <div className={this.decorateCSS("box")}>
                  {(this.castToString(card.subtitle) || this.castToString(card.title)) && (
                    <div className={this.decorateCSS("heading")}>
                      {this.castToString(card.subtitle) && <p className={this.decorateCSS("sub-title")}>{card.subtitle}</p>}
                      {this.castToString(card.title) && <h2 className={this.decorateCSS("title")}>{card.title}</h2>}
                    </div>
                  )}
                  {this.castToString(card.desc1) && <p className={this.decorateCSS("desc1")}>{card.desc1}</p>}
                  {this.castToString(card.desc2) && <p className={this.decorateCSS("desc2")}>{card.desc2}</p>}
                  {this.castToString(card.btn) && <button className={this.decorateCSS("btn")}>{card.btn}</button>}
                  {this.castToString(card.note) && <p className={this.decorateCSS("note")}>{card.note}</p>}
                </div>
              </div>
            )}

        </div>
      </div>
    );
  }
}

export default Header4;
