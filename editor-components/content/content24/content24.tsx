import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content24.module.scss";
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
  genreButton: INPUTS.CastedButton;
  image: string;
  platforms: { platform: Platform }[];
}

class Content24 extends BaseContent {
  
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
        type:"string",
        key:"titleFirst",
        displayer:"Title First Part",
        value:"OUR",
    });

    this.addProp({
        type:"string",
        key:"titleSecond", 
        displayer:"Title Second Part (Outline)",
        value:"GAMES",
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
            INPUTS.BUTTON(
              "genreButton",
              "Genre Button",
              "Action",
              "",
              null,
              null,
              "Tertiary"
            ),
            {
              type: "image",
              key: "image",
              displayer: "Game Image",
              value: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_14.jpg",
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
            INPUTS.BUTTON(
              "genreButton",
              "Genre Button",
              "Survival",
              "",
              null,
              null,
              "Tertiary"
            ),
            {
              type: "image",
              key: "image",
              displayer: "Game Image",
              value: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_13.jpg",
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
            INPUTS.BUTTON(
              "genreButton",
              "Genre Button", 
              "Shooting",
              "",
              null,
              null,
              "Tertiary"
            ),
            {
              type: "image",
              key: "image",
              displayer: "Game Image",
              value: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_12.jpg",
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
            INPUTS.BUTTON(
              "genreButton",
              "Genre Button", 
              "Strategy",
              "",
              null,
              null,
              "Tertiary"
            ),
            {
              type: "image",
              key: "image",
              displayer: "Game Image",
              value: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/project_11.jpg",
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
    return "Content 24";
  }

  // Games dizisinin uzunluğuna göre dinamik padding hesaplayan fonksiyon
  calculateDynamicPadding(gamesCount: number): React.CSSProperties {
    // Her oyun için 40px boşluk, minimum 160px
    const baseSpacing = Math.max(160, gamesCount * 40);
    
    return {
      paddingTop: `${baseSpacing}px`
    };
  }

  // Game card için dinamik top pozisyonu hesaplayan fonksiyon
  calculateCardPosition(index: number, totalGames: number): React.CSSProperties {
    // Her kart için artan boşluk (40px * index)
    const topPosition = index * 40;
    
    return {
      top: `${topPosition}px`
    };
  }

  // Responsive için dinamik spacing hesaplayan fonksiyon
  getResponsiveSpacing(gamesCount: number, viewport: 'desktop' | 'tablet' | 'mobile'): { padding: string; cardSpacing: number } {
    const baseSpacing = {
      desktop: { padding: gamesCount * 40, cardSpacing: 40 },
      tablet: { padding: gamesCount * 20, cardSpacing: 20 },
      mobile: { padding: gamesCount * 10, cardSpacing: 10 }
    };

    const config = baseSpacing[viewport];
    
    return {
      padding: `${Math.max(config.padding, 160)}px`,
      cardSpacing: config.cardSpacing
    };
  }

  // Oyun sayısına göre container class'ı belirleyen fonksiyon
  getContainerDataAttributes(gamesCount: number): { [key: string]: string } {
    const attributes: { [key: string]: string } = {};
    
    if (gamesCount >= 10) {
      attributes['data-game-count'] = 'high';
    } else if (gamesCount >= 6) {
      attributes['data-game-count'] = 'medium';
    } else {
      attributes['data-game-count'] = 'low';
    }
    
    return attributes;
  }

  render() {
    try {
      const titleFirst = this.getPropValue("titleFirst");
      const titleSecond = this.getPropValue("titleSecond");
      const viewAllButton = this.castToObject("button") as INPUTS.CastedButton;
      const games = this.castToObject<any[]>("games");

      const gamesArray = Array.isArray(games) ? games : [];
      if (!gamesArray.length) {
        console.warn("No games found in array");
        return (
          <Base.Container className={this.decorateCSS("container")}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              No games available
            </div>
          </Base.Container>
        );
      }

      const showButton = viewAllButton?.text;
      const showTitle = titleFirst || titleSecond;
      
      // Games sayısına göre dinamik padding hesapla
      const dynamicContainerStyle = this.calculateDynamicPadding(gamesArray.length);
      
      // Container için data attributes
      const containerAttributes = this.getContainerDataAttributes(gamesArray.length);

      return (
        <Base.Container 
          className={this.decorateCSS("container")} 
          isFull={true}
          style={dynamicContainerStyle}
          {...containerAttributes}
        >
          <div className={this.decorateCSS("content-wrapper")}>
            {(showTitle || showButton) && (
              <div className={this.decorateCSS("header-section")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                  <div className={this.decorateCSS("header-content")}>
                    {showTitle && (
                      <h2 className={this.decorateCSS("section-title")}>
                        {titleFirst && (
                          <span className={this.decorateCSS("title-normal")}>
                            {titleFirst}
                          </span>
                        )}
                        {titleFirst && titleSecond && <br />}
                        {titleSecond && (
                          <span className={this.decorateCSS("title-outline")}>
                            {titleSecond}
                          </span>
                        )}
                      </h2>
                    )}
                    
                    {showButton && (
                      <ComposerLink path={viewAllButton?.url || '#'}>
                        <Base.Button 
                          buttonType={viewAllButton?.type || "Primary"}
                          className={this.decorateCSS("view-all-button")}
                        >
                          <span>{viewAllButton?.text}</span>
                          {viewAllButton?.icon && (
                            <Base.Icon 
                              name={viewAllButton.icon} 
                              propsIcon={{ 
                                className: "button-icon",
                                style: { marginLeft: '8px' }
                              }} 
                            />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    )}
                  </div>
                </Base.MaxContent>
              </div>
            )}
            <div className={this.decorateCSS("games-section")}>
              {gamesArray.map((game, index: number) => {
                const gameTitle = game?.title || '';
                const gameTitlePage = game?.titlePage || '';
                const gameGenreButton = game?.genreButton;
                const gameImage = game?.image || '';
                const gamePlatforms = Array.isArray(game?.platforms) ? game.platforms : [];

                // Her oyun kartı için dinamik pozisyon hesapla
                const cardStyle = this.calculateCardPosition(index, gamesArray.length);

                console.log(`Game ${index} - Title:`, gameTitle);
                console.log(`Game ${index} - Platforms:`, gamePlatforms);
                console.log(`Game ${index} - Card Style:`, cardStyle);

                return (
                  <div
                    key={`game-${index}`}
                    className={this.decorateCSS("game-card")}
                    style={cardStyle}
                  >
                    <div className={this.decorateCSS("game-content")}>
                      {gameImage ? (
                        <div className={this.decorateCSS("game-image-container")}>
                          <img
                            src={gameImage}
                            alt={gameTitle || `Game ${index}`}
                            className={this.decorateCSS("game-image")}
                            onLoad={() => console.log(`Image loaded successfully: ${gameImage}`)}
                            onError={(e) => {
                              console.error(`Failed to load image: ${gameImage}`);
                              console.error('Image error event:', e);
                            }}
                          />
                          <div className={this.decorateCSS("game-overlay")}>
                            <div className={this.decorateCSS("game-info")}>
                              {gameGenreButton && (
                                <ComposerLink path={gameGenreButton.url || '#'}>
                                  <Base.Button
                                    buttonType={gameGenreButton.type || "Tertiary"}
                                    className={this.decorateCSS("genre-button")}
                                  >
                                    {gameGenreButton.text}
                                  </Base.Button>
                                </ComposerLink>
                              )}
                              <div className={this.decorateCSS("title-platforms-row")}>
                                {gameTitle && (
                                  <ComposerLink path={gameTitlePage || '#'}>
                                    <h3 className={this.decorateCSS("game-title")}>
                                      {gameTitle}
                                    </h3>
                                  </ComposerLink>
                                )}
                                <div className={this.decorateCSS("platforms")}>
                                  {gamePlatforms.length > 0 ? (
                                    gamePlatforms.map((platformObj: any, platformIndex: number) => {
                                      console.log(`Platform ${platformIndex} object:`, platformObj);
                                      const platform = platformObj?.platform || platformObj;
                                      console.log(`Platform ${platformIndex} data:`, platform);
                                      
                                      if (!platform || !platform.icon) {
                                        console.warn(`Missing platform data at index ${platformIndex}:`, platform);
                                        return null;
                                      }

                                      const platformIcon = platform.icon;
                                      const platformPage = platform.page || '#';
                                      
                                      console.log(`Rendering platform ${platformIndex} - Icon: ${platformIcon}, Page: ${platformPage}`);
                                      
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
                                  ) : (
                                    <div style={{color: 'white', fontSize: '12px'}}>
                                      No platforms available
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={this.decorateCSS("game-placeholder")}>
                          <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                            No image available for {gameTitle || `Game ${index + 1}`}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Base.Container>
      );
    } catch (error) {
      console.error('Error rendering Content24:', error);
      return (
        <Base.Container className={this.decorateCSS("container")}>
          <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
            Error loading games component. Please check the console for details.
            <br />
            <small>Error: {error instanceof Error ? error.message : String(error)}</small>
          </div>
        </Base.Container>
      );
    }
  }
}

export default Content24;