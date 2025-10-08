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
}

class Portfolio3 extends BasePortfolio {
  private intersectionObservers: IntersectionObserver[] = [];
  private gameCardRefs: (HTMLDivElement | null)[] = [];
  private sentinelRefs: (HTMLDivElement | null)[] = [];
  
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
        type:"string",
        key:"title",
        displayer:"Title",
        value:"OUR <span style='color: transparent; -webkit-text-stroke: 2px var(--composer-font-color-primary); text-stroke: 2px var(--composer-font-color-primary);'>GAMES</span>",
    });
    
    this.addProp(
        INPUTS.BUTTON(
            "button", 
            "Button", 
            "VIEW ALL GAMES", 
            "", 
            "MdArrowOutward", 
            null, 
            "Tertiary"
        )
    );

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
              value: {
                type: "image",
                url: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_14.jpg"
              },
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "BsAndroid2",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "FaApple",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "FaXbox",
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
              value: {
                type: "image",
                url: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_13.jpg"
              },
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "FaApple",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "FaPlaystation",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "FaSteam",
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
              value: {
                type: "image",
                url: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_12.jpg"
              },
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "BsNintendoSwitch",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "FaSteam",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "FaXbox",
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
              value: {
                type: "image",
                url: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_11.jpg"
              },
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "BsNintendoSwitch",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "FaPlaystation",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Platform Icon",
                      value: "FaSteam",
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
  }

  static getName(): string {
    return "Portfolio 3";
  }

  onComponentDidMount() {
    this.initializeStickyObservers();
  }

  onComponentWillUnmount() {
    this.intersectionObservers.forEach((observer) => observer.disconnect());
    this.intersectionObservers = [];
  }

  initializeStickyObservers() {
    if (typeof window === 'undefined') return;

    this.intersectionObservers.forEach((obs) => obs.disconnect());
    this.intersectionObservers = [];

    setTimeout(() => {
      this.gameCardRefs.forEach((card, index) => {
        const sentinel = this.sentinelRefs[index];
        if (!card || !sentinel) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            const isScaled = entry.intersectionRatio === 0;
            card.className = `${this.decorateCSS("game-card")} ${styles.gameCard} ${isScaled ? this.decorateCSS("scaled") : ''}`.trim();
          },
          {
            threshold: [0],
            rootMargin: '-1px 0px 0px 0px',
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
    const title = this.castToString(this.getPropValue("title"));
    const viewAllButton = this.castToObject("button") as INPUTS.CastedButton;
    const games = this.castToObject<Game[]>("games") || [];
    this.gameCardRefs = Array(games.length).fill(null);
    this.sentinelRefs = Array(games.length).fill(null);

    return (
      <div className={this.decorateCSS("container-bg")}>
        <Base.Container className={this.decorateCSS("container")}>
          <div className={this.decorateCSS("content-wrapper")}>
            {(title || viewAllButton?.text) && (
              <div className={this.decorateCSS("header-section")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                  <div className={this.decorateCSS("header-content")}>
                    <span className={this.decorateCSS("section-title")}>
                      {this.getPropValue("title")}
                    </span>
                    {viewAllButton?.text && (
                      <ComposerLink path={viewAllButton.url || "#"}>
                        <Base.Button
                          buttonType={viewAllButton.type}
                          className={this.decorateCSS("view-all-button")}
                        >
                          {viewAllButton.text}
                          {viewAllButton.icon && (
                            <Base.Icon
                              name={viewAllButton.icon}
                              propsIcon={{ className: "button-icon", style: { marginLeft: 8 } }}
                            />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    )}
                  </div>
                </Base.MaxContent>
              </div>
            )}
            <Base.MaxContent className={this.decorateCSS("max-content")}>
              <div className={this.decorateCSS("games-section")}>
                {games.map((game: Game, index: number) => {
                  const gameTitle = game?.title || "";
                  const gamePage = game?.titlePage || "#";
                  const gameImage = game?.image?.url || "";
                  const genreBadge = game?.genreBadge || "";
                  const platforms = Array.isArray(game?.platforms) ? game.platforms : [];

                  return (
                    <React.Fragment key={`game-${index}`}>
                      <div ref={(el) => {(this.sentinelRefs[index] = el)}} className={styles.sentinel} />
                      <div
                        ref={(el) => {
                          this.gameCardRefs[index] = el;
                        }}
                        className={`${this.decorateCSS("game-card")} ${styles.gameCard}`}
                        style={this.getTopStyle(index)}
                      >
                        <div className={this.decorateCSS("game-content")}>
                          {gameImage ? (
                            <div className={this.decorateCSS("game-image-container")}>
                              <img src={gameImage} alt={gameTitle} className={this.decorateCSS("game-image")} />
                              <div className={this.decorateCSS("game-overlay")}>
                                <div className={this.decorateCSS("game-info")}>
                                  {game?.genreBadge && (
                                    <span className={this.decorateCSS("genre-badge")}>
                                      <span className={this.decorateCSS("badge-text")}>
                                        {genreBadge}
                                      </span>
                                    </span>
                                  )}
                                  <div className={this.decorateCSS("title-platforms-row")}>
                                    <ComposerLink path={gamePage}>
                                      <h3 className={this.decorateCSS("game-title")}>{gameTitle}</h3>
                                    </ComposerLink>
                                    <div className={this.decorateCSS("platforms")}>
                                      {platforms.length > 0 && (
                                        platforms.map((platformWrapper: any, platformIndex: number) => {
                                          const platformIcon = platformWrapper.icon;
                                          const platformPage = platformWrapper.page || '#';
                                          
                                          if (!platformIcon) {
                                            return null;
                                          }
                                          
                                          return (
                                            <ComposerLink 
                                              key={`platform-${index}-${platformIndex}`} 
                                              path={platformPage}
                                            >
                                              <div className={this.decorateCSS("platform-icon")}>
                                                <Base.Icon 
                                                  name={platformIcon} 
                                                  propsIcon={{ 
                                                    className: this.decorateCSS("platform-icon-element") 
                                                  }} 
                                                />
                                              </div>
                                            </ComposerLink>
                                          );
                                        })
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className={this.decorateCSS("game-placeholder")}>No image for {gameTitle}</div>
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </Base.MaxContent>
            
            {this.castToString(viewAllButton?.text) && (
              <div className={this.decorateCSS("mobile-button-section")}>
                <ComposerLink path={viewAllButton.url || "#"}>
                  <Base.Button
                    buttonType={viewAllButton.type || "Tertiary"}
                    className={this.decorateCSS("view-all-button")}
                  >
                    <span>{viewAllButton.text}</span>
                    {viewAllButton.icon && (
                      <Base.Icon
                        name={viewAllButton.icon}
                        propsIcon={{ className: "button-icon" }}
                      />
                    )}
                  </Base.Button>
                </ComposerLink>
              </div>
            )}
          </div>
        </Base.Container>
      </div>
    );
  }
}

export default Portfolio3;