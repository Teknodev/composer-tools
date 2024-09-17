import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats8.module.scss";

type ICard = {
  title: number;
  description: string;
};

class Stats8Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "headerTitle",
      displayer: "Title",
      value: "Hello We are DSN Grid",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value:
        "We’re a creative agency with an expertise in make custom websites",
    });

    this.addProp({
      type: "boolean",
      key: "showLine",
      displayer: "Show Line",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Founded in 2000, Dsn Grid has become one of the best Digital Agency in Themeforest. Blue money going forward, but deploy to production. First-order optimal strategies build on a culture of contribution and inclusion so those options. Established in 2001, Alpha Creative quickly rose to be a leading design studio on Dribbble. Green energy investments flourish, while scaling to mass adoption. High-performance solutions are built on innovation and teamwork, embracing creativity and forward-thinking.",
    });

    this.addProp({
      type: "string",
      key: "author",
      displayer: "Author",
      value: "Salvador Dali",
    });

    this.addProp({
      type: "string",
      key: "authorRole",
      displayer: "Author Role",
      value: "Digital Artist",
    });

    this.addProp({
      type: "boolean",
      key: "showBackground",
      displayer: "Show Background",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "number",
              key: "title",
              displayer: "Value",
              value: 37,
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Business Partner",
            },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            {
              type: "number",
              key: "title",
              displayer: "Value",
              value: 19,
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Satisfied Customers",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "number",
      key: "overlayNumber",
      displayer: "Overlay Number",
      value: 25,
    });

    this.addProp({
      type: "string",
      key: "overlayDescription",
      displayer: "Overlay Description",
      value: "YEARS OF DIGITAL EXPERIENCE",
    });

    this.addProp({
      type: "image",
      key: "imageSrc",
      displayer: "Image Source",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a36aa42f8a5b002ce6a087?alt=media",
    });

    this.addProp({
      type: "number",
      key: "animationDuration",
      displayer: "Number Animation Duration (ms)",
      value: 500,
    });

    this.castToObject<ICard[]>("stats").map((statsData, index) =>
      this.setComponentState(`number-${index}`, 0)
    );

    let interval = setInterval(() => {
      this.castToObject<ICard[]>("stats").map(
        (statData: ICard, index: number) => {
          let currentNumber = this.getComponentState(`number-${index}`);
          if (currentNumber != statData.title) {
            this.setComponentState(
              `number-${index}`,
              Math.min(
                statData.title,
                currentNumber +
                  Math.ceil(
                    statData.title /
                      Math.round(this.getPropValue("animationDuration") / 30)
                  )
              ) || 0
            );
          }
        }
      );
    }, 30);
  }

  getName(): string {
    return "Stats 8";
  }

  render() {
    const statsData = this.castToObject<ICard[]>("stats");
    const imageSrc = this.getPropValue("imageSrc");
    const title = this.getPropValue("headerTitle");
    const isTitleExist = this.castToString(title);
    const subtitle = this.getPropValue("subtitle");
    const isSubTitleExist = this.castToString(subtitle);
    const description = this.getPropValue("description");
    const isDesExist = this.castToString(description);
    const author = this.getPropValue("author") ;
    const isAuthorExist = this.castToString(author);
    const authorRole = this.getPropValue("authorRole");
    const isAuthorRoleExist = this.castToString(authorRole);
    const overlayNumber = this.getPropValue("overlayNumber");
    const overlayDescription = this.castToString(
      this.getPropValue("overlayDescription")
    );

    const isContentPresent =
      isTitleExist ||
      isSubTitleExist ||
      isDesExist ||
      isAuthorExist ||
      isAuthorRoleExist ||
      statsData.length > 0;

    return (
      <div className={this.decorateCSS("container")}>
        <div
          className={
            this.decorateCSS("max-content") +
            (!isContentPresent ? " full-width" : "")
          }
        >
          {isContentPresent && (
            <div className={this.decorateCSS("stats8-page")}>
              <div className={this.decorateCSS("content")}>
                {isTitleExist && (
                  <h2
                    className={
                      this.decorateCSS("title") +
                      " " +
                      this.decorateCSS("text-uppercase")
                    }
                  >
                    {title}
                  </h2>
                )}

                {isSubTitleExist && (
                  <h6 className={this.decorateCSS("subtitle")}>{subtitle}</h6>
                )}

                {(isTitleExist || isSubTitleExist) && this.getPropValue("showLine") && (
                  <hr className={this.decorateCSS("line")} />
                )}

                {isDesExist && (
                  <p className={this.decorateCSS("description")}>
                    {description}
                  </p>
                )}

                {isAuthorExist && (
                  <h5 className={this.decorateCSS("author")}>{author}</h5>
                )}

                {isAuthorRoleExist && (
                  <span className={this.decorateCSS("author-role")}>
                    {this.getPropValue("showBackground") && (
                      <span
                        className={this.decorateCSS("author-role-background")}
                      ></span>
                    )}
                    {authorRole}
                  </span>
                )}

                <div className={this.decorateCSS("stats")}>
                  {statsData.map(
                    (statData: ICard, indexStat: number) =>
                      statData.title &&
                      statData.description && (
                        <div className={this.decorateCSS("stat-border")}>
                          <div
                            key={indexStat}
                            className={`${this.decorateCSS("stat")} ${
                              this.getPropValue("showBackground")
                                ? this.decorateCSS("with-background")
                                : this.decorateCSS("no-background")
                            }`}
                          >
                            <span className={this.decorateCSS("stat-title")}>
                              {this.getComponentState(`number-${indexStat}`)}
                            </span>
                            <h5
                              className={this.decorateCSS("stat-description")}
                            >
                              {statData.description}
                            </h5>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          )}
          {imageSrc && (
            <div className={this.decorateCSS("stats8-page")}>
              <div className={this.decorateCSS("image-container")}>
                <div className={this.decorateCSS("image-container-border")}>
                  <img src={imageSrc} alt="Digital Experience" />
                  {(overlayNumber || overlayDescription) && (
                    <div className={this.decorateCSS("overlay")}>
                      {overlayNumber && (
                        <span className={this.decorateCSS("number")}>
                          {overlayNumber}
                        </span>
                      )}
                      {overlayDescription && (
                        <p className={this.decorateCSS("description")}>
                          {overlayDescription}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Stats8Page;