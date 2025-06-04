import React from "react";
import { BaseComingSoon } from "../../EditorComponent";
import styles from "./coming-soon3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class ComingSoon3 extends BaseComingSoon {
  interval: NodeJS.Timeout;
  constructor(props?: any) {
    super(props, styles);

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

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Coming Soon",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Almost there! We're putting the finishing touches on this page.",
    });

    this.addProp(
      INPUTS.BUTTON(
        "button",
        "Button",
        "GO TO HOME PAGE",
        "",
        null,
        null,
        "Primary"
      )
    );

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Stay Tuned",
    });
    this.addProp({
      type: "boolean",
      key: "lineActive",
      displayer: "Line Active",
      value: true,
    });
    this.addProp({
      type: "boolean",
      key: "animationActive",
      displayer: "Animation Active",
      value: true,
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
  
      const diffMs = fromDate.getTime() - now.getTime();
  
      if (isNaN(fromDate.getTime())) return;
  
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
    return "Coming Soon 3";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const button: INPUTS.CastedButton =
      this.castToObject<INPUTS.CastedButton>("button");

    const animationActive = this.getPropValue("animationActive");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>

            {this.getPropValue("dateTime") && (
              <div className={this.decorateCSS("counter-container")}>
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
            {(this.getPropValue("lineActive") || this.castToString(title) || this.castToString(subtitle) || this.castToString(description) || this.castToString(button.text)) && (
            <div className={this.decorateCSS("bottom")}>
            <div
              className={`${this.decorateCSS("title-wrapper")} ${
                animationActive && this.decorateCSS("title-wrapper-animation")
              }`}
            >
              {this.getPropValue("lineActive") && (
                <div className={this.decorateCSS("line-left")}></div>
              )}
              {(this.castToString(title) || this.castToString(subtitle)) && (
                <div className={this.decorateCSS("title")}>
                  {this.castToString(title) && (
                    <div className={this.decorateCSS("title-text")}>
                      {title}
                    </div>
                  )}
                  {this.castToString(subtitle) && (
                    <div className={this.decorateCSS("error-message")}>
                      <div className={this.decorateCSS("error")}>
                        {subtitle}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {this.getPropValue("lineActive") && (
                <div className={this.decorateCSS("line-right")}></div>
              )}
            </div>
            {this.castToString(description) && (
              <div
                className={`${this.decorateCSS("description")} ${
                  animationActive && this.decorateCSS("description-animation")
                }`}
              >
                {description}
              </div>
            )}
            {this.castToString(button.text) && (
              <div className={this.decorateCSS("button-wrapper")}>
                <ComposerLink path={button.url}>
                  <Base.Button
                    buttonType={button.type}
                    className={`${this.decorateCSS("button")} ${
                      animationActive && this.decorateCSS("button-animation")
                    }`}
                  >
                    <div className={this.decorateCSS("button-text")}>
                      {button.text}
                    </div>
                  </Base.Button>
                </ComposerLink>
              </div>
            )}
            </div>
            )}
          </div>
        </div>
      </Base.Container>
    );
  }
}

export default ComingSoon3;
