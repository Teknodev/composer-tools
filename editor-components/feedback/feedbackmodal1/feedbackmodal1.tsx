import * as React from "react";
import { BaseModal } from "../../EditorComponent";
import styles from "./feedbackmodal1.module.scss";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

type Emoji = {
  id: number;
  label: string;
  icon: string;
  color: string;
};

const emojis: Emoji[] = [
  { id: 1, label: 'Very Bad', icon: '😢', color: '#E74C3C' },
  { id: 2, label: 'Bad', icon: '😞', color: '#F39C12' },
  { id: 3, label: 'Medium', icon: '😐', color: '#F1C40F' },
  { id: 4, label: 'Good', icon: '😊', color: '#2ECC71' },
  { id: 5, label: 'Very Good', icon: '😂', color: '#3498DB' },
];

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
        type:"icon",
        key:" feedbackIcon",
        displayer:"Feedback Icon",
        value:"https://www.google.com/imgres?q=comment%20icon&imgurl=https%3A%2F%2Ficons.veryicon.com%2Fpng%2Fo%2Fhardware%2Fjackdizhu_pc%2Fcomment-25.png&imgrefurl=https%3A%2F%2Fwww.veryicon.com%2Ficons%2Fhardware%2Fjackdizhu_pc%2Fcomment-25.html&docid=fMJtLYW6rlY7AM&tbnid=iadJ3A-hOcv3EM&vet=12ahUKEwjJlcWx8pmHAxXrQ_EDHaERB_cQM3oECBkQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwjJlcWx8pmHAxXrQ_EDHaERB_cQM3oECBkQAA"
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
      key: "emojiProps",
      displayer: "Emojis",
      value: emojis.map(emoji => ({
        type: "object",
        key: `emoji-${emoji.id}`,
        displayer: emoji.label,
        value: [
          {
            type: "string",
            key: "label",
            displayer: "Label",
            value: emoji.label,
          },
          {
            type: "string",
            key: "icon",
            displayer: "Icon",
            value: emoji.icon,
          },
          {
            type: "string",
            key: "color",
            displayer: "Color",
            value: emoji.color,
          },
        ],
      })),
    });
  }

  validationSchema = Yup.object().shape({
    message: Yup.string().min(5, "Min 5 characters!").required("Required"),
  });

  handleEmojiClick(emojiId: number, color: string) {
    const emojiElements = document.querySelectorAll(`.${styles.feedbackModalEmoji}`);
    emojiElements.forEach(element => {
      element.classList.remove(styles.selected);
      (element as HTMLElement).style.backgroundColor = 'transparent';
    });

    const selectedElement = document.getElementById(`emoji-${emojiId}`);
    if (selectedElement) {
      selectedElement.classList.add(styles.selected);
      (selectedElement as HTMLElement).style.backgroundColor = color;
    }

    const modalElement = document.querySelector(`.${styles.feedbackModal}`);
    if (modalElement) {
      (modalElement as HTMLElement).style.backgroundColor = color;
    }
  }

  getName(): string {
    return "FeedbackModal1";
  }

  render() {
    const inputItems = this.castToObject<any[]>("input_items");
    const placeholder = inputItems?.[0]?.value?.[1]?.value?.[0]?.value?.[0]?.value || "Add a Comment...";

    return (
      <div className={this.decorateCSS("feedbackModal")}>
        <div className={this.decorateCSS("feedbackModalHeader")}>
          <img src="data:image/png;base64,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" 
          alt=""  className={this.decorateCSS("icon")}/>
          <h1 className={this.decorateCSS("feedbackModalHeaderh1")}>Feedback</h1>
          <button className={this.decorateCSS("feedbackModalCloseButton")}>&times;</button>
        </div>
        <div className={this.decorateCSS("headerContent")}>
          <h2>{this.getPropValue("headerTitle")}</h2>
        </div>
        <div className={this.decorateCSS("descriptionContent")}>
          <p>{this.getPropValue("description")}</p>
        </div>
        <div className={this.decorateCSS("feedbackModalEmojis")}>
          {this.castToObject<any[]>("emojiProps")?.map((item: any, index: number) => {
            const label = item?.value?.[0]?.value;
            const icon = item?.value?.[1]?.value;
            const color = item?.value?.[2]?.value;

            return (
              <span
                key={index}
                id={`emoji-${label}`}
                className={this.decorateCSS("feedbackModalEmoji")}
                onClick={() => this.handleEmojiClick(label, color)}
              >
                <span className={this.decorateCSS("feedbackModalEmojiIcon")}>{icon}</span>     
                <span className={this.decorateCSS("feedbackModalEmojiLabel")}>{label}</span> 
              </span>
            );
          })}
        </div>

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
                  Submit Now
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
