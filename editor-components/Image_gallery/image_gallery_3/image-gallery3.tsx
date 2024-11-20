import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery3.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
import { elements } from "chart.js";

interface ImageGalleryContianer {
    imageGalleries: ImageGallery[],
    title: JSX.Element
}

interface ImageGallery {
    image: string,
    subtitle: JSX.Element,
    title: JSX.Element
}
class ImageGallery3 extends BaseImageGallery {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "boolean",
            key: "showAll",
            displayer: "Show All Category",
            value: true,
        });
        this.addProp({
            type: "array",
            key: "leftContainers",
            displayer: "Left Containers",
            value: [
                {
                    type: "object",
                    key: "leftContainer",
                    displayer: "Left lContainer",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "FASHION",
                        },
                        {
                            type: "array",
                            key: "imageGalleries",
                            displayer: "Left Image Galleries",
                            value: [
                                {
                                    type: "object",
                                    key: "imageGallery",
                                    displayer: "Left Image Gallery",
                                    value: [
                                        {
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/portrait05-1-960x960.jpg"
                                        },
                                        {
                                            type: "string",
                                            key: "subtitle",
                                            displayer: "Subtitle",
                                            value: "FASHION"
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "Sunset Girl"
                                        },

                                    ]

                                },

                            ]
                        }
                    ]

                },
                {
                    type: "object",
                    key: "leftContainer",
                    displayer: "Left lContainer",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "FOOD+DRINK",
                        },
                        {
                            type: "array",
                            key: "imageGalleries",
                            displayer: "Left Image Galleries",
                            value: [
                                {
                                    type: "object",
                                    key: "imageGallery",
                                    displayer: "Left Image Gallery",
                                    value: [
                                        {
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/masonry05-960x960.jpg"
                                        },
                                        {
                                            type: "string",
                                            key: "subtitle",
                                            displayer: "Subtitle",
                                            value: "FOOD+DRINK"
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "Little Pumpkin"
                                        },

                                    ]
                                },

                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "leftContainer",
                    displayer: "Left lContainer",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "NATURE",
                        },
                        {
                            type: "array",
                            key: "imageGalleries",
                            displayer: "Left Image Galleries",
                            value: [
                                {
                                    type: "object",
                                    key: "imageGallery",
                                    displayer: "Left Image Gallery",
                                    value: [
                                        {
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/masonry01-960x960.jpg"
                                        },
                                        {
                                            type: "string",
                                            key: "subtitle",
                                            displayer: "Subtitle",
                                            value: "NATURE"
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "Road to Home"
                                        },

                                    ]
                                },

                            ]
                        }
                    ]

                },
                {
                    type: "object",
                    key: "leftContainer",
                    displayer: "Left lContainer",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "PORTRAITS",
                        },
                        {
                            type: "array",
                            key: "imageGalleries",
                            displayer: "Left Image Galleries",
                            value: [
                                {
                                    type: "object",
                                    key: "imageGallery",
                                    displayer: "Left Image Gallery",
                                    value: [
                                        {
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/masonry02-960x960.jpg"
                                        },
                                        {
                                            type: "string",
                                            key: "subtitle",
                                            displayer: "Subtitle",
                                            value: "PORTRAITS"
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "Sweet Blonde"
                                        },

                                    ]
                                },

                            ]
                        }
                    ]

                },

            ]
        })

        this.addProp({
            type: "array",
            key: "rightContainers",
            displayer: "Right Containers",
            value: [
                {
                    type: "object",
                    key: "rightContainer",
                    displayer: "Right Container",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "NATURE",

                        },
                        {
                            type: "array",
                            key: "imageGalleries",
                            displayer: "Right Image Galleries",
                            value: [
                                {
                                    type: "object",
                                    key: "imageGallery",
                                    displayer: "Right Image Gallery",
                                    value: [
                                        {
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/masonry08-960x960.jpg"
                                        },
                                        {
                                            type: "string",
                                            key: "subtitle",
                                            displayer: "Subtitle",
                                            value: "NATURE"
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "Majestic Mountains"
                                        },

                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "rightContainer",
                    displayer: "Right Container",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "PORTRAITS",

                        },
                        {
                            type: "array",
                            key: "imageGalleries",
                            displayer: "Right Image Galleries",
                            value: [
                                {
                                    type: "object",
                                    key: "imageGallery",
                                    displayer: "Right Image Gallery",
                                    value: [
                                        {
                                            type: "image",
                                            key: "image",
                                            displayer: "Image",
                                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/masonry07-960x960.jpg"
                                        },
                                        {
                                            type: "string",
                                            key: "subtitle",
                                            displayer: "Subtitle",
                                            value: "PORTRAITS"
                                        },
                                        {
                                            type: "string",
                                            key: "title",
                                            displayer: "Title",
                                            value: "In the Shadows"
                                        },

                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        })

        this.setComponentState("default", 0);
        this.setComponentState("selectedSection", null);
        this.setComponentState("currentImageIndex", 0);
    }

    getName(): string {
        return "Image Gallery 3";
    }
    getCurrentGalleryLeft() {
        const galleryCollection = this.castToObject<ImageGalleryContianer[]>("leftContainers");
        console.log("galleryCollectionLeft ", galleryCollection)
        const selectedSection = this.getComponentState("selectedSection");
        console.log("selectedSectionLeft ", selectedSection)

        if (!selectedSection) {
            return galleryCollection.flatMap(item => item.imageGalleries);
        }

        const selectedGallery = galleryCollection.find(item => this.castToString(item.title) === selectedSection);
        console.log("returnLeft ", selectedGallery.imageGalleries)
        return selectedGallery ? selectedGallery.imageGalleries : [];
    }

    getCurrentGalleryRight() {
        const galleryCollection = this.castToObject<ImageGalleryContianer[]>("rightContainers");
        const selectedSection = this.getComponentState("selectedSection");

        if (!selectedSection) {
            return galleryCollection.flatMap(item => item.imageGalleries);
        }

        const selectedGallery = galleryCollection.find(item => this.castToString(item.title) === selectedSection);
        return selectedGallery ? selectedGallery.imageGalleries : [];
    }

    render() {
        const leftContainer = this.castToObject<ImageGalleryContianer[]>("leftContainers");
        // const currentIndex = this.getComponentState("selectedSection");
        // console.log("leftContainer", this.castToString(leftContainer[0].title))
        const rightContainer = this.castToObject<ImageGalleryContianer[]>("rightContainers");
        const currentImageIndex = this.getComponentState("currentImageIndex");
        const currentGalleryLeft = this.getCurrentGalleryLeft();
        console.log("currentGalleryLeft", currentGalleryLeft)
        const currentGalleryRight = this.getCurrentGalleryRight();
        console.log("currentGalleryRight", currentGalleryRight)
        const showAll = this.getPropValue("showAll");
        const selectedSection = this.getComponentState("selectedSection");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("maxContent")}>
                    <div className={this.decorateCSS("sectionTextContainer")}>
                        {showAll && (
                            <h3
                                className={`${this.decorateCSS("section-text")} ${!selectedSection ? this.decorateCSS("active") : ""}`}
                                onClick={() => this.setComponentState("selectedSection", null)}
                            >
                                All
                            </h3>
                        )}
                        {rightContainer.map((item: ImageGalleryContianer, index: number) => (
                            <div className={this.decorateCSS("sectionText")}
                                onClick={() => this.setComponentState("selectedSection", this.castToString(item.title))}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                    <div className={this.decorateCSS("wrapper")}>
                        {(currentGalleryLeft.length > 0) && (
                            <div className={this.decorateCSS("imageContainer")}>
                                <div
                                    className={this.decorateCSS(
                                        currentGalleryLeft.length === 1
                                            ? "single-image"
                                            : currentGalleryLeft.length === 2
                                                ? "two-images"
                                                : currentGalleryLeft.length === 3
                                                    ? "three-images"
                                                    : "four-images"
                                    )}
                                >
                                    {currentGalleryLeft.map((galleryItem: ImageGallery, index: number) => (
                                        <div key={index} className={this.decorateCSS("imageWrapper")}>
                                            {galleryItem.image && (
                                                <img
                                                    src={galleryItem.image}
                                                    alt={galleryItem.image}
                                                    className={this.decorateCSS("image")}
                                                />
                                            )}
                                            <div className={this.decorateCSS("text")}>
                                                <div className={this.decorateCSS("subtitle")}>
                                                    {galleryItem.subtitle}
                                                </div>
                                                <div className={this.decorateCSS("title")}>
                                                    {galleryItem.title}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(currentGalleryRight.length > 0) && (
                            <div className={this.decorateCSS("imageContainer")}>
                                <div
                                    className={this.decorateCSS(
                                        currentGalleryRight.length === 1
                                            ? "single-image"
                                            : currentGalleryRight.length === 2
                                                ? "two-images"
                                                : currentGalleryRight.length === 3
                                                    ? "three-images"
                                                    : "four-images"
                                    )}
                                >
                                    {currentGalleryRight.map((galleryItem: ImageGallery, index: number) => (
                                        <div key={index} className={this.decorateCSS("imageWrapper")}>
                                            {galleryItem.image && (
                                                <img
                                                    src={galleryItem.image}
                                                    alt={galleryItem.image}
                                                    className={this.decorateCSS("image")}
                                                />
                                            )}
                                            <div className={this.decorateCSS("text")}>
                                                <div className={this.decorateCSS("subtitle")}>
                                                    {galleryItem.subtitle}
                                                </div>
                                                <div className={this.decorateCSS("title")}>
                                                    {galleryItem.title}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                </Base.MaxContent>
            </Base.Container >
        );
    }

}

export default ImageGallery3;

