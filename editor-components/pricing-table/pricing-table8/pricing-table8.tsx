import * as React from "react";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type IIconBoxes = {
  title: string;
  description: string;
  image: string;
  hasFeature: boolean;
  price: string;
  featureCount: number;
  link: string;
};

class PricingTable8 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "pricing-properties",
      displayer: "Pricing Properties",
      value: [
        {
          type: "string",
          key: "property",
          displayer: "Property",
          value: "Chart Annotations",
        },
        {
          type: "string",
          key: "property",
          displayer: "Property",
          value: "Uptime Monitoring",
        },
        {
          type: "string",
          key: "property",
          displayer: "Property",
          value: "Weekly Reports",
        },
        {
          type: "string",
          key: "property",
          displayer: "Property",
          value: "Security Audit",
        },
        {
          type: "string",
          key: "property",
          displayer: "Property",
          value: "On-Demand Audit",
        },
        {
          type: "string",
          key: "property",
          displayer: "Property",
          value: "Priority Support",
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "pricing-content",
      displayer: "Pricing Content",
      value: [
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Basic",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$9.99",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6475d7f2fba070002b758890?alt=media&timestamp=1685444578453",
            },
            {
              type: "boolean",
              key: "hasFeature",
              displayer: "Has Feature",
              value: true,
            },
            {
              type: "number",
              key: "featureCount",
              displayer: "Feature Count",
              value: 2,
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$19.99",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6475d989fba070002b7588c6?alt=media&timestamp=1685446957790",
            },
            {
              type: "boolean",
              key: "hasFeature",
              displayer: "Has Feature",
              value: true,
            },
            {
              type: "number",
              key: "featureCount",
              displayer: "Feature Count",
              value: 4,
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ultimate",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$39.99",
            },
            {
              type: "string",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6475d7f2fba070002b758891?alt=media&timestamp=1685444578453",
            },
            {
              type: "boolean",
              key: "hasFeature",
              displayer: "Has Feature",
              value: true,
            },
            {
              type: "number",
              key: "featureCount",
              displayer: "Feature Count",
              value: 6,
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Pricing Table 8";
  }

  renderFeatureIcons(pricing: IIconBoxes): JSX.Element[] {
    const pricingProperties = this.castToObject<any[]>("pricing-properties");
    const featureCount = pricing.featureCount;
    const tickCount = featureCount;
    const crossCount = 6 - featureCount;

    const ticks: JSX.Element[] = Array.from(
      { length: tickCount },
      (_, index) => (
        <div className={this.decorateCSS("feature-box")}>
          <span className={this.decorateCSS("feature-title")}>
            {pricingProperties[index].value}
          </span>
          <span
            className={this.decorateCSS("feature-icon")}
            key={`tick-${pricing.title}-${index}`}
          >
            ✔️
          </span>
        </div>
      )
    );

    const crosses: JSX.Element[] = Array.from(
      { length: crossCount },
      (_, index) => (
        <div className={this.decorateCSS("feature-box")}>
          <span className={this.decorateCSS("feature-title")}>
            {pricingProperties[tickCount + index].value}
          </span>
          <span
            className={this.decorateCSS("feature-icon")}
            key={`cross-${pricing.title}-${index}`}
          >
            ❌
          </span>
        </div>
      )
    );

    return [...ticks, ...crosses];
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {this.castToObject<IIconBoxes[]>("pricing-content").map(
            (pricing: IIconBoxes, index: number) => (
              <div className={this.decorateCSS("pricing")} key={index}>
                <div className={this.decorateCSS("image-background")}>
                  <img
                    className={this.decorateCSS("image")}
                    src={pricing.image}
                    alt={pricing.title}
                  />
                </div>
                <h3 className={this.decorateCSS("title")}>{pricing.title}</h3>
                <p className={this.decorateCSS("description")}>
                  {pricing.description}
                </p>

                <div>
                  <p>{this.renderFeatureIcons(pricing)}</p>
                </div>
                <p className={this.decorateCSS("price")}>{pricing.price}</p>
                <ComposerLink path={pricing.link} key={index}>
                  <button className={this.decorateCSS("get-started-button")}>
                    Get Started
                  </button>
                </ComposerLink>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default PricingTable8;
