import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form4.module.scss";

// type ISection = {
//   section: Item[];
// };

type Item = {
  image: string;
};

class Form4Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type:"string",
      key:"subtitle",
      displayer:"Subtitle",
      value:"CONTACT",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "CONTACT US",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "You can use this contact form to get in touch with us. The contact form serves as an effective tool for direct communication with us. If you have any questions, feedback, requests, or partnership proposals, please feel free to reach out to us through this form. ",
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          // type: "object",
          // key: "section",
          // displayer: "Section",
          // value: [
          //   {
              // type: "array",
              // key: "items",
              // displayer: "Items",
              // value: [
              //   {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646cb8c5fba070002b74a852?alt=media&timestamp=1684846790397",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "ADRESS",
                      displayer: "Card Title",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "198 West 21th Street,NY",
                      displayer: "1th Text",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646cb37dfba070002b74a624?alt=media&timestamp=1684845438304",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "PHONE",
                      displayer: "Card Title",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "+ 1235 2355 98",
                      displayer: "1th Text",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://cdn-icons-png.flaticon.com/512/725/725680.png",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "card-title",
                      value: "EMAIL ADRESS",
                      displayer: "Card Title",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "info@yoursite.com",
                      displayer: "1th Text",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/1200px-Globe_icon.svg.png",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "card-title",
                      value: "WEBSİTE",
                      displayer: "Card Title",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "yoursite.com",
                      displayer: "1th Text",
                    },
                  ],
              //   },
              // ],
            },
          // ],
        // },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4,
    });
    this.addProp({
      type: "select",
      key: "select",
      displayer: "Location of Border",
      value: "Top",
      additionalParams: {
        selectItems: ["None", "Top" , "Bottom" , "All Around"],
      }
    })
  }

  getName(): string {
    return "Form 4";
  }

  render() {
    const selectValue = this.getPropValue("select");
    return (
      <div
        className={this.decorateCSS("container")}
      >
        <h5 className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</h5>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("contacts2")}>
            <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
            <section className={this.decorateCSS("cards")}>
              {this.getPropValue("card-items").map((cardItem: any, index: number) => (
              <div key={index} className={this.decorateCSS("card-child")}>
              <div
                key={index} className={`${this.decorateCSS("card")} ${selectValue === "Top" ? this.decorateCSS("border-top") : selectValue === "Bottom" ? this.decorateCSS("border-bottom") : selectValue === "All Around" ? this.decorateCSS("border-all") : ""}`}>
              <div className={this.decorateCSS("img-child")}>
              <img className={this.decorateCSS("image")} width={50} height={50} src={cardItem.value[0].value} alt="" />
              </div>
                <div className={this.decorateCSS("card-box")}>
                <h2 className={this.decorateCSS("item-value")}>{cardItem.value[1].value}</h2>
                <h4 className={this.decorateCSS("item-value2")}>{cardItem.value[2].value}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Form4Page;