import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./feedbackmodal1.module.scss";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type InputItem = {
  placeholder: string;
  isRequired: boolean;
  requiredErrorMessage: string;
  type: string;
  typeErrorMessage: string;
};

type Emoji = {
  icon: string;
};

class FeedbackModal1 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "headerTitle",
      displayer: "Header Title",
      value: "How are you feeling?",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Feedback",
    });

    this.addProp({
      type: "icon",
      key: "feedback_icon",
      displayer: "Icon",
      value: "FaRegCommentDots",
    });
    this.addProp({
      type: "icon",
      key: "emoji_icon",
      displayer: "Icon",
      value: "FaRegSmile",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Your input is valuable in helping us better understand your needs and tailor our service accordingly.",
    });

    this.addProp({
      type: "array",
      key: "input_items",
      displayer: "Input Items",
      value: [
        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              displayer: "Label",
              key: "label",
              value: "Comment",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  displayer: "Input",
                  key: "input",
                  value: [
                    {
                      type: "string",
                      displayer: "Placeholder",
                      key: "placeholder",
                      value: "Add a Comment..."
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: false,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required"
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text Area",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"]
                      }
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: ""
                    },
                  ]
                },
              ]
            }
          ]
        }
      ]
    });

    this.addProp({
      type: "array",
      key: "emojis",
      displayer: "Emojis",
      value: [
        {
          type: "icon",
          key: "emoji",
          displayer: "Very Bad",
          value: "FaRegFrown",
        },
        {
          type: "icon",
          key: "emoji",
          displayer: "Bad",
          value: "FaRegMeh",
        },
        {
          type: "icon",
          key: "emoji",
          displayer: "Neutral",
          value: "FaRegSmile",
        },
        {
          type: "icon",
          key: "emoji",
          displayer: "Good",
          value: "FaRegSmile",
        },
        {
          type: "icon",
          key: "emoji",
          displayer: "Very Good",
          value: "FaRegGrin",
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Submit Now",
    });
  }

  validationSchema = object().shape({
    message: string().min(5, "Min 5 characters!").required("Required"),
  });

  handleEmojiClick(emojiId: number) {
    const emojiElements = document.querySelectorAll(`.${styles.feedbackModalEmoji}`);
    emojiElements.forEach((element) => {
      element.classList.remove(styles.selected);
      (element as HTMLElement).style.backgroundColor = "transparent";
    });

    const selectedElement = document.getElementById(`emoji-${emojiId}`);
    if (selectedElement) {
      selectedElement.classList.add(styles.selected);
    }
  }

  getName(): string {
    return "FeedbackModal1";
  }

  render() {
    const inputItems = this.castToObject<InputItem[]>("input_items") || [];
    const placeholder = inputItems[0]?.placeholder || "Add a Comment...";
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isHeaderTitleExist = this.castToString(this.getPropValue("headerTitle"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const emojiProps = this.castToObject<Emoji[]>("emojis");
    const isFeedbackIconExist = this.castToObject<Emoji>(this.getPropValue("feedback_icon"));


    return (
      <div className={this.decorateCSS("feedbackModal")}>
        <div className={this.decorateCSS("feedbackModalHeader")}>
        {isFeedbackIconExist &&
        <ComposerIcon
          name={this.getPropValue("feedback_icon")}
          propsIcon={{
            className: `${this.decorateCSS("icon")}`,
          }}
          />
        }

          {isTitleExist &&
            <h1 className={this.decorateCSS("feedbackModalHeaderh1")}>
              {this.getPropValue("title")}
            </h1>}
          <button className={this.decorateCSS("feedbackModalCloseButton")}>&times;</button>
        </div>
        <div className={this.decorateCSS("headerContent")}>
          {isHeaderTitleExist &&
            <h2>{this.getPropValue("headerTitle")}</h2>
          }
        </div>
        <div className={this.decorateCSS("descriptionContent")}>
          {isDescriptionExist &&
            <p>{this.getPropValue("description")}</p>
          }
        </div>
        {emojiProps.length > 0 ? (
          <div className={this.decorateCSS("feedbackModalEmojis")}>
            {emojiProps.map((item, index) => (
              <span
                key={index}
                id={`emoji-${index + 1}`}
                className={this.decorateCSS("feedbackModalEmoji")}
                onClick={() => this.handleEmojiClick(index + 1)}
              >
                <ComposerIcon
                  name={this.getPropValue("emoji_icon")}
                  propsIcon={{
                    className: `${this.decorateCSS("feedbackModalEmojiIcon")}`,
                  }}
                />
              </span>
            ))}
          </div>
        ) : null}


        <div className={this.decorateCSS("contact-form")}>
          <Formik
            initialValues={{ message: "" }}
            validationSchema={this.validationSchema}
            onSubmit={(data, { resetForm }) => {
              this.insertForm("Contact Us", data);
              resetForm();
            }}
          >
            {({ handleChange, values }) => (
              <Form className={this.decorateCSS("form")}>
                <Field
                  as="textarea"
                  placeholder={placeholder}
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  className={this.decorateCSS("input")}
                  rows={4}
                />
                <ErrorMessage
                  className={this.decorateCSS("error-message")}
                  name="message"
                  component={"span"}
                />
                <button type="submit" className={this.decorateCSS("feedbackModalSubmit")}>
                {this.getPropValue("buttonText")}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default FeedbackModal1;
