import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats8.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type CardData = {
  counter: React.JSX.Element;
  description: React.JSX.Element;
};

class Stats8Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hello We are DSN Grid",
    });

    this.addProp({
      type: "string",
      key: "description1",
      displayer: "First Description",
      value: "We’re a creative agency with an expertise in make custom websites",
    });

    this.addProp({
      type: "boolean",
      key: "showLine",
      displayer: "Line",
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
      type: "object",
      key: "person",
      displayer: "Person",
      value: [
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "Salvador Dali",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "Digital Artist",
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "showBackground",
      displayer: "Background",
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
              type: "string",
              key: "counter",
              displayer: "Value",
              value: "37",
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
              type: "string",
              key: "counter",
              displayer: "Value",
              value: "19",
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
      type: "object",
      key: "media",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "source",
          displayer: "Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a36aa42f8a5b002ce6a087?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
        {
          type: "string",
          key: "badgeNumber",
          displayer: "Badge Number",
          value: "25",
        },
        {
          type: "string",
          key: "badgeDescription",
          displayer: "Badge Description",
          value: "YEARS OF DIGITAL EXPERIENCE",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "settings",
      displayer: "Settings",
      value: [
        {
          type: "boolean",
          key: "shouldAnimate",
          displayer: "Animate Numbers",
          value: true,
        },
        {
          type: "number",
          key: "animationDuration",
          displayer: "Animation Duration (ms)",
          value: 2000,
        },
      ],
    });
  }

  static getName(): string {
    return "Stats 8";
  }

  render() {
    const statsData = this.castToObject<CardData[]>("stats");
    const media = this.castToObject<any>("media");
    const imageSrc = media?.source as TypeMediaInputValue;
    const showOverlay = media?.overlay;
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);
    const subtitle = this.getPropValue("subtitle");
    const isSubtitleExist = this.castToString(subtitle);
    const description1 = this.getPropValue("description1");
    const isDescription1Exist = this.castToString(description1);
    const description = this.getPropValue("description");
    const isDesExist = this.castToString(description);
    const person = this.castToObject<any>("person");
    const personName = person?.name;
    const isPersonNameExist = this.castToString(personName);
    const position = person?.position;
    const isPositionExist = this.castToString(position);
    const badgeDescription = this.castToString(media?.badgeDescription);
    const badgeNumberRaw = (this.castToString(media?.badgeNumber) as string) || "";
    const showBackground = this.getPropValue("showBackground");
    const isContentPresent = isSubtitleExist || isTitleExist || isDescription1Exist || isDesExist || isPersonNameExist || isPositionExist || statsData.length > 0;
    const alignment = Base.getContentAlignment();

    const settings = this.castToObject<any>("settings");
    const shouldAnimate = settings?.shouldAnimate ?? true;
    const animationDuration = (settings?.animationDuration ?? 2000) as number;

    const AnimatedNumber = ({ raw, className }: { raw: string; className: string }) => {
      const ref = React.useRef<HTMLSpanElement>(null);
      const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

      const rawNumber = raw || "";
      const prefix = rawNumber.match(/^[^\d]*/)?.[0] ?? "";
      const suffix = rawNumber.match(/[^\d]*$/)?.[0] ?? "";
      const core = rawNumber.slice(prefix.length, rawNumber.length - suffix.length);
      const isNumeric = /\d/.test(core);
      const target = isNumeric ? parseFloat(core.replace(/,/g, "")) : NaN;
      const decimals = core.includes(".") ? core.split(".")[1]?.length ?? 0 : 0;
      const useGrouping = /,/.test(core);
      const reduceMotion = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      const animatable = shouldAnimate && isNumeric && !reduceMotion;

      const format = (n: number) => prefix + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping }) + suffix;

      const [display, setDisplay] = React.useState<string>(() => (rawNumber ? (animatable ? format(0) : rawNumber) : ""));

      React.useEffect(() => {
        if (!rawNumber) {
          setDisplay("");
          return;
        }
        if (!animatable) {
          setDisplay(rawNumber);
          return;
        }
        const node = ref.current;
        if (!node || typeof IntersectionObserver === "undefined") {
          setDisplay(rawNumber);
          return;
        }
        const clear = () => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        };
        const run = () => {
          clear();
          setDisplay(format(0));
          const steps = Math.max(1, Math.round(animationDuration / 30));
          const increment = target / steps;
          let current = 0;
          intervalRef.current = setInterval(() => {
            current += increment;
            if (current >= target) {
              clear();
              setDisplay(rawNumber);
              return;
            }
            setDisplay(format(current));
          }, 30);
        };
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                run();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.4 }
        );
        observer.observe(node);
        return () => {
          observer.disconnect();
          clear();
        };
      }, [rawNumber, animatable, animationDuration, target]);

      if (!rawNumber) return null;

      return (
        <span ref={ref} className={className}>
          {display}
        </span>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isContentPresent && (
            <div className={this.decorateCSS("stats8-page")}>
              <div className={`${this.decorateCSS("content")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
                {(isSubtitleExist || isTitleExist || isDescription1Exist) && (
                  <Base.VerticalContent className={this.decorateCSS("header-container")}>
                    {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                    {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title") + " " + this.decorateCSS("text-uppercase")}>{title}</Base.SectionTitle>}
                    {isDescription1Exist && <Base.SectionDescription className={this.decorateCSS("description")}>{description1}</Base.SectionDescription>}
                  </Base.VerticalContent>
                )}

                {(isTitleExist || isDescription1Exist) && this.getPropValue("showLine") && <hr className={this.decorateCSS("line")} />}

                {(isDesExist || isPersonNameExist || isPositionExist) && (
                  <Base.VerticalContent className={this.decorateCSS("author-container")}>
                    {isDesExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
                    {isPersonNameExist && <Base.P className={this.decorateCSS("author")}>{personName}</Base.P>}
                    {isPositionExist && (
                      <Base.Row className={this.decorateCSS("author-role-container")}>
                        <Base.P className={this.decorateCSS("author-role")}>
                          {showBackground && <span className={this.decorateCSS("author-role-background")}></span>}
                          {position}
                        </Base.P>
                      </Base.Row>
                    )}
                  </Base.VerticalContent>
                )}

                {statsData.length > 0 && (
                  <Base.VerticalContent className={this.decorateCSS("stats-container")}>
                    <Base.Row className={this.decorateCSS("stats")}>
                      {statsData.map((statData: CardData, indexStat: number) => {
                        const counterExist = (this.castToString(statData.counter) as string) || "";
                        const descriptionExist = this.castToString(statData.description);
                        return (
                          (counterExist || descriptionExist) && (
                            <div key={indexStat} className={`${this.decorateCSS("stat-border")} ${!imageSrc?.url && this.decorateCSS("stat-border-full-width")}`}>
                              <div className={`${this.decorateCSS("stat")} ${showBackground ? this.decorateCSS("with-background") : this.decorateCSS("no-background")}`}>
                                {counterExist && <AnimatedNumber raw={counterExist} className={this.decorateCSS("stat-counter")} />}
                                {descriptionExist && <Base.P className={this.decorateCSS("stat-description")}>{statData.description}</Base.P>}
                              </div>
                            </div>
                          )
                        );
                      })}
                    </Base.Row>
                  </Base.VerticalContent>
                )}
              </div>
            </div>
          )}
          {imageSrc?.url && (
            <div className={this.decorateCSS("stats8-page")}>
              <div className={this.decorateCSS("image-container")}>
                <div className={this.decorateCSS("image-container-border")}>
                  <Base.Media value={imageSrc} className={this.decorateCSS("image")} />
                  {showOverlay && <div className={this.decorateCSS("overlay")}></div>}
                  {(badgeNumberRaw || badgeDescription) && (
                    <div className={this.decorateCSS("stat-badge")}>
                      {badgeNumberRaw && <AnimatedNumber raw={badgeNumberRaw} className={this.decorateCSS("number")} />}
                      {badgeDescription && <Base.P className={this.decorateCSS("description")}>{media?.badgeDescription}</Base.P>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats8Page;
