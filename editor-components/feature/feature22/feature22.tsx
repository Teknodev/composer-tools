import * as React from "react";
import { BaseFeature, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./feature22.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Tabs={
    tabText: React.JSX.Element;
    lottie_container: {
        lottie: TypeMediaInputValue;
    }
}

class Feature22 extends BaseFeature{
    private autoTabInterval: NodeJS.Timeout | null = null;
    private autoTabDelay: number = 9000; 

    constructor(props?: any){
        super(props,styles);
        
        const dummyData = (
            tabTitle: string,
            lottieUrl: string,
        ) => {
            return {
                type: "object",
                key: "tab",
                displayer: "Tab",
                value: [
                    {
                        type: "string",
                        key: "tabText",
                        displayer: "Tab Title",
                        value: tabTitle,
                    },
                    {
                        type: "object",
                        key: "lottie_container",
                        displayer: "Media",
                        value: [
                            {
                                type: "media",
                                key: "lottie",
                                displayer: "Lottie",
                                additionalParams: {
                                    availableTypes: ["lottie"],
                                },
                                value: {
                                    type: "lottie",
                                    url: lottieUrl,
                                    settings: {
                                        loop: true,
                                        autoplay: false
                                    }
                                } as TypeMediaInputValue,
                            },
                        ],
                    },
                ],
            } as TypeUsableComponentProps;
        };

        this.addProp({
            type: "string",
            key:"subtitle",
            displayer: "Subtitle",
            value: "All-in-One Commerce"
        });

        this.addProp({
            type: "string",
            key:"title",
            displayer: "Title",
            value: "Serve all clients' needs with composable eCommerce at scale"
        });
        
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

        this.addProp({
            type: "string",
            key:"description",
            displayer: "Description",
            value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        });
        
        this.setComponentState("activeTab", 0);
        this.setComponentState("startedIndex", 0);
        this.setComponentState("isTransitioning", false);
    }

    componentDidMount() {
        this.startAutoTabCycle();
    }

    componentWillUnmount() {
        this.stopAutoTabCycle();
    }

    startAutoTabCycle() {
        this.stopAutoTabCycle();
        
        this.autoTabInterval = setInterval(() => {
            const tabs = this.castToObject<Tabs[]>("tabs");
            const currentTab = this.getComponentState("activeTab");
            const nextTab = (currentTab + 1) % tabs.length;
            this.setActiveTab(nextTab);
        }, this.autoTabDelay);
    }

    stopAutoTabCycle() {
        if (this.autoTabInterval) {
            clearInterval(this.autoTabInterval);
            this.autoTabInterval = null;
        }
    }

    setActiveTab(activeTabIndex: number) {
        
        this.setComponentState("isTransitioning", true);
        
        setTimeout(() => {
            this.setComponentState("activeTab", activeTabIndex);
            setTimeout(() => {
                this.setComponentState("startedIndex", activeTabIndex);
                this.setComponentState("isTransitioning", false);
            }, 100);
        }, 200);
        
        setTimeout(() => {
            this.startAutoTabCycle();
        }, 500);
    }

    static getName(): string {
        return "Feature 22";
    }

    render() {
        const isTransitioning = this.getComponentState("isTransitioning");
        const tabs = this.castToObject<Tabs[]>("tabs");
        const activeTab = this.getComponentState("activeTab");
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const alignmentValue = Base.getContentAlignment();
        return(
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {(subtitleExist || titleExist) && (
                        <Base.VerticalContent className={this.decorateCSS("header")}>
                            {subtitleExist && <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${alignmentValue === "left" ? this.decorateCSS("subtitle-center") : ""}`}>
                                {this.getPropValue("subtitle")}
                            </Base.SectionSubTitle>}
                            {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>
                                {this.getPropValue("title")}
                            </Base.SectionTitle>}
                        </Base.VerticalContent>
                    )}
                    <div className={this.decorateCSS("content-wrapper")}>
                        {descriptionExist && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {this.getPropValue("description")}
                            </Base.SectionDescription>
                        )}
                        
                       {tabs.length > 0 && <Base.VerticalContent className={this.decorateCSS("box")}>
                            <div className={this.decorateCSS("tab-buttons")}>
                                {tabs.map(
                                    (tab: Tabs, index: number) => {
                                        const isTabTextVisible = this.castToString(tab.tabText);
                                        const isTabVisible = isTabTextVisible;
                                        return (
                                            isTabVisible && (
                                                <div 
                                                    key={index}
                                                    className={
                                                        `${this.decorateCSS("tab-button")} ${activeTab === index
                                                            ? this.decorateCSS("active")
                                                            : ""
                                                        }`
                                                    }
                                                    onClick={() => this.setActiveTab(index)}
                                                >
                                                    {isTabTextVisible && (
                                                        <Base.P className={this.decorateCSS("tabText")}>
                                                            {tab.tabText}
                                                        </Base.P>
                                                    )}
                                                </div>
                                            )
                                        );
                                    }
                                )}
                            </div>
                            
                            <div className={this.decorateCSS("tabs-container")}>
                                <div 
                                    className={`${this.decorateCSS("tabs-wrapper")} ${isTransitioning ? this.decorateCSS("transitioning") : ""}`}
                                    style={{
                                        transform: `translateX(-${activeTab * (100 / tabs.length)}%)`,
                                        width: `${tabs.length * 100}%`
                                    }}
                                >
                                    {tabs.map(
                                        (tab: Tabs, index: number) => {
                                            const lottieValue: TypeMediaInputValue = {
                                                type: "lottie",
                                                url: (tab.lottie_container.lottie?.type === "lottie" && tab.lottie_container.lottie?.url) 
                                                    ? tab.lottie_container.lottie.url 
                                                    : '',
                                                settings: {
                                                    loop: true,
                                                    autoplay: activeTab === index
                                                }
                                            };

                                            return (
                                                <div 
                                                    key={`${index}-${activeTab === index ? 'active' : 'inactive'}`}
                                                    className={`${this.decorateCSS("tab-slide")}`}
                                                    style={{
                                                        width: `${100 / tabs.length}%`
                                                    }}
                                                >
                                                    <div className={this.decorateCSS("content")}>
                                                        {lottieValue.url && (
                                                            <div className={this.decorateCSS("media-container")}>
                                                                <Base.Media 
                                                                    value={lottieValue}
                                                                    className={this.decorateCSS("lottie")}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        </Base.VerticalContent>}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        )
    }
}

export default Feature22;