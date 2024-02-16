import * as React from "react";
import styles from "./faq3.module.scss";
import { BaseFAQ } from "../../EditorComponent";

type Faq = {
  number: number;
  title: string;
  description: string;
}

class FaqContainerTwo extends BaseFAQ {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Title",
      value: "Got Questions? We’ve Got Answers!",
    })

    this.addProp({
      type: "string",
      key: "mainSubtitle",
      displayer: "Subtitle",
      value: "Below is a list of frequently asked questions to help you understand how this works.",
    })

    this.addProp({
      type: "array",
      key: "faqList",
      displayer: "FAQ",
      value: [
        {
          type: "object",
          key: "faq",
          displayer: "Frequently Asked Questions",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Number",
              value: 1,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "When can we get started?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ]
        },
        {
          type: "object",
          key: "faq",
          displayer: "Frequently Asked Questions",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Number",
              value: 2,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "How do I go about conducting market research?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ]
        },
        {
          type: "object",
          key: "faq",
          displayer: "Frequently Asked Questions",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Number",
              value: 3,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "What do I need in order to start selling?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ]
        },
        {
          type: "object",
          key: "faq",
          displayer: "Frequently Asked Questions",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Number",
              value: 4,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "How much does it cost?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ]
        },
        {
          type: "object",
          key: "faq",
          displayer: "Frequently Asked Questions",
          value: [
            {
              type: "number",
              key: "number",
              displayer: "Number",
              value: 5,
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "What other help is available?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
            },
          ]
        },
      ]
    })

    this.addProp({
      type: "array",
      key: "infoArray",
      displayer: "INFORMATION",
      value: [
        {
          type: "object",
          key: "info",
          displayer: "Information",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Questions?",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Blandit justo vestibulum tincidunt, ipsum id non, volutpat neque pede eget donec.",
            },
            {
              type: "string",
              key: "buttonItem",
              displayer: "Button Writing",
              value: "CONTACT US",
            },
          ]
        },
        {
          type: "object",
          key: "info",
          displayer: "Information",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "About Us",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Etiam nisl cras, arcu dui, wisi aenean non sit quisque nulla, eget aut molestie. Rhoncus sociis, nulla luctus diam montes cubilia.",
            },
            {
              type: "string",
              key: "buttonItem",
              displayer: "Button Writing",
              value: "LEARN MORE",
            },
          ]
        },
      ]
    })

    this.state["componentProps"]["selectCardIndex"] = null;

  }

  getName(): string {
    return "FAQ-3";
  }

  lineClicked(index: number) {
    if (this.getComponentState("selectCardIndex") === index) {
      this.setComponentState("selectCardIndex", null);
    }
    else {
      this.setComponentState("selectCardIndex", index);
    }
  }

  render() {

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("containerTop")}>
            <div className={this.decorateCSS("header")}>
              <div className={this.decorateCSS("caption")}>{this.getPropValue("mainTitle")}</div>
              <p className={this.decorateCSS("subtitle")}>{this.getPropValue("mainSubtitle")}</p>
            </div>
            <div className={this.decorateCSS("contentContainer")}>
              <div className={this.decorateCSS("content-left")}>
                {this.castToObject<Faq[]>("faqList").map((item: Faq, index: number) => (
                  <div
                    key={index}
                    className={this.decorateCSS("faq-items")}
                    onClick={() => {
                      this.lineClicked(index);
                    }}
                  >
                    <h3
                      className={this.decorateCSS("title-item")}
                    >
                      {item.number}.
                      {item.title}
                      
                    </h3>
                    <img
                        src="https://www.svgrepo.com/show/80156/down-arrow.svg"
                        alt=""
                        className={`${this.getComponentState("selectCardIndex") ===index ? this.decorateCSS("rotate") : ""}`}
                      />
                    <div className={`${this.decorateCSS("description-item")} ${this.getComponentState("selectCardIndex") === index ? this.decorateCSS("active") : ""}`}>{item.description}</div>
                    <hr />
                  </div>
                ))}
              </div>
              <div className={this.decorateCSS("content-right")}>
                {this.getPropValue("infoArray").map((item: any, index: number) => (
                  <div key={index} className={this.decorateCSS("info-items")}>
                    <h3 className={this.decorateCSS("title-info")}>{item.value[0].value}</h3>
                    <div className={this.decorateCSS("description-info")}>{item.value[1].value}</div>
                    <button className={this.decorateCSS("button-info")}>{item.value[2].value}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqContainerTwo;
