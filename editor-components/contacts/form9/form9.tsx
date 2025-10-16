import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./form9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type FeatureItems = {
  featureTitle: React.JSX.Element;
  featureDescription: React.JSX.Element;
  featureIcon: any; // string
};

class Form9 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    /* ------------------------------ Left Content ------------------------------ */
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get Started with Apcopay",
    });

    this.addProp({
      type: "array",
      key: "features",
      displayer: "Features",
      value: [
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Flexible, fast setup",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Effortless integration, so you can start accepting credit cards the easy way",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Better customer experience",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "An optimised, streamlined payment journey, and one unified interface",
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaCheckCircle",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Global growth",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Reach new customers and diverse markets all over the world",
            },
          ],
        },
      ],
    });

    /* --------------------------------- Inputs -------------------------------- */
    this.addProp({
      type: "array",
      key: "input_items",
      displayer: "Input Items",
      value: [
        /* Email */
        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Email",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "Email Address",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "E-mail",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* Full Name: Name + Surname */
        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Full Name",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "Name",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "Surname",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* Phone Number: +90 (text) + Phone */
        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Phone Number",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "+90",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text", // '+' işareti için Text seçildi
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "Phone",
                    },
                    {
                      type: "boolean",
                      key: "is_required",
                      displayer: "Is Required",
                      value: true,
                    },
                    {
                      type: "string",
                      key: "required_error_message",
                      displayer: "Required error message",
                      value: "Required",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "Invalid type",
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* Message */
        {
          type: "object",
          key: "input_item",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Message",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "",
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
                      value: "",
                    },
                    {
                      type: "select",
                      key: "type",
                      displayer: "Type",
                      value: "Text Area",
                      additionalParams: {
                        selectItems: ["Text", "E-mail", "Number", "Text Area"],
                      },
                    },
                    {
                      type: "string",
                      key: "type_error_message",
                      displayer: "Type error message",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    /* ------------------------------- Consent --------------------------------- */
    this.addProp({
      type: "object",
      key: "consent",
      displayer: "Consent",
      value: [
        {
          type: "boolean",
          key: "required",
          displayer: "Require Consent",
          value: true,
        },
        {
          type: "string",
          key: "label_prefix",
          displayer: "Label Prefix",
          value: "I agree to the",
        },
        {
          type: "string",
          key: "link_text",
          displayer: "Link Text",
          value: "Terms and Conditions",
        },
        { type: "string", key: "link_url", displayer: "Link URL", value: "#" },
      ],
    });

    /* --------------------------------- Button -------------------------------- */
    this.addProp(
      INPUTS.BUTTON("button", "Button", "Let's Go", null, null, null, "Primary")
    );
  }

  static getName(): string {
    return "Form 9";
  }

  /* ---------------------------------- Render ---------------------------------- */

  render() {
    const title = this.getPropValue("title");
    const features = this.getPropValue(
      "features"
    ) as TypeUsableComponentProps[];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("layout")}>
            {/* Left: Title + Features */}

            <Base.SectionTitle className={this.decorateCSS("title")}>
              {title}
            </Base.SectionTitle>

            <div className={this.decorateCSS("features")}></div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Form9;
