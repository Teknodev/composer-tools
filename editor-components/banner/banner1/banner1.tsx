import * as React from "react";
import styles from "./banner1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type bannerItem = {
    title: React.ReactNode;
    image: string;
};

type stripItem = {
    homepage: string;
    currentpage: string;
    navigateTo: string;
};

class Banner1 extends BaseBanner {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "object",
            key: "banner",
            displayer: "Banner Items",
            value: [
                {
                    type: "string",
                    key: "title",
                    displayer: "Title",
                    value: "Home",
                },
                {
                    type: "image",
                    key: "image",
                    displayer: "Background Image",
                    value:
                        "https://unsplash.com/photos/Y3AqmbmtLQI/download?ixid=M3w0NDkyMzd8MHwxfHNlYXJjaHw0fHxjb2ZmZWV8ZW58MHx8fHwxNzQwNjQzNzQxfDA",
                },
            ],
        });
        this.addProp({
            type: "object",
            key: "strip",
            displayer: "Strip Items",
            value: [
                {
                    type: "string",
                    key: "homepage",
                    displayer: "Home Page",
                    value: "Home Page",
                },
                {
                    type: "page",
                    key: "navigateTo",
                    displayer: "Navigate to",
                    value: "",
                },
                {
                    type: "string",
                    key: "currentpage",
                    displayer: "Current Page",
                    value: "Current Page",
                },
            ],
        });
        this.addProp({
            type: "boolean",
            key: "showStrip",
            displayer: "Show Strip",
            value: true,
        });
        this.addProp({
            type: "icon",
            key: "stripIcon",
            displayer: "Icon",
            value: "RxDoubleArrowRight",
        });
    }

    static getName(): string {
        return "Banner 1";
    }

    render() {
        const banner = this.castToObject<bannerItem>("banner");
        const isTitleExist = this.castToString(banner.title);

        const strip = this.castToObject<stripItem>("strip");
        const homepage = this.castToString(strip.homepage);
        const currentpage = this.castToString(strip.currentpage);
        const navigateToFromStrip = strip.navigateTo;
        const navigateToFromProp = this.getPropValue("strip.navigateTo");
        const navigateToUrl = navigateToFromStrip || navigateToFromProp || "";
        const showStrip = this.getPropValue("showStrip");
        const backgroundImage = banner.image && banner.image.trim() !== "";

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {backgroundImage && (
                        <div
                            className={`${this.decorateCSS("background-layer")} ${backgroundImage && this.decorateCSS("with-image")}`}
                            style={{
                                backgroundImage: `url(${banner.image})`,
                            }}
                        >
                            <div className={styles["banner-page"]}>
                                {isTitleExist && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {banner.title}
                                    </Base.SectionTitle>
                                )}
                            </div>
                        </div>
                    )}
                    {showStrip && (
                        <div className={this.decorateCSS("navigation-strip")}>
                            <div className={this.decorateCSS("strip-content")}>
                                <ComposerLink path={navigateToUrl} className={this.decorateCSS("home-link")}>
                                    <span className={this.decorateCSS("home-page")}>{homepage}</span>
                                </ComposerLink>
                                <ComposerIcon
                                    name={this.getPropValue("stripIcon")}
                                    propsIcon={{
                                        className: this.decorateCSS("stripIcon"),
                                    }}
                                />
                                <span className={this.decorateCSS("current-page")}>{currentpage}</span>
                            </div>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Banner1;
