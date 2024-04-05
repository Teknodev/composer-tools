import { ErrorMessage, Formik, Form } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form6.module.scss";

class Form6 extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64ec6a8c057bdf002c2aa09a?alt=media&timestamp=1693215349696",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "CONTACT ME"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Feel free to get in touch with me via the form below or by emailing me directly at hello@test.com"
    });

    this.addProp({
      type: "string",
      key: "location",
      displayer: "Location Title",
      value: "CURRENTLY"
    });

    this.addProp({
      type: "string",
      key: "locationDetails",
      displayer: "Location Details",
      value: "Dubai, UNITED ARAB EMIRATES. \n Able to travel for commissions and projects"
    });

    this.addProp({
      type: "string",
      key: "name",
      displayer: "name-text",
      value: "Name"
    });

    this.addProp({
      type: "string",
      key: "firstName",
      displayer: "1st Placeholder",
      value: "First Name"
    });

    this.addProp({
      type: "string",
      key: "lastName",
      displayer: "2nd Placeholder",
      value: "Last Name"
    });

    this.addProp({
      type:"array",
      key:"items",
      displayer:"Items",
      value:[
        {
          type:"object",
          key:"item",
          displayer:"Item",
          value:[    
            {
              type: "string",
              key: "text",
              displayer: "text",
              value: "E-mail"
            },
            {
              type: "string",
              key: "text_info",
              displayer: "Placeholder",
              value: "e-mail"
            },
            
          ]},
          {
            type:"object",
            key:"item",
            displayer:"Item",
            value:[    
              {
                type: "string",
                key: "text",
                displayer: "text",
                value: "Subject"
              },
              {
                type: "string",
                key: "text_info",
                displayer: "Placeholder",
                value: "e-mail"
              },
              
            ]}
        ]
    });
    this.addProp({
      type: "string",
      key: "message",
      displayer: "message-text",
      value: "Message"
    });

    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "Send Email",
    });
  }

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Form6";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("top-container")} >
            <div className={this.decorateCSS("contact")} > 
              <h1 className={this.decorateCSS("title")}> {this.getPropValue("title")} </h1>
              <h2 className={this.decorateCSS("description")}> {this.getPropValue("description")} </h2>
            </div>
            <div className={this.decorateCSS("address")}> 
              <h1 className={this.decorateCSS("title")}> {this.getPropValue("location")} </h1>
              <h3 className={this.decorateCSS("description")}> {this.getPropValue("locationDetails")} </h3>
            </div>  
          </div>
          <div className={this.decorateCSS("lower-container")} >
          <div className={this.decorateCSS("form-container")} >
            <Formik 
              initialValues={{ name: "", firstName: "", lastName: "", text:"", message: "" }}
              validationSchema={this.validationSchema}
              onSubmit={(data, { resetForm }) => {
                this.insertForm("Contact Me", data);
                resetForm();
              }}
            >
              {({ handleChange, values }) => (
                <Form className={this.decorateCSS("form")}>
                  <h3 className={this.decorateCSS("name")}>{this.getPropValue("name")}</h3>
                  <div className={this.decorateCSS("div")}>
                  <input
                      placeholder={this.getPropValue("firstName")}
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                  />
                  <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="firstName"
                      component={"span"}
                  />
                  <input
                      placeholder={this.getPropValue("lastName")}
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      className={this.decorateCSS("input")}
                  />
                  <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="lastName"
                      component={"span"}
                  />
                  </div>    
                  <div className={this.decorateCSS("items-box")}>
                    {this.getPropValue("items").map((item: any, index: number) =>
                    <div className={this.decorateCSS("item")}>
                    <h3 className={this.decorateCSS("name")}>{item.getPropValue("text")}</h3>
                    <input
                      placeholder={this.getPropValue("text_info")}
                      type="text"
                      name="text_info"
                      value={values.text}
                      onChange={handleChange}
                      className={this.decorateCSS("input")} 
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="email-info"
                      component={"span"}
                    />
                    </div>
                    )}
                  </div>
                  <h3 className={this.decorateCSS("name")}>{this.getPropValue("message")}</h3>
                  <textarea
                        placeholder={this.getPropValue("message")}
                        id="text"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        className={this.decorateCSS("input")}
                        rows={9}
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
            <div className={this.decorateCSS("image-container")}>
              <img
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")} 
                  alt="contact image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form6;
