import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials15.module.scss";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Testimonials15Page extends Testimonials {
    constructor(props?: any) {
        super(props,styles);

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Image",
            value: {
                type: "image",
                url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/about-1.webp"
            }
        });

        this.addProp({
            type: "object",
            key: "bottomLeftBox",
            displayer: "Bottom Left Box",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true,
                },
                {
                    type: "string",
                    key: "title",
                    displayer: "Title",
                    value: "Experiences",
                },
                {
                    type: "number",
                    key: "number",
                    displayer: "Number",
                    value: 13,
                },
                {
                    type: "icon",
                    key: "numberIcon",
                    displayer: "Icon",
                    value: "FaPlus",
                },
                {
                    type: "string",
                    key: "subtitle",
                    displayer: "Subtitle",
                    value: "Decades of Experience, Endless Innovation",
                },
            ],
        });
        
        this.addProp({
            type: "object",
            key: "topRightBox",
            displayer: "Top Right Box",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true,
                },
                {
                    type: "string",
                    key: "text",
                    displayer: "Text",
                    value: "Get to know us",
                },
                {
                    type: "string",
                    key: "mainTitle",
                    displayer: "Title",
                    value: "Empowering Businesses with Innovation, Expertise, and for <span style='color: var(--composer-primary-color)'>Succes.</span>",
                },
            ],
        });
        this.addProp(
            INPUTS.BUTTON(
                "button", 
                "Button", 
                "Learn More", 
                "", 
                "BsArrowUpRightCircleFill", 
                null, 
                "Link"
            )
        );
        this.addProp({
            type: "object",
            key: "bottomRightBox",
            displayer: "Bottom Right Box",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true,
                },
                {
                    type: "icon",
                    key: "starIcon",
                    displayer: "Icon",
                    value: "IoStar",
                },
                {
                    type: "number",
                    key: "starNumber",
                    displayer: "Icon Number",
                    value: 5,
                },
                {
                    type: "string",
                    key: "description",
                    displayer: "Company Quote",
                    value: "We believe in building lasting relationships with our clients through trust, innovation, and exceptional service.",
                },
                {
                    type: "string",
                    key: "name",
                    displayer: "Author Name",
                    value: "Esther Howard",
                },
                {
                    type: "string",
                    key: "position",
                    displayer: "Author Position",
                    value: "Co. Founder",
                },
                {
                    type: "icon",
                    key: "quoteIcon",
                    displayer: "Icon",
                    value: "RxQuote",
                },
            ],
        });
        this.addProp({
            type: "object",
            key: "videoBox",
            displayer: "Video Box",
            value: [
                {
                    type: "boolean",
                    key: "visibility",
                    displayer: "Visibility",
                    value: true,
                },
                {
                    type: "media",
                    key: "video",
                    displayer: "Video",
                    value: {
                        type: "video",
                        url: "http://youtube.com/watch?v=MLpWrANjFbI",
                    },
                },
                {
                    type: "media",
                    key: "coverImage",
                    displayer: "Cover image of the video",
                    value: {
                        type: "image",
                        url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/about-2.webp",
                    },
                },
                {
                    type: "icon",
                    key: "playIcon",
                    displayer: "Play Button Icon",
                    value: "IoPlayCircleSharp",
                },
                {
                    type: "icon",
                    key: "closeIcon",
                    displayer: "Close Button Icon",
                    value: "RxCross2",
                },
            ],
        });
        this.setComponentState("isVideoVisible", false);
    }

    static getName(): string {
        return "Testimonials 15";
    }

    getVisibilityInfo(topRightBox:any, bottomRightBox:any, videoBox:any) {
        const visibleBoxes = [];

        if (topRightBox.visibility) visibleBoxes.push('topRightBox');
        if (bottomRightBox.visibility) visibleBoxes.push('bottomRightBox');
        if (videoBox.visibility) visibleBoxes.push('videoBox');

        return {
            visibleBoxes,
            visibleCount: visibleBoxes.length
        };
    }

    getRightSideClass(visibleBoxes:string[], visibleCount:number) {
        if (visibleCount == 0) return this.decorateCSS("right-section-hidden");
        if (visibleCount == 1) return this.decorateCSS("right-section-single");
        if (visibleCount == 2) {
            if (visibleBoxes.includes('topRightBox') && visibleBoxes.includes('bottomRightBox')) {
                return this.decorateCSS("right-section-vertical");
            }
            if (visibleBoxes.includes('topRightBox') && visibleBoxes.includes('videoBox')) {
                return this.decorateCSS("right-section-top-video");
            }
            if (visibleBoxes.includes('bottomRightBox') && visibleBoxes.includes('videoBox')) {
                return this.decorateCSS("right-section-bottom-video");
            }
        }
        return this.decorateCSS("right-section-full");
    }

    render() {
        const bottomLeftBox = this.castToObject<any>("bottomLeftBox");
        const topRightBox = this.castToObject<any>("topRightBox");
        console.log("topright",topRightBox)
        const bottomRightBox = this.castToObject<any>("bottomRightBox");
        const videoBox = this.castToObject<any>("videoBox");
        const closeIcon: string = videoBox.closeIcon;
        const {visibleBoxes, visibleCount} = this.getVisibilityInfo(topRightBox, bottomRightBox, videoBox);
        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
        const buttonTextExist = this.castToString(button.text);
        console.log("Button icon:", button.icon);

        const renderLeftSide = bottomLeftBox.visibility;
        const renderRightSide = visibleCount > 0;

        const rightSectionClass = this.getRightSideClass(visibleBoxes, visibleCount);
        
        return(
            <Base.Container className={`${this.decorateCSS("container")} ${this.getComponentState("isVideoVisible") && this.decorateCSS("with-overlay")}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ContainerGrid className={this.decorateCSS("content-grid")}>
                        <div className={this.decorateCSS("left-section")}>
                            {this.getPropValue("image") && (
                                <div className={this.decorateCSS("main-image-container")}>
                                    <Base.Media
                                        value={this.getPropValue("image")}
                                        className={this.decorateCSS("main-image")}
                                    />
                                    {renderLeftSide && (
                                        <div className={this.decorateCSS("box-area")}>
                                            <div className={this.decorateCSS("experience-card")}>
                                                <div className={this.decorateCSS("experience-header")}>
                                                    <div className={this.decorateCSS("experience-title")}>
                                                        {bottomLeftBox.title}
                                                    </div>
                                                </div>
                                                <div className={this.decorateCSS("experience-content")}>
                                                    <div className={this.decorateCSS("experience-number")}>
                                                        {bottomLeftBox.number}
                                                        {bottomLeftBox.numberIcon && (
                                                            <Base.Icon
                                                                name={bottomLeftBox.numberIcon}
                                                                propsIcon={{className: this.decorateCSS("number-icon")}}
                                                            />
                                                        )}
                                                    </div>
                                                    <div className={this.decorateCSS("experience-subtitle")}>
                                                        {bottomLeftBox.subtitle}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        {renderRightSide && (
                            <div className={`${this.decorateCSS("right-section")} ${rightSectionClass}`}>
                                {topRightBox.visibility && (
                                    <div className={this.decorateCSS("top-right-content")}>
                                        <Base.VerticalContent className={this.decorateCSS("content-wrapper")}>
                                            <Base.SectionSubTitle className={this.decorateCSS("content-header")}>
                                                {topRightBox.textIcon}  
                                                <span className={this.decorateCSS("header-text")}>
                                                    {topRightBox.text}
                                                </span>
                                            </Base.SectionSubTitle>
                                            <div className={this.decorateCSS("main-content")}>
                                                <h2 className={this.decorateCSS("main-title")}>
                                                    {topRightBox.mainTitle}
                                                </h2>
                                            </div>
                                            {(!button.image && (button.icon || button.text)) && (
                                                <div className={this.decorateCSS("button-wrapper")}>
                                                    <ComposerLink path={button.url}>
                                                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                                            {button.icon && (
                                                                <Base.Icon
                                                                    propsIcon={{
                                                                        className: this.decorateCSS("button-icon"),
                                                                    }}
                                                                    name={button.icon}
                                                                />
                                                            )}
                                                            {buttonTextExist && <div className={this.decorateCSS("button-text")}>{button.text}</div>}
                                                        </Base.Button>
                                                    </ComposerLink>
                                                </div>
                                            )}
                                        </Base.VerticalContent>
                                    </div>
                                )}
                                {(bottomRightBox.visibility || videoBox.visibility) && (
                                    <div className={this.decorateCSS("bottom-row")}>
                                        {bottomRightBox.visibility && (
                                            <Base.VerticalContent className={this.decorateCSS("bottom-right-content")}>
                                                <div className={this.decorateCSS("quote-container")}>
                                                    <div className={this.decorateCSS("stars-container")}>
                                                        {Array.from({length: bottomRightBox.starNumber}, (_, i) => (
                                                            <Base.Icon
                                                                key={i}
                                                                name={bottomRightBox.starIcon}
                                                                propsIcon={{className: this.decorateCSS("star-icon")}}
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className={this.decorateCSS("quote-text")}>
                                                        {bottomRightBox.description}
                                                    </p>
                                                    <div className={this.decorateCSS("author-info")}>
                                                        <div className={this.decorateCSS("author-details")}>
                                                            <span className={this.decorateCSS("author-name")}>
                                                                {bottomRightBox.name}
                                                            </span>
                                                            <span className={this.decorateCSS("author-position")}>
                                                                {bottomRightBox.position}
                                                            </span>
                                                        </div>
                                                        {bottomRightBox.quoteIcon && (
                                                            <Base.Icon 
                                                                name={bottomRightBox.quoteIcon}
                                                                propsIcon={{className: this.decorateCSS("quote-icon")}}
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </Base.VerticalContent>
                                        )}
                                        {videoBox.visibility && (
                                            <div className={this.decorateCSS("video-content")}>
                                                <div 
                                                    className={this.decorateCSS("video-container")}
                                                    onClick={() => this.setComponentState("isVideoVisible", true)}
                                                >
                                                    <Base.Media
                                                        value={videoBox.coverImage}
                                                        className={this.decorateCSS("video-cover")}
                                                    />
                                                    <div className={this.decorateCSS("play-button")}>
                                                        <Base.Icon
                                                            name={videoBox.playIcon}
                                                            propsIcon={{className: this.decorateCSS("play-icon")}}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </Base.ContainerGrid>
                    {this.getComponentState("isVideoVisible") && (
                        <div className={this.decorateCSS("video-modal")}>
                            <div className={this.decorateCSS("video-modal-content")}>
                                <button
                                    className={this.decorateCSS("close-button")}
                                    onClick={() => this.setComponentState("isVideoVisible", false)}
                                >
                                    <Base.Icon
                                        name={closeIcon}
                                        propsIcon={{className: this.decorateCSS("close-icon")}}
                                    />
                                </button>
                                <Base.Media
                                    value={videoBox.video}
                                    className={this.decorateCSS("modal-video")}
                                />
                            </div>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default Testimonials15Page