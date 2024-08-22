import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./feedbackmodal1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Emoji = {
  value: string;
  label: string;
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
      displayer: "isDividerActive?",
      value: true,
    })

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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c723e1e0b009002c36f0e1?alt=media"
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Devastated",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c723c6e0b009002c36f0cc?alt=media"
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c723b3e0b009002c36f0bd?alt=media"
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c7239ce0b009002c36f0ac?alt=media"
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66c72379e0b009002c36f09b?alt=media"
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
    const isFeedbackIconExist = this.getPropValue("feedback_icon");
    const inputPlaceholder = this.castToString(this.getPropValue("input_text"));
    const buttonval = this.castToString(this.getPropValue("buttonText"));
    const isDividerActive = this.getPropValue("divider");
    const emojis = this.castToObject<Emoji[]>("emojis");
    const emojiExist = emojis.length > 0;

    return (
      <div className={this.decorateCSS("feedbackModal")}>
        <div className={this.decorateCSS("feedbackModalHeader")}>

          {isFeedbackIconExist && <ComposerIcon
            name={this.getPropValue("feedback_icon")}
            propsIcon={{
              className: `${this.decorateCSS("icon")}`,
            }}
          />}

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

        {isDividerActive && (isFeedbackIconExist || isTitleExist) && (
          <>
            <hr style={{ margin: 'none' }} className={this.decorateCSS("divider")} />
          </>
        )}

        {isHeaderTitleExist &&
          <h2 className={this.decorateCSS("headerContent")}>
            {this.getPropValue("headerTitle")}</h2>
        }

        {isDescriptionExist &&
          <p className={this.decorateCSS("descriptionContent")}>
            {this.getPropValue("description")}</p>
        }

        {emojis.length > 0 && (
          <div className={this.decorateCSS("feedbackModalEmojis")}>
            {this.castToObject<Emoji[]>("emojis").map((item: Emoji, index: number) => (
              <div className={this.decorateCSS("emojiWrapper")} key={index}>
                <span
                  id={`emoji-${index + 1}`}
                  className={this.decorateCSS("feedbackModalEmoji")}
                  onClick={() => this.handleEmojiClick(index + 1)}
                >
                  {item.image ? (
                    <div className={this.decorateCSS("emojiImageWrapper")}>
                      <div className={this.decorateCSS("color-overlay")}>
                        <img
                          src={item.image}
                          alt={item.label}
                          className={this.decorateCSS("feedbackModalEmojiImage")}
                        />
                      </div>
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
                </span>
                <p className={this.decorateCSS("emojiLabel")}>{item.label}</p>
              </div>
            ))}
          </div>
        )}

        {
          (buttonval || inputPlaceholder) && (
            <div className={this.decorateCSS("send-mail")}>
              {inputPlaceholder && (
                <div className={`${this.decorateCSS("contact-form")} ${!emojiExist && this.decorateCSS("no-emojis")}`}>
                  <input
                    placeholder={inputPlaceholder}
                    type="text"
                    className={this.decorateCSS("input")}
                  />
                </div>
              )}
              {buttonval && (
                <button className={this.decorateCSS("button")}>
                  {buttonval}
                </button>
              )}
            </div>
          )
        }
      </div>
    );
  }
}

export default FeedbackModal1;
