import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BasePricingTable } from "../../EditorComponent";
import styles from "./pricing-table9.module.scss";

type Pricing = {
  title: string;
  price: string;
  duration: string;
  buttonText: string;
  link: string;
};

interface Feature {
  infeature: object[];
  featureTitle: string;
  basic: basic[];
  standard: standard[];
  advenced: advenced[];
}

interface basic {
  hasFeature: boolean;
}

interface standard {
  hasFeature: boolean;
}

interface advenced {
  hasFeature: boolean;
}

class PricingTable9 extends BasePricingTable {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Title 1",
      value: "Basic",
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title 2",
      value: "Standart",
    });
    this.addProp({
      type: "string",
      key: "title3",
      displayer: "Title 3",
      value: "Advenced",
    });
    this.addProp({
      type: "array",
      key: "pricefeatures",
      displayer: "Price Features",
      value: [
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "featureTitle",
              displayer: "Feature Title",
              value: "Customization",
            },
            {
              type: "object",
              key: "basic",
              displayer: "Basic",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for first column",
                  value: false,
                },
              ],
            },
            {
              type: "object",
              key: "standard",
              displayer: "Standard",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for second column",
                  value: false,
                },
              ],
            },
            {
              type: "object",
              key: "advenced",
              displayer: "Advenced",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for third column",
                  value: true,
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "featureTitle",
              displayer: "Feature Title",
              value: "Live Chat",
            },
            {
              type: "object",
              key: "basic",
              displayer: "Basic",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for first column",
                  value: false,
                },
              ],
            },
            {
              type: "object",
              key: "standard",
              displayer: "Standard",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for second column",
                  value: false,
                },
              ],
            },
            {
              type: "object",
              key: "advenced",
              displayer: "Advenced",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for third column",
                  value: true,
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "featureTitle",
              displayer: "Feature Title",
              value: "Support",
            },
            {
              type: "object",
              key: "basic",
              displayer: "Basic",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for first column",
                  value: false,
                },
              ],
            },
            {
              type: "object",
              key: "standard",
              displayer: "Standard",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for second column",
                  value: true,
                },
              ],
            },
            {
              type: "object",
              key: "advenced",
              displayer: "Advenced",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for third column",
                  value: true,
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "featureTitle",
              displayer: "Feature Title",
              value: "Email Marketing",
            },
            {
              type: "object",
              key: "basic",
              displayer: "Basic",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for first column",
                  value: true,
                },
              ],
            },
            {
              type: "object",
              key: "standard",
              displayer: "Standard",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for second column",
                  value: true,
                },
              ],
            },
            {
              type: "object",
              key: "advenced",
              displayer: "Advenced",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for third column",
                  value: true,
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "featureTitle",
              displayer: "Feature Title",
              value: "Analytics",
            },
            {
              type: "object",
              key: "basic",
              displayer: "Basic",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for first column",
                  value: true,
                },
              ],
            },
            {
              type: "object",
              key: "standard",
              displayer: "Standard",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for second column",
                  value: true,
                },
              ],
            },
            {
              type: "object",
              key: "advenced",
              displayer: "Advenced",
              value: [
                {
                  type: "boolean",
                  key: "hasFeature",
                  displayer: "Has feature for third column",
                  value: true,
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "price",
      displayer: "Price Informations",
      value: [
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing",
          value: [
            {
              type: "string",
              key: "price",
              displayer: "Price",
              value: "$50",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "month",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Get started",
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
              key: "price",
              displayer: "Price",
              value: "$150",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "month",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Get started",
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
              key: "price",
              displayer: "Price",
              value: "$350",
            },
            {
              type: "string",
              key: "duration",
              displayer: "Duration",
              value: "month",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Get started",
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
    return "Pricing Table 9";
  }

  render() {
    const pricingData = this.castToObject<Pricing[]>("price");

    const pricingTitles = pricingData.map((pricing: Pricing) => pricing.title);

    return (
      <div className={this.decorateCSS("container")}>
        <table className={this.decorateCSS("table")}>
          <thead>
            <tr>
              <th></th>
              <th>{this.getPropValue("title1")}</th>
              <th>{this.getPropValue("title2")}</th>
              <th>{this.getPropValue("title3")}</th>
            </tr>
          </thead>
          <tbody>
            {this.castToObject<Feature[]>("pricefeatures").map(
              (feature: any, index: number) => (
                <tr key={index}>
                  <td>{feature.featureTitle}</td>
                  <td>
                    {feature.basic[0].value ? <span>✔️</span> : <span>❌</span>}
                  </td>
                  <td>
                    {feature.standard[0].value ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </td>
                  <td>
                    {feature.advenced[0].value ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}
                  </td>
                </tr>
              )
            )}

            <tr>
              <td></td>
              {pricingData.map((pricing: Pricing, index: number) => (
                <td key={index}>
                  <span className={this.decorateCSS("price-info")}>
                    <span>per</span> {pricing.duration}
                    <br></br>
                    {pricing.price}
                  </span>
                  <ComposerLink path={pricing.link}>
                    <span className={this.decorateCSS("button")}>
                      {pricing.buttonText}
                    </span>
                  </ComposerLink>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PricingTable9;
