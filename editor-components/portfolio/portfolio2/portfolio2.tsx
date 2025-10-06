import * as React from "react";
import styles from "./portfolio2.module.scss";
import { BasePortfolio } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Side = 'left' | 'right';

class Portfolio2 extends BasePortfolio {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "leftSideSubTitle",
            displayer: "Left Side Subtitle",
            value: "GANACHE"
        })
        this.addProp({
            type: "string",
            key: "leftSideTitle",
            displayer: "Left Side Title",
            value: "CREATION"
        })
        this.addProp({
            type: "string",
            key: "leftSideText",
            displayer: "Left Side Text",
            value: "Lorem ipsum dolor sit amet, ea mel modo qualisque, possit nemore facilis vel te. Laudem aeterno dolorum no vix, ea sed falli option. Doming legendos his cu. Te nonumy eleifend expetenda usu. Quo appetere gubergren et."
        })
        this.addProp({
            type: "image",
            key: "image",
            displayer: "Image",
            value: "https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/02/h2-img-1-729x1024.png"
        })
        this.addProp({
            type: "string",
            key: "rightSideSubTitle",
            displayer: "Right Side Subtitle",
            value: "SWEET"
        })
        this.addProp({
            type: "string",
            key: "rightSideTitle",
            displayer: "Right Side Title",
            value: "MASTERPIECES"
        })
        this.addProp({
            type: "string",
            key: "rightSideText",
            displayer: "Right Side Text",
            value: "Lorem ipsum dolor sit amet, ea mel modo qualisque, possit nemore facilis vel te. Laudem aeterno dolorum no vix, ea sed falli option. Doming legendos his cu. Te nonumy eleifend expetenda usu. Quo appetere gubergren et."
        })
        this.addProp({
            type: "multiSelect",
            key: "hoverAnimation",
            displayer: "Hover Animation Style",
            value: ["animate1", "animate2"],
            additionalParams: {
                selectItems: ["animate1", "animate2"]
            }
        });
        this.addProp(INPUTS.BUTTON("leftSideButton", "Left Side Button", "READ MORE", "", "BsArrowRight", null, "Tertiary"));
        this.addProp(INPUTS.BUTTON("rightSideButton", "Right Side Button", "READ MORE", "", "BsArrowRight", null, "Tertiary"));
    }

    static getName(): string {
        return "Portfolio 2";
    }

    private renderSide(side: Side) {
        const subTitle = this.getPropValue(`${side}SideSubTitle`);
        const title = this.getPropValue(`${side}SideTitle`);
        const text = this.getPropValue(`${side}SideText`);
        const sideButton = this.castToObject(`${side}SideButton`) as INPUTS.CastedButton;

        const showNavigateContainer = sideButton.icon || this.castToString(sideButton.text);
        const showSideContainer = this.castToString(subTitle) || this.castToString(title) || this.castToString(text) || showNavigateContainer;

        if (!showSideContainer) {
            return null;
        }

        return (
            <>
                {showSideContainer && (
                    <div className={this.decorateCSS("side-container")}>
                        <div className={this.decorateCSS("side-container-wrap")}>
                            <div className={this.decorateCSS("side")}>
                                {this.castToString(subTitle) && (
                                    <Base.SectionSubTitle className={this.decorateCSS("sub-title")}>
                                        {subTitle}
                                    </Base.SectionSubTitle>
                                )}
                                {this.castToString(title) && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {title}
                                    </Base.SectionTitle>
                                )}
                                {this.castToString(text) && (
                                    <Base.SectionDescription className={this.decorateCSS("text")}>
                                        {text}
                                    </Base.SectionDescription>
                                )}
                                {showNavigateContainer &&
                                <div className={this.decorateCSS("button-wrapper")}>
                                    <Base.Button buttonType={sideButton.type} className={this.decorateCSS("button")}
                                        data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                                        <ComposerLink path={sideButton.url}>
                                            <div className={this.decorateCSS("text-and-icon")}>
                                                {this.castToString(sideButton.text) && (
                                                    <div className={this.decorateCSS("navigate-text")}>
                                                        {sideButton.text}
                                                    </div>
                                                )}
                                                {sideButton.icon && (
                                                    <Base.Icon
                                                        name={sideButton.icon}
                                                        propsIcon={{
                                                            className: this.decorateCSS(`${side}-navigate-icon`),
                                                        }}>
                                                    </Base.Icon>
                                                )}
                                            </div>
                                        </ComposerLink>
                                    </Base.Button>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }

    render() {
        const image = this.getPropValue("image");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {this.renderSide('left')}
                    {image && (
                        <div className={this.decorateCSS("middle-container")}
                            data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                            <div className={this.decorateCSS("middle-container-wrap")}>
                                <div className={this.decorateCSS("middle")}>
                                    <img src={image} alt={image} className={this.decorateCSS("image")} />
                                </div>
                            </div>
                        </div>
                    )}
                    {this.renderSide('right')}
                </Base.MaxContent>
            </Base.Container >
        )
    }
}

export default Portfolio2;