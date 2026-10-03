import * as React from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

interface ImageGallery {
  sectionTitle: React.JSX.Element;
  images: Image[];
}
interface CountSettings {
  imageCountInitial: number;
  imageCount: number;
  itemCount: number;
}
interface Image {
  title: React.JSX.Element;
  cardImage: TypeMediaInputValue;
  section: React.JSX.Element;
  overlay: boolean;
  url: string;
}
interface AllCategory {
  showAll: boolean;
  allText: React.JSX.Element;
}

class ImageGallery1 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: ""
    })
    this.addProp({
      type: "string",
      key: "header_title",
      displayer: "Title",
      value: ""
    })
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: ""
    })
    this.addProp({
      type: "boolean",
      key: "lineActive",
      displayer: "Line",
      value: true
    })
    this.addProp({
      type: "object",
      key: "allCategory",
      displayer: "All Category",
      value: [
        {
          type: "boolean",
          key: "showAll",
          displayer: "Show",
          value: true
        },
        {
          type: "string",
          key: "allText",
          displayer: "Text",
          value: "All",
        },
      ]
    })
    this.addProp({
      type: "object",
      key: "countSettings",
      displayer: "Count Settings",
      value: [
        {
          type: "number",
          key: "imageCountInitial",
          displayer: "Media Count Initial",
          value: 3
        },
        {
          type: "number",
          key: "imageCount",
          displayer: "More Media Count",
          value: 3
        },
        {
          type: "number",
          key: "itemCount",
          displayer: "Item Count in a Row",
          value: 3
        },
      ]
    })
    this.addProp({
      type: "array",
      key: "headerButtons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Explore More", "", "FiArrowRight", null, "Link"),
      ],
    })
    this.addProp({
      type: "array",
      key: "imageGalleries",
      displayer: "Gallery",
      value: [
        {
          type: "object",
          key: "imageGallery",
          displayer: "Gallery",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Digital"
            },
            {
              type: "array",
              key: "images",
              displayer: "Media",
              value: [
                {
                  type: "object",
                  key: "image",
                  displayer: "Media Item",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-98.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Design Blast"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Subtitle",
                      value: "Photography"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: ""
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Media Item",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-33.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Cropo Identity"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Subtitle",
                      value: "Packaging"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: ""
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Media Item",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Subtitle",
                      value: "Graphics"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: ""
                    },
                  ]
                }

              ]
            }

          ]
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Gallery",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Branding"
            },
            {
              type: "array",
              key: "images",
              displayer: "Media",
              value: [
                {
                  type: "object",
                  key: "image",
                  displayer: "Media Item",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-207.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Tailoring Inteo"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Subtitle",
                      value: "Branding"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: ""
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Media Item",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-240.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Herbal Beauty"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Subtitle",
                      value: "Application"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: ""
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Media Item",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"
                      }
                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Subtitle",
                      value: "Graphics"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: ""
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "object",
          key: "imageGallery",
          displayer: "Gallery",
          value: [
            {
              type: "string",
              key: "sectionTitle",
              displayer: "Section Title",
              value: "Web"
            },
            {
              type: "array",
              key: "images",
              displayer: "Media",
              value: [
                {
                  type: "object",
                  key: "image",
                  displayer: "Media Item",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-98.jpg"
                      }

                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Design Blast"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Subtitle",
                      value: "Photograhy"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: ""
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Media Item",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-240.jpg"
                      }

                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Herbal Beauty"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Subtitle",
                      value: "Application"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: ""
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Media Item",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-33.jpg"
                      }

                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Subtitle",
                      value: "Graphics"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: ""
                    },
                  ]
                },
                {
                  type: "object",
                  key: "image",
                  displayer: "Media Item",
                  value: [
                    {
                      type: "media",
                      key: "cardImage",
                      displayer: "Media",
                      additionalParams: {
                        availableTypes: ["image", "video"],
                      },
                      value: {
                        type: "image",
                        url: "https://craftohtml.themezaa.com/images/portfolio-177.jpg"
                      }

                    },
                    {
                      type: "boolean",
                      key: "overlay",
                      displayer: "Overlay",
                      value: false
                    },
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Harddot Stone"
                    },
                    {
                      type: "string",
                      key: "section",
                      displayer: "Subtitle",
                      value: "Graphics"
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: ""
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Load More",
      value: [
        INPUTS.BUTTON("button", "Button", "Load More", "", null, null, "Primary"),
      ],
    });

    this.setComponentState("selectedSection", this.castToString(this.getAllCategory().allText));
    this.setComponentState("selectedIndex", -1);
    this.setComponentState("moreImages", 0);
  }

  static getName(): string {
    return "Image Gallery 1";
  }
  getAllCategory(): AllCategory {
    return this.castToObject<AllCategory>("allCategory");
  }
  getCountSettings(): CountSettings {
    return this.castToObject<CountSettings>("countSettings");
  }
  handleSectionClick(sectionTitle: React.JSX.Element, index: number): void {
    this.setComponentState("selectedSection", this.castToString(sectionTitle));
    this.setComponentState("selectedIndex", index)
    this.setComponentState("imageCount", this.getCountSettings().imageCountInitial);
    this.setComponentState("moreImages", 0);
  }
  handleSectionClickAll(): void {
    this.setComponentState("selectedSection", this.castToString(this.getAllCategory().allText));
    this.setComponentState("selectedIndex", -1)
    this.setComponentState("imageCount", this.getCountSettings().imageCountInitial);
    this.setComponentState("moreImages", 0);
  }

  handleButtonClick = () => {
    this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getCountSettings().imageCount)
  };

  render() {
    if (this.getComponentState("imageCount") != this.getCountSettings().imageCountInitial + this.getComponentState("moreImages"))
      this.setComponentState("imageCount", this.getCountSettings().imageCountInitial + this.getComponentState("moreImages"));
    const imageGallery = this.castToObject<ImageGallery[]>("imageGalleries");
    const showAll = this.getAllCategory().showAll;
    let selectedSection = this.getComponentState("selectedSection");
    let selectedIndex = this.getComponentState("selectedIndex");
    if (!showAll && selectedIndex == -1 && imageGallery.length > 0) {
      selectedIndex = 0;
      selectedSection = this.castToString(imageGallery[0].sectionTitle);
    }
    const allImages = imageGallery.reduce((acc: Image[], gallery: ImageGallery) => {
      gallery.images.forEach((image) => {
        if (!acc.some((img) => img.cardImage === image.cardImage)) {
          acc.push(image);
        }
      });
      return acc;
    }, []);
    const sectionImage = (selectedIndex != -1) ? imageGallery[selectedIndex].images : "";
    const selectedImageGallery =
      selectedIndex == -1 ? allImages
        : sectionImage;

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const headerButtons = this.castToObject<INPUTS.CastedButton[]>("headerButtons") || [];
    const hasButtons = buttons.some((button: INPUTS.CastedButton) => this.castToString(button.text));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("header_title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const hasHeaderButtons = headerButtons.some((button: INPUTS.CastedButton) => this.castToString(button.text) || (button.icon as unknown as TypeMediaInputValue)?.name);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(subtitleExist || titleExist || descriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("heading-title")}>
                  {this.getPropValue("header_title")}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("heading-description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}
          {(imageGallery.length > 0 || this.castToString(this.getAllCategory().allText) || hasHeaderButtons) && (
            <div className={this.decorateCSS("header")}>
              {(imageGallery.length > 0 || (showAll && this.castToString(this.getAllCategory().allText))) && (<Base.Row className={this.decorateCSS("tab-container")}>
                {showAll && this.castToString(this.getAllCategory().allText) && (
                  <Base.P
                    className={`${this.decorateCSS("tab")} ${selectedSection === this.castToString(this.getAllCategory().allText) ? this.decorateCSS("active-tab") : ""}`}
                    onClick={() => this.handleSectionClickAll()}
                  >
                    {this.getAllCategory().allText}
                  </Base.P>
                )}
                {imageGallery.length > 0 && (
                  imageGallery.map((item: ImageGallery, index: number) => this.castToString(item.sectionTitle) && (
                    <Base.P
                      key={index}
                      className={`${this.decorateCSS("tab")} ${this.castToString(item.sectionTitle) === selectedSection ? this.decorateCSS("active-tab") : ""}`}
                      onClick={() => this.handleSectionClick(item.sectionTitle, index)}
                    >
                      {item.sectionTitle}
                    </Base.P>
                  ))
                )}
              </Base.Row>)}
              {hasHeaderButtons && (
                <div className={this.decorateCSS("header-button-container")}>
                  {headerButtons.map((button: INPUTS.CastedButton, index: number) => {
                    const buttonIcon = button.icon as unknown as TypeMediaInputValue;
                    const iconExist = buttonIcon && (buttonIcon.type === "icon" ? buttonIcon.name : buttonIcon.url);
                    return (this.castToString(button.text) || iconExist) && (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button buttonType={button.type} className={this.decorateCSS("header-button")}>
                          {this.castToString(button.text) && <Base.P className={this.decorateCSS("header-button-text")}>{button.text}</Base.P>}
                          {iconExist && <Base.Media value={buttonIcon} className={this.decorateCSS("header-button-icon")} />}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          <Base.ListGrid gridCount={{ pc: this.getCountSettings().itemCount, tablet: 3 }} className={this.decorateCSS("gallery-grid")}>
            {imageGallery
              .filter(
                (item: ImageGallery) =>
                  selectedSection == this.castToString(this.getAllCategory().allText) ||
                  (item.sectionTitle &&
                    selectedSection &&
                    this.castToString(item.sectionTitle) === selectedSection)
              )
              .reduce((acc: Image[], item: ImageGallery) => {
                acc.push(...item.images);
                return acc;
              }, [])
              .slice(0, this.getComponentState("imageCount"))
              .map((image: Image, imgIndex: number) => (image.cardImage || this.castToString(image.title) || this.castToString(image.section)) && (
                <ComposerLink key={imgIndex} path={image.url} isFullWidth>
                <div className={this.decorateCSS("card-container")}>
                  {image.cardImage && (
                    <div className={this.decorateCSS("image-container")}>
                    <Base.Media
                      value={image.cardImage}
                      className={this.decorateCSS("image")}
                    />
                    {image.overlay && (
                      <div className={this.decorateCSS("overlay")}></div>
                    )}
                    </div>)}
                  <div className={this.decorateCSS("text-container")}>
                    {this.castToString(image.title) && (
                      <Base.H6 className={this.decorateCSS("title")}>{image.title}</Base.H6>
                    )}
                    {this.getPropValue("lineActive")  && (
                      <div className={this.decorateCSS("line")}></div>
                    )}
                    {this.castToString(image.section) && (
                      <Base.P className={this.decorateCSS("section")}>{image.section}</Base.P>
                    )}
                  </div>
                </div>
                </ComposerLink>
              ))}
          </Base.ListGrid>
          {(this.getComponentState("imageCount") < selectedImageGallery.length) && hasButtons && (
            <div className={this.decorateCSS("button-wrapper")}>
              {buttons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                <ComposerLink key={index} path={button.url}>
                  <Base.Button buttonType={button.type} className={this.decorateCSS("button")} onClick={this.handleButtonClick} >
                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                  </Base.Button>
                </ComposerLink>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGallery1;