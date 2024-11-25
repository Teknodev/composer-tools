import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content17.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class Content17 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subTitle",
      value: "HOW WE WORK?",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Description",
      value: "4 steps to get your teeth done in Turkey",
    });
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/steps/dental1.png",
            },
            {
              type: "string",
              key: "item-title",
              displayer: "Item Title",
              value: "Get Free Quotation",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "If you can send us a recent panoramic x-ray and dental photos, our specialist doctor will evaluate your case. Our experienced consulting team will provide you treatment plan with estimated costs.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/steps/dental2.png",
            },
            {
              type: "string",
              key: "item-title",
              displayer: "Item Title",
              value: "Travel & Accommodation",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "If you are satisfied with the treatment plan that was sent to you, you can make your travel arrangement. It is finally time for your journey to Antalya. We will offer a comfortable accommodation close to the clinic during the treatment process.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/steps/dental3.png",
            },
            {
              type: "string",
              key: "item-title",
              displayer: "Item Title",
              value: "Starting to Treatment",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "We plan all details about treatment with using smile design application, photographs and x-rays at the first appointment. And we start your treatment within the same day.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "item-image",
              displayer: "Item Image",
              value:
                "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/steps/dental4.png",
            },
            {
              type: "string",
              key: "item-title",
              displayer: "Item Title",
              value: "Enjoy your holiday",
            },
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "You can enjoy your vacation in this paradise while you are treated with specialist doctors. Beautiful beaches, luxurious hotel resorts, delicious foods and more.",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 4,
    });
  }
  getName(): string {
    return "Content 17";
  }

  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("heading")}>
            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
              {this.getPropValue("subTitle")}
            </Base.SectionSubTitle>
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>
          </Base.VerticalContent>
          <Base.ListGrid
            gridCount={{ pc: this.getPropValue("itemCount") }}
            className={this.decorateCSS("card-container")}
          >
            {this.getPropValue("items").map((item: any, index: number) => (
              <div className={this.decorateCSS("card")}>
                <span className={this.decorateCSS("count")}>{index + 1}</span>
                <img src={item.value[0].value} className={this.decorateCSS("image")} alt="" />
                <h5 className={this.decorateCSS("item-value1")}>
                  {item.value[1].value}
                </h5>
                <p className={this.decorateCSS("item-value2")}>
                  {item.value[2].value}
                </p>
              </div>
            ))}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content17;
