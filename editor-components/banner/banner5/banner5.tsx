import * as React from "react";
import styles from "./banner5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";


class Banner5 extends BaseBanner {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "icon",
            key: "homeIcon",
            displayer: "Home Icon",
            value: "FaHome",
        })
        this.addProp({
            type: "string",
            key: "homeTitle",
            displayer: "Home Title",
            value: "",
        });
        this.addProp({
            type: "page",
            key: "homePage",
            displayer: "Home Link",
            value: "",
        });
        this.addProp({
            type: "icon",
            key: "icon",
            displayer: "Icon",
            value: "RxDividerVertical",
        });
        this.addProp({
            type: "string",
            key: "currentTitle",
            displayer: "Current Page",
            value: "Current Page",
        });
        this.addProp({
            type: "icon",
            key: "currentIcon",
            displayer: "Current Icon",
            value: "",
        });
    }

    static getName(): string {
        return "Banner 5";
    }

    render() {
        const homeTitle = this.getPropValue("homeTitle");
        const currentTitle = this.getPropValue("currentTitle");
        const icon = this.getPropValue("icon");

        const homePage = this.castToString(homeTitle);
        const currentPage = this.castToString(currentTitle);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("section")}>
                        <ComposerLink path={this.getPropValue("homePage")}>
                            <div className={this.decorateCSS("link")}>
                                <Base.Icon name={this.getPropValue("homeIcon")} propsIcon={{ className: this.decorateCSS("pageIcon") }} />
                                {homePage && (
                                    <span className={this.decorateCSS("home-page-title")}>{homeTitle}</span>
                                )}
                            </div>
                        </ComposerLink>
                        {icon && (
                            <div className={this.decorateCSS("item")}>
                                <Base.Icon name={icon} propsIcon={{ className: this.decorateCSS("icon") }} />
                            </div>
                        )}
                        <div className={this.decorateCSS("link")}>
                            <Base.Icon name={this.getPropValue("currentIcon")} propsIcon={{ className: this.decorateCSS("pageIcon") }} />
                            {currentPage && (
                                <span className={this.decorateCSS("current-page-title")}>{currentTitle}</span>
                            )}
                        </div>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default Banner5;
