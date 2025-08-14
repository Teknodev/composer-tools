import * as React from "react";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./stats9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface Stat {
    number: string;
    description: string;
    suffix?: string;
}

class Stats9 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);


        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "WE ARE THE GAME DEVELOPMENT STUDIO KNOWN FOR CRAFTING DISTINCTIVE AND ",
        });

        this.addProp({
            type: "string",
            key: "highlightedTitle",
            displayer: "Highlighted Title",
            value: "IMMERSE GAMES ",
        });

        this.addProp({
            type: "string",
            key: "endTitle",
            displayer: "End Title",
            value: "THAT STAND OUT IN THE MARKET"
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Qamico is a design studio focused on game development that works with companies around the world, helping them grow and expand their business. <br><br>Lorem ipsum dolor sit amet consectetur adipiscing diam tortor sit feugiat dictum eu diam euismod ultrices convallis eget vel velit posuere mi consequat leo egestas sed odio molestie non imperdiet malesuada."
        });

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Image",
            value: {
                type: "image",
                url: "https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_img-2.jpg"
            },
        });

        this.addProp(
            INPUTS.BUTTON(
                "button",
                "Button",
                "MORE ABOUT US",
                "",
                "MdArrowOutward",
                null,
                "Link"
            )
        );

        this.addProp({
            type: "array",
            key: "stats",
            displayer: "Statistics",
            value: [
                {
                    type: "object",
                    key: "stat",
                    displayer: "Statistic",
                    value: [
                        {
                            type: "string",
                            key: "number",
                            displayer: "Number",
                            value: "15",
                        },
                        {
                            type: "string",
                            key: "suffix",
                            displayer: "Suffix",
                            value: "+",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "years experience working",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Statistic",
                    value: [
                        {
                            type: "string",
                            key: "number",
                            displayer: "Number",
                            value: "30",
                        },
                        {
                            type: "string",
                            key: "suffix",
                            displayer: "Suffix",
                            value: "+",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "games completed",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "stat",
                    displayer: "Statistic",
                    value: [
                        {
                            type: "string",
                            key: "number",
                            displayer: "Number",
                            value: "80",
                        },
                        {
                            type: "string",
                            key: "suffix",
                            displayer: "Suffix",
                            value: "M+",
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
                            value: "downloads of all-time",
                        },
                    ],
                },
            ],
        });

        this.addProp({
            type: "number",
            key: "animationDuration",
            displayer: "Number Animation Duration (ms)",
            value: 2000,
        });
    }

    static getName(): string {
        return "Stats 9";
    }
    private AnimatedStat = ({ stat, animationDuration = 2000 }: { stat: Stat; animationDuration?: number }) => {
        const [animatedNumber, setAnimatedNumber] = React.useState<string>("0");
        const ref = React.useRef<HTMLDivElement>(null);
        const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

        React.useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            animateNumber();
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.5 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }, [stat.number]);

        const animateNumber = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            const cleanNumber = stat.number.replace(/[^\d.]/g, '');
            const targetNumber = parseFloat(cleanNumber) || 0;
            
            const steps = animationDuration / 30;
            let currentNumber = 0;
            const increment = targetNumber / steps;

            intervalRef.current = setInterval(() => {
                currentNumber += increment;

                if (currentNumber >= targetNumber) {
                    currentNumber = targetNumber;
                    clearInterval(intervalRef.current!);
                }
                const formattedNumber = Math.floor(currentNumber).toString();
                setAnimatedNumber(formattedNumber);
            }, 30);
        };

        return (
            <div ref={ref} className={this.decorateCSS("stat-item")}>
                <div className={this.decorateCSS("stat-number-container")}>
                    <span className={this.decorateCSS("stat-number")}>
                        {animatedNumber}
                    </span>
                    {stat.suffix && (
                        <span className={this.decorateCSS("stat-suffix")}>
                            {typeof stat.suffix === 'string' ? stat.suffix.replace(/<[^>]*>/g, '').trim() : stat.suffix}
                        </span>
                    )}
                </div>
                <Base.P className={this.decorateCSS("stat-description")}>
                    {stat.description}
                </Base.P>
            </div>
        );
    };

    render() {
        const statsProp = this.getPropValue("stats");
        const stats: Stat[] = statsProp.map((item: any) => {
            const number = this.castToString(item.getPropValue("number") || "0");
            const suffix = item.getPropValue("suffix") || "";
            const description = item.getPropValue("description") || "";
            return { number, suffix, description };
        });
        
        const title = this.getPropValue("title");
        const highlightedTitle = this.getPropValue("highlightedTitle");
        const endTitle = this.getPropValue("endTitle");
        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
        const description = this.getPropValue("description");
        const isDescriptionExist = this.castToString(description);
        
        let image: TypeMediaInputValue | null = null;
        try {
            image = this.castToObject<TypeMediaInputValue>("image");
        } catch (error) {
            console.error('Image casting error:', error);
            const rawImage = this.getPropValue("image");
            if (rawImage && typeof rawImage === 'object') {
                image = rawImage as TypeMediaInputValue;
            }
        }
        
        const animationDuration = this.getPropValue("animationDuration") || 2000;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("main-content")}>
                        <div className={this.decorateCSS("left-content")}>
                            {(title || highlightedTitle || endTitle) && (
                                <div className={this.decorateCSS("title-section")}>
                                    <Base.H1 className={this.decorateCSS("main-title")}>
                                        {title}
                                        <span className={this.decorateCSS("highlighted-title")}>
                                            {highlightedTitle}
                                        </span>
                                        {endTitle}
                                    </Base.H1>
                                </div>
                            )}

                            <div className={this.decorateCSS("content-section")}>
                                {image && image.type === "image" && image.url && (
                                    <div className={this.decorateCSS("image-container")}>
                                        <Base.Media
                                            value={image}
                                            className={this.decorateCSS("content-image")}
                                        />
                                    </div>
                                )}

                                <div className={this.decorateCSS("text-content")}>
                                    {isDescriptionExist && (
                                        <p className={this.decorateCSS("description")}>
                                            {description}
                                        </p>
                                    )}

                                    {this.castToString(button.text) && (
                                        <div className={this.decorateCSS("button-wrapper")}>
                                            <ComposerLink path={button.url}>
                                                <Base.Button
                                                    buttonType={button.type}
                                                    className={this.decorateCSS("more-button")}
                                                >
                                                    {button.text}
                                                    {button.icon && (
                                                        <Base.Icon
                                                            name={button.icon}
                                                            propsIcon={{ className: this.decorateCSS("button-icon") }}
                                                        />
                                                    )}
                                                </Base.Button>
                                            </ComposerLink>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={this.decorateCSS("stats-section")}>
                            {stats && Array.isArray(stats) && stats.length > 0 && 
                             stats.map((stat, index) => (
                                <this.AnimatedStat
                                    key={index}
                                    stat={stat}
                                    animationDuration={animationDuration}
                                />
                            ))}
                        </div>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats9;