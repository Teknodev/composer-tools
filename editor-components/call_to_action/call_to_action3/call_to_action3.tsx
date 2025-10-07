import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;

class CallToAction3Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      value: "Our Services",
      displayer: "Subtitle",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Protecting Your People , Property & Life",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "OUR CUSTOMERS EVERYWHERE TRUST OUR FULLY ACCREDITED AND TAILORED SOLUTIONS ON THE OTHER HAND WE DENOUNCE WITH RIGHTEOUS INDIGNATION",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "LEARN MORE", "", null, null, "Primary"),
        INPUTS.BUTTON("button", "Button", "GET IN TOUCH", "", null, null, "Primary")
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c962bd2970002c6293bb?alt=media&timestamp=1719584962578",
    });
    this.addProp({
      type: "boolean",
      key: "overlayActive",
      displayer: "Overlay",
      value: true,
    });
  }
  static getName(): string {
    return "Call To Action 3";
  }

  render() {
    const buttons = this.castToObject<Button[]>("buttons");
    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${this.getPropValue("overlayActive") && this.decorateCSS("overlay-active")}`}
        style={{ backgroundImage: `url(${this.getPropValue("image")})` }}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content-container")}>
            {this.castToString(this.getPropValue("subtitle")) && (
              <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${this.getPropValue("image") && this.decorateCSS("with-image")}`}>
                {this.getPropValue("subtitle")}
              </Base.SectionSubTitle>
            )}
            {this.castToString(this.getPropValue("title")) && (
              <Base.SectionTitle className={`${this.decorateCSS("title")} ${this.getPropValue("image") && this.decorateCSS("with-image")}`}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}
            {this.castToString(this.getPropValue("description")) && (
              <Base.SectionDescription className={`${this.decorateCSS("description")} ${this.getPropValue("image") && this.decorateCSS("with-image")}`}>
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}
            {(buttons.length > 0) && (
              <div className={this.decorateCSS("buttons")}>
                {buttons.map(
                  (button: Button, index: number) => {
                    button.type = this.getPropValue("image") ? "White" : button.type

                    return (
                      <ComposerLink path={button.url}>
                        {this.castToString(button.text) && (
                          <Base.Button buttonType={button.type}
                            className={this.decorateCSS("button")}>
                            {button.text}
                          </Base.Button>
                        )}
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction3Page;
