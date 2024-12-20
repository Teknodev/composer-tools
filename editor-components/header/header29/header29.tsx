import * as React from "react";
import styles from "./header29.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Form, Formik } from "formik";
import * as Yup from "yup";

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface ButtonItem {
  buttonText: JSX.Element;
  url: JSX.Element;
}

class Header29 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Real Estate Investments",
    });
    this.addProp({
      type: "string",
      key: "description",
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
    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "CALL ME BACK",
        },
        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "",
        },
      ],
    });

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
  }

  validationSchema = Yup.object().shape({
    phone: Yup.string().required("Required"),
  });

  getName(): string {
    return "Header 29";
  }

  render() {
    const button = this.castToObject<ButtonItem>("button");

    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const serviceItems = this.castToObject<ServiceItem[]>("serviceItems");
    const image = this.getPropValue("image");
    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const buttonText = this.castToString(button.buttonText);
    const showContent = title || description || serviceItems.length > 0;

    const submitText = this.castToString(this.getPropValue("submitText"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("wrapper")} ${
              this.getPropValue("reverser") &&
              this.decorateCSS("wrapper-reverse")
            } ${!showContent || !image ? this.decorateCSS("center") : ""}`}
          >
            {showContent && (
              <div className={this.decorateCSS("content")}>
                <Base.VerticalContent>
                  {title && (
                    <Base.H1 className={this.decorateCSS("title")}>
                      {this.getPropValue("title")}
                    </Base.H1>
                  )}
                  {description && (
                    <Base.P className={this.decorateCSS("description")}>
                      {this.getPropValue("description")}
                    </Base.P>
                  )}
                </Base.VerticalContent>

                {placeholder && buttonText && (
                  <Formik
                    initialValues={{ phone: "" }}
                    validationSchema={this.validationSchema}
                    onSubmit={(data, { resetForm }) => {
                      this.setComponentState("placeholderText", submitText);
                      this.insertForm("Call Me Back", data);
                      setTimeout(() => {
                        const defaultPlaceholder = this.castToString(
                          this.getPropValue("placeholder")
                        );
                        this.setComponentState(
                          "placeholderText",
                          defaultPlaceholder
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

                        {this.castToString(button.buttonText) && (
                          <Base.Button type="submit">
                            {this.castToString(button.buttonText)}
                          </Base.Button>
                        )}
                      </Form>
                    )}
                  </Formik>
                )}

                {!placeholder && buttonText && (
                  <ComposerLink path={button.url}>
                    <Base.Button>{buttonText}</Base.Button>
                  </ComposerLink>
                )}

                {serviceItems && (
                  <Base.ListGrid gridCount={{ pc: 3, tablet: 2, phone: 1 }}>
                    {serviceItems.map((item: any, index: number) => (
                      <div className={this.decorateCSS("service-card")}>
                        <div className={this.decorateCSS("service-svg")}>
                          <ComposerIcon name={item.icon} />
                        </div>
                        <Base.H4 className={this.decorateCSS("service-title")}>
                          {item.title}
                        </Base.H4>
                        <Base.P
                          className={this.decorateCSS("service-description")}
                        >
                          {item.description}
                        </Base.P>
                      </div>
                    ))}
                  </Base.ListGrid>
                )}
              </div>
            )}
            {image && (
              <div className={this.decorateCSS("image-container")}>
                <img src={this.getPropValue("image")} alt="" />
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Header29;
