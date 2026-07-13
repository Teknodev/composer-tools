import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats10.module.scss";

import { Base } from "../../../composer-base-components/base/base";

type ProgressItem = {
  progressTitle: string;
  progress: number;
  progressText: React.JSX.Element;
  icon: string | TypeMediaInputValue;
};

class Stats10 extends BaseStats {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "image1",
      displayer: "1st Image",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://hq-blinkpage-dev-1b2e6.s3.eu-central-1.amazonaws.com/user_content/6a5483e5d49b8ff2d93e06fb/6a548fe82754d786daab4f2c/library/psychologist-therapy-group-support-writing-notes-2023-11-27-05-30-45-utc.jpg",
      },
    });
    this.addProp({
      type: "media",
      key: "image2",
      displayer: "2nd Image",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://hq-blinkpage-dev-1b2e6.s3.eu-central-1.amazonaws.com/user_content/6a5483e5d49b8ff2d93e06fb/6a548fe82754d786daab4f2c/library/psychology-mental-health-and-support-with-a-woman-2023-11-27-05-29-05-utc.jpg",
      },
    });
    this.addProp({
      type: "media",
      key: "playIcon",
      displayer: "Play Icon",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "icon", name: "FaRegPlayCircle" },
    });
    this.addProp({
      type: "media",
      displayer: "Video",
      key: "video",
      additionalParams: { availableTypes: ["video", "icon"] },
      value: {
        type: "video",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e75d50181a1002c334f4f?alt=media&timestamp=1719563750188",
      },
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "WHY CHOOSE US",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Committed to Your Mental Well-being",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
              key: "progressTitle",
              displayer: "Progress Title",
              value: "Confidentiality",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 90,
            },
            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "90%",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "CgPlayButtonO" },
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
              key: "progressTitle",
              displayer: "Progress Title",
              value: "Consumer Satisfaction",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 95,
            },

            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "95%",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "CgPlayButtonO" },
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
              key: "progressTitle",
              displayer: "Progress Title",
              value: "Therapy",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 98,
            },

            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "98%",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "CgPlayButtonO" },
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
              key: "progressTitle",
              displayer: "Progress Title",
              value: "Counseling",
            },
            {
              type: "number",
              key: "progress",
              displayer: "Progress",
              value: 85,
            },

            {
              type: "string",
              key: "progressText",
              displayer: "Progress Text",
              value: "85%",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: { availableTypes: ["image", "icon"] },
              value: { type: "icon", name: "CgPlayButtonO" },
            },
          ],
        },
      ],
    });
    this.setComponentState("is_video_visible", false);
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
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
    return "Stats 10";
  }

  render() {
    const alignment = Base.getContentAlignment();
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const itemsLength = (this.getPropValue("stats") || []).length;
    const image1 = this.getPropValue("image1") as TypeMediaInputValue;
    const image2 = this.getPropValue("image2") as TypeMediaInputValue;
    const video = this.getPropValue("video") as TypeMediaInputValue;
    const videoLinkExist = video && ("url" in video ? video.url : "name" in video ? video.name : "");
    const playIcon = this.getPropValue("playIcon") as TypeMediaInputValue;
    const playIconExist = playIcon && (playIcon?.name || playIcon?.url);

    const shouldAnimate = this.castToObject<any>("settings")?.shouldAnimate ?? true;
    const animationDuration = (this.castToObject<any>("settings")?.animationDuration ?? 2000) as number;

    const hoverAnimation = this.getPropValue("hoverAnimation").join(" ");

    const AnimatedItem = ({ item }: { item: ProgressItem }) => {
      const ref = React.useRef<HTMLDivElement>(null);
      const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

      const rawNumber = (this.castToString(item.progressText) as string) || "";
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

      const iconExist = typeof item.icon === "object" ? (item.icon?.name || item.icon?.url) : item.icon;
      const titleExist = this.castToString(item.progressTitle);
      const textExist = !!rawNumber;
      if (!iconExist && !titleExist && !textExist) return null;

      return (
        <div
          ref={ref}
          className={this.decorateCSS("item")}
          data-animation={hoverAnimation}
        >
          {(iconExist || titleExist || textExist) && (
            <div className={this.decorateCSS("progress-content")}>
              {(iconExist || titleExist) && (
                <div className={this.decorateCSS("progress-title-container")}>
                  {iconExist && (
                    <div className={this.decorateCSS("progress-title-icon")}>
                      <Base.Media value={typeof item.icon === "object" ? item.icon : { type: "icon", name: item.icon }} className={this.decorateCSS("icon")} />
                    </div>
                  )}
                  {titleExist && (
                    <div className={this.decorateCSS("progress-title")}>
                      {item.progressTitle}
                    </div>
                  )}
                </div>
              )}
              {textExist && (
                <div className={this.decorateCSS("progress-text-container")}>
                  <div className={this.decorateCSS("progress-text")}>
                    {display}
                  </div>
                </div>
              )}
            </div>
          )}

          {textExist && (
            <div className={this.decorateCSS("progress-bar-container")}>
              <div className={this.decorateCSS("progress-bar")}>
                <div
                  className={this.decorateCSS("progress")}
                  style={{
                    width: `${item.progress}%`,
                    '--progress-width': `${item.progress}%`,
                  } as React.CSSProperties}
                />
              </div>
            </div>
          )}
        </div>
      );
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(image1?.url || image2?.url) && (
              <div className={this.decorateCSS("left-page")}>
                {image1?.url && (
                  <div
                    className={`${this.decorateCSS("up-image")} ${!image2?.url && this.decorateCSS("without-image2")}`}
                    data-animation={this.getPropValue("hoverAnimation").join(" ")}
                  >
                    <Base.Media
                      className={this.decorateCSS("image1")}
                      value={image1}
                    />
                  </div>
                )}
                {image2?.url && (
                  <div
                    className={`${this.decorateCSS("down-image")}
                      ${!image1?.url && this.decorateCSS("without-image1")}
                      ${this.getComponentState("is_video_visible") ? this.decorateCSS("video-active") : ""}`
                    }
                    data-animation={this.getPropValue("hoverAnimation").join(" ")}
                  >
                    <Base.Media
                      className={this.decorateCSS("image2")}
                      value={image2}
                    />
                    <div className={this.decorateCSS("player-container")} onClick={() => {
                      this.setComponentState("is_video_visible", true)
                    }}>
                     {videoLinkExist && playIconExist && <div className={this.decorateCSS("icon-container")}>
                        <Base.Media value={this.getPropValue("playIcon")} className={this.decorateCSS("play-icon")} />
                      </div>}
                    </div>
                    {this.getComponentState("is_video_visible") && (
                      <div
                        className={this.decorateCSS("image")}
                        onClick={() => this.setComponentState("is_video_visible", false)}
                      >
                        {videoLinkExist && <div className={this.decorateCSS("player")} onClick={(event) => event.stopPropagation()}>
                          <Base.Media value={video} className={this.decorateCSS("image2")} />
                        </div>}

                      </div>
                    )}

                  </div>
                )}
              </div>
            )}

            {(subtitle || title || description || (itemsLength > 0)) && (
              <div className={`${this.decorateCSS("right-page")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>
                {(subtitle || title || description) && (
                  <Base.VerticalContent className={this.decorateCSS("top-section")}>
                    {subtitle && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
                      </Base.SectionSubTitle>
                    )}
                    {title && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.SectionTitle>
                    )}
                    {description && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {this.getPropValue("description")}
                      </Base.SectionDescription>
                    )}
                  </Base.VerticalContent>
                )}

                {itemsLength > 0 && (
                  <Base.VerticalContent className={this.decorateCSS("middle-section")}>
                    <Base.Row className={this.decorateCSS("progress-container")}>
                      {this.castToObject<ProgressItem[]>("stats").map(
                        (item: ProgressItem, index: number) => (
                          <AnimatedItem key={index} item={item} />
                        )
                      )}
                    </Base.Row>
                  </Base.VerticalContent>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats10;
