import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action23.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction23Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "cardBackground",
      displayer: "Card Background",
      value: false,
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
      
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Sign up for web hosting today!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "priceLabel",
      displayer: "Price Label",
      value: "STARTING AT ONLY",
    });

    this.addProp({
      type: "string",
      key: "price",
      displayer: "Price",
      value: "$2.95/mo",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Get started", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Call To Action 23";
  }

  render() {
    const buttons = this.castToObject<Button[]>("buttons");
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const priceLabel = this.castToString(this.getPropValue("priceLabel"));
    const price = this.castToString(this.getPropValue("price"));
    const cardBackground = this.getPropValue("cardBackground");
    const hasCardBackground = cardBackground === true;
    const alignment = Base.getContentAlignment();

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${hasCardBackground ? "" : this.decorateCSS("no-card-style")}`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("content")} ${alignment === "center" ? this.decorateCSS("content-center") : ""}`}
          >
            <div className={this.decorateCSS("content-row")}>
              <div className={this.decorateCSS("content-left")}>
                {(subtitle || title || description) && (
                  <Base.VerticalContent className={this.decorateCSS("content-text")}>
                    {subtitle && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
                      </Base.SectionSubTitle>
                    )}
                    {title && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {title}
                      </Base.SectionTitle>
                    )}
                    {description && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {this.getPropValue("description")}
                      </Base.SectionDescription>
                    )}
                  </Base.VerticalContent>
                )}
                <div className={this.decorateCSS("pricing")}>
                  {priceLabel && (
                    <Base.P className={this.decorateCSS("price-label")}>
                      {priceLabel}
                    </Base.P>
                  )}
                  {price && (
                    <Base.H4 className={this.decorateCSS("price-value")}>{price}</Base.H4>
                  )}
                </div>
              </div>
            {buttons?.length > 0 && (
              <div className={this.decorateCSS("button-wrap")}>
                {buttons.map((button: Button, index: number) =>
                  this.castToString(button.text) ? (
                    <ComposerLink key={index} path={button.url}>
                      <Base.Button
                        className={this.decorateCSS("button")}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>
                          {button.text}
                        </Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ) : null
                )}
              </div>
            )}
          </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction23Page;
