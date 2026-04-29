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
        const itemCount = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;
        this.setComponentState("activeIndices", this.getInitialActiveIndices(itemCount));
        this.lastItemCount = itemCount;
    }

    private getInitialActiveIndices(itemCount: number): number[] {
        const services = this.castToObject<ServiceItemType[]>("services") || [];
        const total = services.length;
        if (total === 0) return [];
        if (this.isPhone()) return [0];

        const counts = this.getColumnCounts(itemCount);
        const indices: number[] = [];
        let offset = 0;
        for (let i = 0; i < counts.length; i++) {
            if (counts[i] > 0) {
                indices.push(offset);
            }
            offset += counts[i];
        }
        return indices;
    }

    private getColumnCounts(itemCount?: number) {
        const services = this.castToObject<ServiceItemType[]>("services") || [];
        const total = services.length;
        const pcItemCount = itemCount ?? (typeof this.getPropValue("itemCount") === "number" && this.getPropValue("itemCount") > 0 ? this.getPropValue("itemCount") : 1);

        let currentCount = pcItemCount;
        if (this.isPhone()) {
            currentCount = 1;
        } else if (this.isTablet()) {
            currentCount = 2;
        }

        const perColBase = Math.floor(total / currentCount);
        const rem = total % currentCount;
        const counts = Array(currentCount).fill(perColBase);
        for (let i = 0; i < rem; i++) counts[i]++;
        return counts;
    }

    private getItemColumn(index: number): number {
        const counts = this.getColumnCounts();
        let offset = 0;
        for (let i = 0; i < counts.length; i++) {
            if (index < offset + counts[i]) return i;
            offset += counts[i];
        }
        return 0;
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
            const rawItemCount = this.getPropValue("itemCount");
            const currentItemCount = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;
            this.setComponentState("activeIndices", this.getInitialActiveIndices(currentItemCount));
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
            this.setComponentState("activeIndices", this.getInitialActiveIndices(currentItemCount));
        }
    }

    private isSmallScreen(): boolean {
        return this.isPhone() || this.isTablet();
    }

    private isPhone(): boolean {
        const el = this.containerRef.current;
        const width = el ? el.clientWidth : (typeof window !== "undefined" ? window.innerWidth : 1440);
        return width <= 640;
    }

    private isTablet(): boolean {
        const el = this.containerRef.current;
        const width = el ? el.clientWidth : (typeof window !== "undefined" ? window.innerWidth : 1440);
        return width > 640 && width <= 1024;
    }

    private onItemClick(index: number): void {
        const activeIndices = this.getComponentState("activeIndices") || [];
        if (this.isPhone()) {
            if (activeIndices.includes(index)) {
                this.setComponentState("activeIndices", []);
            } else {
                this.setComponentState("activeIndices", [index]);
            }
            return;
        }

        const targetColumn = this.getItemColumn(index);
        const otherColumnsActive = activeIndices.filter((i: number) => this.getItemColumn(i) !== targetColumn);

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
                                <Base.ListGrid
                                    className={this.decorateCSS("list-grid-wrapper")}
                                    gridCount={{ pc: itemCount, tablet: 2, phone: 1 }}
                                >
                                    {(() => {
                                        const counts = this.getColumnCounts();
                                        const columns: ServiceItemType[][] = [];
                                        let offset = 0;
                                        for (const count of counts) {
                                            columns.push(services.slice(offset, offset + count));
                                            offset += count;
                                        }

                                        return columns.map((colItems, colIdx) => (
                                            <div key={colIdx} className={this.decorateCSS("list-column")}>
                                                {line && <div className={this.decorateCSS("line")}></div>}
                                                {colItems.map((item, idxInCol) => {
                                                    const globalIdx = columns.slice(0, colIdx).reduce((acc, curr) => acc + curr.length, 0) + idxInCol;
                                                    const itemTitleExist = this.castToString(item.title);
                                                    const itemDescriptionExist = this.castToString(item.description);
                                                    const itemIconExist = !!item.icon?.name || !!item.icon?.url;
                                                    const isActive = activeIndices.includes(globalIdx);
                                                    const currentToggleIcon = isActive ? collapseIcon : expandIcon;
                                                    const itemHeaderExist = !!itemTitleExist || itemIconExist || !!currentToggleIcon;

                                                    return (
                                                        <div
                                                            key={`feature52-service-${globalIdx}`}
                                                            className={`${this.decorateCSS("item-container")} ${isActive && this.decorateCSS("active-item")}`}
                                                        >
                                                            {itemHeaderExist && (
                                                                <div
                                                                    className={this.decorateCSS("item-header")}
                                                                    onClick={() => this.onItemClick(globalIdx)}
                                                                    onKeyDown={(event) => this.onItemKeyDown(event, globalIdx)}
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
                                                                            <Base.H6 className={`${this.decorateCSS("item-title")} ${isActive && this.decorateCSS("item-title-active")}`}>
                                                                                {item.title}
                                                                            </Base.H6>
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
                                            </div>
                                        ));
                                    })()}
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