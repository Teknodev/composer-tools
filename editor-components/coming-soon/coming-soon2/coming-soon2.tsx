import React from "react";
import { BaseComingSoon } from "../../EditorComponent";
import styles from "./coming-soon2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

class COMING_SOON2 extends BaseComingSoon {
  interval: NodeJS.Timeout;
  mobileRef: React.RefObject<any>;
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Title1",
      value: "Something",
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title2",
      value: "Is",
    });
    this.addProp({
      type: "string",
      key: "title3",
      displayer: "Title3",
      value: "Coming",
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
      displayer: "Button URL",
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
    this.addProp({
      type: "string",
      key: "dayText",
      displayer: "Day Text",
      value: "DAYS",
    });
    this.addProp({
      type: "string",
      key: "hourText",
      displayer: "Hour Text",
      value: "HOURS",
    });
    this.addProp({
      type: "string",
      key: "minuteText",
      displayer: "Minute Text",
      value: "MINUTES",
    });
    this.addProp({
      type: "string",
      key: "secondText",
      displayer: "Second Text",
      value: "SECONDS",
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
  

  onComponentWillUnmount() {
    clearInterval(this.interval);
  }
  static getName(): string {
    return "Coming Soon 2";
  }
  render() {
    const title1 = this.getPropValue("title1");
    const title2 = this.getPropValue("title2");
    const title3 = this.getPropValue("title3");    
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
            {(this.getPropValue("dateTime") || this.castToString(title1) || this.castToString(title2) || this.castToString(title3)) && (
              <div className={this.decorateCSS("left-side")}>
                <div className={this.decorateCSS("left-text")}>
                {this.castToString(title1) && (
                    <Base.SectionTitle
                      className={`${this.decorateCSS("title")} ${
                        !this.getPropValue("backgroundImage") &&
                        this.decorateCSS("without-image")
                      }`}
                    >
                      {title1}
                    </Base.SectionTitle>
                  )}
                  <div className={this.decorateCSS("counter-and-title2")}>
                  {this.getPropValue("dateTime") && (
                    <div className={this.decorateCSS("counter")}>
                      {this.getPropValue("dateTime") && (
                        <div className={this.decorateCSS("counter-content")}>
                          <div className={this.decorateCSS("counter-container")}>
                            <Base.H1 className={this.decorateCSS("counter-count")}>
                              {this.getComponentState("days")}
                            </Base.H1>
                            {this.castToString(this.getPropValue("dayText")) && (
                              <div className={this.decorateCSS("counter-text")}>
                                {this.getPropValue("dayText")}
                              </div>
                            )}
                          </div>

                          <div className={this.decorateCSS("counter-container")}>
                            <Base.H1
                              className={this.decorateCSS("counter-count")}
                            >
                              {this.getComponentState("hours")}
                            </Base.H1>
                            {this.castToString(this.getPropValue("hourText")) && (
                              <div className={this.decorateCSS("counter-text")}>
                                {this.getPropValue("hourText")}
                              </div>
                            )}
                          </div>

                          <div
                            className={this.decorateCSS("counter-container")}
                          >
                            <Base.H1
                              className={this.decorateCSS("counter-count")}
                            >
                              {this.getComponentState("minutes")}
                            </Base.H1>
                            {this.castToString(this.getPropValue("minuteText")) && (
                              <div className={this.decorateCSS("counter-text")}>
                                {this.getPropValue("minuteText")}
                              </div>
                            )}
                          </div>

                          <div
                            className={this.decorateCSS("counter-container")}
                          >
                            <Base.H1
                              className={this.decorateCSS("counter-count")}
                            >
                              {this.getComponentState("seconds")}
                            </Base.H1>
                            {this.castToString(this.getPropValue("secondText")) && (
                              <div className={this.decorateCSS("counter-text")}>
                                {this.getPropValue("secondText")}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {this.castToString(title2) && (
                    <Base.SectionTitle
                      className={`${this.decorateCSS("title2")} ${
                        !this.getPropValue("backgroundImage") &&
                        this.decorateCSS("without-image")
                      }`}
                    >
                      {title2}
                    </Base.SectionTitle>
                  )}
                  </div>
    
                  {this.castToString(title3) && (
                    <Base.SectionTitle
                      className={`${this.decorateCSS("title")} ${
                        !this.getPropValue("backgroundImage") &&
                        this.decorateCSS("without-image")
                      }`}
                    >
                      {title3}
                    </Base.SectionTitle>
                  )}
                </div>
              </div>
            )}
            {(this.getPropValue("dateTime") || this.castToString(title1) || this.castToString(title2) || this.castToString(title3)) && (
              <div className={this.decorateCSS("left-side-mobile")}>
                <div className={this.decorateCSS("left-text")}>
                  <div className={this.decorateCSS("counter-and-title2")}>
                  {this.getPropValue("dateTime") && (
                    <div className={this.decorateCSS("counter")}>
                      {this.getPropValue("dateTime") && (
                        <div className={this.decorateCSS("counter-content")}>
                          <div className={this.decorateCSS("counter-container")}>
                            <Base.H1 className={this.decorateCSS("counter-count")}>
                              {this.getComponentState("days")}
                            </Base.H1>
                           {this.castToString(this.getPropValue("dayText")) && (
                              <div className={this.decorateCSS("counter-text")}>
                                {this.getPropValue("dayText")}
                              </div>
                            )}
                          </div>

                          <div className={this.decorateCSS("counter-container")}>
                            <Base.H1
                              className={this.decorateCSS("counter-count")}
                            >
                              {this.getComponentState("hours")}
                            </Base.H1>
                            {this.castToString(this.getPropValue("hourText")) && (
                              <div className={this.decorateCSS("counter-text")}>
                                {this.getPropValue("hourText")}
                              </div>
                            )}
                          </div>

                          <div
                            className={this.decorateCSS("counter-container")}
                          >
                            <Base.H1
                              className={this.decorateCSS("counter-count")}
                            >
                              {this.getComponentState("minutes")}
                            </Base.H1>
                            {this.castToString(this.getPropValue("minuteText")) && (
                              <div className={this.decorateCSS("counter-text")}>
                                {this.getPropValue("minuteText")}
                              </div>
                            )}
                          </div>

                          <div
                            className={this.decorateCSS("counter-container")}
                          >
                            <Base.H1
                              className={this.decorateCSS("counter-count")}
                            >
                              {this.getComponentState("seconds")}
                            </Base.H1>
                            {this.castToString(this.getPropValue("secondText")) && (
                              <div className={this.decorateCSS("counter-text")}>
                                {this.getPropValue("secondText")}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  </div>
                  {this.castToString(title1) && (
                    <Base.SectionTitle
                      className={`${this.decorateCSS("title")} ${
                        !this.getPropValue("backgroundImage") &&
                        this.decorateCSS("without-image")
                      }`}
                    >
                      {title1}
                    </Base.SectionTitle>
                  )}
                  {this.castToString(title2) && (
                    <Base.SectionTitle
                      className={`${this.decorateCSS("title2")} ${
                        !this.getPropValue("backgroundImage") &&
                        this.decorateCSS("without-image")
                      }`}
                    >
                      {title2}
                    </Base.SectionTitle>
                  )}
                  {this.castToString(title3) && (
                    <Base.SectionTitle
                      className={`${this.decorateCSS("title")} ${
                        !this.getPropValue("backgroundImage") &&
                        this.decorateCSS("without-image")
                      }`}
                    >
                      {title3}
                    </Base.SectionTitle>
                  )}
                </div>
              </div>
            )}
            {home && (
              <div className={this.decorateCSS("right-side")}>
                <ComposerLink path={this.getPropValue("url")}>
                  <div className={this.decorateCSS("button")}>
                    <div className={this.decorateCSS("button-text")}>
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
