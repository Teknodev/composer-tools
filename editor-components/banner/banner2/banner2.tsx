import * as React from "react";
import styles from "./banner2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";


type bannerItem = {
    title: React.ReactNode;
    image: string,
    description: string,
};

type crumberItems = {
    homepage: string,
    currentpage: string,
    navigateTo: string,
}

class Banner2 extends BaseBanner {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "object",
            key: "banner",
            displayer: "Banner Items",
            value: [{
                type: "string",
                key: "title",
                displayer: "Title",
                value: "The Best Time to Celebrate",
            },
            ],
        });
        this.addProp({
            type: "object",
            key: "crumber",
            displayer: "Crumber Items",
            value: [{
                type: "string",
                key: "homepage",
                displayer: "Home Page",
                value: "Home Page",
            },
            {
                type: "page",
                key: "navigateTo",
                displayer: "Navigate To",
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
            key: "showCrumber",
            displayer: "Show Crumber",
            value: true,
        });
        this.addProp({
            type: "icon",
            key: "crumberIcon",
            displayer: "Icon",
            value: "RxSlash",
        });
    }

    static getName(): string {
        return "Banner 2";
    }

    render() {
        const banner = this.castToObject<bannerItem>("banner");
        const isTitleExist = this.castToString(banner.title);

        const crumber = this.castToObject<crumberItems>("crumber");
        const homepage = this.castToString(crumber.homepage);
        const currentpage = this.castToString(crumber.currentpage);
        const navigateToFromCrumber = crumber.navigateTo;
        const navigateToFromProp = this.getPropValue("strip.navigateTo");
        const navigateToUrl = navigateToFromCrumber || navigateToFromProp || "";
        const showCrumber = this.getPropValue("showCrumber")
        const background = this.getPropValue("image");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div
                        className={`${this.decorateCSS("background-layer")} ${background && this.decorateCSS("with-image")}`}
                        style={{
                            background: background,
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
                    {showCrumber && (
                        <div className={this.decorateCSS("navigation-crumber")}>
                            <div className={this.decorateCSS("crumber-content")}>
                                <ComposerLink path={navigateToUrl} className={this.decorateCSS("home-link")}>
                                    <span className={this.decorateCSS("home-page")}>{homepage}</span>
                                </ComposerLink>
                                <ComposerIcon
                                    name={this.getPropValue("crumberIcon")}
                                    propsIcon={{
                                        className: this.decorateCSS("crumberIcon"),
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
};

export default Banner2;