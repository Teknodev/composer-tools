import { BaseFeature } from "../../EditorComponent";
import styles from "./feature25.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import React from "react";
import { TableView } from "@mui/icons-material";

type ITabs = {
  tabText: React.JSX.Element;
  title: React.JSX.Element;
  text: React.JSX.Element;
  image: string;
  description: React.JSX.Element;
  button: INPUTS.CastedButton;
};

class Feature25 extends BaseFeature {
  private tabContentsRef: React.RefObject<HTMLDivElement | null>;
  private tabContentRefs: React.RefObject<HTMLDivElement | null>[];
  private activeTabIndex: number = 0;

  constructor(props?: any) {
    super(props, styles);

    this.tabContentsRef = React.createRef<HTMLDivElement | null>();
    this.tabContentRefs = [];

    this.addProp({
      type: "array",
      key: "tabs",
      displayer: "Tabs",
      value: [
        {
          type: "object",
          key: "tab",
          displayer: "Tab text",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Tab",
              value: "Effortless Setup",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69046abb2d05c1002bf1d255?alt=media",
            },
            {
              type: "string",
              key: "text",
              displayer: "Subtitle",
              value: "How it works",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Effortless Setup",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Get your online business ready to accept credit cards. We've worked with countless startups to become established brands, with our flexible, no-fuss setup process.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Learn More",
              "",
              null,
              null,
              "Primary"
            ),
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab Text",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Tab",
              value: "Consolidated Payments",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6904685f2d05c1002bf1c98a?alt=media",
            },
            {
              type: "string",
              key: "text",
              displayer: "Subtitle",
              value: "How it works",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Consolidated Payments",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Manage all your payments through a single unified interface. Everything you need in one, organised place.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Learn More",
              "",
              null,
              null,
              "Primary"
            ),
          ],
        },
        {
          type: "object",
          key: "tab",
          displayer: "Tab Text",
          value: [
            {
              type: "string",
              key: "tabText",
              displayer: "Tab",
              value: "Global Ready",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6904687f2d05c1002bf1ca45?alt=media",
            },
            {
              type: "string",
              key: "text",
              displayer: "Subtitle",
              value: "How it works",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Global Ready",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Reach the target markets you want. We keep your payments straightforward and efficient, no matter the complexity of the region.",
            },
            INPUTS.BUTTON(
              "button",
              "Button",
              "Learn More",
              "",
              null,
              null,
              "Primary"
            ),
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Feature 25";
  }

  componentDidMount() {
    if (this.tabContentsRef.current) {
      this.tabContentsRef.current.addEventListener("scroll", this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (this.tabContentsRef.current) {
      this.tabContentsRef.current.removeEventListener(
        "scroll",
        this.handleScroll
      );
    }
  }

  handleScroll = () => {
    if (!this.tabContentsRef.current) return;

    const container = this.tabContentsRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    this.tabContentRefs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });

    if (this.activeTabIndex !== closestIndex) {
      this.activeTabIndex = closestIndex;
      this.forceUpdate();
    }
  };

  handleTabClick = (index: number) => {
    if (this.tabContentRefs[index]?.current) {
      this.tabContentRefs[index].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  render() {
    const tabs = this.castToObject<ITabs[]>("tabs");

    this.tabContentRefs = tabs.map(() =>
      React.createRef<HTMLDivElement | null>()
    );

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("tabs-wrapper")}>
            <div className={this.decorateCSS("tabs")}>
              {tabs.map((tab: ITabs, index: number) => {
                const hasText = !!this.castToString(tab.text);
                const hasTitle = !!this.castToString(tab.title);
                const hasDesc = !!this.castToString(tab.description);
                const hasButton = !!this.castToString(tab.button?.text);
                const hasImage = !!tab.image;
                if (
                  !hasText &&
                  !hasTitle &&
                  !hasDesc &&
                  !hasButton &&
                  !hasImage
                )
                  return null;

                return (
                  <div
                    key={index}
                    className={`${this.decorateCSS("tab")} ${
                      this.activeTabIndex === index
                        ? this.decorateCSS("active")
                        : ""
                    }`}
                    onClick={() => this.handleTabClick(index)}
                  >
                    <Base.P className={this.decorateCSS("tab-text")}>
                      {tab.tabText}
                    </Base.P>
                  </div>
                );
              })}
            </div>

            {tabs?.length > 0 && (
              <Base.VerticalContent
                className={this.decorateCSS("vertical-content")}
                ref={this.tabContentsRef}
              >
                {tabs.map((tab: ITabs, index: number) => {
                  const hasText = !!this.castToString(tab.text);
                  const hasTitle = !!this.castToString(tab.title);
                  const hasDesc = !!this.castToString(tab.description);
                  const hasButton = !!this.castToString(tab.button?.text);
                  const hasImage = !!tab.image;

                  const isTextEmpty =
                    !hasText && !hasTitle && !hasDesc && !hasButton;

                  if (
                    !hasText &&
                    !hasTitle &&
                    !hasDesc &&
                    !hasButton &&
                    !hasImage
                  )
                    return null;

                  return (
                    <div
                      key={index}
                      className={`${this.decorateCSS("tab-content")} ${
                        isTextEmpty ? this.decorateCSS("no-text") : ""
                      }`}
                      ref={this.tabContentRefs[index]}
                    >
                      {tab.image && (
                        <div className={this.decorateCSS("image-wrapper")}>
                          <img src={tab.image} alt={tab.image} />
                        </div>
                      )}

                      {!isTextEmpty && (
                        <div className={this.decorateCSS("text-content")}>
                          {hasText && (
                            <Base.SectionSubTitle
                              className={this.decorateCSS("subtitle")}
                            >
                              {tab.text}
                            </Base.SectionSubTitle>
                          )}
                          {hasTitle && (
                            <Base.SectionTitle
                              className={this.decorateCSS("title")}
                            >
                              {tab.title}
                            </Base.SectionTitle>
                          )}
                          {hasDesc && (
                            <Base.SectionDescription
                              className={this.decorateCSS("description")}
                            >
                              {tab.description}
                            </Base.SectionDescription>
                          )}
                          <div className={this.decorateCSS("button-wrapper")}>
                            {hasButton && (
                              <>
                                <ComposerLink path={tab.button.url}>
                                  <Base.Button
                                    className={this.decorateCSS("button")}
                                    buttonType={tab.button.type}
                                  >
                                    <div
                                      className={this.decorateCSS(
                                        "button-text"
                                      )}
                                    >
                                      {tab.button.text}
                                    </div>
                                  </Base.Button>
                                </ComposerLink>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature25;
