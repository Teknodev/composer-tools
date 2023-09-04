import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table5.module.scss";

type PriceList = {
  image: string;
  title: string;
  stars: number;
  price: string;
  duration: string;
  buttonText: string;
  link: string;
};
class PricingTable5 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "price-list",
      displayer: "Price List",
      value: [
        {
          type: "object",
          key: "pricing-list",
          displayer: "Pricing List",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e3303f057bdf002c2955dd?alt=media&timestamp=1692610602790",
              displayer: "Image",
            },
            {
              type: "string",
              key: "title",
              value: "Enterprise",
              displayer: "Title",
            },
            {
              type: "number",
              key: "stars",
              value: 5,
              displayer: "Stars",
            },
            {
              type: "string",
              key: "price",
              value: "$50",
              displayer: "Price",
            },
            {
              type: "string",
              key: "duration",
              value: "/week",
              displayer: "Duration",
            },
            {
              type: "string",
              key: "buttonText",
              value: "Get started",
              displayer: "Button Text",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "pricing-list",
          displayer: "Pricing List",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e3303f057bdf002c2955dd?alt=media&timestamp=1692610602790",
              displayer: "Image",
            },
            {
              type: "string",
              key: "title",
              value: "Enterprise",
              displayer: "Title",
            },
            {
              type: "number",
              key: "stars",
              value: 5,
              displayer: "Stars",
            },
            {
              type: "string",
              key: "price",
              value: "$150",
              displayer: "Price",
            },
            {
              type: "string",
              key: "duration",
              value: "/month",
              displayer: "Duration",
            },
            {
              type: "string",
              key: "buttonText",
              value: "Get started",
              displayer: "Button Text",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "pricing-list",
          displayer: "Pricing List",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e3303f057bdf002c2955dd?alt=media&timestamp=1692610602790",
              displayer: "Image",
            },
            {
              type: "string",
              key: "title",
              value: "Enterprise",
              displayer: "Title",
            },
            {
              type: "number",
              key: "stars",
              value: 5,
              displayer: "Stars",
            },
            {
              type: "string",
              key: "price",
              value: "$350",
              displayer: "Price",
            },
            {
              type: "string",
              key: "duration",
              value: "/years",
              displayer: "Duration",
            },
            {
              type: "string",
              key: "buttonText",
              value: "Get started",
              displayer: "Button Text",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "select",
      key: "select",
      displayer: "Location of Border",
      value: "None",
      additionalParams: {
        selectItems: ["None", "Top" , "Bottom" , "All Around"],
      }
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Pricing List 5";
  }

  render() {
    const selectValue = this.getPropValue("select");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<PriceList[]>("price-list").map(
            (pricing: any, index: number) => (
              <div className={this.decorateCSS("card-item-count")} style={{
                width: 90 / this.getPropValue("itemCount") + "%",
              }}>
              <div key={index} className={`${this.decorateCSS("price")} ${selectValue === "Top" ? this.decorateCSS("border-top") : selectValue === "Bottom" ? this.decorateCSS("border-bottom") : selectValue === "All Around" ? this.decorateCSS("border-all") : ""}`}>
                <img
                  className={this.decorateCSS("image")}
                  src={pricing.image}
                  width={280}
                  />
                <h2 className={this.decorateCSS("title")}>
                  {pricing.title}
                  <div className={this.decorateCSS("stars")}>
                    {[...Array(Number(pricing.stars))].map(
                      (item: any, indexStars: number) => (
                        <img key={`stars-${indexStars}`} src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c7aa5fba070002b749808?alt=media&timestamp=1684830888295"/>
                        )
                        )}
                  </div>
                </h2>
                <h1 className={this.decorateCSS("price-text")}>
                  {pricing.price}
                  <p className={this.decorateCSS("duration-text")}>
                    {pricing.duration}
                  </p>
                </h1>
                <div className={this.decorateCSS("button-child")}>
                  <ComposerLink path={pricing.link}>
                    <span className={this.decorateCSS("button")}>
                      {pricing.buttonText}
                    </span>
                  </ComposerLink>
                </div>
              </div>
          </div>
            )
          )}
        </div>
      </div>
      );
  }
}

export default PricingTable5;
