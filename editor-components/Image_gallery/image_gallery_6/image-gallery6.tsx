
import * as React from "react";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./image-gallery6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
interface GalleryItem {
    sectionTitle: React.JSX.Element,
    images: ImageItem[],
}
interface ImageItem {
    image: TypeMediaInputValue,
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
        this.addProp(
            {
                type: "boolean",
                key: "showAll",
                displayer: "Show All",
                value: true
            }
        )
        this.addProp({
            type: "number",
            key: "imageCountInitial",
            displayer: "Image Count Initial",
            value: 3
        })
        this.addProp({
            type: "number",
            key: "imageCount",
            displayer: "More Image Count",
            value: 3
        })
        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));
        this.addProp({
            type: "string",
            key: "allText",
            displayer: "All Button Text",
            value: "All",
        })

        this.addProp({
            type: "array",
            key: "galleries",
            displayer: "Galleries",
            value: [
                {
                    type: "object",
                    key: "gallery",
                    displayer: "Gallery",
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
                            displayer: "Images",
                            value: [
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
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
                                            displayer: "Badge",
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
                                            displayer: "Next Arrow",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon"],
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
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
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
                                            displayer: "Badge",
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
                                            displayer: "Next Arrow",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon"],
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
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
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
                                            displayer: "Badge",
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
                                            displayer: "Next Arrow",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon"],
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
                    displayer: "Gallery",
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
                            displayer: "Images",
                            value: [
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
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
                                            displayer: "Badge",
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
                                            displayer: "Next Arrow",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon"],
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
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
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
                                            displayer: "Badge",
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
                                            displayer: "Next Arrow",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon"],
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
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
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
                                            displayer: "Badge",
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
                                            displayer: "Next Arrow",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon"],
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
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
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
                                            displayer: "Badge",
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
                                            displayer: "Next Arrow",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon"],
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
                    displayer: "Gallery",
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
                            displayer: "Images",
                            value: [
                                {
                                    type: "object",
                                    key: "image",
                                    displayer: "Image",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
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
                                            displayer: "Badge",
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
                                            displayer: "Next Arrow",
                                            value: {
                                                type: "icon",
                                                name: "FaArrowRightLong",
                                            },
                                            additionalParams: {
                                                availableTypes: ["icon"],
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
        this.setComponentState("selectedSection", this.castToString(this.getPropValue("allText")));
        this.setComponentState("moreImages", 0);
    }

    static getName(): string {
        return "Image Gallery 6";
    }
    getCurrentGallery() {
        const galleryCollection = this.castToObject<GalleryItem[]>("galleries");
        const selectedSection = this.getComponentState("selectedSection");

        if (selectedSection === this.castToString(this.getPropValue("allText"))) {
            return galleryCollection.flatMap(gallery => gallery.images);
        } else {
            const currentGallery = galleryCollection.find(
                gallery => this.castToString(gallery.sectionTitle) === selectedSection
            );
            return currentGallery?.images || [];
        }
    }
    handleSectionClickAll(): void {
        this.setComponentState("selectedSection", this.castToString(this.getPropValue("allText")));
        this.setComponentState("imageCount", this.getPropValue("imageCountInitial"));
        this.setComponentState("moreImages", 0);
    }
    handleSectionClick(element: any): void {
        this.setComponentState("selectedSection", this.castToString(element.sectionTitle))
        this.setComponentState("imageCount", this.getPropValue("imageCountInitial"));
        this.setComponentState("moreImages", 0);
    }

    handleButtonClick = () => {
        this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"))

    };

    render() {
        const galleries = this.castToObject<GalleryItem[]>("galleries");
        const currentGallery = this.getCurrentGallery();
        const selectedSection = this.getComponentState("selectedSection");
        if (this.getComponentState("imageCount") != this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"))
            this.setComponentState("imageCount", this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"));

        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

        return (

            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.Row className={this.decorateCSS("section-container")}>
                        {this.getPropValue("showAll") && (
                            <Base.H5
                                className={`${this.decorateCSS("section-text")} ${(selectedSection === this.castToString(this.getPropValue("allText")) || !selectedSection) ? this.decorateCSS("active") : ""
                                    }`}
                                onClick={() => this.handleSectionClickAll()}
                            >
                                {this.getPropValue("allText")}
                            </Base.H5>
                        )}

                        {galleries.map((element: any) => (
                            <Base.H5
                                className={`${this.decorateCSS("section-text")} ${this.castToString(element.sectionTitle) === this.getComponentState("selectedSection") ? this.decorateCSS("active") : ""
                                    }`}
                                onClick={() => this.handleSectionClick(element)}
                            >
                                {element.getPropValue("sectionTitle")}
                            </Base.H5>
                        ))}
                    </Base.Row>
                    <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("left-container")}>
                            {currentGallery.slice(0, this.getComponentState("imageCount")).map((item: ImageItem, index: number) => {
                                if (index % 2 === 0) {
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
                                                    {item.image && (
                                                        <Base.Media value={item.image} className={this.decorateCSS("image")} />
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
                                                                    <Base.H3 className={this.decorateCSS("title")}>
                                                                        {item.title}
                                                                    </Base.H3>
                                                                )}
                                                                {(this.castToString(item.description) || item.nextArrow) && (
                                                                    <div className={this.decorateCSS("bottom-container")}>
                                                                        {this.castToString(item.description) && (
                                                                            <Base.H4 className={this.decorateCSS("description")}>
                                                                                {item.description}
                                                                            </Base.H4>
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
                                                    {item.image && (
                                                        <Base.Media value={item.image} className={this.decorateCSS("image")} />
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
                                                                    <Base.H3 className={this.decorateCSS("title")}>
                                                                        {item.title}
                                                                    </Base.H3>
                                                                )}
                                                                {(this.castToString(item.description) || item.nextArrow) && (
                                                                    <div className={this.decorateCSS("bottom-container")}>
                                                                        {this.castToString(item.description) && (
                                                                            <Base.H4 className={this.decorateCSS("description")}>
                                                                                {item.description}
                                                                            </Base.H4>
                                                                        )}
                                                                        {item.nextArrow && (

                                                                            <button className={this.decorateCSS("button")}>
                                                                                <Base.Media value={item.nextArrow} className={this.decorateCSS("icon")} />
                                                                            </button>

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
                    {(this.getComponentState("imageCount") < currentGallery.length) && this.castToString(button.text) && (
                        <div className={this.decorateCSS("button-wrapper")}>
                            <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleButtonClick} >
                                <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                            </Base.Button>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default ImageGallery6;