import * as React from "react";
import { BaseContent, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./content26.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { display } from "@mui/system";

type Tabs={
    tabText: React.JSX.Element;
    lottie_container: {
        lottie: string;
    }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        background?: string;
        speed?: string;
        loop?: boolean;
        autoplay?: boolean;
        style?: React.CSSProperties;
      };
    }
  }
}

class Content26 extends BaseContent{
    constructor(props?: any){
        super(props,styles);
        
        const dummyData = (
            tabTitle: string,
            lottie: string,
        ) => {
            return {
                type: "object",
                key: "tab",
                displayer: "Tab 1",
                value: [
                    {
                        type: "string",
                        key: "tabText",
                        displayer: "Tab 1 Text",
                        value: tabTitle,
                    },
                    {
                        type: "object",
                        key: "lottie_container",
                        displayer: "Lottie Container",
                        value: [
                            {
                                type: "media",
                                key: "lottie",
                                displayer: "Lottie",
                                value: {
                                    type: "lottie",
                                    url: lottie,
                                },
                            },
                        ],
                    },
                ],
            } as TypeUsableComponentProps;
        };
        
        this.addProp({
            type: "array",
            key: "tabs",
            displayer: "Tabs",
            value: [
                dummyData(
                    "Payments",
                    "https://irp.cdn-website.com/a8ff2f1c/files/uploaded/Payments_LOTTIE-v5_updated.json",
                ),
                dummyData(
                    "External Catalog",
                    "https://du-cdn.cdn-website.com/duda_website/images/ecommerce/json/External_LOTTIE.json",
                ),
                dummyData(
                    "Inventory",
                    "https://du-cdn.cdn-website.com/duda_website/images/ecommerce/json/Inventory_LOTTIE_v3.json",
                ),
            ],
        });
        this.setActiveTab(0);
    }

    setActiveTab(activeTabIndex: number) {
        this.setComponentState("activeTab", activeTabIndex);
        setTimeout(() => {
            this.setComponentState("startedIndex", activeTabIndex);
        }, 50);
    }

    static getName(): string {
        return "Content 26";
    }
    
    render() {
        const title = this.getPropValue("title");
        return(
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {(this.castToString(title)) && (
                        <div className={this.decorateCSS("header")}>
                            {title}
                        </div>
                    )}
                    <div className={this.decorateCSS("tab-buttons")}>
                        {this.castToObject<Tabs[]>("tabs").map(
                            (tab: Tabs, index: number) => {
                                const isTabTextVisible = this.castToString(tab.tabText);
                                const isTabVisible = isTabTextVisible;
                                return (
                                    isTabVisible && (
                                        <div 
                                            key={index}
                                            className={
                                                `${this.decorateCSS("tab-button")} ${this.getComponentState("activeTab") === index
                                                    ? this.decorateCSS("active")
                                                    : ""
                                                }`
                                            }
                                            onClick={() => this.setActiveTab(index)}
                                        >
                                            {isTabTextVisible && (
                                                <div className={this.decorateCSS("tabText")}>
                                                    {tab.tabText}
                                                </div>
                                            )}
                                        </div>
                                    )
                                );
                            }
                        )}
                    </div>
                    {this.castToObject<Tabs[]>("tabs").map(
                        (tab: Tabs, index: number) => {
                            const lottieUrl = tab.lottie_container.lottie?.url || tab.lottie_container.lottie || '';
                            const isLottieContainerVisible = lottieUrl;

                            return (
                                <div 
                                    key={index}
                                    className={
                                        `${this.decorateCSS("tabs")} ${this.getComponentState("activeTab") === index
                                            ? this.decorateCSS("active")
                                            : ""
                                        } ${this.getComponentState("startedIndex") === index
                                            ? this.decorateCSS("start")
                                            : ""
                                        }`
                                    }
                                >
                                    <div className={this.decorateCSS("content")}>
                                        {isLottieContainerVisible && (
                                            <div className={this.decorateCSS("lottie-container")}>
                                                <lottie-player
                                                    src={lottieUrl}
                                                    background="transparent"
                                                    speed="1"
                                                    loop={true}
                                                    autoplay={true}
                                                    className={this.decorateCSS("lottie")}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        }
                    )}
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default Content26;