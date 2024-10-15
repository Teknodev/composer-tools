import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./confirmation-modal-2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type Speaker = {
  name: JSX.Element;
  title: JSX.Element;
  image: string;
}

type ContactInfo = {
  icon: string;
  text: JSX.Element;
}

type EventDetail = {
  eventButton: JSX.Element;
  eventDateFirstPart: JSX.Element;
  eventDateDivider: boolean;
  eventDateSecondPart: JSX.Element;
}

class ConfirmationModal2 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);


    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value:
        "IoCloseSharp"
    });
    this.addProp({
      type: "string",
      key: "year",
      displayer: "Year Text",
      value: "2024 S.Ö",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6708e43397fe08002c753355?alt=media"
    });
    this.addProp({
      type: "string",
      key: "header",
      displayer: "Header Text",
      value: "Business",
    });
    this.addProp({
      type: "string",
      key: "headerHighlight",
      displayer: "Header Highlight Text",
      value: "Conference",
    });
    this.addProp({
      type: "boolean",
      key: "headerHighlightLine",
      displayer: "Header Highlight Line Active",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "subheader",
      displayer: "Subheader Text",
      value: "Event",
    });
    this.addProp({
      type: "string",
      key: "subheaderHighlight",
      displayer: "Subheader Highlight Text",
      value: "speakers",
    });
    this.addProp({
      type: "array",
      key: "speakers",
      displayer: "Speakers",
      value: [
        {
          type: "object",
          key: "speakerItem",
          displayer: "Speaker Item",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Speaker Name",
              value: "Andro Smith",
            },
            {
              type: "string",
              key: "title",
              displayer: "Speaker Title",
              value: "Geologist",
            },
            {
              type: "image",
              key: "image",
              displayer: "Speaker Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361e?alt=media&timestamp=1719483639149",
            },
          ],
        },
        {
          type: "object",
          key: "speakerItem",
          displayer: "Speaker Item",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Speaker Name",
              value: "Jeremy Smith",
            },
            {
              type: "string",
              key: "title",
              displayer: "Speaker Title",
              value: "Advisor",
            },
            {
              type: "image",
              key: "image",
              displayer: "Speaker Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361f?alt=media&timestamp=1719483639150",
            },
          ],
        },
        {
          type: "object",
          key: "speakerItem",
          displayer: "Speaker Item",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Speaker Name",
              value: "Michal Ruheen",
            },
            {
              type: "string",
              key: "title",
              displayer: "Speaker Title",
              value: "Economist",
            },
            {
              type: "image",
              key: "image",
              displayer: "Speaker Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66616deebd2970002c62361d?alt=media&timestamp=1719483639149",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "eventDetails",
      displayer: "Event Details",
      value: [
        {
          type: "string",
          key: "eventButton",
          displayer: "Event Button Text",
          value: "REGISTER NOW",
        },
        {
          type: "string",
          key: "eventDateFirstPart",
          displayer: "Event Date First Part",
          value: "24 JUNE 2022 ",
        },
        {
          type: "boolean",
          key: "eventDateDivider",
          displayer: "Event Date Divider",
          value: true,
        },
        {
          type: "string",
          key: "eventDateSecondPart",
          displayer: "Event Date Second Part",
          value: " 3:00 - 8:00 PM",
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6708e43397fe08002c753355?alt=media"
    });
    this.addProp({
      type: "boolean",
      key: "bottomDivider",
      displayer: "Bottom Divider",
      value: true,
    });
    this.addProp({
      type: "array",
      key: "contactInfos",
      displayer: "Contact Infos",
      value: [
        {
          type: "object",
          key: "contactInfo",
          displayer: "contact Info",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "CiPhone",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "1 800 222 000",
            },
          ],
        },
        {
          type: "object",
          key: "contactInfo",
          displayer: "contact Info",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "CiLocationOn",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Eden Walk, New York",
            },
          ],
        },
        {
          type: "object",
          key: "contactInfo",
          displayer: "contact Info",
          value: [
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "CiMail",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "info@yourdomain.com",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Confirmation Modal 2";
  }

  render() {
    const yearText = this.getPropValue("year");
    const header = this.getPropValue("header");
    const headerHighlight = this.getPropValue("headerHighlight");
    const headerHighlightLine = this.getPropValue("headerHighlightLine");
    const subheader = this.getPropValue("subheader");
    const subheaderHighlight = this.getPropValue("subheaderHighlight");
    const speakers = this.castToObject<Speaker[]>("speakers");
    const backgroundImage = this.getPropValue("backgroundImage");
    const composerSecondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--composer-secondary-color').trim();
    const encodedColor = encodeURIComponent(composerSecondaryColor);
    const eventDetails = this.castToObject<EventDetail>("eventDetails");
    const bottomDivider = this.getPropValue("bottomDivider");
    const contactInfos = this.castToObject<ContactInfo[]>("contactInfos");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToString(yearText) && <h1 className={this.decorateCSS("year-text")}>{yearText}</h1>}
            {(this.castToString(headerHighlight) || this.castToString(header)) && (
              <div className={this.decorateCSS("header")}>
                <h2>
                  {header}
                  {this.castToString(headerHighlight) && (
                    <span className={this.decorateCSS("theme-color")}>
                      {this.castToString(headerHighlight).split(" ").slice(0, -1).join(" ")}{" "}
                      <span
                        className={this.decorateCSS("sketch-underline")}
                        style={headerHighlightLine
                          ? {
                            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg preserveAspectRatio='none' width='100%' height='6' viewBox='0 0 119 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M117.434 3.853C59.027 5.933 84.784-2.46 1.566 3.436' stroke='${encodedColor}' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                          }
                          : {}
                        }>
                        {this.castToString(headerHighlight).split(" ").slice(-1)}
                      </span>
                    </span>
                  )}
                </h2>
              </div>
            )}

            <div className={this.decorateCSS("exit-icon-container")}>
              <ComposerModalClose>
                <ComposerIcon propsIcon={{ className: this.decorateCSS("exit-icon") }} name={this.getPropValue("exitIcon")} />
              </ComposerModalClose>
            </div>

            {backgroundImage && <div className={this.decorateCSS("background-image")}>
              <img src={backgroundImage} alt={backgroundImage} className={this.decorateCSS("image")} />
            </div>}
            <div className={this.decorateCSS("event-content")}>
              {(speakers.length > 0 ||
                this.castToString(subheaderHighlight) ||
                this.castToString(subheader)
              ) &&
                <div className={this.decorateCSS("event-speakers")}>
                  {(this.castToString(subheaderHighlight) || this.castToString(subheader)) &&
                    <h2>{subheader} {this.castToString(subheaderHighlight) && <span className={this.decorateCSS("highlight")}>{subheaderHighlight}</span>}
                    </h2>}
                  {speakers.length > 0 &&
                    <div className={this.decorateCSS("speakers")}>
                      {speakers.map((speaker, index) => (
                        <div className={this.decorateCSS("speaker")} key={index}
                          style={
                            {
                              maxWidth: `calc((100% / ${speakers.length}))`,
                            }
                          }
                        >
                          {speaker.image && <img src={speaker.image}
                            alt={this.castToString(speaker.name)} />}
                          {this.castToString(speaker.name) && <p className={this.decorateCSS("speaker-name")}>{speaker.name}</p>}
                          {this.castToString(speaker.title) && <p className={this.decorateCSS("speaker-title")}>{speaker.title}</p>}
                        </div>
                      ))}
                    </div>}
                </div>}
              {(this.castToString(eventDetails.eventButton) ||
                this.castToString(eventDetails.eventDateFirstPart) ||
                this.castToString(eventDetails.eventDateSecondPart)) &&
                <div className={this.decorateCSS("event-details")}>
                  {this.castToString(eventDetails.eventButton) && <button className={this.decorateCSS("event-button")}>{eventDetails.eventButton}</button>}
                  {(this.castToString(eventDetails.eventDateFirstPart) ||
                    this.castToString(eventDetails.eventDateSecondPart)
                  ) && <p className={this.decorateCSS("event-date")}>
                      {this.castToString(eventDetails.eventDateFirstPart) && <span className={this.decorateCSS("first-part")}>
                        {eventDetails.eventDateFirstPart}
                      </span>}
                      {eventDetails.eventDateDivider && <hr className={this.decorateCSS("divider")} />}
                      {this.castToString(eventDetails.eventDateSecondPart) && <span className={this.decorateCSS("second-part")}>
                        {eventDetails.eventDateSecondPart}
                      </span>}
                    </p>
                  }
                </div>}
            </div>
          </div>
          {bottomDivider && <hr className={this.decorateCSS("line")}></hr>}
          {contactInfos.length > 0 && <div className={this.decorateCSS("contact-infos")}>
            {contactInfos.map((value: ContactInfo, item: number) => (
              <div className={this.decorateCSS("contact-info")}>
                {value.icon && <ComposerIcon name={value.icon} propsIcon={{ className: this.decorateCSS("contact-icon") }}></ComposerIcon>}
                {this.castToString(value.text) && <p className={this.decorateCSS("contact-text")}>{value.text}</p>}
              </div>
            ))}
          </div>}
        </div>
      </div >
    );
  }
}

export default ConfirmationModal2;
