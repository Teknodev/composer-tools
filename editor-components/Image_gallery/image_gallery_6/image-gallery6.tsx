import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery6.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
interface GalleryItem {
    sectionTitle: JSX.Element,
    images: ImageItem[],
}
interface ImageItem {
    image: string,
    badge: JSX.Element,
    title: JSX.Element,
    description: JSX.Element,
    buttonText: JSX.Element,
    url: string,
    nextArrow: string
}

class ImageGalleryComponent6 extends BaseImageGallery {
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/671618cab4a116002cfc6451?alt=media",
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
                                            type: "icon",
                                            key: "nextArrow",
                                            displayer: "Next Arrow",
                                            value: "FaArrowRightLong",
                                        },
                                        {
                                            type: "string",
                                            key: "buttonText",
                                            displayer: "Button Text",
                                            value: "Join this plan",
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Link",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://ruizarch-react.vercel.app/img/covers/2.jpg",
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
                                            type: "icon",
                                            key: "nextArrow",
                                            displayer: "Next Arrow",
                                            value: "FaArrowRightLong",
                                        },
                                        {
                                            type: "string",
                                            key: "buttonText",
                                            displayer: "Button Text",
                                            value: "Join this plan",
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Link",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://ruizarch-react.vercel.app/img/covers/3.jpg",
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
                                            type: "icon",
                                            key: "nextArrow",
                                            displayer: "Next Arrow",
                                            value: "FaArrowRightLong",
                                        },
                                        {
                                            type: "string",
                                            key: "buttonText",
                                            displayer: "Button Text",
                                            value: "Join this plan",
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Link",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://ruizarch-react.vercel.app/img/covers/5.jpg",
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
                                            type: "icon",
                                            key: "nextArrow",
                                            displayer: "Next Arrow",
                                            value: "FaArrowRightLong",
                                        },
                                        {
                                            type: "string",
                                            key: "buttonText",
                                            displayer: "Button Text",
                                            value: "Join this plan",
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Link",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://ruizarch-react.vercel.app/img/covers/6.jpg",
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
                                            type: "icon",
                                            key: "nextArrow",
                                            displayer: "Next Arrow",
                                            value: "FaArrowRightLong",
                                        },
                                        {
                                            type: "string",
                                            key: "buttonText",
                                            displayer: "Button Text",
                                            value: "Join this plan",
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Link",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://ruizarch-react.vercel.app/img/covers/8.jpg",
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
                                            type: "icon",
                                            key: "nextArrow",
                                            displayer: "Next Arrow",
                                            value: "FaArrowRightLong",
                                        },
                                        {
                                            type: "string",
                                            key: "buttonText",
                                            displayer: "Button Text",
                                            value: "Join this plan",
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Link",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://ruizarch-react.vercel.app/img/covers/7.jpg",
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
                                            type: "icon",
                                            key: "nextArrow",
                                            displayer: "Next Arrow",
                                            value: "FaArrowRightLong",
                                        },
                                        {
                                            type: "string",
                                            key: "buttonText",
                                            displayer: "Button Text",
                                            value: "Join this plan",
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Link",
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
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value:
                                                "https://ruizarch-react.vercel.app/img/covers/4.jpg",
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
                                            type: "icon",
                                            key: "nextArrow",
                                            displayer: "Next Arrow",
                                            value: "FaArrowRightLong",
                                        },
                                        {
                                            type: "string",
                                            key: "buttonText",
                                            displayer: "Button Text",
                                            value: "Join this plan",
                                        },
                                        {
                                            type: "page",
                                            key: "url",
                                            displayer: "Link",
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
        this.setComponentState("default", 0);
        this.setComponentState("selectedSection", "ALL");
    }

    getName(): string {
        return "Image Gallery 6";
    }
    getCurrentGallery() {
        const galleryCollection = this.castToObject<GalleryItem[]>("galleries");
        const selectedSection = this.getComponentState("selectedSection");

        if (selectedSection === "ALL") {
            return galleryCollection.flatMap(gallery => gallery.images);
        } else {
            const currentGallery = galleryCollection.find(
                gallery => this.castToString(gallery.sectionTitle) === this.castToString(selectedSection)
            );
            return currentGallery?.images || [];
        }
    }

    render() {
        const galleries = this.castToObject<GalleryItem[]>("galleries");
        const currentGallery = this.getCurrentGallery();
        const selectedSection = this.getComponentState("selectedSection");
        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("section-container")}>
                        {this.getPropValue("showAll") && (
                            <Base.H4
                                className={`${this.decorateCSS("section-text")} ${(selectedSection === "ALL" || !selectedSection) ? this.decorateCSS("active") : ""
                                    }`}
                                onClick={() => this.setComponentState("selectedSection", "ALL")}
                            >
                                ALL
                            </Base.H4>
                        )}

                        {galleries.map((element: any) => (
                            <Base.H4
                                className={`${this.decorateCSS("section-text")} ${this.castToString(element.sectionTitle) === this.castToString(this.getComponentState("selectedSection")) ? this.decorateCSS("active") : ""
                                    }`}
                                onClick={() => this.setComponentState("selectedSection", element.sectionTitle)}
                            >
                                {element.getPropValue("sectionTitle")}
                            </Base.H4>
                        ))}
                    </Base.VerticalContent>
                    <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("left-container")}>
                            {currentGallery.map((item: ImageItem, index: number) => {
                                if (index % 2 === 0) {
                                    if (currentGallery.length <= 3) {
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
                                            <div className={`${this.decorateCSS("images")} ${imageClass}`}>

                                                <div className={this.decorateCSS("image-wrapper")}>
                                                    {item.image && (
                                                        <img src={item.image} alt={item.image} className={this.decorateCSS("image")} />
                                                    )}
                                                    {this.castToString(item.badge) && (
                                                        <div className={this.decorateCSS("badge")}>
                                                            <div className={this.decorateCSS("badge-text")}>
                                                                {item.badge}
                                                            </div>
                                                        </div>
                                                    )}
                                                    {(this.castToString(item.title) || this.castToString(item.description) || item.nextArrow) && (
                                                        <div className={this.decorateCSS("badge-container")}>
                                                            <div className={this.decorateCSS("text-container")}>
                                                                {this.castToString(item.title) && (
                                                                    <div className={this.decorateCSS("title")}>
                                                                        {item.title}
                                                                    </div>
                                                                )}
                                                                {(this.castToString(item.description) || item.nextArrow) && (
                                                                    <div className={this.decorateCSS("bottom-container")}>
                                                                        {this.castToString(item.description) && (
                                                                            <div className={this.decorateCSS("description")}>
                                                                                {item.description}
                                                                            </div>
                                                                        )}
                                                                        {item.nextArrow && (
                                                                            <div className={this.decorateCSS("button")}>
                                                                                <ComposerIcon name={item.nextArrow} propsIcon={{ className: this.decorateCSS("icon") }}></ComposerIcon>
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
                            {currentGallery.map((item: ImageItem, index: number) => {
                                if (index % 2 === 1) {
                                    if (currentGallery.length <= 3) {
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
                                            <div className={`${this.decorateCSS("images")} ${imageClass}`}>
                                                <div className={this.decorateCSS("image-wrapper")}>
                                                    {item.image && (
                                                        <img src={item.image} alt={item.image} className={this.decorateCSS("image")} />
                                                    )}
                                                    {this.castToString(item.badge) && (
                                                        <div className={this.decorateCSS("badge")}>
                                                            <div className={this.decorateCSS("badge-text")}>
                                                                {item.badge}
                                                            </div>
                                                        </div>
                                                    )}
                                                    {(this.castToString(item.title) || this.castToString(item.description) || item.nextArrow) && (
                                                        <div className={this.decorateCSS("badge-container")}>
                                                            <div className={this.decorateCSS("text-container")}>
                                                                {this.castToString(item.title) && (
                                                                    <div className={this.decorateCSS("title")}>
                                                                        {item.title}
                                                                    </div>
                                                                )}
                                                                {(this.castToString(item.description) || item.nextArrow) && (
                                                                    <div className={this.decorateCSS("bottom-container")}>
                                                                        {this.castToString(item.description) && (
                                                                            <div className={this.decorateCSS("description")}>
                                                                                {item.description}
                                                                            </div>
                                                                        )}
                                                                        {item.nextArrow && (

                                                                            <button className={this.decorateCSS("button")}>
                                                                                <ComposerIcon name={item.nextArrow} propsIcon={{ className: this.decorateCSS("icon") }}></ComposerIcon>
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
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default ImageGalleryComponent6;
