import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./survey-modal.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class SurveyModal extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66bc845c3292c6002b241956?alt=media&timestamp=1732521893813",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "How satisfied are you?",
    });

    this.addProp({
      type: "string",
      key: "rateQuestion",
      displayer: "Rate Question",
      value: "How was your experience on our website?",
    });

    this.addProp({
      type: "string",
      key: "rateError",
      displayer: "Rate Error Message",
      value: "Lütfen bir puan seçin.",
    });

    this.addProp({
      type: "string",
      key: "radio",
      displayer: "Radio Text",
      value: "Did you find what you were looking for?",
    });

    this.addProp({
      type: "string",
      key: "radioError",
      displayer: "Radio Error Message",
      value: "Lütfen bir seçenek seçin.",
    });

    this.addProp({
      type: "string",
      key: "message",
      displayer: "Message",
      value: "Had any problems?",
    });

    this.addProp({
      type: "page",
      key: "buttonUrl",
      displayer: "Button URL",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Send",
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder Text",
      value: "Enter your message",
    });

    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoCloseSharp",
    });

    this.addProp({
      type: "array",
      key: "rateIcons",
      additionalParams: {
        maxElementCount: 5,
      },
      displayer: "Rate Icons",
      value: [
        {
          type: "object",
          key: "rateIcon",
          displayer: "Icon Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoIosStarOutline",
            },
          ],
        },
        {
          type: "object",
          key: "rateIcon",
          displayer: "Icon Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoIosStarOutline",
            },
          ],
        },
        {
          type: "object",
          key: "rateIcon",
          displayer: "Icon Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoIosStarOutline",
            },
          ],
        },
        {
          type: "object",
          key: "rateIcon",
          displayer: "Icon Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoIosStarOutline",
            },
          ],
        },
        {
          type: "object",
          key: "rateIcon",
          displayer: "Icon Item",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "IoIosStarOutline",
            },
          ],
        },
      ],
    });
    this.getComponentState("selectedIconIndex");
  }

  handleIconClick(iconId: number, setFieldValue: (field: string, value: any) => void) {
    this.setComponentState("selectedIconIndex", iconId);
    setFieldValue("rating", iconId);
  }

  createValidationSchema(minLength: number, minLengthMessage: string, requiredMessage: string) {
    return Yup.object().shape({
      message: Yup.string().min(minLength, minLengthMessage).required(requiredMessage),
    });
  }

  getName(): string {
    return "SurveyModal";
  }

  render() {
    const image = this.getPropValue("image");
    const title = this.castToString(this.getPropValue("title"));
    const rateQuestion = this.castToString(this.getPropValue("rateQuestion"));
    const rateError = this.castToString(this.getPropValue("rateError"));
    const radio = this.castToString(this.getPropValue("radio"));
    const radioError = this.castToString(this.getPropValue("radioError"));
    const message = this.castToString(this.getPropValue("message"));
    const buttonText = this.castToString(this.getPropValue("buttonText"));
    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const rateIcons = this.castToObject<any[]>("rateIcons");

    const validationSchema = Yup.object({
      rating: Yup.number().min(1, rateError).required(rateError),
      foundWhatLookingFor: Yup.string().required(radioError),
    });

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("modal-content")}>
            <div className={this.decorateCSS("exit-icon")}>
              <ComposerModalClose>
                <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={this.getPropValue("exitIcon")} />
              </ComposerModalClose>
            </div>
            <Formik
              initialValues={{ rating: 0, foundWhatLookingFor: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(data, { resetForm }) => {
                this.insertForm("Notice", data);
                resetForm();
              }}
            >
              {({ errors, touched, setFieldValue }) => {
                return (
                  <Form className={this.decorateCSS("form")}>
                    <Base.VerticalContent className={this.decorateCSS("left")}>
                      {title && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                      {rateQuestion && <Base.SectionDescription className={this.decorateCSS("rate-question")}>{rateQuestion}</Base.SectionDescription>}

                      <div className={this.decorateCSS("rate-content")}>
                        {rateIcons.map((item, index) => (
                          <Base.VerticalContent className={this.decorateCSS("rateIconsWrapper")} key={index}>
                            <div
                              id={`icon-${index + 1}`}
                              className={`${this.decorateCSS("icons")} ${index <= this.getComponentState("selectedIconIndex") ? this.decorateCSS("selected") : ""}`}
                              onClick={() => {
                                this.handleIconClick(index, setFieldValue);
                              }}
                            >
                              <div className={this.decorateCSS("icon-wrapper")}>
                                <ComposerIcon
                                  name={item.icon}
                                  propsIcon={{
                                    className: `${this.decorateCSS("icon")}`,
                                  }}
                                />
                              </div>
                            </div>
                          </Base.VerticalContent>
                        ))}
                      </div>
                      {errors.rating && touched.foundWhatLookingFor && <div className={this.decorateCSS("error")}>{errors.rating}</div>}

                      {radio && <Base.P className={this.decorateCSS("radio-question")}>{radio}</Base.P>}
                      {radio && (
                        <div className={this.decorateCSS("question-section")}>
                          <label className={this.decorateCSS("radio-label")}>
                            <Field type="radio" name="foundWhatLookingFor" value="yes" className={this.decorateCSS("radio-input")} />
                            Evet
                          </label>
                          <label className={this.decorateCSS("radio-label")}>
                            <Field type="radio" name="foundWhatLookingFor" value="no" className={this.decorateCSS("radio-input")} />
                            Hayır
                          </label>
                          {errors.foundWhatLookingFor && touched.foundWhatLookingFor && <div className={this.decorateCSS("error")}>{errors.foundWhatLookingFor}</div>}
                        </div>
                      )}

                      {message && <p className={this.decorateCSS("message-question")}>{message}</p>}
                      {placeholder && (
                        <div className={this.decorateCSS("message-section")}>
                          <Field as="input" name="message" type="text" className={this.decorateCSS("input")} placeholder={placeholder} />
                        </div>
                      )}

                      <div style={{ width: "100%" }}>
                        {buttonText && (
                          <ComposerLink page={this.getPropValue("buttonUrl")}>
                            <button type="submit" className={this.decorateCSS("submit-button")}>
                              {buttonText}
                            </button>
                          </ComposerLink>
                        )}
                      </div>
                    </Base.VerticalContent>
                  </Form>
                );
              }}
            </Formik>
            {image && <img className={this.decorateCSS("image")} src={image} alt="Notice Image" />}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default SurveyModal;
