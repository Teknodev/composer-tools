import * as React from "react";
import styles from "./formmodal1.module.scss";
import { BaseModal, TypeUsableComponentProps } from "../../EditorComponent";
import { Formik, Form } from "formik";

class FormModal1 extends BaseModal{

    constructor(props?: any){
        super(props, styles)

        this.addProp({
            type: "image",
            key: "image",
            displayer: "Image",
            value: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Ch6xXOqHGPCePQ9gvej33g.jpeg",
        });
        this.addProp({
            type: "string",
            key: "header",
            displayer: "Header",
            value: "Talk to us",
        });
        this.addProp({
            type: "string",
            key: "context",
            displayer: "Context",
            value: "Need a demo? or help with anything? Get in touch with our amazing team of experts at your service.",
        });
        this.addProp({
          type: "array",
          key: "input-items",
          displayer: "Input Items",
          value: [
            {
              type: "object",
              key: "input-item",
              displayer: "Input Item",
              value: [
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: "Name",
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
                          type: "select",
                          key: "type",
                          displayer: "Type",
                          value: "Text",
                          additionalParams: {
                            selectItems: ["Text", "E-mail", "Number"],
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              type: "object",
              key: "input-item",
              displayer: "Input Item",
              value: [
                {
                  type: "string",
                  key: "label",
                  displayer: "Label",
                  value: "Job Title",
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
                          value: "Job Title",
                        },
                        {
                          type: "select",
                          key: "type",
                          displayer: "Type",
                          value: "Text",
                          additionalParams: {
                            selectItems: ["Text", "E-mail", "Number"],
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              type: "object",
              key: "input-item",
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
                          value: "Work email",
                        },
                        {
                          type: "select",
                          key: "type",
                          displayer: "Type",
                          value: "Text",
                          additionalParams: {
                            selectItems: ["Text", "E-mail", "Number"],
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },

            {
              type: "object",
              key: "input-item",
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
                          value: "+1(555) 000-0000",
                        },
                        {
                          type: "select",
                          key: "type",
                          displayer: "Type",
                          value: "Text",
                          additionalParams: {
                            selectItems: ["Text", "E-mail", "Number"],
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            
          ],
        });
        
        this.addProp({
          type: "string",
          key: "button_text",
          displayer: "Button Text",
          value: "Get in touch",
        });
    }

    getName(): string {
        return "FormModal1";
    }

    render() {
      const header = this.getPropValue("header", { as_string: true });
      const context = this.getPropValue("context", { as_string: true });  
      const inputItems = this.getPropValue("input-items")!;
    
      function getInputType(type: string): string {
        switch (type) {
          case "TextArea":
            return "text-area";
          case "Email":
            return "e-mail";
          case "Tel":
            return "tel";
          case "Number":
            return "number";
          default:
            return "text";
        }
      }
    
      function getInputName(
        indexOfLabel: number,
        inputLabel: string,
        indexOfInput: number
      ): string {
        const name = toObjectKey(`${indexOfLabel} ${inputLabel} ${indexOfInput}`);
        return toObjectKey(name);
      }
    
      function toObjectKey(str: string) {
        if (/^\d/.test(str)) {
          str = "_" + str;
        }
        str = str.replace(/[^a-zA-Z0-9_]/g, "_").toLowerCase();
        return str;
      }
    
      function getInitialValue() {
        let value: any = {};
        inputItems.map((inputItem: any, indexOfItem: number) => {
          inputItem
            .getPropValue("inputs")
            ?.map((_: TypeUsableComponentProps, indexOfInput: number) => {
              const key = getInputName(
                indexOfItem,
                inputItem.getPropValue("label"),
                indexOfInput
              );
              value[key] = "";
            });
        });
        return value;
      }
    
      return(
        <div className={this.decorateCSS("container")}>
          <div className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("page")}>
              <div className={this.decorateCSS("left-page")}>
                <img 
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")}
                  alt=""
                />
              </div>
              <div className={this.decorateCSS("right-page")}>
                <div className={this.decorateCSS("title")}>
                  <h1 className={this.decorateCSS("header")}>{header && this.getPropValue("header")}</h1>
                  <p className={this.decorateCSS("context")}>
                    {context && this.getPropValue("context")}
                  </p>
                </div>
                <div className={this.decorateCSS("form-content")}>
                  <Formik
                    initialValues={getInitialValue()}
                    onSubmit={(data, { resetForm }) => {
                      this.insertForm("Contact Us", data);
                      resetForm();
                    }}
                    >
                    {({handleChange, values}) => (
                      <Form className={this.decorateCSS("form")}>
                        {inputItems.map((inputItem: any, inputItemIndex: number) => 
                          inputItem.getPropValue("inputs").map((inputObj: any, inputIndex: number) => (
                            inputObj.getPropValue("placeholder", { as_string: true }) === "+1(555) 000-0000" ? (
                              <div className={this.decorateCSS("phone-input-container")} key={`${inputItemIndex}-${inputIndex}`}>
                                <select className={this.decorateCSS("country-dropdown")}>
                                  <option value="us">US</option>
                                  <option value="tr">TR</option>
                                  <option value="uk">UK</option>
                                  <option value="ca">CA</option>
                                </select>
                                <input
                                  placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                                  type={getInputType(inputObj.getPropValue("type"))}
                                  onChange={handleChange}
                                  value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                                  name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                                  className={this.decorateCSS("form-input")}
                                />
                              </div>
                            ) : (
                              <div className={this.decorateCSS("input-box")} key={`${inputItemIndex}-${inputIndex}`}>
                                <input
                                  placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                                  type={getInputType(inputObj.getPropValue("type"))}
                                  onChange={handleChange}
                                  value={values[getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)]}
                                  name={getInputName(inputItemIndex, inputItem.getPropValue("label"), inputIndex)}
                                  className={this.decorateCSS("form-input")}
                                />
                              </div>
                            )
                          ))
                        )}
                        <button
                          className={this.decorateCSS("form-button")}
                          type="submit">
                          {this.getPropValue("button_text")}
                        </button>
                      </Form>
                    )}
                  </Formik>                              
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
}
export default FormModal1;
