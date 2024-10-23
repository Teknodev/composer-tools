import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./feedbackmodal1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";
import { Base } from "../../../composer-base-components/base/base";

type Emoji = {
  value: string;
  label: JSX.Element;
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

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Submit Now",
    });
  }

  handleEmojiClick(emojiId: number, setFieldValue: (field: string, value: any) => void) {
    const emojiElements = document.querySelectorAll(`.${styles.feedbackModalEmoji}`);
    emojiElements.forEach((element) => {
      element.classList.remove(styles.selected);
    });

    const selectedElement = document.getElementById(`emoji-${emojiId}`);
    if (selectedElement) {
      selectedElement.classList.add(styles.selected);
      setFieldValue("selectedEmojiLabel", this.getComponentState("selectedEmojiLabel"));
    } else {
      console.error(`Element with id emoji-${emojiId} not found.`);
    }
  }

  createValidationSchema(minLength: number, minLengthMessage: string, requiredMessage: string) {
    return Yup.object().shape({
      message: Yup.string().min(minLength, minLengthMessage).required(requiredMessage),
    });
  }

  getName(): string {
    return "FeedbackModal1";
  }

  render() {
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isHeaderTitleExist = this.castToString(this.getPropValue("headerTitle"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const isFeedbackIconExist = this.getPropValue("feedback_icon");
    const inputPlaceholder = this.castToString(this.getPropValue("input_text"));
    const buttonval = this.castToString(this.getPropValue("buttonText"));
    const isDividerActive = this.getPropValue("divider");
    const emojis = this.castToObject<Emoji[]>("emojis");

    const minLenght = this.getPropValue("minLength");
    const minLengthMessage = this.castToString(this.getPropValue("minLengthMessage"));
    const requiredMessage = this.castToString(this.getPropValue("requiredMessage"));

    return (
      <Base.Container className={this.decorateCSS("feedback-modal")}>
        <div className={this.decorateCSS("header-container")}>
          <div className={this.decorateCSS("header-content")}>
            <div className={this.decorateCSS("feedback-modal-header")}>
              {isFeedbackIconExist && (
                <ComposerIcon
                  name={this.getPropValue("feedback_icon")}
                  propsIcon={{
                    className: `${this.decorateCSS("icon")}`,
                  }}
                />
              )}
              {isTitleExist && <Base.H2 className={this.decorateCSS("feedback-modal-header-h1")}>{this.getPropValue("title")}</Base.H2>}
            </div>
            <button className={this.decorateCSS("feedback-modal-close-button")}>
              <ComposerIcon
                name={this.getPropValue("close_icon")}
                propsIcon={{
                  className: `${this.decorateCSS("close_icon")}`,
                }}
              />
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
            <div className={this.decorateCSS("modal-content-wrapper")}>
              {isHeaderTitleExist && (
                <Base.SectionTitle className={this.decorateCSS("modalContent")}>{this.getPropValue("headerTitle")}</Base.SectionTitle>
              )}

              {isDescriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("descriptionContent")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </div>
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
            }}>
            {({ handleChange, values, setFieldValue }) => (
              <>
                <div className={this.decorateCSS("feedbackModalEmojis")}>
                  {this.castToObject<Emoji[]>("emojis").map((item: Emoji, index: number) => (
                    <div
                      className={this.decorateCSS("emojiWrapper")}
                      style={{
                        width: 100 / emojis.length + "%",
                      }}
                      key={index}>
                      <div
                        id={`emoji-${index + 1}`}
                        className={`${this.decorateCSS("feedbackModalEmoji")} ${index === 2 && this.decorateCSS("selected")}`}
                        onClick={() => {
                          this.setComponentState("selectedEmojiLabel", this.castToString(item.label));
                          this.handleEmojiClick(index + 1, setFieldValue);
                        }}>
                        {item.image ? (
                          <div className={this.decorateCSS("emojiImageWrapper")}>
                            <img
                              src={item.image}
                              alt={this.castToString(item.label)}
                              className={this.decorateCSS("feedbackModalEmojiImage")}
                            />
                          </div>
                        ) : (
                          <div className={this.decorateCSS("emoji-wrapper")}>
                            <ComposerIcon
                              name={item.emoji}
                              propsIcon={{
                                className: `${this.decorateCSS("feedbackModalEmojiIcon")}`,
                              }}
                            />
                          </div>
                        )}
                      </div>

                      {<>{this.castToString(item.label) && <Base.P className={this.decorateCSS("emojiLabel")}>{item.label}</Base.P>}</>}
                    </div>
                  ))}
                </div>
                <div className={this.decorateCSS("contact-form")}>
                  <Form className={this.decorateCSS("form-container")}>
                    {inputPlaceholder && (
                      <textarea
                        placeholder={inputPlaceholder}
                        id="text"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        className={this.decorateCSS("input")}
                        rows={5}
                      />
                    )}
                    {inputPlaceholder && (
                      <ErrorMessage
                        className={this.decorateCSS("error-message")}
                        name="message"
                        component={"span"}
                      />
                    )}
                    {buttonval && (
                      <button
                        className={this.decorateCSS("button")}
                        type="submit">
                        {buttonval}
                      </button>
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
