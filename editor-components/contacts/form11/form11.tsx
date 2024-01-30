import * as React from "react";
import { BaseContacts } from "../../EditorComponent";
import styles from "./form11.module.scss";
import { ErrorMessage, Formik, Form } from "formik";
import * as Yup from "yup";

class Form11Page extends BaseContacts {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "START YOUR JOURNEY",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Tell our specialist dentists about your teeth and get a free treatment plan.",
    });
    this.addProp({
      type: "string",
      key: "name",
      displayer: "1th Placeholder",
      value: "Full Name",
    });
    this.addProp({
      type: "string",
      key: "email",
      displayer: "2th Placeholder",
      value: "Your Email",
    });
    this.addProp({
      type: "string",
      key: "phone",
      displayer: "3th Placeholder",
      value: "Please Number",
    });
    this.addProp({
      type: "string",
      key: "message",
      displayer: "4th Placeholder",
      value: "Describe your current dental status",
    });
    this.addProp({
      type: "string",
      key: "button_text",
      displayer: "Button Text",
      value: "GETT FREE QUOTE",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://wallpaperaccess.com/full/754632.jpg",
    });
    this.addProp({
      type: "string",
      key: "adress",
      displayer: "Adress",
      value: "192 West 19th Street, Suite 200, New York, NY 12036",
    })
    this.addProp({
      type: "image",
      key: "adressImage",
      displayer: "Adress Image",
      value: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
    })
    this.addProp({
      type: "string",
      key: "phone-box",
      displayer: "Phone",
      value: "+ 1235 2355 98",
    })
    this.addProp({
      type: "image",
      key: "phoneImage",
      displayer: "Phone Image",
      value: "https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png",
    })
    this.addProp({
      type: "string",
      key: "email",
      displayer: "Email",
      value: "info@yoursite.com"
    })
    this.addProp({
      type: "image",
      key: "emailImage",
      displayer: "Email Image",
      value: "https://cdn-icons-png.flaticon.com/512/725/725680.png",
    })
    this.addProp({
      type: "string",
      key: "website",
      displayer: "Website",
      value: "www.yoursite.com"
    })
    this.addProp({
      type: "image",
      key: "websiteImage",
      displayer: "Website Image",
      value: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/1200px-Globe_icon.svg.png"
    })
    this.addProp({
      type: "array",
      key: "list-items",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "item-text",
              displayer: "Item Text",
              value:
                "Çağlayan Dist. Barınaklar Bul. No.66/A, 07230 Muratpaşa Antalya Turkey",
            },
            {
                type: "string",
                key: "item-title",
                displayer: "Item Title",
                value:
                  "Address",
              },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "list-items-2",
      displayer: "List Items 2",
      value: [
        {
          type: "object",
          key: "list-item-2",
          displayer: "List Item 2",
          value: [
            {
              type: "string",
              key: "item-text-2",
              displayer: "Item Text 2",
              value:
                "+90 544 452 25 77",
            },
            {
                type: "string",
                key: "item-title-2",
                displayer: "Item Title 2",
                value:
                  "Whatsapp",
              },
              {
                type: "string",
                key: "item-text-2",
                displayer: "Item Text 2",
                value:
                  "+90 544 452 25 77",
              },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "list-items-3",
      displayer: "List Items 3",
      value: [
        {
          type: "object",
          key: "list-item-3",
          displayer: "List Item 3",
          value: [
            {
              type: "string",
              key: "item-text-3",
              displayer: "Item Text 3",
              value:
                "contact@dentalexcellenceturkey.com",
            },
            {
                type: "string",
                key: "item-title-3",
                displayer: "Item Title 3",
                value:
                  " Email",
              },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "list-items-4",
      displayer: "List Items 4",
      value: [
        {
          type: "object",
          key: "list-item-4",
          displayer: "List Item 4",
          value: [
            {
              type: "string",
              key: "item-text-4",
              displayer: "Item Text 4",
              value:
                "+44 20 863 88648",
            },
            {
                type: "string",
                key: "item-title-4",
                displayer: "Item Title 4",
                value:
                  "UK Free Call",
              },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "right-items-7",
      displayer: "Right Items 7",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "number",
              key: "gallery",
              value: 1,
              displayer: "Gallery",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "list-items-5",
      displayer: "List Items 5",
      value: [
        {
          type: "object",
          key: "list-item-5",
          displayer: "List Item 5",
          value: [
            {
              type: "string",
              key: "item-text-5",
              displayer: "Item Text 5",
              value:
                "",
            },
            {
                type: "string",
                key: "item-title-5",
                displayer: "Item Title 5",
                value:
                  "Social Media",
              },
          ],
        },
      ],
    });
  }
  

  validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().min(5, "Min 5 character!").required("Required"),
  });

  getName(): string {
    return "Form 11";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("contact-container")}>
            <div className={this.decorateCSS("contacts5-left")}>
              <div className={this.decorateCSS("title-text")}>
              <h1 className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</h1>
              <h2 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h2>
              </div>
              <div className={this.decorateCSS("contacts5")}>
            <div className={this.decorateCSS("contact-form")}>
              <Formik
                initialValues={{ name: "", email: "", message: "", phone:""}}
                validationSchema={this.validationSchema}
                onSubmit={(data, { resetForm }) => {
                  this.insertForm("Contact Us", data);
                  resetForm();
                }}
              >
                {({ handleChange, values }) => (
                  <Form className={this.decorateCSS("form")}>
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
                     <input
                     placeholder={this.getPropValue("phone")}
                     type="text"
                     name="phone"
                     value={values.phone}
                     onChange={(e) => {
                       const value = e.target.value;
                       const isNumber = /^[0-9]*$/.test(value);
                   
                       if (isNumber || value === "") {
                         handleChange(e);
                       }
                     }}
                     className={this.decorateCSS("input")}
                    />
                    <ErrorMessage
                      className={this.decorateCSS("error-message")}
                      name="phone"
                      component={"span"}
                    />
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
            </div> 
            <div className={this.decorateCSS("contacts5-right")}>
            {this.getPropValue("list-items").map(
            (listItem: any, index: number) => (
              <div
                key={index}
                className={this.decorateCSS("all-card")}
              >
              <div className={this.decorateCSS("item-content")}>
                 {this.getPropValue("list-items").map((item: any, index: number) => (
    <div key={`svg-container-${index}`} className={this.decorateCSS("svg-container")}>
      <svg
        key={`logo-contacts12${index}`}
        width="40"
        height="40"
        viewBox="-4 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
        <g id="Icon-Set"  transform="translate(-104.000000, -411.000000)" fill="#000000">
            <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location">

</path>
        </g>
    </g>
</svg>

      </div>
      ))}
                  <div className={this.decorateCSS("item-value-text")}>
                <h4 className={this.decorateCSS("item-value1")}>{listItem.value[1].value}</h4>
                <p className={this.decorateCSS("list-item-p")}>{listItem.value[0].value}</p>
                </div>
              </div>
              </div>
            )
          )}
           {this.getPropValue("list-items-2").map(
            (listItem: any, index: number) => (
              <div
                key={index}
                className={this.decorateCSS("all-card-2")}
              >
              <div className={this.decorateCSS("item-content-2")}>
                 {this.getPropValue("list-items-2").map((item: any, index: number) => (
    <div key={`svg-container-${index}`} className={this.decorateCSS("svg-container")}>
      <svg
        key={`logo-contacts12${index}`}
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
     <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#0F0F0F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#0F0F0F"/>
    </svg>
      </div>
      ))}
                 <div className={this.decorateCSS("item-value-text")}>
                <h4 className={this.decorateCSS("item-value1-2")}>{listItem.value[1].value}</h4>
                <p className={this.decorateCSS("list-item-p-2")}>{listItem.value[0].value}</p>
                <p className={this.decorateCSS("list-item-p2-2")}>{listItem.value[2].value}</p>
                </div>
              </div>
              </div>
            )
          )}
           {this.getPropValue("list-items-3").map(
            (listItem: any, index: number) => (
              <div
                key={index}
                className={this.decorateCSS("all-card-3")}
              >
              <div className={this.decorateCSS("item-content-3")}>
                 {this.getPropValue("list-items-3").map((item: any, index: number) => (
    <div key={`svg-container-${index}`} className={this.decorateCSS("svg-container")}>
      <svg
        key={`logo-contacts12${index}`}
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"/>
    </svg>
      </div>
      ))}
                 <div className={this.decorateCSS("item-value-text")}>
                <h4 className={this.decorateCSS("item-value1-3")}>{listItem.value[1].value}</h4>
                <p className={this.decorateCSS("list-item-p-3")}>{listItem.value[0].value}</p>
                </div>
              </div>
              </div>
            )
          )}
           {this.getPropValue("list-items-4").map(
            (listItem: any, index: number) => (
              <div
                key={index}
                className={this.decorateCSS("all-card-4")}
              >
              <div className={this.decorateCSS("item-content-4")}>
                 {this.getPropValue("list-items-4").map((item: any, index: number) => (
    <div key={`svg-container-${index}`} className={this.decorateCSS("svg-container")}>
      <svg
        key={`logo-contacts12${index}`}
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
      </div>
      ))}
                <div className={this.decorateCSS("item-value-text")}>
                <h4 className={this.decorateCSS("item-value1-4")}>{listItem.value[1].value}</h4>
                <p className={this.decorateCSS("list-item-p-4")}>{listItem.value[0].value}</p>
                </div>
              </div>
              </div>
            )
          )}
           {this.getPropValue("list-items-5").map(
            (listItem: any, index: number) => (
              <div
                key={index}
                className={this.decorateCSS("all-card-5")}
              >
              <div className={this.decorateCSS("item-content-5")}>
                 {this.getPropValue("list-items-5").map((item: any, index: number) => (
    <div key={`svg-container2-${index}`} className={this.decorateCSS("svg-container2")}>
      <svg
        key={`logo-contacts12${index}`}
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
     <circle cx="12" cy="9" r="3" stroke="#1C274C" stroke-width="1.5"/>
     <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75Z" fill="#1C274C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.5456 3.77827 16.851 5.4421 18.5235C5.6225 17.5504 5.97694 16.6329 6.68837 15.8951C7.75252 14.7915 9.45416 14.25 12 14.25C14.5457 14.25 16.2474 14.7915 17.3115 15.8951C18.023 16.6329 18.3774 17.5505 18.5578 18.5236C20.2217 16.8511 21.25 14.5456 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM17.1937 19.6554C17.0918 18.4435 16.8286 17.5553 16.2318 16.9363C15.5823 16.2628 14.3789 15.75 12 15.75C9.62099 15.75 8.41761 16.2628 7.76815 16.9363C7.17127 17.5553 6.90811 18.4434 6.80622 19.6553C8.28684 20.6618 10.0747 21.25 12 21.25C13.9252 21.25 15.7131 20.6618 17.1937 19.6554Z" fill="#1C274C"/>
    </svg>
      </div>
      
      ))}
             <div className={this.decorateCSS("item-value-text")}>
                <h4 className={this.decorateCSS("item-value1-5")}>{listItem.value[1].value}</h4>
                <p className={this.decorateCSS("list-item-p-5")}>{listItem.value[0].value}</p>
                </div>
                <div key={`svg-container3-${index}`} className={this.decorateCSS("svg-container3")}>
      <svg
        key={`logo-contacts12${index}`}
        width="30"
        height="30"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
     <path fill-rule="evenodd" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" clip-rule="evenodd" fill="#1C274C"></path>
    </svg>
    <svg
        key={`logo-contacts12${index}`}
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
    <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" fill="#1C274C"/>
	<path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" fill="#1C274C"/>
	<circle cx="18.406" cy="5.594" r="1.44" fill="#1C274C"/>
    </svg>
    <svg
        key={`logo-contacts12${index}`}
        width="30"
        height="30"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
     <path fill-rule="evenodd" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z" clip-rule="evenodd" fill="#1C274C"></path>
    </svg>
    <svg
        key={`logo-contacts12${index}`}
        width="30"
        height="30"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
     <path d="M8 0C3.582 0 0 3.316 0 7.407c0 2.331 1.163 4.41 2.981 5.768V16l2.724-1.495c.727.201 1.497.31 2.295.31 4.418 0 8-3.316 8-7.407S12.418 0 8 0zm.795 9.975L6.758 7.802 2.783 9.975l4.373-4.642 2.087 2.173 3.925-2.173-4.373 4.642z" fill="#1C274C"></path>
    </svg>
      </div>
              </div>
              </div>
            )
          )}
          </div>
 
          </div>
        </div>
      </div>
    );
  }
}

export default Form11Page;
