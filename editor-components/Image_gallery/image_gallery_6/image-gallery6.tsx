
import * as React from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";
interface GalleryItem {
    sectionTitle: React.JSX.Element,
    images: ImageItem[],
}
interface AllCategory {
    showAll: boolean,
    allText: React.JSX.Element,
}
interface ImageItem {
    image_image: TypeMediaInputValue,
    badge: React.JSX.Element,
    title: React.JSX.Element,
    description: React.JSX.Element,
    buttonText: React.JSX.Element,
    url: string,
    nextArrow: TypeMediaInputValue
}

class ImageGallery6 extends BaseImageGallery {
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
            key: "header_title",
            displayer: "Title",
            value: "",
        });
        this.addProp({
            type: "string",
            key: "header_description",
            displayer: "Description",
            value: "",
        });
        this.addProp({
            type: "array",
            key: "headerButtons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });
        this.addProp({
            type: "boolean",
            key: "categoryLine",
            displayer: "Line",
            value: true,
        });
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
                    value: "ALL",
                },
            ]
        });
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


        this.addProp({
            type: "array",
            key: "galleries",
            displayer: "Gallery",
            value: [
                {
                    type: "object",
                    key: "gallery",
                    displayer: "Category",
                    value: [
                        {
                            type: "string",
                            key: "sectionTitle",
                            displayer: "Section Title",
                            value: "ARCHITECTURE"
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
                                            key: "image_image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/671618cab4a116002cfc6451?alt=media",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "badge",
                                            displayer: "Subtitle",
                                            value: "ARCHITECTURE",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "INTERIOR DESIGN STUDIO",
                                        },
                                        {
                                            type: "string",
                                            key: "description",
                                            displayer: "Description",
                                            value: "START A PROJECT",
                                        },
                                        {
                                            type: "boolean",
                                            key: "active",
                                            displayer: "Active",
                                            value: false,
                                        },
                                        {
                                            type: "media",
                                            key: "nextArrow",
                                            displayer: "Icon",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Navigate To",
                                            value: "",
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
                                            key: "image_image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://ruizarch-react.vercel.app/img/covers/2.jpg",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "badge",
                                            displayer: "Subtitle",
                                            value: "ARCHITECTURE",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "CITY HOUSE",
                                        },
                                        {
                                            type: "string",
                                            key: "description",
                                            displayer: "Description",
                                            value: "START A PROJECT",
                                        },
                                        {
                                            type: "boolean",
                                            key: "active",
                                            displayer: "Active",
                                            value: false,
                                        },
                                        {
                                            type: "media",
                                            key: "nextArrow",
                                            displayer: "Icon",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Navigate To",
                                            value: "",
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
                                            key: "image_image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://ruizarch-react.vercel.app/img/covers/3.jpg",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "badge",
                                            displayer: "Subtitle",
                                            value: "ARCHITECTURE",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "KEMIA INDUSTRIAL FACTORY",
                                        },
                                        {
                                            type: "string",
                                            key: "description",
                                            displayer: "Description",
                                            value: "START A PROJECT",
                                        },
                                        {
                                            type: "boolean",
                                            key: "active",
                                            displayer: "Active",
                                            value: false,
                                        },
                                        {
                                            type: "media",
                                            key: "nextArrow",
                                            displayer: "Icon",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                        },

                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                }
                            ]
                        },

                    ],
                },
                {
                    type: "object",
                    key: "gallery",
                    displayer: "Category",
                    value: [
                        {
                            type: "string",
                            key: "sectionTitle",
                            displayer: "Section Title",
                            value: "INTERIOR"
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
                                            key: "image_image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://ruizarch-react.vercel.app/img/covers/5.jpg",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "badge",
                                            displayer: "Subtitle",
                                            value: "INTERIOR",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "SMART HOUSE BY MOLEKULE",
                                        },
                                        {
                                            type: "string",
                                            key: "description",
                                            displayer: "Description",
                                            value: "START A PROJECT",
                                        },
                                        {
                                            type: "boolean",
                                            key: "active",
                                            displayer: "Active",
                                            value: false,
                                        },
                                        {
                                            type: "media",
                                            key: "nextArrow",
                                            displayer: "Icon",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Navigate To",
                                            value: "",
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
                                            key: "image_image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://ruizarch-react.vercel.app/img/covers/6.jpg",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "badge",
                                            displayer: "Subtitle",
                                            value: "INTERIOR",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "TONY'S CHOCOLONELY",
                                        },
                                        {
                                            type: "string",
                                            key: "description",
                                            displayer: "Description",
                                            value: "START A PROJECT",
                                        },
                                        {
                                            type: "boolean",
                                            key: "active",
                                            displayer: "Active",
                                            value: false,
                                        },
                                        {
                                            type: "media",
                                            key: "nextArrow",
                                            displayer: "Icon",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Navigate To",
                                            value: "",
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
                                            key: "image_image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://ruizarch-react.vercel.app/img/covers/8.jpg",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "badge",
                                            displayer: "Subtitle",
                                            value: "INTERIOR",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "DENTAL CLINIC",
                                        },
                                        {
                                            type: "string",
                                            key: "description",
                                            displayer: "Description",
                                            value: "START A PROJECT",
                                        },
                                        {
                                            type: "boolean",
                                            key: "active",
                                            displayer: "Active",
                                            value: false,
                                        },
                                        {
                                            type: "media",
                                            key: "nextArrow",
                                            displayer: "Icon",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Navigate To",
                                            value: "",
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
                                            key: "image_image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://ruizarch-react.vercel.app/img/covers/7.jpg",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "badge",
                                            displayer: "Subtitle",
                                            value: "INTERIOR",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "CONFIDENTIAL TECHNOLOGY",
                                        },
                                        {
                                            type: "string",
                                            key: "description",
                                            displayer: "Description",
                                            value: "START A PROJECT",
                                        },
                                        {
                                            type: "boolean",
                                            key: "active",
                                            displayer: "Active",
                                            value: false,
                                        },
                                        {
                                            type: "media",
                                            key: "nextArrow",
                                            displayer: "Icon",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                }
                            ]
                        },
                    ],
                },
                {
                    type: "object",
                    key: "gallery",
                    displayer: "Category",
                    value: [
                        {
                            type: "string",
                            key: "sectionTitle",
                            displayer: "Section Title",
                            value: "DECOR"
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
                                            key: "image_image",
                                            displayer: "Media",
                                            value: {
                                                type: "image",
                                                url: "https://ruizarch-react.vercel.app/img/covers/4.jpg",
                                            },
                                            additionalParams: {
                                                availableTypes: ["image", "video"],
                                            },
                                        },
                                        {
                                            type: "string",
                                            key: "badge",
                                            displayer: "Subtitle",
                                            value: "INTERIOR",
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "CASCADE OF LAVA",
                                        },
                                        {
                                            type: "string",
                                            key: "description",
                                            displayer: "Description",
                                            value: "START A PROJECT",
                                        },
                                        {
                                            type: "boolean",
                                            key: "active",
                                            displayer: "Active",
                                            value: false,
                                        },
                                        {
                                            type: "media",
                                            key: "nextArrow",
                                            displayer: "Icon",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon", "image"],
                                            },
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Navigate To",
                                            value: "",
                                        },
                                    ]
                                }

                            ]
                        },
                    ]
                }
            ],
        });
        this.setComponentState("selectedSection", this.castToString(this.getAllCategory().allText));
        this.setComponentState("moreImages", 0);
    }

    static getName(): string {
        return "Image Gallery 6";
    }
    getCountSettings(): { imageCountInitial: number; imageCount: number } {
        return this.castToObject<{ imageCountInitial: number; imageCount: number }>("countSettings");
    }
    getAllCategory(): AllCategory {
        return this.castToObject<AllCategory>("allCategory");
    }
    getSelectedSection() {
        const selectedSection = this.getComponentState("selectedSection");
        const allText = this.castToString(this.getAllCategory().allText);
        if (!this.getAllCategory().showAll && (!selectedSection || selectedSection === allText)) {
            const galleries = this.castToObject<GalleryItem[]>("galleries");
            return galleries.length > 0 ? this.castToString(galleries[0].sectionTitle) : selectedSection;
        }
        return selectedSection;
    }
    getCurrentGallery() {
        const galleryCollection = this.castToObject<GalleryItem[]>("galleries");
        const selectedSection = this.getSelectedSection();

        if (selectedSection === this.castToString(this.getAllCategory().allText)) {
            return galleryCollection.flatMap(gallery => gallery.images);
        } else {
            const currentGallery = galleryCollection.find(
                gallery => this.castToString(gallery.sectionTitle) === selectedSection
            );
            return currentGallery?.images || [];
        }
    }
    handleSectionClickAll(): void {
        this.setComponentState("selectedSection", this.castToString(this.getAllCategory().allText));
        this.setComponentState("imageCount", this.getCountSettings().imageCountInitial);
        this.setComponentState("moreImages", 0);
    }
    handleSectionClick(element: any): void {
        this.setComponentState("selectedSection", this.castToString(element.sectionTitle))
        this.setComponentState("imageCount", this.getCountSettings().imageCountInitial);
        this.setComponentState("moreImages", 0);
    }

    handleButtonClick = () => {
        this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getCountSettings().imageCount)

    };

    render() {
        const galleries = this.castToObject<GalleryItem[]>("galleries");
        const currentGallery = this.getCurrentGallery();
        const selectedSection = this.getSelectedSection();
        if (this.getComponentState("imageCount") != this.getCountSettings().imageCountInitial + this.getComponentState("moreImages"))
            this.setComponentState("imageCount", this.getCountSettings().imageCountInitial + this.getComponentState("moreImages"));

        const headerButtons = this.castToObject<INPUTS.CastedButton[]>("headerButtons") || [];
        const hasHeaderButtons = headerButtons.some((button: INPUTS.CastedButton) => this.castToString(button.text));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasButtons = buttons.some((button: INPUTS.CastedButton) => this.castToString(button.text));
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("header_title"));
        const descriptionExist = this.castToString(this.getPropValue("header_description"));
        const categoryLine = this.getPropValue("categoryLine");

        return (

            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                {(subtitleExist || titleExist || descriptionExist || hasHeaderButtons) && (
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
                                {this.getPropValue("header_description")}
                            </Base.SectionDescription>
                        )}
                        {hasHeaderButtons && (
                            <div className={this.decorateCSS("button-container")}>
                                {headerButtons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                                    <ComposerLink key={index} path={button.url}>
                                        <Base.Button buttonType={button.type} className={this.decorateCSS("header-button")}>
                                            <Base.P className={this.decorateCSS("header-button-text")}>{button.text}</Base.P>
                                        </Base.Button>
                                    </ComposerLink>
                                ))}
                            </div>
                        )}
                    </Base.VerticalContent>
                )}
                <div className={this.decorateCSS("category-wrapper")}>
                {categoryLine && <div className={this.decorateCSS("category-line")} />}
                <Base.Row className={this.decorateCSS("section-container")}>
                {this.getAllCategory().showAll && this.castToString(this.getAllCategory().allText) && (
                    <Base.H6
                                className={`${this.decorateCSS("section-text")} ${(selectedSection === this.castToString(this.getAllCategory().allText) || !selectedSection) ? this.decorateCSS("active") : ""
                                    }`}
                                onClick={() => this.handleSectionClickAll()}
                            >
                                {this.getAllCategory().allText}
                            </Base.H6>
                        )}
                        {galleries.map((element: any, index: number) => this.castToString(element.sectionTitle) && (
                            <Base.H6
                                key={index}
                                className={`${this.decorateCSS("section-text")} ${this.castToString(element.sectionTitle) === selectedSection ? this.decorateCSS("active") : ""
                                    }`}
                                onClick={() => this.handleSectionClick(element)}
                            >
                                {element.getPropValue("sectionTitle")}
                            </Base.H6>
                        ))}
                    </Base.Row>
                {categoryLine && <div className={this.decorateCSS("category-line")} />}
                </div>
                    <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("left-container")}>
                            {currentGallery.slice(0, this.getComponentState("imageCount")).map((item: ImageItem, index: number) => {
                                if (index % 2 === 0) {
                                    if (!item.image_image && !this.castToString(item.badge) && !this.castToString(item.title) && !this.castToString(item.description)) return null;
                                    if (this.getComponentState("imageCount") <= 3) {
                                        var imageClass = index === 0 || index === 2
                                            ? this.decorateCSS("normal-image")
                                            : (index / 2) % 2 === 0
                                                ? this.decorateCSS("large-image")
                                                : this.decorateCSS("small-image");
                                    } else {
                                        var imageClass =
                                            (index / 2) % 2 === 0
                                                ? this.decorateCSS("large-image")
                                                : this.decorateCSS("small-image");
                                    }

                                    return (
                                        <ComposerLink path={item.url}>
                                            <div className={`${this.decorateCSS("images")} ${imageClass} ${item.active ? this.decorateCSS("active") : ""}`}>

                                                <div className={this.decorateCSS("image-wrapper")}>
                                                    {item.image_image && (
                                                        <Base.Media value={item.image_image} className={this.decorateCSS("image")} />
                                                    )}
                                                    {this.castToString(item.badge) && (
                                                        <div className={this.decorateCSS("badge")}>
                                                            <Base.P className={this.decorateCSS("badge-text")}>
                                                                {item.badge}
                                                            </Base.P>
                                                        </div>
                                                    )}
                                                    {(this.castToString(item.title) || this.castToString(item.description) || item.nextArrow) && (
                                                        <div className={this.decorateCSS("badge-container")}>
                                                            <div className={this.decorateCSS("text-container")}>
                                                                {this.castToString(item.title) && (
                                                                    <Base.H4 className={this.decorateCSS("card-title")}>
                                                                        {item.title}
                                                                    </Base.H4>
                                                                )}
                                                                {(this.castToString(item.description) || item.nextArrow) && (
                                                                    <div className={this.decorateCSS("bottom-container")}>
                                                                        {this.castToString(item.description) && (
                                                                            <Base.H6 className={this.decorateCSS("card-description")}>
                                                                                {item.description}
                                                                            </Base.H6>
                                                                        )}
                                                                        {item.nextArrow && (
                                                                            <div className={this.decorateCSS("button")}>
                                                                                <Base.Media value={item.nextArrow} className={this.decorateCSS("icon")} />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </ComposerLink>
                                    );
                                }
                                return null;
                            })}
                        </div>
                        <div className={this.decorateCSS("right-container")}>
                            {currentGallery.slice(0, this.getComponentState("imageCount")).map((item: ImageItem, index: number) => {
                                if (index % 2 === 1) {
                                    if (!item.image_image && !this.castToString(item.badge) && !this.castToString(item.title) && !this.castToString(item.description)) return null;
                                    if (this.getComponentState("imageCount") <= 3) {
                                        var imageClass = index === 1
                                            ? this.decorateCSS("normal-image")
                                            : ((index - 1) / 2) % 2 === 0
                                                ? this.decorateCSS("small-image")
                                                : this.decorateCSS("large-image");
                                    } else {
                                        var imageClass =
                                            ((index - 1) / 2) % 2 === 0
                                                ? this.decorateCSS("small-image")
                                                : this.decorateCSS("large-image");
                                    }
                                    return (
                                        <ComposerLink path={item.url}>
                                            <div className={`${this.decorateCSS("images")} ${imageClass} ${item.active ? this.decorateCSS("active") : ""}`}>
                                                <div className={this.decorateCSS("image-wrapper")}>
                                                    {item.image_image && (
                                                        <Base.Media value={item.image_image} className={this.decorateCSS("image")} />
                                                    )}
                                                    {this.castToString(item.badge) && (
                                                        <div className={this.decorateCSS("badge")}>
                                                            <Base.P className={this.decorateCSS("badge-text")}>
                                                                {item.badge}
                                                            </Base.P>
                                                        </div>
                                                    )}
                                                    {(this.castToString(item.title) || this.castToString(item.description) || item.nextArrow) && (
                                                        <div className={this.decorateCSS("badge-container")}>
                                                            <div className={this.decorateCSS("text-container")}>
                                                                {this.castToString(item.title) && (
                                                                    <Base.H4 className={this.decorateCSS("card-title")}>
                                                                        {item.title}
                                                                    </Base.H4>
                                                                )}
                                                                {(this.castToString(item.description) || item.nextArrow) && (
                                                                    <div className={this.decorateCSS("bottom-container")}>
                                                                        {this.castToString(item.description) && (
                                                                            <Base.H6 className={this.decorateCSS("card-description")}>
                                                                                {item.description}
                                                                            </Base.H6>
                                                                        )}
                                                                        {item.nextArrow && (

                                                                            <div className={this.decorateCSS("button")}>
                                                                                <Base.Media value={item.nextArrow} className={this.decorateCSS("icon")} />
                                                                            </div>

                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </ComposerLink>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                    {(this.getComponentState("imageCount") < currentGallery.length) && hasButtons && (
                        <div className={this.decorateCSS("button-wrapper")}>
                            {buttons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                                <ComposerLink key={index} path={button.url}>
                                    <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleButtonClick} >
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

export default ImageGallery6;