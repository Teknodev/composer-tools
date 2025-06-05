import React from "react";
import { BaseComingSoon, BaseHTTPCodes } from "../../EditorComponent";
import styles from "./coming-soon2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

class COMING_SOON2 extends BaseComingSoon {
  interval: NodeJS.Timeout;
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Something is Coming",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675828500655f8002ca53fbd?alt=media",
    });

    this.addProp({
      type: "page",
      key: "url",
      displayer: "URL",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "home",
      displayer: "Button Text",
      value: "TAKE ME HOME",
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
    return "Coming Soon 2";
  }

  render() {
    const title = this.getPropValue("title");
    const home = this.castToString(this.getPropValue("home"));

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("backgroundImage")})`,
        }}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("content")} ${!home && this.decorateCSS("without-right")}`}>
            {(this.getPropValue("dateTime") || this.castToString(title)) && (
              <div className={this.decorateCSS("left-side")}>
                <div className={this.decorateCSS("left-text")}>
                  {this.getPropValue("dateTime") && (
                    <div className={this.decorateCSS("counter")}>
                      {this.getPropValue("dateTime") && (
                        <div className={this.decorateCSS("counter-content")}>
                          <div className={this.decorateCSS("days-container")}>
                            <Base.H1 className={this.decorateCSS("days-count")}>
                              {this.getComponentState("days")}
                            </Base.H1>
                            <div className={this.decorateCSS("days-text")}>
                              DAYS
                            </div>
                          </div>

                          <div className={this.decorateCSS("hours-container")}>
                            <Base.H1
                              className={this.decorateCSS("hours-count")}
                            >
                              {this.getComponentState("hours")}
                            </Base.H1>
                            <div className={this.decorateCSS("hours-text")}>
                              HOURS
                            </div>
                          </div>

                          <div
                            className={this.decorateCSS("minutes-container")}
                          >
                            <Base.H1
                              className={this.decorateCSS("minutes-count")}
                            >
                              {this.getComponentState("minutes")}
                            </Base.H1>
                            <div className={this.decorateCSS("minutes-text")}>
                              MINUTES
                            </div>
                          </div>

                          <div
                            className={this.decorateCSS("seconds-container")}
                          >
                            <Base.H1
                              className={this.decorateCSS("seconds-count")}
                            >
                              {this.getComponentState("seconds")}
                            </Base.H1>
                            <div className={this.decorateCSS("seconds-text")}>
                              SECONDS
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {this.castToString(title) && (
                    <Base.SectionTitle
                      className={`${this.decorateCSS("title")} ${
                        !this.getPropValue("backgroundImage") &&
                        this.decorateCSS("without-image")
                      }`}
                    >
                      {title}
                    </Base.SectionTitle>
                  )}
                </div>
              </div>
            )}
            {home && (
              <div className={this.decorateCSS("right-side")}>
                <ComposerLink path={this.getPropValue("url")}>
                  <div className={this.decorateCSS("home")}>
                    <div className={this.decorateCSS("home-text")}>
                      <div>{this.getPropValue("home")}</div>
                    </div>
                  </div>
                </ComposerLink>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default COMING_SOON2;
