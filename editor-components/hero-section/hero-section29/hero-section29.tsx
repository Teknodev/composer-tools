import * as React from "react";
import styles from "./hero-section29.module.scss";
import { BaseHeader } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

class HeroSection29 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Title",
      value: "Real Estate Investments",
    });
    this.addProp({
      type: "string",
      key: "mainDescription",
      displayer: "Description",
      value:
        "We offer a range of amenities that raise the standard of the property and thus potentially increase rental income",
    });
    this.addProp({
      type: "boolean",
      key: "reverser",
      displayer: "Reverse direction",
      value: true,
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "CALL ME BACK", null, null, null, "Primary"));

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Your phone number",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a253bd2970002c626aa7?alt=media&timestamp=1719483639151",
    });

    this.addProp({
      type: "array",
      key: "serviceItems",
      displayer: "Service Items",
      value: [
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ease of Management",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "You just buy an apartment, and a professional hotel operator will do the rest for you",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaUserGear",
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Guaranteed Income",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Guaranteed monthly incom is prescribed in advance in the contract selection",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "AiFillDollarCircle",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "submitText",
      displayer: "Submit Text",
      value: "Form successfully submitted!",
    });

    this.setComponentState(
      "placeholderText",
      this.castToString(this.getPropValue("placeholder"))
    );
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 2,
    });
  }

  validationSchema = Yup.object().shape({
    phone: Yup.string().required("Required"),
  });

  static getName(): string {
    return "Hero Section 29";
  }

  render() {
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const titleExist = this.castToString(this.getPropValue("mainTitle"));

    const descriptionExist = this.castToString(this.getPropValue("mainDescription"));
    const serviceItems = this.castToObject<ServiceItem[]>("serviceItems");
    const image = this.getPropValue("image");
    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const buttonTextExist = this.castToString(button.text);
    const showContent = titleExist || descriptionExist || serviceItems.length > 0;

    const submitText = this.getPropValue("submitText");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("wrapper")} ${this.getPropValue("reverser") &&
              this.decorateCSS("wrapper-reverse")
              } ${!showContent || !image ? this.decorateCSS("center") : ""}`}
          >
            {showContent && (
              <Base.VerticalContent className={this.decorateCSS("content")}>
                {(titleExist || descriptionExist) &&
                  <Base.VerticalContent className={this.decorateCSS("header")}>
                    {titleExist && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("mainTitle")}
                      </Base.SectionTitle>
                    )}
                    {descriptionExist && (
                      <Base.P className={this.decorateCSS("description")}>
                        {this.getPropValue("mainDescription")}
                      </Base.P>
                    )}
                  </Base.VerticalContent>}

                {placeholder && buttonTextExist && (
                  <Formik
                    initialValues={{ phone: "" }}
                    validationSchema={this.validationSchema}
                    onSubmit={(data, { resetForm }) => {
                      this.setComponentState("placeholderText", this.castToString(submitText));
                      this.insertForm("Call Me Back", data);
                      setTimeout(() => {
                        const defaultPlaceholder = this.getPropValue("placeholder");
                        this.setComponentState(
                          "placeholderText",
                          this.castToString(defaultPlaceholder)
                        );
                      }, 2000);
                      resetForm();
                    }}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      values,
                      errors,
                      touched,
                    }) => (
                      <Form
                        className={this.decorateCSS("form")}
                        onSubmit={handleSubmit}
                      >
                        <div className={this.decorateCSS("input-container")}>
                          <input
                            placeholder={
                              this.getComponentState("placeholderText") ||
                              placeholder
                            }
                            onChange={handleChange}
                            className={this.decorateCSS("input")}
                            type="text"
                            name="phone"
                            value={values.phone}
                          />
                          {errors.phone && touched.phone && (
                            <div className={this.decorateCSS("error")}>
                              {errors.phone}
                            </div>
                          )}
                        </div>

                        {buttonTextExist && (
                          <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                            {button.text}
                          </Base.Button>
                        )}
                      </Form>
                    )}
                  </Formik>
                )}

                {serviceItems && (
                  <Base.ListGrid className={this.decorateCSS("service-card-list")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }}>
                    {serviceItems.map((item: any, index: number) => (
                      <Base.VerticalContent className={this.decorateCSS("service-card")}>
                        <div className={this.decorateCSS("service-svg")}>
                          <Base.Icon name={item.icon} />
                        </div>
                        <Base.H4 className={this.decorateCSS("service-title")}>
                          {item.title}
                        </Base.H4>
                        <Base.P className={this.decorateCSS("service-description")}>
                          {item.description}
                        </Base.P>
                      </Base.VerticalContent>
                    ))}
                  </Base.ListGrid>
                )}
              </Base.VerticalContent>
            )}
            {image && (
              <div className={this.decorateCSS("image-container")}>
                <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt="" />
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection29;

