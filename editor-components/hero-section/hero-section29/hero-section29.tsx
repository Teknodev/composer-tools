import * as React from "react";
import styles from "./hero-section29.module.scss";
import { BaseHeroSection } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import * as Yup from "yup";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

class HeroSection29 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "" },
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Title",
      value: "Real <span style='color: var(--composer-secondary-color)'>Estate</span> Investments"
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
      displayer: "Reverse Direction",
      value: false,
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "CALL ME BACK", null, null, null, "Primary"));

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder Text",
      value: "Your phone number",
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a253bd2970002c626aa7?alt=media&timestamp=1719483639151",
      },
      additionalParams: {
        availableTypes: ["image", "video"],
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaUserGear",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
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
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "AiFillDollarCircle",
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
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

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const logo = this.getPropValue("logo");
    const titleExist = this.castToString(this.getPropValue("mainTitle"));
    const descriptionExist = this.castToString(this.getPropValue("mainDescription"));

    const serviceItems = this.castToObject<ServiceItem[]>("serviceItems");
    const image = this.getPropValue("image");
    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const buttonTextExist = this.castToString(button.text);
    const showContent = logo || subtitleExist || titleExist || descriptionExist || serviceItems.length > 0;

    const submitText = this.getPropValue("submitText");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("wrapper")} ${this.getPropValue("reverser") &&
              this.decorateCSS("wrapper-reverse")
              } ${!showContent || !image ? this.decorateCSS("center") : ""} ${image ? this.decorateCSS("with-image") : ""}`}
          >
            {showContent && (
              <Base.VerticalContent className={this.decorateCSS("content")}>
                {(titleExist || descriptionExist || subtitleExist || logo) &&
                  <Base.VerticalContent className={this.decorateCSS("header")}>
                    {this.getPropValue("logo") && (
                      <Base.Media
                        value={this.getPropValue("logo")}
                        className={this.decorateCSS("logo")}
                      />
                    )}

                    {this.castToString(this.getPropValue("subtitle")) && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
                      </Base.SectionSubTitle>
                    )}

                    {titleExist && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("mainTitle")}
                      </Base.SectionTitle>
                    )}
                    {descriptionExist && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {this.getPropValue("mainDescription")}
                      </Base.SectionDescription>
                    )}
                  </Base.VerticalContent>}

                {buttonTextExist && (placeholder ? (
                  <Formik
                    initialValues={{ phone: "" }}
                    validationSchema={this.validationSchema}
                    onSubmit={(data, { resetForm }) => {
                      this.setComponentState("placeholderText", this.castToString(submitText));
                      this.insertForm("HS9 - NewsletterForm", data);
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
                            <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                          </Base.Button>
                        )}
                      </Form>
                    )}
                  </Formik>
                ) : (
                  <ComposerLink path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                ))}

                {serviceItems && (
                  <Base.ListGrid className={this.decorateCSS("service-card-list")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }}>
                    {serviceItems.map((item: any, index: number) => (
                      <Base.VerticalContent className={this.decorateCSS("service-card")}>
                        <div className={this.decorateCSS("service-svg")}>
                          <Base.Media className={this.decorateCSS("icon")} value={item.icon} />
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
                <Base.Media className={this.decorateCSS("image")} value={this.getPropValue("image")} />
                {this.getPropValue("overlay") && (
                  <div className={this.decorateCSS("image-overlay")} />
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection29;

