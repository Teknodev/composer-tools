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
  featureOptions: string;
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
      value: "Standard",
    });
    this.addProp({
      type: "string",
      key: "title3",
      displayer: "Title 3",
      value: "Advanced",
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
              type: "string",
              key: "featureOptions",
              displayer: "Feature Options",
              value: "Basic",
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
              type: "string",
              key: "featureOptions",
              displayer: "Feature Options",
              value: "Basic",
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
              type: "string",
              key: "featureOptions",
              displayer: "Feature Options",
              value: "Basic, Standard",
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
              type: "string",
              key: "featureOptions",
              displayer: "Feature Options",
              value: "Basic, Standard, Advanced",
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
              type: "string",
              key: "featureOptions",
              displayer: "Feature Options",
              value: "Basic, Standard, Advanced",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "price",
      displayer: "Price Informations",
      value: [
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing 1",
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
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing 2",
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
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "pricing",
          displayer: "Pricing 3",
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
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Pricing 9";
  }

  render() {
    const pricingData = this.castToObject<Pricing[]>("price");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
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
            (feature: any, index: number) => {
              const lowerFeatureOptions = (feature.featureOptions).toLowerCase();
              return (
                <tr key={index}>
                  <td>{feature.featureTitle}</td>
                  <td>{feature.featureOptions && lowerFeatureOptions.includes(this.getPropValue("title1").toLowerCase()) ? <span className={this.decorateCSS("span1")}>✔️</span> : <span className={this.decorateCSS("span4")}>❌</span>}</td>
                  <td>{feature.featureOptions && lowerFeatureOptions.includes(this.getPropValue("title2").toLowerCase()) ? <span className={this.decorateCSS("span2")}>✔️</span> : <span className={this.decorateCSS("span5")}>❌</span>}</td>
                  <td>{feature.featureOptions && lowerFeatureOptions.includes(this.getPropValue("title3").toLowerCase()) ? <>✔️</> : <span className={this.decorateCSS("span6")}>❌</span>}</td>
                </tr>
              );
            }
  )}

            <tr>
              <td></td>
                <td>
                  <span className={this.decorateCSS("price-info")}>
                    <span className={this.decorateCSS("per")}>per</span> {
                      pricingData[0].price
                    }
                    <br></br>
                    {
                      pricingData[0].duration
                    }
                  </span>
                  <ComposerLink path={
                    pricingData[0].link
                  }>
                    <span className={this.decorateCSS("button")}>
                      {
                        pricingData[0].buttonText
                      }
                    </span>
                  </ComposerLink>
                </td>
                <td>
                  <span className={this.decorateCSS("price-info")}>
                    <span className={this.decorateCSS("per1")}>per</span> {
                      pricingData[1].price
                    }
                    <br></br>
                    {
                      pricingData[1].duration
                    }
                  </span>
                  <ComposerLink path={
                    pricingData[1].link
                  }>
                    <span className={this.decorateCSS("button")}>
                      {
                        pricingData[1].buttonText
                      }
                    </span>
                  </ComposerLink>
                </td>
                <td>
                  <span className={this.decorateCSS("price-info")}>
                    <span className={this.decorateCSS("per2")}>per</span> {
                      pricingData[2].price
                    }
                    <br></br>
                    {
                      pricingData[2].duration
                    }
                  </span>
                  <ComposerLink path={
                    pricingData[2].link
                  }>
                    <span className={this.decorateCSS("button")}>
                      {
                        pricingData[2].buttonText
                      }
                    </span>
                  </ComposerLink>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default PricingTable9;
