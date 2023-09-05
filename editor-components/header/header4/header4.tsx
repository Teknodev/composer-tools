import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header4.module.scss";

class Header4 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Header",
      value: "Get Fit and Stay Healthy with Our Personalized Fitness Plans",
    });

    this.addProp({
      type: "object",
      key: "card1",
      displayer: "First Card",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Achieve Your Fitness Goals with Customized Plans",
        },
        {
          type: "string",
          key: "text",
          displayer: "Description",
          value: "Get fit and stay healthy with our personalized fitness plans, designed to help you achieve your unique goals and get the results you want.",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "card2",
      displayer: "Second Card",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Get Fit with Our Expert Guidance",
        },
        {
          type: "string",
          key: "text",
          displayer: "Description",
          value: "Let our experienced trainers guide you on your fitness journey with customized workout plans tailored to your fitness level and goals.",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "card3",
      displayer: "Third Card",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Transform Your Body with Personalized Fitness Plans",
        },
        {
          type: "string",
          key: "text",
          displayer: "Description",
          value: "Whether you're looking to lose weight, gain muscle, or improve your overall health, our personalized fitness plans will help you reach your goals and transform your body.",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "card4",
      displayer: "Fourth Card",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: " Your Fitness, Your Way",
        },
        {
          type: "string",
          key: "text",
          displayer: "Description",
          value: "At our fitness center, we believe that everyone's fitness journey is unique. That's why we offer personalized fitness plans that are tailored to your individual needs and preferences.",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "card5",
      displayer: "Fifth Card",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Reach Your Full Potential with Custom Fitness Plans",
        },
        {
          type: "string",
          key: "text",
          displayer: "Description",
          value: "Whether you're a beginner or a seasoned athlete, our custom fitness plans will help you reach your full potential and take your fitness to the next level.",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "card6",
      displayer: "Sixth Card",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Personalized Fitness Plans for Lasting Results",
        },
        {
          type: "string",
          key: "text",
          displayer: "Description",
          value: "Get the support and guidance you need to achieve lasting results with our personalized fitness plans, designed to help you make meaningful progress towards your fitness goals.",
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436b1f868c3c2002cd2fab9?alt=media&timestamp=1693233999280",
    });
  }

  getName(): string {
    return "Header 4";
  }

  render() {
    let card1 = this.getPropValue("card1");
    let card2 = this.getPropValue("card2");
    let card3 = this.getPropValue("card3");
    let card4 = this.getPropValue("card4");
    let card5 = this.getPropValue("card5");
    let card6 = this.getPropValue("card6");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header-page")}>
            <div className={this.decorateCSS("subtitle-container")}>
              <h3>{this.getPropValue("subtitle")}</h3>
            </div>
            <div className={this.decorateCSS("section")}>
              <div
                className={`${this.decorateCSS("boxs")} ${this.decorateCSS("boxs-left")}`}
              >
                <div
                  className={`${this.decorateCSS("box")} ${this.decorateCSS("box-left")}`}
                >
                  <h1>{card1[0].value}</h1>
                  <p>{card1[1].value}</p>
                </div>
                <div className={`${this.decorateCSS("box")}`}>
                  <h1>{card2[0].value}</h1>
                  <p>{card2[1].value}</p>
                </div>
                <div
                  className={`${this.decorateCSS("box")} ${this.decorateCSS("box-left")}`}
                >
                  <h1>{card3[0].value}</h1>
                  <p>{card3[1].value}</p>
                </div>
              </div>
              <div className={this.decorateCSS("image-container")}>
                <img
                  alt=""
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")}
                ></img>
              </div>
              <div
                className={`${this.decorateCSS("boxs")} ${this.decorateCSS(
                  "boxs-right"
                )}`}
              >
                <div
                  className={`${this.decorateCSS("box")} ${this.decorateCSS(
                    "box-right"
                  )}`}
                >
                  <h1>{card4[0].value}</h1>
                  <p>{card4[1].value}</p>
                </div>
                <div className={`${this.decorateCSS("box")}`}>
                  <h1>{card5[0].value}</h1>
                  <p>{card5[1].value}</p>
                </div>
                <div
                  className={`${this.decorateCSS("box")} ${this.decorateCSS(
                    "box-right"
                  )}`}
                >
                  <h1>{card6[0].value}</h1>
                  <p>{card6[1].value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header4;
