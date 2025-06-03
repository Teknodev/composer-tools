import React from "react";
import { BaseComingSoon } from "../../EditorComponent";
import styles from "./coming-soon4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class ComingSoon4 extends BaseComingSoon {
  interval: NodeJS.Timeout;
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We’re Cooking Up Something Cool!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Our developers are brewing code, designers are casting pixel spells, and the magic is almost ready. Check back soon — you won’t want to miss what’s coming!",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "Go to Home page",
          "",
          "GoArrowLeft",
          null,
          "Link"
        ),
      ],
    });

    this.addProp({
      type: "dateTime",
      key: "dateTime",
      displayer: "Date Time",
      value: "2026/05/03 13:00",
      additionalParams: {
        yearRange: 1000,
        yearStart: 2000,
      },
    });

    this.setComponentState("days", 0);
    this.setComponentState("hours", 0);
    this.setComponentState("minutes", 0);
    this.setComponentState("seconds", 0);
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const dateStr = this.getPropValue("dateTime");
      const fromDate = new Date(dateStr);
      const now = new Date();
  
      if (isNaN(fromDate.getTime())) return;
  
      const diffMs = fromDate.getTime() - now.getTime();
      const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  
      const totalDays = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;
  
      this.setComponentState("days", totalDays);
      this.setComponentState("hours", hours);
      this.setComponentState("minutes", minutes);
      this.setComponentState("seconds", seconds);
    }, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  static getName(): string {
    return "Coming Soon 4";
  }

  render() {
    const titleWords = this.castToString(this.getPropValue("title"));
    const description_words = this.getPropValue("description");
    const descriptionWords = this.castToString(description_words);
    const buttons = this.castToObject<any[]>("buttons");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(titleWords || descriptionWords || buttons?.length > 0) && (
              <Base.VerticalContent className={this.decorateCSS("left-side")}>
                {titleWords && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </Base.SectionTitle>
                )}
                {descriptionWords && (
                  <Base.P className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </Base.P>
                )}

                {buttons?.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((button: any, index: number) => {
                      const buttonTextExist = this.castToString(button.text);
                      const buttonExist = buttonTextExist || button.icon;
                      return (
                        buttonExist && (
                          <ComposerLink path={button.link}>
                            <Base.Button
                              buttonType={button.type}
                              key={index}
                              className={this.decorateCSS("button")}
                            >
                              {button.icon && (
                                <Base.Icon
                                  name={button.icon}
                                  propsIcon={{
                                    className: this.decorateCSS("icon"),
                                  }}
                                />
                              )}
                              {buttonTextExist && (
                                <div
                                  className={this.decorateCSS("button-text")}
                                >
                                  {" "}
                                  {button.text}
                                </div>
                              )}
                            </Base.Button>
                          </ComposerLink>
                        )
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}

            {this.getPropValue("dateTime") && (
              <div className={this.decorateCSS("right-side")}>
                <div className={this.decorateCSS("counter")}>
                  <Base.H1 className={this.decorateCSS("count")}>
                    {this.getComponentState("days")}
                  </Base.H1>
                  <div className={this.decorateCSS("text")}>DAYS</div>
                </div>

                <div className={this.decorateCSS("counter")}>
                  <Base.H1 className={this.decorateCSS("count")}>
                    {this.getComponentState("hours")}
                  </Base.H1>
                  <div className={this.decorateCSS("text")}>HOURS</div>
                </div>

                <div className={this.decorateCSS("counter")}>
                  <Base.H1 className={this.decorateCSS("count")}>
                    {this.getComponentState("minutes")}
                  </Base.H1>
                  <div className={this.decorateCSS("text")}>
                    MINUTES
                  </div>
                </div>

                <div className={this.decorateCSS("counter")}>
                  <Base.H1 className={this.decorateCSS("count")}>
                    {this.getComponentState("seconds")}
                  </Base.H1>
                  <div className={this.decorateCSS("text")}>
                    SECONDS
                  </div>
                </div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ComingSoon4;
