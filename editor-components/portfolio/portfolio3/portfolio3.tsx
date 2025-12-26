import * as React from "react";
import { BasePortfolio, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./portfolio3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface Platform {
  icon: string;
  page: string;
}

interface Game {
  title: string;
  titlePage: string;
  genreBadge: string;
  image: TypeMediaInputValue;
  platforms: { platform: Platform }[];
  overlay?: boolean;
}

class Portfolio3 extends BasePortfolio {
  private intersectionObservers: IntersectionObserver[] = [];
  private gameCardRefs: (HTMLDivElement | null)[] = [];
  private sentinelRefs: (HTMLDivElement | null)[] = [];

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Explore Our Collection",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value:
        "OUR <span style='color: transparent; -webkit-text-stroke: 2px var(--composer-font-color-primary); text-stroke: 2px var(--composer-font-color-primary);'>GAMES</span>",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Discover our latest gaming experiences",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",

      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "VIEW ALL GAMES",
          "",
          "MdArrowOutward",
          null,
          "Tertiary"
        ),
      ],
    });

    this.addProp({
      type: "array",
      key: "games",
      displayer: "Games",
      value: [
        {
          type: "object",
          key: "game",
          displayer: "Game",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Game Title",
              value: "Abyss of the Unseen Oracle",
            },
            {
              type: "page",
              key: "titlePage",
              displayer: "Title Page",
              value: "",
            },
            {
              type: "string",
              key: "genreBadge",
              displayer: "Genre Badge",
              value: "Action",
            },
            {
              type: "media",
              key: "image",
              displayer: "Game Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_14.jpg",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },

            {
              type: "array",
              key: "platforms",
              displayer: "Platforms",
              value: [
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "BsAndroid2",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "FaApple",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "FaXbox",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "game",
          displayer: "Game",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Game Title",
              value: "Spires of the Forgotten Era",
            },
            {
              type: "page",
              key: "titlePage",
              displayer: "Title Page",
              value: "",
            },
            {
              type: "string",
              key: "genreBadge",
              displayer: "Genre Badge",
              value: "Survival",
            },
            {
              type: "media",
              key: "image",
              displayer: "Game Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_13.jpg",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Platforms",
              value: [
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "FaApple",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "FaPlaystation",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "FaSteam",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "game",
          displayer: "Game",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Game Title",
              value: "Warriors of the Twilight Veil",
            },
            {
              type: "page",
              key: "titlePage",
              displayer: "Title Page",
              value: "",
            },
            {
              type: "string",
              key: "genreBadge",
              displayer: "Genre Badge",
              value: "Shooting",
            },
            {
              type: "media",
              key: "image",
              displayer: "Game Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_12.jpg",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Platforms",
              value: [
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "BsNintendoSwitch",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "FaSteam",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "FaXbox",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "game",
          displayer: "Game",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Game Title",
              value: "Specters of the Fallen City",
            },
            {
              type: "page",
              key: "titlePage",
              displayer: "Title Page",
              value: "",
            },
            {
              type: "string",
              key: "genreBadge",
              displayer: "Genre Badge",
              value: "Strategy",
            },
            {
              type: "media",
              key: "image",
              displayer: "Game Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_11.jpg",
              },
            },
            {
              type: "boolean",
              key: "overlay",
              displayer: "Overlay",
              value: false,
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Platforms",
              value: [
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "BsNintendoSwitch",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "FaPlaystation",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "platform",
                  displayer: "Platform",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: { availableTypes: ["icon", "image"] },
                      displayer: "Platform Icon",
                      value: {
                        type: "icon",
                        name: "FaSteam",
                      },
                    },
                    {
                      type: "page",
                      key: "page",
                      displayer: "Platform Page",
                      value: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "boolean",
      key: "enableAnimation",
      displayer: "Enable Sticky Animation",
      value: true,
    });
  }

  static getName(): string {
    return "Portfolio 3";
  }

  onComponentDidMount() {
    const enableAnimation = this.getPropValue("enableAnimation");
    if (enableAnimation) {
      this.initializeStickyObservers();
    }
  }

  onComponentDidUpdate() {
    const enableAnimation = this.getPropValue("enableAnimation");
    if (enableAnimation) {
      this.initializeStickyObservers();
    }
  }

  onComponentWillUnmount() {
    this.intersectionObservers.forEach((observer) => observer.disconnect());
    this.intersectionObservers = [];
  }

  initializeStickyObservers() {
    if (typeof window === "undefined") return;

    this.intersectionObservers.forEach((obs) => obs.disconnect());
    this.intersectionObservers = [];

    setTimeout(() => {
      this.gameCardRefs.forEach((card, index) => {
        const sentinel = this.sentinelRefs[index];
        if (!card || !sentinel) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            const isScaled = entry.intersectionRatio === 0;
            card.className = `${this.decorateCSS("game-card")} ${
              styles.gameCard
            } ${isScaled ? this.decorateCSS("scaled") : ""}`.trim();
          },
          {
            threshold: [0],
            rootMargin: "-1px 0px 0px 0px",
          }
        );

        observer.observe(sentinel);
        this.intersectionObservers.push(observer);
      });
    }, 100);
  }

  getTopStyle(index: number): React.CSSProperties {
    return { top: `${index * 40}px` };
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const games = this.castToObject<Game[]>("games") || [];

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);

    const hasAnyButton =
      buttons &&
      buttons.some(
        (b: any) => this.castToString(b?.text) || b?.icon?.name || b?.icon?.url
      );

    const hasHeaderContent =
      hasSubtitle || hasTitle || hasDescription || hasAnyButton;
    const alignmentValue = Base.getContentAlignment();
    const enableAnimation = this.getPropValue("enableAnimation");

    this.gameCardRefs = Array(games.length).fill(null);
    this.sentinelRefs = Array(games.length).fill(null);

    return (
      <Base.Container
        className={`${this.decorateCSS("container-bg")} ${this.decorateCSS(
          "container"
        )}`}
      >
        <div className={this.decorateCSS("content-wrapper")}>
          {hasHeaderContent && (
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <div
                className={`${this.decorateCSS("header-content")} ${
                  alignmentValue === "center" ? this.decorateCSS("center") : ""
                }`}
              >
                <Base.VerticalContent
                  className={this.decorateCSS("header-text")}
                >
                  {hasSubtitle && (
                    <Base.SectionSubTitle
                      className={this.decorateCSS("subtitle")}
                    >
                      {subtitle}
                    </Base.SectionSubTitle>
                  )}
                  {hasTitle && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {title}
                    </Base.SectionTitle>
                  )}
                  {hasDescription && (
                    <Base.SectionDescription
                      className={this.decorateCSS("description")}
                    >
                      {description}
                    </Base.SectionDescription>
                  )}
                </Base.VerticalContent>
                {hasAnyButton && (
                  <div className={this.decorateCSS("header-buttons")}>
                    {buttons.map((item: INPUTS.CastedButton, index: number) => {
                      const buttonText = item.text;
                      const buttonIcon = item.icon;
                      const buttonUrl = item.url;
                      const buttonType = item.type;

                      const btnTextExist = this.castToString(buttonText);
                      const buttonIconExist =
                        buttonIcon?.name || buttonIcon?.url;

                      if (!btnTextExist && !buttonIconExist) {
                        return null;
                      }

                      const url = buttonUrl || "#";
                      return (
                        <ComposerLink path={url} key={`header-btn-${index}`}>
                          <Base.Button
                            buttonType={buttonType}
                            className={this.decorateCSS("button")}
                          >
                            {btnTextExist && (
                              <Base.P
                                className={this.decorateCSS("button-text")}
                              >
                                {buttonText}
                              </Base.P>
                            )}
                            {buttonIconExist && (
                              <Base.Media
                                value={buttonIcon}
                                className={this.decorateCSS("button-icon")}
                              />
                            )}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </div>
            </Base.MaxContent>
          )}

          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("games-section")}>
              {games.map((game: Game, index: number) => {
                const title = game?.title;
                const titlePage = game?.titlePage;
                const image = game?.image;
                const badge = game?.genreBadge;
                const gamePlatforms = game?.platforms;
                const overlay = game?.overlay;

                const gameTitle = this.castToString(title);
                const gamePage = titlePage || "#";
                const gameImageValue = image;
                const genreBadge = this.castToString(badge);
                const platforms = Array.isArray(gamePlatforms)
                  ? gamePlatforms
                  : [];

                const hasGameImage = !!(
                  gameImageValue &&
                  (typeof gameImageValue === "string" ||
                    (gameImageValue as any)?.url)
                );

                const validPlatforms = platforms.filter(
                  (platformWrapper: any) => {
                    const platformIcon =
                      platformWrapper?.platform?.icon || platformWrapper?.icon;

                    return !!(
                      platformIcon &&
                      (typeof platformIcon === "string" ||
                        platformIcon?.name ||
                        platformIcon?.url)
                    );
                  }
                );
                const hasPlatforms = validPlatforms.length > 0;

                const hasOverlayContent = !!(
                  genreBadge ||
                  gameTitle ||
                  hasPlatforms
                );

                if (!hasGameImage && !hasOverlayContent) {
                  return null;
                }

                return (
                  <React.Fragment key={`game-${index}`}>
                    {enableAnimation && (
                      <div
                        ref={(el) => {
                          this.sentinelRefs[index] = el;
                        }}
                        className={styles.sentinel}
                      />
                    )}
                    <div
                      ref={
                        enableAnimation
                          ? (el) => {
                              this.gameCardRefs[index] = el;
                            }
                          : undefined
                      }
                      className={`${this.decorateCSS("game-card")} ${
                        styles.gameCard
                      }`}
                      style={
                        enableAnimation ? this.getTopStyle(index) : undefined
                      }
                    >
                      <div className={this.decorateCSS("game-content")}>
                        {hasGameImage ? (
                          <div
                            className={this.decorateCSS("game-image-container")}
                          >
                            <Base.Media
                              value={image}
                              className={this.decorateCSS("game-image")}
                            />
                            {overlay && (
                              <div
                                className={this.decorateCSS(
                                  "thumbnail-overlay"
                                )}
                              />
                            )}
                            {hasOverlayContent && (
                              <div className={this.decorateCSS("game-overlay")}>
                                <div className={this.decorateCSS("game-info")}>
                                  {genreBadge && (
                                    <span
                                      className={this.decorateCSS(
                                        "genre-badge"
                                      )}
                                    >
                                      <Base.P
                                        className={this.decorateCSS(
                                          "badge-text"
                                        )}
                                      >
                                        {genreBadge}
                                      </Base.P>
                                    </span>
                                  )}

                                  {(gameTitle || hasPlatforms) && (
                                    <div
                                      className={this.decorateCSS(
                                        "title-platforms-row"
                                      )}
                                    >
                                      {gameTitle && (
                                        <ComposerLink path={gamePage}>
                                          <Base.H3
                                            className={this.decorateCSS(
                                              "game-title"
                                            )}
                                          >
                                            {gameTitle}
                                          </Base.H3>
                                        </ComposerLink>
                                      )}

                                      {hasPlatforms && (
                                        <div
                                          className={this.decorateCSS(
                                            "platforms"
                                          )}
                                        >
                                          {validPlatforms.map(
                                            (
                                              platformWrapper: any,
                                              platformIndex: number
                                            ) => {
                                              const icon =
                                                platformWrapper?.platform
                                                  ?.icon ||
                                                platformWrapper?.icon;
                                              const page =
                                                platformWrapper?.platform
                                                  ?.page ||
                                                platformWrapper?.page;

                                              const platformIcon = icon;
                                              const platformPage = page || "#";

                                              return (
                                                <ComposerLink
                                                  key={`platform-${index}-${platformIndex}`}
                                                  path={platformPage}
                                                >
                                                  <div
                                                    className={this.decorateCSS(
                                                      "platform-icon"
                                                    )}
                                                  >
                                                    <Base.Media
                                                      value={platformIcon}
                                                      className={this.decorateCSS(
                                                        "platform-icon-element"
                                                      )}
                                                    />
                                                  </div>
                                                </ComposerLink>
                                              );
                                            }
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          hasOverlayContent && (
                            <div
                              className={this.decorateCSS("game-placeholder")}
                            >
                              No image for {gameTitle}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default Portfolio3;
