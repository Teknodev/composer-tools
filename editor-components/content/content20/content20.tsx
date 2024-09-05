import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content20.module.scss";

type Card = {
  title: string;
  description: string;
  image: string;
};

class Content20 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "4 steps to get your teeth done in Turkey",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "HOW WE WORK?",
    });

    this.addProp({
      type: "array",
      key: "content-card",
      displayer: "Content Card",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
                type: "string",
                key: "title",
                displayer: "Title",
                value: "1",
              },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Get Free Quotation",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "If you can send us a recent panoramic x-ray and dental photos, our specialist doctor will evaluate your case. Our experienced consulting team will provide you treatment plan with estimated costs.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c1adbd2970002c628b56?alt=media&timestamp=1719564433797",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
                type: "string",
                key: "title",
                displayer: "Title",
                value: "2",
              },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Travel & Accommodation",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "If you are satisfied with the treatment plan that was sent to you, you can make your travel arrangement. It is finally time for your journey to Antalya. We will offer a comfortable accommodation close to the clinic during the treatment process..",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c1adbd2970002c628b57?alt=media&timestamp=1719564433797",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
                type: "string",
                key: "title",
                displayer: "Title",
                value: "3",
              },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Starting to Treatment",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "We plan all details about treatment with using smile design application, photographs and x-rays at the first appointment. And we start your treatment within the same day.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c1adbd2970002c628b58?alt=media&timestamp=1719564433797",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [ {
            type: "string",
            key: "title",
            displayer: "Title",
            value: "4",
          },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Enjoy your holiday",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "You can enjoy your vacation in this paradise while you are treated with specialist doctors. Beautiful beaches, luxurious hotel resorts, delicious foods and more.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c1adbd2970002c628b59?alt=media&timestamp=1719564433797",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
    });
  }

  getName(): string {
    return "Content 20";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            <span className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</span>
            <h2 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h2>
          </div>
          <div className={this.decorateCSS("card-child")}>
            {this.castToObject<Card[]>("content-card").map(
              
              (card: Card, index: number) => (
                <div className={this.decorateCSS("card-item-count")} style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}>
                  <div key={`cnt-4-card-${index}`} className={this.decorateCSS("card")}>
                    <i>
                      <img alt="server" src={card.image} />
                    </i>
                    <h5 className={this.decorateCSS("card-title")}>{card.title}</h5>
                    <p className={this.decorateCSS("card-description")}>{card.description}</p>
                  </div>
              </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Content20;
