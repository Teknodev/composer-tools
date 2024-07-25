import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content13.module.scss";


class Content13 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "about-title",
      displayer: "about-title",
      value: "About resorts",
    });

    this.addProp({
      type: "string",
      key: "maintitle",
      displayer: "maintitle",
      value: "Relax at the luxury resorts around the entire world.",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "A design-led approach guides the team, implementing practices, products and services that are thoughtful and environmentally sound. Family of professionals that creates intelligent designs that help the face of hospitality."
    })

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Text of Button",
      value: "About resort"
    });

    this.addProp({
      type: "string",
      key: "phone",
      displayer: "PhoneNumber",
      value: "1 800 222 000"
    })

    this.addProp({
      type: "image",
      key: "image1",
      displayer: "image1",
      value: "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-home-01.jpg"
    })

    this.addProp({
      type: "image",
      key: "image2",
      displayer: "image2",
      value: "https://craftohtml.themezaa.com/images/demo-hotel-and-resort-home-02.jpg"
    })




  }

  getName(): string {
    return "Content 13";
  }

  render() {



    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("title-container")}>
            <span className={this.decorateCSS("about-title")}>{this.getPropValue("about-title")}</span>
            <h2 className={this.decorateCSS("maintitle")}>{this.getPropValue("maintitle")}</h2>
            <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
            <div className={this.decorateCSS("button-icon")} >

              <button className={this.decorateCSS("about-button")}>{this.getPropValue("buttonText")}</button>
              <div className={this.decorateCSS("phone-icon")}>
                <span className={this.decorateCSS("icon")}>📞</span>
                <h1 className={this.decorateCSS("phone")}>{this.getPropValue("phone")}</h1>
              </div>
            </div>
          </div>
          <div className={this.decorateCSS("right-page")}>
            <div className={this.decorateCSS("image-container")}>
              <span className={this.decorateCSS("text")}> Started In</span>
              <span className={this.decorateCSS("year")}>1995</span>
              <img src={this.getPropValue("image1")} alt="" className={this.decorateCSS("image1")} />
              <img src={this.getPropValue("image2")} alt="" className={this.decorateCSS("image2")} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content13;
