import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./feedbackmodal1.module.scss";

import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";
import { Base } from "../../../composer-base-components/base/base";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Emoji = {
  value: string;
  label: React.JSX.Element;
  image?: string;
  emoji?: string;
};

class FeedbackModal1 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "feedback_icon",
      displayer: "Icon",
      value: "FaRegCommentDots",
    });

    this.addProp({
      type: "icon",
      key: "close_icon",
      displayer: "Icon",
      value: "IoMdClose",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Modal Title",
      value: "Feedback",
    });

    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "headerTitle",
      displayer: "Title",
      value: "How are you feeling?",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Your input is valuable in helping us better understand your needs and tailor our service accordingly.",
    });

    this.addProp({
      type: "array",
      key: "emojis",
      additionalParams: {
        maxElementCount: 5,
      },
      displayer: "Emojis",
      value: [
        {
          type: "object",
          key: "emojiItem",
          displayer: "Emoji Item",
          value: [
            {
              type: "icon",
              key: "emoji",
              displayer: "Icon",
              value: "FaRegFrown",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c723e1e0b009002c36f0e1?alt=media",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Broken",
            },
          ],
        },
        {
          type: "object",
          key: "emojiItem",
          displayer: "Emoji Item",
          value: [
            {
              type: "icon",
              key: "emoji",
              displayer: "Icon",
              value: "FaRegMeh",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c723c6e0b009002c36f0cc?alt=media",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Upset",
            },
          ],
        },
        {
          type: "object",
          key: "emojiItem",
          displayer: "Emoji Item",
          value: [
            {
              type: "icon",
              key: "emoji",
              displayer: "Icon",
              value: "FaRegSmile",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c723b3e0b009002c36f0bd?alt=media",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Okay",
            },
          ],
        },
        {
          type: "object",
          key: "emojiItem",
          displayer: "Emoji Item",
          value: [
            {
              type: "icon",
              key: "emoji",
              displayer: "Icon",
              value: "FaRegSmile",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c7239ce0b009002c36f0ac?alt=media",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Happy",
            },
          ],
        },
        {
          type: "object",
          key: "emojiItem",
          displayer: "Emoji Item",
          value: [
            {
              type: "icon",
              key: "emoji",
              displayer: "Icon",
              value: "FaRegGrin",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c72379e0b009002c36f09b?alt=media",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Ecstatic",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "input_text",
      displayer: "Input Text",
      value: "Add a Comment...",
    });

    this.addProp({
      type: "number",
      key: "minLength",
      displayer: "Minimum Length",
      value: 5,
    });

    this.addProp({
      type: "string",
      key: "minLengthMessage",
      displayer: "Minimum Length Message",
      value: "Min 5 character!",
    });

    this.addProp({
      type: "string",
      key: "requiredMessage",
      displayer: "Required Message",
      value: "Required",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Submit Now", null, null, null, "Primary"));

    const emojis = this.castToObject<Emoji[]>("emojis");
    const middleIndex = emojis.length > 0 ? Math.floor(emojis.length / 2) : null;
    const initialSelectedEmojiId = middleIndex !== null ? middleIndex + 1 : null;

    this.setComponentState("selectedEmojiId", initialSelectedEmojiId);
  }

  handleEmojiClick(emojiId: number, setFieldValue: (field: string, value: any) => void) {
    const emojis = this.castToObject<Emoji[]>("emojis");
    const selectedEmojiLabel = emojis[emojiId - 1]?.label;

    setFieldValue("selectedEmojiLabel", selectedEmojiLabel);

    this.setComponentState("selectedEmojiId", emojiId);
  }

  createValidationSchema(minLength: number, minLengthMessage: string, requiredMessage: string) {
    return Yup.object().shape({
      message: Yup.string().min(minLength, minLengthMessage).required(requiredMessage),
    });
  }

  static getName(): string {
    return "Feedback Modal 1";
  }

  render() {
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isHeaderTitleExist = this.castToString(this.getPropValue("headerTitle"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const isFeedbackIconExist = this.getPropValue("feedback_icon");
    const inputPlaceholder = this.castToString(this.getPropValue("input_text"));
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const buttonval = this.castToString(button.text)
    const isDividerActive = this.getPropValue("divider");
    const emojis = this.castToObject<Emoji[]>("emojis");

    const minLenght = this.getPropValue("minLength");
    const minLengthMessage = this.castToString(this.getPropValue("minLengthMessage"));
    const requiredMessage = this.castToString(this.getPropValue("requiredMessage"));

    return (
      <Base.Container isModule={true} className={this.decorateCSS("feedback-modal")}>
        <div className={this.decorateCSS("header-container")}>
          <div className={this.decorateCSS("header-content")}>
            <div className={this.decorateCSS("feedback-modal-header")}>
              {isFeedbackIconExist && (
                <Base.Icon
                  name={this.getPropValue("feedback_icon")}
                  propsIcon={{
                    className: `${this.decorateCSS("icon")}`,
                  }}
                />
              )}
              {isTitleExist && <Base.H2 className={this.decorateCSS("feedback-modal-header-h2")}>{this.getPropValue("title")}</Base.H2>}
            </div>
            <button className={this.decorateCSS("feedback-modal-close-button")}>
              <ComposerModalClose>
                <Base.Icon
                  name={this.getPropValue("close_icon")}
                  propsIcon={{
                    className: `${this.decorateCSS("close_icon")}`,
                  }}
                />
              </ComposerModalClose>
            </button>
          </div>
          {(isFeedbackIconExist || isTitleExist) && (
            <>
              <hr className={`${this.decorateCSS("divider")} ${!isDividerActive && this.decorateCSS("divider-unactive")}`} />
            </>
          )}
        </div>
        {isHeaderTitleExist || isDescriptionExist ? (
          <>
            <Base.VerticalContent className={this.decorateCSS("modal-content-wrapper")}>
              {isHeaderTitleExist && <Base.SectionTitle className={this.decorateCSS("modalContent")}>{this.getPropValue("headerTitle")}</Base.SectionTitle>}
              {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("descriptionContent")}>{this.getPropValue("description")}</Base.SectionDescription>}
            </Base.VerticalContent>
          </>
        ) : (
          ""
        )}
        {(buttonval || inputPlaceholder) && (
          <Formik
            initialValues={{
              message: "",
              selectedEmojiLabel: "",
            }}
            validationSchema={this.createValidationSchema(minLenght, minLengthMessage, requiredMessage)}
            onSubmit={(data, { resetForm }) => {
              this.insertForm("Contact Us", {
                input0: data.message,
                input1: data.selectedEmojiLabel,
              });
              resetForm();
            }}
          >
            {({ handleChange, values, setFieldValue }) => (
              <>
                <div className={this.decorateCSS("feedbackModalEmojis")}>
                  {this.castToObject<Emoji[]>("emojis").map((item: Emoji, index: number) => (
                    <Base.VerticalContent
                      className={this.decorateCSS("emojiWrapper")}
                      style={{
                        width: 100 / emojis.length + "%",
                      }}
                      key={index}
                    >
                      <div
                        id={`emoji-${index + 1}`}
                        className={`${this.decorateCSS("feedbackModalEmoji")} ${this.getComponentState("selectedEmojiId") === index + 1 ? this.decorateCSS("selected") : ""}`}
                        onClick={() => {
                          this.handleEmojiClick(index + 1, setFieldValue);
                        }}
                      >
                        {item.image ? (
                          <div className={this.decorateCSS("emojiImageWrapper")}>
                            <img src={item.image} alt={this.castToString(item.label)} className={this.decorateCSS("feedbackModalEmojiImage")} />
                          </div>
                        ) : (
                          <div className={this.decorateCSS("emoji-wrapper")}>
                            <Base.Icon
                              name={item.emoji}
                              propsIcon={{
                                className: `${this.decorateCSS("feedbackModalEmojiIcon")}`,
                              }}
                            />
                          </div>
                        )}
                      </div>

                      {this.castToString(item.label) && <Base.P className={this.decorateCSS("emojiLabel")}>{item.label}</Base.P>}
                    </Base.VerticalContent>
                  ))}
                </div>

                <div className={this.decorateCSS("contact-form")}>
                  <Form className={this.decorateCSS("form-container")}>
                    {inputPlaceholder && <textarea placeholder={inputPlaceholder} id="text" name="message" value={values.message} onChange={handleChange} className={this.decorateCSS("input")} rows={5} />}
                    {inputPlaceholder && <ErrorMessage className={this.decorateCSS("error-message")} name="message" component={"span"} />}
                    {buttonval && (
                      <Base.Button buttonType={button.type} className={this.decorateCSS("button")} type="submit">
                        {button.text}
                      </Base.Button>
                    )}
                  </Form>
                </div>
              </>
            )}
          </Formik>
        )}
      </Base.Container>
    );
  }
}

export default FeedbackModal1;
