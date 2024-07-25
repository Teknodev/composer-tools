import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery2.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";


type ImageType= {
    type: string;   
    key: string;
    displayer: string;
    value: string;
}

class ImageGallery2 extends BaseImageGallery {
    constructor(props?: any) {
        super(props, styles);
        this.setComponentState("default", 0);
        this.setComponentState("modalOpen", false);
        this.setComponentState("currentImageIndex", 0);
        this.addProp({
            type: "array",
            key: "gallery",
            displayer: "gallery",
            value: [
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "All",
                        },
                        {
                            type: "array",
                            key: "imageGallery",
                            displayer: "Image Gallery 1",
                            value: [
                                {
                                    type: "image",
                                    key: "image1",
                                    displayer: "Image 1",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media",
                                },
                                {
                                    type: "image",
                                    key: "image2",
                                    displayer: "Image 2",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcecf9e8fb8002c915408?alt=media",
                                },
                                {
                                    type: "image",
                                    key: "image3",
                                    displayer: "Image 3",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcf669e8fb8002c915437?alt=media",
                                },
                                {
                                    type: "image",
                                    key: "image4",
                                    displayer: "Image 4",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0079e8fb8002c91546b?alt=media",
                                },
                                {
                                    type: "image",
                                    key: "image5",
                                    displayer: "Image 5",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0079e8fb8002c91546b?alt=media",
                                },
                                {
                                    type: "image",
                                    key: "image6",
                                    displayer: "Image 6",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd02b9e8fb8002c915477?alt=media",
                                },
                                {
                                    type: "image",
                                    key: "image7",
                                    displayer: "Image 7",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0579e8fb8002c91548b?alt=media",
                                },
                                {
                                    type: "image",
                                    key: "image8",
                                    displayer: "Image 8",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0799e8fb8002c9154a1?alt=media",
                                },
                                {
                                    type: "image",
                                    key: "image9",
                                    displayer: "Image 9",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0b59e8fb8002c9154ae?alt=media",
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Nonveg"
                        },
                        {
                            type: "array",
                            key: "imageGallery",
                            displayer: "Image Gallery 2",
                            value: [
                                {
                                    type: "image",
                                    key: "image1",
                                    displayer: "Image 1",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image2",
                                    displayer: "Image 2",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image3",
                                    displayer: "Image 3",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image4",
                                    displayer: "Image 4",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image5",
                                    displayer: "Image 5",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image6",
                                    displayer: "Image 6",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Vegetarian"
                        },
                        {
                            type: "array",
                            key: "imageGallery",
                            displayer: "Image Gallery 2",
                            value: [
                                {
                                    type: "image",
                                    key: "image1",
                                    displayer: "Image 1",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image2",
                                    displayer: "Image 2",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image3",
                                    displayer: "Image 3",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image4",
                                    displayer: "Image 4",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image5",
                                    displayer: "Image 5",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image6",
                                    displayer: "Image 6",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Dessert"
                        },
                        {
                            type: "array",
                            key: "imageGallery",
                            displayer: "Image Gallery 2",
                            value: [
                                {
                                    type: "image",
                                    key: "image1",
                                    displayer: "Image 1",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image2",
                                    displayer: "Image 2",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd02b9e8fb8002c915477?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image3",
                                    displayer: "Image 3",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcf669e8fb8002c915437?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image4",
                                    displayer: "Image 4",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0079e8fb8002c91546b?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image5",
                                    displayer: "Image 5",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcecf9e8fb8002c915408?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image6",
                                    displayer: "Image 6",
                                    value: "https://craftohtml.themezaa.com/images/demo-restaurant-gallery-04.jpg"
                                },
                            ]
                        }
                    ]
                },
                {
                    type: "object",
                    key: "section",
                    displayer: "Section",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drinks"
                        },
                        {
                            type: "array",
                            key: "imageGallery",
                            displayer: "Image Gallery 2",
                            value: [
                                {
                                    type: "image",
                                    key: "image1",
                                    displayer: "Image 1",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image2",
                                    displayer: "Image 2",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcf669e8fb8002c915437?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image3",
                                    displayer: "Image 3",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcecf9e8fb8002c915408?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image4",
                                    displayer: "Image 4",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd0079e8fb8002c91546b?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image5",
                                    displayer: "Image 5",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fd02b9e8fb8002c915477?alt=media"
                                },
                                {
                                    type: "image",
                                    key: "image6",
                                    displayer: "Image 6",
                                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/668fcded9e8fb8002c915338?alt=media"
                                },
                            ]
                        }
                    ]
                },
            ]
        });

        this.addProp({
            type:"icon",
            key:"icon",
            displayer:"Icon Name",
            value:"FaSearch"
        })
    }

    
    openModal = (index: number) => {
        this.setComponentState("modalOpen", true);
        this.setComponentState("currentImageIndex", index);
    };

    closeModal = () => {
        this.setComponentState("modalOpen", false);
    };

    prevImage = () => {
        const currentImageIndex = this.getComponentState("currentImageIndex");
        const currentGallery = this.getCurrentGallery();
        const newIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
        this.setComponentState("currentImageIndex", newIndex);
    };

    nextImage = () => {
        const currentImageIndex = this.getComponentState("currentImageIndex");
        const currentGallery = this.getCurrentGallery();
        const newIndex = (currentImageIndex + 1) % currentGallery.length;
        this.setComponentState("currentImageIndex", newIndex);
    };

    getCurrentGallery() {
        const galleryCollection = this.getPropValue("gallery");
        const currentIndex = this.getComponentState("default");
        return galleryCollection[currentIndex].getPropValue("imageGallery");
    }
    getName(): string {
        return "Image Gallery 2";
    }

    render() {
        const galleryCollection = this.getPropValue("gallery");
        const currentIndex = this.getComponentState("default");
        const modalOpen = this.getComponentState("modalOpen");
        const currentImageIndex = this.getComponentState("currentImageIndex");
        const currentGallery = this.getCurrentGallery();
        const currentImage = currentGallery[currentImageIndex];
        const magnifier_icon=this.getPropValue("icon");
        return (
            <div className={this.decorateCSS("surface")}>
                <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("section-selector-text")}>
                        {galleryCollection.map((element: any, index: number) => (
                            <h3
                                className={`${this.decorateCSS("section-text")} ${index === currentIndex ? this.decorateCSS("active") : ""}`}
                                key={index}
                                onClick={() => this.setComponentState("default", index)}
                            >
                                {element.getPropValue("title")}
                            </h3>
                        ))}
                    </div>
                    <div className={this.decorateCSS("gallery-grid")}>
                        {currentGallery.map((image: ImageType, imageIndex: number) => (
                            <div className={this.decorateCSS("gallery-item")} key={image.key} onClick={() => this.openModal(imageIndex)}>
                                <div className={this.decorateCSS("image-container")}>
                                    <img
                                        src={image.value}
                                        alt={image.displayer}
                                        className={this.decorateCSS("gallery-image")}
                                    />
                                    <div className={this.decorateCSS("overlay")} />
                                    <div className={this.decorateCSS("zoom-icon")}>
                                        <ComposerIcon propsIcon={{ className: this.decorateCSS("magnifier-icon") }} name={magnifier_icon} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {modalOpen && (
                    <div className={this.decorateCSS("modal")}>
                        <div className={this.decorateCSS("modal-content")}>
                        <div className={this.decorateCSS("close")} onClick={this.closeModal}>
                        <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name="IoCloseOutline" />
                             </div>
                    <div className={this.decorateCSS("prev")} onClick={this.prevImage}>
                        <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name="PiArrowLeft" />
                            </div>
                    <div className={this.decorateCSS("next")} onClick={this.nextImage}>
                        <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name="PiArrowRight" />
                            </div>


                            <img src={currentImage.value} alt={currentImage.displayer} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ImageGallery2;