import { BaseComingSoon } from "composer-tools/editor-components/EditorComponent";
import styles from "./coming-soon1.module.scss";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type ButtonType = INPUTS.CastedButton;
type ButtonsArray = ButtonType[];

class ComingSoon1 extends BaseComingSoon {
  interval: NodeJS.Timeout;

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Coming Soon",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value: "This page is currently under development. Stay tuned!",
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
      type:"string",
      key:"dayText",
      displayer:"Day Text",
      value:"DAYS"
    })
    this.addProp({
      type:"string",
      key:"hourText",
      displayer:"Hour Text",
      value:"HOURS"
    })
    this.addProp({
      type:"string",
      key:"minutesText",
      displayer:"Minutes Text",
      value:"MINUTES"
    })
    this.addProp({
      type:"string",
      key:"secondText",
      displayer:"Second Text",
      value:"SECONDS"
    })
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Go home", "", null, null, "Primary"),
      ],
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
    return "Coming Soon 1";
  }

  render() {
    const buttons = this.castToObject<ButtonsArray>("buttons");
    const isTitleExits = this.castToString(this.getPropValue("title"));
    const isDescription = this.castToString(this.getPropValue("description"));

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content-box")}>
            <div className={this.decorateCSS("content")}>
              {(buttons.length > 0 || isTitleExits || isDescription) && (
                <div className={this.decorateCSS("top-side")}>
                  <Base.VerticalContent
                    className={this.decorateCSS("top-content")}
                  >
                    {isTitleExits && (
                      <Base.SectionTitle
                        className={`${this.decorateCSS("title")}`}
                      >
                        {this.getPropValue("title")}
                      </Base.SectionTitle>
                    )}
                    {isDescription && (
                      <div className={`${this.decorateCSS("description")}`}>
                        {this.getPropValue("description")}
                      </div>
                    )}
                    {buttons.length > 0 && (
                      <div className={`${this.decorateCSS("button-wrapper")}`}>
                        {buttons.map((button: ButtonType, index: number) => (
                          <>
                            {this.castToString(button.text) && (
                              <ComposerLink key={index} path={button.url}>
                                <Base.Button
                                  buttonType={button.type}
                                  className={this.decorateCSS("button")}
                                >
                                  {button.text}
                                </Base.Button>
                              </ComposerLink>
                            )}
                          </>
                        ))}
                      </div>
                    )}
                  </Base.VerticalContent>
                </div>
              )}

              {this.getPropValue("dateTime") && (
                <div className={this.decorateCSS("bottom-side")}>
                  <div className={this.decorateCSS("days-container")}>
                    <Base.H1 className={this.decorateCSS("days-count")}>
                      {this.getComponentState("days")}
                    </Base.H1>
                    {this.castToString(this.getPropValue("dayText")) && (
                      <div className={this.decorateCSS("days-text")}>{this.getPropValue("dayText")}</div>
                    )}
                  </div>

                  <div className={this.decorateCSS("hours-container")}>
                    <Base.H1 className={this.decorateCSS("hours-count")}>
                      {this.getComponentState("hours")}
                    </Base.H1>
                    {this.castToString(this.getPropValue("hourText")) && (
                      <div className={this.decorateCSS("hours-text")}>{this.getPropValue("hourText")}</div>
                    )}
                  </div>

                  <div className={this.decorateCSS("minutes-container")}>
                    <Base.H1 className={this.decorateCSS("minutes-count")}>
                      {this.getComponentState("minutes")}
                    </Base.H1>
                    {this.castToString(this.getPropValue("minutesText")) && (
                      <div className={this.decorateCSS("minutes-text")}>{this.getPropValue("minutesText")}</div>
                    )}
                  </div>

                  <div className={this.decorateCSS("seconds-container")}>
                    <Base.H1 className={this.decorateCSS("seconds-count")}>
                      {this.getComponentState("seconds")}
                    </Base.H1>
                    {this.castToString(this.getPropValue("secondText")) && (
                      <div className={this.decorateCSS("seconds-text")}>{this.getPropValue("secondText")}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ComingSoon1;
