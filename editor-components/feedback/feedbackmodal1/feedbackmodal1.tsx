import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./feedbackmodal1.module.scss";
import { object, string } from "yup";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Emoji = {
  type: "icon";
  key: string;
  displayer: string;
  value: string;
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
      displayer: "Title",
      value: "Feedback",
    });

    this.addProp({
      type: "string",
      key: "headerTitle",
      displayer: "Header Title",
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
      displayer: "Emojis",
      value: [
        {
          type: "icon",
          key: "emoji",
          displayer: "Icon",
          value: "FaRegFrown",
        },
        {
          type: "icon",
          key: "emoji",
          displayer: "Icon",
          value: "FaRegMeh",
        },
        {
          type: "icon",
          key: "emoji",
          displayer: "Icon",
          value: "FaRegSmile",
        },
        {
          type: "icon",
          key: "emoji",
          displayer: "Icon",
          value: "FaRegSmile",
        },
        {
          type: "icon",
          key: "emoji",
          displayer: "Icon",
          value: "FaRegGrin",
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
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Submit Now",
    });
  }

  handleEmojiClick(emojiId: number) {
    const emojiElements = document.querySelectorAll(`.${styles.feedbackModalEmoji}`);
    emojiElements.forEach((element) => {
        element.classList.remove(styles.selected);
    });

    const selectedElement = document.getElementById(`emoji-${emojiId}`);
    if (selectedElement) {
        selectedElement.classList.add(styles.selected);
    } else {
        console.error(`Element with id emoji-${emojiId} not found.`);
    }
  }

  getName(): string {
    return "FeedbackModal1";
  }

  render() {
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isHeaderTitleExist = this.castToString(this.getPropValue("headerTitle"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const emojiProps = this.getPropValue("emojis");
    const isFeedbackIconExist = this.castToString(this.getPropValue("feedback_icon"));
    const inputPlaceholder = this.castToString(this.getPropValue("input_text"));
    const buttonval = this.castToString(this.getPropValue("buttonText"));

    return (
      <div className={this.decorateCSS("feedbackModal")}>
        <div className={this.decorateCSS("feedbackModalHeader")}>
          
            <ComposerIcon
              name={this.getPropValue("feedback_icon")}
              propsIcon={{
                className: `${this.decorateCSS("icon")}`,
              }}
            />
          

          {isTitleExist &&
            <h1 className={this.decorateCSS("feedbackModalHeaderh1")}>
              {this.getPropValue("title")}
            </h1>}
          <button className={this.decorateCSS("feedbackModalCloseButton")}>
          <ComposerIcon
              name={this.getPropValue("close_icon")}
              propsIcon={{
                className: `${this.decorateCSS("close_icon")}`,
              }}
            />
          </button>
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
        
        {emojiProps.length > 0 && (
          <div className={this.decorateCSS("feedbackModalEmojis")}>
            {emojiProps.map((item: Emoji, index: number) => (
              <span
                key={index}
                id={`emoji-${index + 1}`}
                className={this.decorateCSS("feedbackModalEmoji")}
                onClick={() => this.handleEmojiClick(index + 1)}
              >
                <ComposerIcon
                  name={item.value}
                  propsIcon={{
                    className: `${this.decorateCSS("feedbackModalEmojiIcon")}`,
                  }}
                />
              </span>
            ))}
          </div>
        ) }

        {inputPlaceholder && (
          <div className={this.decorateCSS("send-mail")}>
            <div className={this.decorateCSS("contact-form")}>
              <input
                placeholder={inputPlaceholder}
                type="text"
                className={this.decorateCSS("input")}
              />
            </div>
            {buttonval && (
              <button className={this.decorateCSS("button")}>
                {buttonval}
              </button>
            )}
          </div>
        )}

      </div>
    );
  }
}

export default FeedbackModal1;
