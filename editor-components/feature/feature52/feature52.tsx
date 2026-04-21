import * as React from "react";
import { BaseFeature, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./feature52.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type ServiceItemType = {
    icon: TypeMediaInputValue;
    title: React.JSX.Element;
    description: React.JSX.Element;
};

class Feature52 extends BaseFeature {
    private containerRef = React.createRef<HTMLDivElement>();
    private lastItemCount: number | undefined;
    private lastIsSmallScreen: boolean | undefined;

    constructor(props?: TypeUsableComponentProps) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Services",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value:
                "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
        });

        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in A Row",
            value: 1,
        });

        this.addProp({
            type: "boolean",
            key: "line",
            displayer: "Line",
            value: true,
        });


        this.addProp({
            type: "array",
            key: "services",
            displayer: "Services",
            value: [
                {
                    type: "object",
                    key: "service",
                    displayer: "Service",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["image", "icon"],
                            },
                            value: {
                                type: "icon",
                                name: "FaChessQueen",
                            },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Strategy Planning",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.<br><br>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts.",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "service",
                    displayer: "Service",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["image", "icon"],
                            },
                            value: {
                                type: "icon",
                                name: "LuLayers",
                            },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Technology Consulting",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "service",
                    displayer: "Service",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["image", "icon"],
                            },
                            value: {
                                type: "icon",
                                name: "IoColorPaletteOutline",
                            },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Design & Development",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "service",
                    displayer: "Service",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["image", "icon"],
                            },
                            value: {
                                type: "icon",
                                name: "LiaMagicSolid",
                            },
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Performance Audit",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value:
                                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
                        },
                    ],
                },
            ],
        });

        this.addProp({
            type: "media",
            key: "expandIcon",
            displayer: "Expand Icon",
            additionalParams: {
                availableTypes: ["image", "icon"],
            },
            value: {
                type: "icon",
                name: "IoAddSharp",
            },
        });

        this.addProp({
            type: "media",
            key: "collapseIcon",
            displayer: "Collapse Icon",
            additionalParams: {
                availableTypes: ["image", "icon"],
            },
            value: {
                type: "icon",
                name: "IoRemoveSharp",
            },
        });

        const rawItemCount = this.getPropValue("itemCount");
        const count = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;
        this.setComponentState("activeIndices", Array.from({ length: count }, (_, i) => i));
        this.lastItemCount = count;
    }

    static getName(): string {
        return "Feature 52";
    }

    onComponentDidMount() {
        this.lastIsSmallScreen = this.isSmallScreen();
        window.addEventListener("resize", this.handleResize);
        if (this.lastIsSmallScreen) {
            this.setComponentState("activeIndices", [0]);
        }
    }

    onComponentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    private handleResize = () => {
        const currentIsSmallScreen = this.isSmallScreen();
        if (this.lastIsSmallScreen !== currentIsSmallScreen) {
            this.lastIsSmallScreen = currentIsSmallScreen;
            if (currentIsSmallScreen) {
                this.setComponentState("activeIndices", [0]);
            } else {
                const rawItemCount = this.getPropValue("itemCount");
                const currentItemCount = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;
                this.setComponentState("activeIndices", Array.from({ length: currentItemCount }, (_, i) => i));
            }
        }
    };

    onComponentDidUpdate() {
        const rawItemCount = this.getPropValue("itemCount");
        const currentItemCount = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;
        const currentIsSmallScreen = this.isSmallScreen();

        const countChanged = this.lastItemCount !== currentItemCount;
        const screenChanged = this.lastIsSmallScreen !== currentIsSmallScreen;

        if (countChanged || screenChanged) {
            this.lastItemCount = currentItemCount;
            this.lastIsSmallScreen = currentIsSmallScreen;

            if (currentIsSmallScreen) {
                this.setComponentState("activeIndices", [0]);
            } else {
                this.setComponentState("activeIndices", Array.from({ length: currentItemCount }, (_, i) => i));
            }
        }
    }

    private isSmallScreen(): boolean {
        const el = this.containerRef.current;
        const width = el ? el.clientWidth : (typeof window !== "undefined" ? window.innerWidth : 1440);
        return width <= 1024;
    }

    private onItemClick(index: number): void {
        if (this.isSmallScreen()) {
            const activeIndices = this.getComponentState("activeIndices") || [];
            if (activeIndices.includes(index)) {
                this.setComponentState("activeIndices", []);
            } else {
                this.setComponentState("activeIndices", [index]);
            }
            return;
        }

        const rawItemCount = this.getPropValue("itemCount");
        const pcItemCount = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;
        const activeIndices = this.getComponentState("activeIndices") || [];

        const targetColumn = index % pcItemCount;
        const otherColumnsActive = activeIndices.filter((i: number) => (i % pcItemCount) !== targetColumn);

        let newIndices: number[];

        if (activeIndices.includes(index)) {
            newIndices = otherColumnsActive;
        } else {
            newIndices = [...otherColumnsActive, index];
        }

        this.setComponentState("activeIndices", newIndices);
    }

    private onItemKeyDown(event: React.KeyboardEvent<HTMLDivElement>, index: number): void {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.onItemClick(index);
        }
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const hasContent = subtitle || title || description;

        const rawItemCount = this.getPropValue("itemCount");
        const itemCount = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;
        const line = this.getPropValue("line") as boolean;

        const services = this.castToObject<ServiceItemType[]>("services") || [];
        const activeIndices = this.getComponentState("activeIndices") || [];

        const collapseIcon = this.getPropValue("collapseIcon") as TypeMediaInputValue;
        const expandIcon = this.getPropValue("expandIcon") as TypeMediaInputValue;

        const hasListContent = services.length > 0;
        const contentContainerClass = `${this.decorateCSS("content-container")} ${!hasContent && this.decorateCSS("only-list")
            } ${!hasListContent && this.decorateCSS("only-heading")}`;

        return (
            <Base.Container className={this.decorateCSS("container")} ref={this.containerRef}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={contentContainerClass}>
                        {hasContent && (
                            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
                                {subtitle && (
                                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                        {this.getPropValue("subtitle")}
                                    </Base.SectionSubTitle>
                                )}
                                {title && (
                                    <Base.SectionTitle className={this.decorateCSS("title")}>
                                        {this.getPropValue("title")}
                                    </Base.SectionTitle>
                                )}
                                {description && (
                                    <Base.SectionDescription className={this.decorateCSS("description")}>
                                        {this.getPropValue("description")}
                                    </Base.SectionDescription>
                                )}
                                {visibleButtons.length > 0 && (
                                    <Base.Row className={this.decorateCSS("button-container")}>
                                        {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                                            return this.castToString(item.text) && (
                                                <ComposerLink key={`button-${index}`} path={item.url}>
                                                    <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                                    </Base.Button>
                                                </ComposerLink>
                                            );
                                        })}
                                    </Base.Row>
                                )}
                            </Base.VerticalContent>
                        )}

                        {hasListContent && (
                            <div className={this.decorateCSS("list-container")}>
                                {line && <div className={this.decorateCSS("line")}></div>}
                                <Base.ListGrid
                                    className={`${this.decorateCSS("list-grid")} ${line && this.decorateCSS("has-line")}`}
                                    gridCount={{ pc: itemCount, tablet: 1, phone: 1 }}
                                >
                                    {services.map((item: ServiceItemType, index: number) => {
                                        const itemTitleExist = this.castToString(item.title);
                                        const itemDescriptionExist = this.castToString(item.description);
                                        const itemIconExist = !!item.icon?.name || !!item.icon?.url;
                                        const isActive = activeIndices.includes(index);
                                        const currentToggleIcon = isActive ? collapseIcon : expandIcon;
                                        const itemHeaderExist = !!itemTitleExist || itemIconExist || !!currentToggleIcon;

                                        return (
                                            <div
                                                key={`feature52-service-${index}`}
                                                className={`${this.decorateCSS("item-container")} ${isActive && this.decorateCSS("active-item")}`}
                                            >
                                                {itemHeaderExist && (
                                                    <div
                                                        className={this.decorateCSS("item-header")}
                                                        onClick={() => this.onItemClick(index)}
                                                        onKeyDown={(event) => this.onItemKeyDown(event, index)}
                                                        role="button"
                                                        tabIndex={0}
                                                        aria-expanded={isActive}
                                                    >
                                                        <div className={this.decorateCSS("item-left")}>
                                                            {itemIconExist && (
                                                                <Base.Media
                                                                    className={`${this.decorateCSS("item-icon")} ${isActive && this.decorateCSS("item-icon-active")}`}
                                                                    value={item.icon}
                                                                />
                                                            )}
                                                            {itemTitleExist && (
                                                                <Base.H5 className={`${this.decorateCSS("item-title")} ${isActive && this.decorateCSS("item-title-active")}`}>
                                                                    {item.title}
                                                                </Base.H5>
                                                            )}
                                                        </div>
                                                        {currentToggleIcon && (
                                                            <div className={this.decorateCSS("toggle-button-container")}>
                                                                <Base.Media
                                                                    className={`${this.decorateCSS("toggle-icon")} ${this.decorateCSS("button-icon")} ${isActive && this.decorateCSS("toggle-icon-active")}`}
                                                                    value={currentToggleIcon}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                                {itemDescriptionExist && (
                                                    <div
                                                        className={`${this.decorateCSS("item-description-container")} ${isActive && this.decorateCSS("item-description-active")}`}
                                                    >
                                                        <Base.P className={this.decorateCSS("item-description")}>
                                                            {item.description}
                                                        </Base.P>
                                                    </div>
                                                )}
                                                {line && <div className={this.decorateCSS("line")}></div>}
                                            </div>
                                        );
                                    })}
                                </Base.ListGrid>
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature52;