import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class CallToAction5Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "background",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c0f020655f8002ca6bd74?alt=media&timestamp=1734086418587"
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Start building today",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Get immediate and full access to our solution for 10 days completely free. Onlt $19 per month afterwards.",
    });

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "SUBSCRIBE NOW",
    });
    this.addProp({
      type: "page",
      key: "buttonUrl",
      displayer: "Button Url",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Enter e-mail address"
    });
  }

  getName(): string {
    return "Call To Action 5";
  }


  render() {

    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitleExist = this.castToString(this.getPropValue("description"));
    const getSelectedItemPlaceholder = (): string => {
      const placeholder = this.castToString(this.getPropValue("placeholder"));
      return placeholder;
    };

    return (
      <Base.Container
        className={`${this.getPropValue("background") ? this.decorateCSS("container") :
          this.decorateCSS("container-no-image")} ${this.getPropValue("overlay") ? this.decorateCSS("overlay-active") : ""}`}
        style={{ backgroundImage: `url(${this.getPropValue("background")})` }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist) &&
            <Base.VerticalContent className={this.getPropValue("background") ? this.decorateCSS("header") : this.decorateCSS("header-no-image")}>
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
              )}
              {subtitleExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>
              )}
            </Base.VerticalContent>
          }
          {(this.castToString(this.getPropValue("buttonText")) && this.castToString(this.getPropValue("placeholder"))) &&
            <div className={this.decorateCSS("form")}>
              <Formik
                initialValues={{ email: "" }}
                onSubmit={(data, { resetForm }) => {
                  this.insertForm("Contact Us", data);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("newsletter")}>
                    {(this.castToString(this.getPropValue("placeholder")) && this.castToString(this.getPropValue("buttonText"))) && (
                      <div className={this.decorateCSS("inputs")}>
                        <input
                          placeholder={getSelectedItemPlaceholder()}
                          type="text"
                          onChange={handleChange}
                          value={values.email}
                          name="email"
                          className={this.getPropValue("background") ? this.decorateCSS("input") : this.decorateCSS("input-no-image")}
                        />
                      </div>
                    )}
                    {this.castToString(this.getPropValue("buttonText")) && (
                      <Base.Button className={this.getPropValue("background") ? this.decorateCSS("submit-button") : this.decorateCSS("submit-button-no-image")}>
                        {this.getPropValue("buttonText")}
                      </Base.Button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          }
          {(this.castToString(this.getPropValue("buttonText")) && !this.castToString(this.getPropValue("placeholder"))) && (
            <div className={this.decorateCSS("button-container")}>
              <ComposerLink path={this.getPropValue("buttonUrl")}>
                <Base.Button className={this.getPropValue("background") ? this.decorateCSS("button") : this.decorateCSS("button-no-image")}>
                  {this.getPropValue("buttonText")}
                </Base.Button>
              </ComposerLink>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default CallToAction5Page;