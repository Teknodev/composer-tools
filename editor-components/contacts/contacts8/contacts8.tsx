import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./contacts8.module.scss";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

type Item = {
  image: string;
};
type ISection = {
  section: Item[];
  
};
class Contacts8Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Please Contact Us",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "You can use this contact form to get in touch with us. The contact form serves as an effective tool for direct communication with us. If you have any questions, feedback, requests, or partnership proposals, please feel free to reach out to us through this form.",
    });
    this.addProp({
      type: "color",
      key: "backgroundColor",
      displayer: "Background Color of Form",
      value: "#e0e2e2",
    })
    this.addProp({
      type: "string",
      key: "name",
      displayer: "1th Placeholder",
      value: "First & last name",
    });
    this.addProp({
      type: "string",
      key: "email",
      displayer: "2th Placeholder",
      value: "Email address",
    });
    this.addProp({
      type: "string",
      key: "message",
      displayer: "3th Placeholder",
      value: "Write message",
    });
    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Send Message",
    });
    this.addProp({
      type: "array",
      key: "info-items",
      displayer: "Info Items",
      value: [
        {
          type: "object",
          key: "info",
          displayer: "Info",
          value: [
            {
              type: "string",
              key: "title",
              value: "EMAIL",
              displayer: "Title",
            },
            {
              type: "string",
              key: "Text1th",
              value: "business@info.com",
              displayer: "1th Text",
            },
            {
              type: "string",
              key: "Text2th",
              value: "support@info.com",
              displayer: "2th Text",
            },
          ],
        },
        {
          type: "object",
          key: "info",
          displayer: "Info",
          value: [
            {
              type: "string",
              key: "title",
              value: "PHONE",
              displayer: "Title",
            },
            {
              type: "string",
              key: "Text1th",
              value: "111 345 45 99",
              displayer: "1th Text",
            },
            {
              type: "string",
              key: "Text2th",
              value: "111 346 45 99",
              displayer: "2th Text",
            },
          ],
        },
      ],
    });
  
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646cb8c5fba070002b74a852?alt=media&timestamp=1684846790397",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "Adress",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "27 13 Lowe Haven",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "2th-text",
                      value: "28 14 Lowe Haven",
                      displayer: "2th Text",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646cb37dfba070002b74a624?alt=media&timestamp=1684845438304",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "title",
                      value: "Phone",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "111 345 45 99",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "2th-text",
                      value: "111 346 45 99",
                      displayer: "2th Text",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "card",
                  displayer: "Card",
                  value: [
                    {
                      type: "image",
                      key: "image",
                      value:
                        "https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png",
                      displayer: "Image",
                    },
                    {
                      type: "string",
                      key: "card-title",
                      value: "Email",
                      displayer: "Card Title",
                    },
                    {
                      type: "string",
                      key: "1th-text",
                      value: "business@info.com",
                      displayer: "1th Text",
                    },
                    {
                      type: "string",
                      key: "2th-text",
                      value: "support@info.com",
                      displayer: "2th Text",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Contacts 8";
  }
  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  render() {
    const styling = {
      backgroundColor: this.getPropValue("backgroundColor")
    }
    return (
      <div
        className={this.decorateCSS("container")}

      >
        <div className={this.decorateCSS("max-content")}>
        
          <section>
           
              <div className={this.decorateCSS("right")} >
              <p>{this.getPropValue("subtitle")}</p>
              
              <div className={this.decorateCSS("contact-right")}>
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={this.validationSchema}
                onSubmit={(data, { resetForm }) => {
                  this.insertForm("Contact Us", data);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("form")} style={styling}>
                    <h3 style={{marginTop:"50px"}}>{this.getPropValue("name")}</h3>
                    <input
                      placeholder={this.getPropValue("name")}
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="name"
                      component={"span"}
                    />
                    <h3>{this.getPropValue("email")}</h3>
                    <input
                      placeholder={this.getPropValue("email")}
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="email"
                      component={"span"}
                    />
                    <h3>{this.getPropValue("message")}</h3>
                    <textarea
                      placeholder={this.getPropValue("message")}
                      id="text"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                      rows={5}
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="message"
                      component={"span"}
                    />
                    <button
                      className={this.decorateCSS("submit-button")}
                      type="submit"
                    >
                      {this.getPropValue("button_text")}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            </div>

             <div className={this.decorateCSS("left")}>
              
                {this.castToObject<ISection[]>("card-items").map(
                (section: any, index: number) => (
                  <div key={index} className={this.decorateCSS("card-child")}>
                    {section.items.map((item: any, index: number) => (
                      <div key={index} className={this.decorateCSS("card")}>
                        <div className={this.decorateCSS("img-child")}>
                          <img className={this.decorateCSS("image")} width={80} height={80} src={item.value[0].value} alt=""/>
                        </div>
                        <h2>{item.value[1].value}</h2>
                        <h4>{item.value[2].value}</h4>
                        <h4>{item.value[3].value}</h4>
                      </div>
                    ))}
                  </div>
                )
              )}
            
              </div>
            </section>
          
         
        </div>
      </div>
    );
  }
}

export default Contacts8Page;
