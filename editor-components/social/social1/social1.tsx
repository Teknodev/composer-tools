import * as React from "react";
import { BaseSocial } from "../../EditorComponent";
import styles from "./social1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";

type CardItem={
    items: ItemType[]
}
type ItemType={
    image: string,
    name: React.JSX.Element,
    comment: React.JSX.Element
    icon: string,
    cardLink: string,
}

class Social1 extends BaseSocial {
  constructor(props?: any) {
    super(props, styles);
        this.addProp({
            type: "string",
            key:"title",
            displayer: "Title",
            value: "Join the community"
        })
        this.addProp({
            type: "string", 
            key:"description",
            displayer: "Description",
            value: "Discover what our community has to say about their Supabase experience."
        })
        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Button ",
            value: [
            INPUTS.BUTTON("button", "Button", "GitHub discussions", "", "FaRegComment", "", "Tertiary"),
            INPUTS.BUTTON("button", "Button", "Discord", "", "FaRegComment", "", "Tertiary"),
            ],
        });
        this.addProp({
            type: "array",
            key:"cards",
            displayer: "Cards",
            value: [
                {
                    type:"object",
                    key: "card",
                    displayer:"Card",
                    value:[
                        {
                            type:"array",
                            key:"items",
                            displayer:"Items",
                            value:[
                                {
                                    type: "object",
                                    key: "item",
                                    displayer:"Item",
                                    value: [
                                        {
                                            type:"image",
                                            key:"image",
                                            displayer:"Image",
                                            value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6790ceccd61bca002cb54e20?alt=media&timestamp=1742997958593"
                                        },
                                        {
                                            type:"icon",
                                            key:"icon",
                                            displayer:"Icon",
                                            value:"MdNavigateNext"
                                        },
                                        {
                                            type:"string",
                                            key:"name",
                                            displayer:"Name",
                                            value:"Clover Ruth"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum, justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat" 
                                        },
                                        {
                                            type:"page",
                                            key:"cardLink",
                                            displayer:"Card Link",
                                            value:"" 
                                        },
                                    ]                                
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer:"Item",
                                    value: [
                                        {
                                            type:"image",
                                            key:"image",
                                            displayer:"Image",
                                            value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6790cd32d61bca002cb54d47?alt=media&timestamp=1742997958593"
                                        },
                                        {
                                            type:"icon",
                                            key:"icon",
                                            displayer:"Icon",
                                            value:"MdNavigateNext"
                                        },
                                        {
                                            type:"string",
                                            key:"name",
                                            displayer:"Name",
                                            value:"Sarah Brown"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Proin ut orci non urna pulvinar facilisis. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit." 
                                        },
                                        {
                                            type:"page",
                                            key:"cardLink",
                                            displayer:"Card Link",
                                            value:"" 
                                        },
                                    ]                                
                                }
                            ]
                        }
                    ]            
                },
                {
                    type:"object",
                    key: "card",
                    displayer:"Card",
                    value:[
                        {
                            type:"array",
                            key:"items",
                            displayer:"Items",
                            value:[
                                {
                                    type: "object",
                                    key: "item",
                                    displayer:"Item",
                                    value: [
                                        {
                                            type:"image",
                                            key:"image",
                                            displayer:"Image",
                                            value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6799df51d61bca002cb826eb?alt=media&timestamp=1742997958593"
                                        },
                                        {
                                            type:"icon",
                                            key:"icon",
                                            displayer:"Icon",
                                            value:"MdNavigateNext"
                                        },
                                        {
                                            type:"string",
                                            key:"name",
                                            displayer:"Name",
                                            value:"Jacklyn Mia"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Proin ut orci non urna pulvinar facilisis. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit." 
                                        },
                                        {
                                            type:"page",
                                            key:"cardLink",
                                            displayer:"Card Link",
                                            value:"" 
                                        },
                                    ]                                
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer:"Item",
                                    value: [
                                        {
                                            type:"image",
                                            key:"image",
                                            displayer:"Image",
                                            value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e6c8a3fb049c002cc4b4a4?alt=media"
                                        },
                                        {
                                            type:"icon",
                                            key:"icon",
                                            displayer:"Icon",
                                            value:"MdNavigateNext"
                                        },
                                        {
                                            type:"string",
                                            key:"name",
                                            displayer:"Name",
                                            value:"Lachlan Linnette"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum, justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat" 
                                        },
                                        {
                                            type:"page",
                                            key:"cardLink",
                                            displayer:"Card Link",
                                            value:"" 
                                        },
                                    ]                                
                                },
                            ]
                        }
                    ]            
                },
                {
                    type:"object",
                    key: "card",
                    displayer:"Card",
                    value:[
                        {
                            type:"array",
                            key:"items",
                            displayer:"Items",
                            value:[
                                {
                                    type: "object",
                                    key: "item",
                                    displayer:"Item",
                                    value: [
                                        {
                                            type:"image",
                                            key:"image",
                                            displayer:"Image",
                                            value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67a9d2166341de002b7b7fd0?alt=media&timestamp=1742997958593"
                                        },
                                        {
                                            type:"icon",
                                            key:"icon",
                                            displayer:"Icon",
                                            value:"MdNavigateNext"
                                        },
                                        {
                                            type:"string",
                                            key:"name",
                                            displayer:"Name",
                                            value:"Jaykyn Kaleigh"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum, justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat" 
                                        },
                                        {
                                            type:"page",
                                            key:"cardLink",
                                            displayer:"Card Link",
                                            value:"" 
                                        },
                                    ]                                
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer:"Item",
                                    value: [
                                        {
                                            type:"image",
                                            key:"image",
                                            displayer:"Image",
                                            value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a86fb049c002cc41c55?alt=media&timestamp=1742998151797"
                                        },
                                        {
                                            type:"icon",
                                            key:"icon",
                                            displayer:"Icon",
                                            value:"MdNavigateNext"
                                        },
                                        {
                                            type:"string",
                                            key:"name",
                                            displayer:"Name",
                                            value:"Mary Johnson"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Proin ut orci non urna pulvinar facilisis. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit." 
                                        },
                                        {
                                            type:"page",
                                            key:"cardLink",
                                            displayer:"Card Link",
                                            value:"" 
                                        },
                                    ]                                
                                }
                            ]
                        }
                    ]            
                },
                {
                    type:"object",
                    key: "card",
                    displayer:"Card",
                    value:[
                        {
                            type:"array",
                            key:"items",
                            displayer:"Items",
                            value:[
                                {
                                    type: "object",
                                    key: "item",
                                    displayer:"Item",
                                    value: [
                                        {
                                            type:"image",
                                            key:"image",
                                            displayer:"Image",
                                            value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a3cfb049c002cc41bc7?alt=media&timestamp=1742998077864"
                                        },
                                        {
                                            type:"icon",
                                            key:"icon",
                                            displayer:"Icon",
                                            value:"MdNavigateNext"
                                        },
                                        {
                                            type:"string",
                                            key:"name",
                                            displayer:"Name",
                                            value:"Kristen Gertie"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Proin ut orci non urna pulvinar facilisis. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit." 
                                        },
                                        {
                                            type:"page",
                                            key:"cardLink",
                                            displayer:"Card Link",
                                            value:"" 
                                        },
                                    ]                                
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer:"Item",
                                    value: [
                                        {
                                            type:"image",
                                            key:"image",
                                            displayer:"Image",
                                            value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e6c925fb049c002cc4b4cb?alt=media"
                                        },
                                        {
                                            type:"icon",
                                            key:"icon",
                                            displayer:"Icon",
                                            value:"MdNavigateNext"
                                        },
                                        {
                                            type:"string",
                                            key:"name",
                                            displayer:"Name",
                                            value:"McKinney"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum, justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat" 
                                        },
                                        {
                                            type:"page",
                                            key:"cardLink",
                                            displayer:"Card Link",
                                            value:"" 
                                        },
                                    ]                                
                                }
                            ]
                        }
                    ]            
                },
                {
                    type:"object",
                    key: "card",
                    displayer:"Card",
                    value:[
                        {
                            type:"array",
                            key:"items",
                            displayer:"Items",
                            value:[
                                {
                                    type: "object",
                                    key: "item",
                                    displayer:"Item",
                                    value: [
                                        {
                                            type:"image",
                                            key:"image",
                                            displayer:"Image",
                                            value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1742998125897"
                                        },
                                        {
                                            type:"icon",
                                            key:"icon",
                                            displayer:"Icon",
                                            value:"MdNavigateNext"
                                        },
                                        {
                                            type:"string",
                                            key:"name",
                                            displayer:"Name",
                                            value:"James Pearce"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum, justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt.Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat" 
                                        },
                                        {
                                            type:"page",
                                            key:"cardLink",
                                            displayer:"Card Link",
                                            value:"" 
                                        },
                                    ]                                
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer:"Item",
                                    value: [
                                        {
                                            type:"image",
                                            key:"image",
                                            displayer:"Image",
                                            value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e6c969fb049c002cc4b4d7?alt=media"
                                        },
                                        {
                                            type:"icon",
                                            key:"icon",
                                            displayer:"Icon",
                                            value:"MdNavigateNext"
                                        },
                                        {
                                            type:"string",
                                            key:"name",
                                            displayer:"Name",
                                            value:"Olivia Davis"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Proin ut orci non urna pulvinar facilisis. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit." 
                                        },
                                        {
                                            type:"page",
                                            key:"cardLink",
                                            displayer:"Card Link",
                                            value:"" 
                                        },
                                    ]                                
                                }
                            ]
                        }
                    ]            
                },
            ]

        })
        this.addProp({
            type: "boolean", 
            key:"gradient",
            displayer: "Gradient",
            value: true
        })
        this.setComponentState("isPaused", false);
    }

    static getName(): string {
        return "Social 1";
    }
    
    handleMouseEnter=()=>{
        this.setComponentState("isPaused", true);
    };
    handleMouseLeave=()=>{
        this.setComponentState("isPaused", false);
    };
  
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    };
    const title = this.getPropValue("title");
    const isTitle = this.castToString(title)
    const description = this.getPropValue("description");
    const isDescription = this.castToString(description);
    const cardItems = this.castToObject<CardItem[]>("cards");
    const maxLength = cardItems.length 
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const allItems = cardItems.flatMap((card: any) => card.items);

    return (
        <div className={this.decorateCSS("wrapper")}>
        {(isTitle || isDescription || (buttons.length>0 )) && 
            <Base.Container className={`${this.decorateCSS("container")} ${(cardItems.length > 0) && this.decorateCSS("container-with-cards")}`}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
            {(isTitle || isDescription ) &&
                <Base.VerticalContent className={this.decorateCSS("upper-content")}>
                {isTitle &&
                    <Base.SectionTitle className ={this.decorateCSS("title")}>
                        {title}
                    </Base.SectionTitle>
                }
                {isDescription &&
                    <Base.SectionDescription className={this.decorateCSS("description")}>
                        {description}
                    </Base.SectionDescription>
                }
                </Base.VerticalContent>
            }
            {buttons.length > 0 && (
            <div className={this.decorateCSS("button-container")}>
            {buttons.map((item: INPUTS.CastedButton, index: number) => {
                const buttonTitleExist = this.castToString(item.text);
                const iconExist = item.icon;
                const buttonExist = buttonTitleExist || iconExist;
                return (
                buttonExist && (
                    <div className={this.decorateCSS("button-wrapper")} key={index}>
                    <ComposerLink path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                        <div className={this.decorateCSS("button-text")}>
                            {item.text}
                        </div>
                        <ComposerIcon
                            name={item.icon}
                            propsIcon={{
                            className: this.decorateCSS("button-icon"),
                            }}
                        />
                        </Base.Button>
                    </ComposerLink>
                    </div>
                )
                );
            })}
            </div>
        )}
            </Base.MaxContent>
            </Base.Container>
        }
        {(cardItems.length > 0) && (
         <div className={this.decorateCSS("loop-slide")}>
            <div className={`${this.decorateCSS("slide-content")} ${(buttons.length > 0 && isDescription && isTitle) && this.decorateCSS("slide-content-with-upper")}`}style={{ animationPlayState: this.getComponentState("isPaused") ? "paused" : "running" }}>
                {cardItems.map((item, index: number)=>{               
                    return (
                        <div className={this.decorateCSS("cards")} style={{ width: `calc(100% / ${maxLength})` }}>
                            <div className={this.decorateCSS("cards-wrapper")}>
                                {item.items.map((item: ItemType, index: number)=>{
                                    return(
                                        <>
                                        {(item.cardLink || item.icon || item.name || item.image || item.comment) && (
                                        <ComposerLink path={item.cardLink}>
                                            <div className={this.decorateCSS("card-container")} onMouseMove={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                                                {(item.icon || item.image || this.castToString(item.name) ) && (
                                                <div className={this.decorateCSS("card-upper")}>
                                                    {(item.icon || item.image) && (
                                                        <div className={this.decorateCSS("image-icon-container")}>
                                                        {item.icon && (
                                                            <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }}/>
                                                        )}
                                                        {item.image && (
                                                            <img src={item.image} className={this.decorateCSS("image")}/>
                                                        )}
                                                        </div>
                                                    )}        
                                                    {item.name && (
                                                        <div className={this.decorateCSS("name")}>{item.name}</div>
                                                    )}
                                                </div>
                                                )}
                                                {item.comment && (
                                                    <div className={this.decorateCSS("comment")}>{item.comment}</div>
                                                )}
                                                
                                            </div>
                                        </ComposerLink>
                                        )}
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        )
                    })}
            </div>
            <div className={`${this.decorateCSS("slide-content")} ${(buttons.length > 0 && isDescription && isTitle) && this.decorateCSS("slide-content-with-upper")}`} style={{ animationPlayState: this.getComponentState("isPaused") ? "paused" : "running" }}>
                    {cardItems.map((item, index: number)=>{                 
                        return (
                        <div className={this.decorateCSS("cards")} style={{ width: `calc(100% / ${maxLength})` }}>
                            <div className={this.decorateCSS("cards-wrapper")}>
                                {item.items.map((item: ItemType, index: number)=>{
                                    return(
                                        <>
                                        {(item.cardLink || item.icon || this.castToString(item.name) || item.image || this.castToString(item.comment)) && (
                                        <ComposerLink path={item.cardLink}>
                                            <div className={this.decorateCSS("card-container")} onMouseMove={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                                                {(item.icon || item.image || this.castToString(item.name) ) && (
                                                <div className={this.decorateCSS("card-upper")}>
                                                    {(item.icon || item.image) && (
                                                        <div className={this.decorateCSS("image-icon-container")}>
                                                        {item.icon && (
                                                            <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }}/>
                                                        )}
                                                        {item.image && (
                                                            <img src={item.image} className={this.decorateCSS("image")}/>
                                                        )}
                                                        </div>
                                                    )} 
                                                    {item.name && (
                                                        <div className={this.decorateCSS("name")}>{item.name}</div>
                                                    )}
                                                </div>
                                                )}
                                                {item.comment && (
                                                    <div className={this.decorateCSS("comment")}>{item.comment}</div>
                                                )}
                                                
                                            </div>
                                        </ComposerLink>
                                        )}
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        )
                    })}
            </div>
         </div>           
        )}
        
        {(cardItems.length > 0) && (
            <div className={this.decorateCSS("loop-slide")}>
                <ComposerSlider {...settings} className={`${this.decorateCSS("slide-content-mobile")} ${(buttons.length > 0 && isDescription && isTitle) && this.decorateCSS("with-upper")}`}>
                    {allItems.map((item: ItemType, index: number) => (
                        <ComposerLink path={item.cardLink} key={index}>
                            <div className={this.decorateCSS("cards")}>
                                <div className={this.decorateCSS("cards-wrapper")}>
                                    <div className={this.decorateCSS("card-container")}>
                                        {(item.icon || item.image || item.name) && (
                                        <div className={this.decorateCSS("card-upper")}>
                                            {(item.icon || item.image) && (
                                                <div className={this.decorateCSS("image-icon-container")}>
                                                    {item.icon && (<ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }}/>)}
                                                    {item.image && (<img src={item.image} className={this.decorateCSS("image")}/>)}
                                                </div>
                                            )}
                                            {this.castToString(item.name) && (<div className={this.decorateCSS("name")}>{item.name}</div>)}
                                        </div>
                                        )}
                                        {this.castToString(item.comment) && <div className={this.decorateCSS("comment")}>{item.comment}</div>}
                                    </div>
                                </div>
                            </div>
                        </ComposerLink>
                    ))}
                </ComposerSlider>
            </div>
        )}
        {this.getPropValue("gradient") && (
            <div className={this.decorateCSS("gradient")}></div>
        )}
        </div>

    )
  }
}

export default Social1;