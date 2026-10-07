import * as React from "react";
import styles from "./hero-section29.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import * as Yup from "yup";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface CardItem {
  card_subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  icon: TypeMediaInputValue;
}

interface MediaGroup {
  image: TypeMediaInputValue;
  overlay: boolean;
}

interface FormGroup {
  placeholder: React.JSX.Element;
  submitText: React.JSX.Element;
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
      key: "header_title",
      displayer: "Title",
      value: "Real <span style='color: var(--composer-secondary-color)'>Estate</span> Investments"
    });
    this.addProp({
      type: "string",
      key: "header_description",
      displayer: "Description",
      value:
        "We offer a range of amenities that raise the standard of the property and thus potentially increase rental income",
    });

    this.addProp({
      type: "boolean",
      key: "reverse",
      displayer: "Reverse Direction",
      value: false,
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "CALL ME BACK", null, null, null, "Primary"));

    this.addProp({
      type: "object",
      key: "form",
      displayer: "Form",
      value: [
        {
          type: "string",
          key: "placeholder",
          displayer: "Placeholder Text",
          value: "Your phone number",
        },
        {
          type: "string",
          key: "submitText",
          displayer: "Submit Text",
          value: "Form successfully submitted!",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "media",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Media",
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a253bd2970002c626aa7?alt=media&timestamp=1719483639151",
          },
          additionalParams: {
            availableTypes: ["image", "video"],
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "card_subtitle",
              displayer: "Subtitle",
              value: "",
            },
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
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "card_subtitle",
              displayer: "Subtitle",
              value: "",
            },
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

    this.setComponentState(
      "placeholderText",
      this.castToString(this.castToObject<FormGroup>("form")?.placeholder)
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

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const logo = this.getPropValue("logo");
    const hasLogo = this.hasMedia(logo);
    const titleExist = this.castToString(this.getPropValue("header_title"));
    const descriptionExist = this.castToString(this.getPropValue("header_description"));

    const cards = (this.castToObject<CardItem[]>("cards") || []).filter(
      (item: CardItem) => this.hasMedia(item.icon) || this.castToString(item.card_subtitle) || this.castToString(item.title) || this.castToString(item.description)
    );
    const media = this.castToObject<MediaGroup>("media");
    const image = media?.image;
    const hasImage = this.hasMedia(image);
    const form = this.castToObject<FormGroup>("form");
    const placeholder = this.castToString(form?.placeholder);
    const buttonTextExist = this.castToString(button.text);
    const showContent = hasLogo || subtitleExist || titleExist || descriptionExist || buttonTextExist || cards.length > 0;

    const submitText = form?.submitText;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("wrapper")} ${this.getPropValue("reverse") ? this.decorateCSS("wrapper-reverse") : ""} ${!showContent || !hasImage ? this.decorateCSS("center") : ""} ${hasImage ? this.decorateCSS("with-image") : ""}`}
          >
            {showContent && (
              <Base.VerticalContent className={this.decorateCSS("content")}>
                {(titleExist || descriptionExist || subtitleExist || hasLogo) &&
                  <Base.VerticalContent className={this.decorateCSS("header")}>
                    {hasLogo && (
                      <Base.Media
                        value={logo}
                        className={this.decorateCSS("logo")}
                      />
                    )}

                    {subtitleExist && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
                      </Base.SectionSubTitle>
                    )}

                    {titleExist && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("header_title")}
                      </Base.SectionTitle>
                    )}
                    {descriptionExist && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {this.getPropValue("header_description")}
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
                        this.setComponentState(
                          "placeholderText",
                          this.castToString(this.castToObject<FormGroup>("form")?.placeholder)
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
                            <Base.P className={this.decorateCSS("error")}>
                              {errors.phone}
                            </Base.P>
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

                {cards.length > 0 && (
                  <Base.ListGrid className={this.decorateCSS("service-card-list")} gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }}>
                    {cards.map((item: CardItem, index: number) => (
                      <Base.Card key={index} className={this.decorateCSS("card-shell")}>
                        <Base.VerticalContent className={this.decorateCSS("service-card")}>
                          {this.hasMedia(item.icon) && (
                            <div className={this.decorateCSS("service-svg")}>
                              <Base.Media className={this.decorateCSS("icon")} value={item.icon} />
                            </div>
                          )}
                          {this.castToString(item.card_subtitle) && (
                            <Base.P className={this.decorateCSS("service-subtitle")}>
                              {item.card_subtitle}
                            </Base.P>
                          )}
                          {this.castToString(item.title) && (
                            <Base.H4 className={this.decorateCSS("service-title")}>
                              {item.title}
                            </Base.H4>
                          )}
                          {this.castToString(item.description) && (
                            <Base.P className={this.decorateCSS("service-description")}>
                              {item.description}
                            </Base.P>
                          )}
                        </Base.VerticalContent>
                      </Base.Card>
                    ))}
                  </Base.ListGrid>
                )}
              </Base.VerticalContent>
            )}
            {hasImage && (
              <div className={this.decorateCSS("image-container")}>
                <Base.Media className={this.decorateCSS("image")} value={this.withVideoSettings(image)} />
                {media?.overlay && (
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

