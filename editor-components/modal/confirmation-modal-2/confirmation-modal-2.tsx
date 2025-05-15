import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./confirmation-modal-2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Speaker = {
  name: React.JSX.Element;
  title: React.JSX.Element;
  image: string;
};

type ContactInfo = {
  icon: string;
  text: React.JSX.Element;
};

type EventDetail = {
  eventDateFirstPart: React.JSX.Element;
  eventDateDivider: boolean;
  eventDateSecondPart: React.JSX.Element;
};

class ConfirmationModal2 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoCloseSharp",
    });
    this.addProp({
      type: "string",
      key: "year",
      displayer: "Year Text",
      value: "2022",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6708e43397fe08002c753355?alt=media",
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

    this.addProp(INPUTS.BUTTON("button", "Button", "REGISTER NOW", "", null, null, "Primary"));


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

  static getName(): string {
    return "Confirmation Modal 2";
  }

  render() {
    const yearText = this.getPropValue("year");
    const yearTextExist = this.castToString(yearText);
    const header = this.getPropValue("header");
    const headerHighlight = this.getPropValue("headerHighlight");
    const subheader = this.getPropValue("subheader");
    const subheaderHighlight = this.getPropValue("subheaderHighlight");
    const speakers = this.castToObject<Speaker[]>("speakers");
    const backgroundImage = this.getPropValue("backgroundImage");
    const eventDetails = this.castToObject<EventDetail>("eventDetails");

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const buttonExist = this.castToString(button.text);
    const contactInfos = this.castToObject<ContactInfo[]>("contactInfos");

    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={`${this.decorateCSS("content")} ${!yearTextExist && this.decorateCSS("content-no-yeartext")}`}>
            {yearTextExist && <Base.H1 className={this.decorateCSS("year-text")}>{yearText}</Base.H1>}
            {(this.castToString(headerHighlight) || this.castToString(header)) && (
              <div className={this.decorateCSS("header")}>
                <Base.H2 className={`${this.decorateCSS("header-text")} ${!backgroundImage && this.decorateCSS("header-text-no-image")}`}>
                  {this.getPropValue("header")}
                  {this.castToString(headerHighlight) && (
                    <span>
                      {this.castToString(headerHighlight).split(" ").slice(0, -1).join(" ")}
                      <span className={this.decorateCSS("sketch-underline")}>{this.castToString(headerHighlight).split(" ").slice(-1)}</span>
                    </span>
                  )}
                </Base.H2>
              </div>
            )}

            <div className={this.decorateCSS("exit-icon-container")}>
              <ComposerModalClose>
                <ComposerIcon propsIcon={{ className: `${this.decorateCSS("exit-icon")} ${!backgroundImage && this.decorateCSS("exit-icon-no-image")}` }} name={this.getPropValue("exitIcon")} />
              </ComposerModalClose>
            </div>

            {backgroundImage && (
              <div className={this.decorateCSS("background-image")}>
                <img src={backgroundImage} alt={backgroundImage} className={this.decorateCSS("image")} />
              </div>
            )}
            <div className={this.decorateCSS("event-content")}>
              {(speakers.length > 0 || this.castToString(subheaderHighlight) || this.castToString(subheader)) && (
                <div className={this.decorateCSS("event-speakers")}>
                  <div className={this.decorateCSS("subheader")}>
                    <Base.H2 className={this.decorateCSS("subheader-text")}>{subheader} </Base.H2>
                    <Base.H2 className={this.decorateCSS("highlight")}>{subheaderHighlight}</Base.H2>
                  </div>
                  {speakers.length > 0 && (
                    <div className={this.decorateCSS("speakers")}>
                      {speakers.map((speaker, index) => (
                        <Base.VerticalContent className={this.decorateCSS("speaker")} key={index}>
                          {speaker.image && <img src={speaker.image} alt={this.castToString(speaker.name)} />}
                          {this.castToString(speaker.name) && <Base.P className={this.decorateCSS("speaker-name")}>{speaker.name}</Base.P>}
                          {this.castToString(speaker.title) && <Base.P className={this.decorateCSS("speaker-title")}>{speaker.title}</Base.P>}
                        </Base.VerticalContent>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {(buttonExist || this.castToString(eventDetails.eventDateFirstPart) || this.castToString(eventDetails.eventDateSecondPart)) && (
                <Base.VerticalContent className={this.decorateCSS("event-details")}>
                  {buttonExist && (
                    <ComposerLink path={button.url}>
                      <Base.Button buttonType={button.type} className={this.decorateCSS("event-button")}>
                        {button.text}
                      </Base.Button>
                    </ComposerLink>
                  )}
                  {(this.castToString(eventDetails.eventDateFirstPart) || this.castToString(eventDetails.eventDateSecondPart)) && (
                    <div className={this.decorateCSS("event-date")}>
                      {this.castToString(eventDetails.eventDateFirstPart) && <Base.H3 className={this.decorateCSS("first-part")}>{eventDetails.eventDateFirstPart}</Base.H3>}
                      {eventDetails.eventDateDivider && <hr className={this.decorateCSS("divider")} />}
                      {this.castToString(eventDetails.eventDateSecondPart) && <Base.H3 className={this.decorateCSS("second-part")}>{eventDetails.eventDateSecondPart}</Base.H3>}
                    </div>
                  )}
                </Base.VerticalContent>
              )}
            </div>
          </Base.VerticalContent>
          {contactInfos.length > 0 && (
            <div className={this.decorateCSS("contact-infos")}>
              {contactInfos.map((value: ContactInfo, item: number) => (
                <div className={this.decorateCSS("contact-info")}>
                  {value.icon && <ComposerIcon name={value.icon} propsIcon={{ className: this.decorateCSS("contact-icon") }}></ComposerIcon>}
                  {this.castToString(value.text) && <Base.P className={this.decorateCSS("contact-text")}>{value.text}</Base.P>}
                </div>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ConfirmationModal2;
