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
      key: "coloredBackground",
      displayer: "Colored Background",
      value: false,
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Sign up for web hosting today!",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "TEST",
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
        INPUTS.BUTTON("button", "Button", "Get started", "", null, null, "Primary"),]
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
    const coloredBackground = this.getPropValue("coloredBackground");
    const hasColoredBackground = !!coloredBackground;

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${hasColoredBackground ? this.decorateCSS("has-background") : ""}`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("main-row")}>
              {(subtitle || title) && (
                <div className={this.decorateCSS("header-group")}>
                  <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                    {subtitle && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {subtitle}
                      </Base.SectionSubTitle>
                    )}
                    {title && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {title}
                      </Base.SectionTitle>
                    )}
                  </Base.VerticalContent>
                </div>
              )}

              {(priceLabel || price) && (
                <div className={this.decorateCSS("pricing-group")}>
                  {priceLabel && (
                    <Base.P className={this.decorateCSS("price-label")}>
                      {priceLabel}
                    </Base.P>
                  )}
                  {price && (
                    <Base.H3 className={this.decorateCSS("price-value")}>
                      {price}
                    </Base.H3>
                  )}
                </div>
              )}

              {buttons?.length > 0 && (
                <div className={this.decorateCSS("button-group")}>
                  {buttons.map((button: Button, index: number) =>
                    this.castToString(button.text) ? (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button className={this.decorateCSS("button")}>
                          <span className={this.decorateCSS("button-text")}>
                            {button.text}
                          </span>
                        </Base.Button>
                      </ComposerLink>
                    ) : null
                  )}
                </div>
              )}
            </div>
            {description && (
              <div className={this.decorateCSS("description-row")}>
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction23Page;
