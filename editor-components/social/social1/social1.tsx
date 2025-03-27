import * as React from "react";
import { BaseSocial } from "../../EditorComponent";
import styles from "./social1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";

type CardItem={
    item: ItemType
}
type ItemType={
    image: string,
    name: JSX.Element,
    comment: JSX.Element
    icon: string,
    cardLink: JSX.Element,
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
                                            value:"Name1"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum, justo non volutpat cursus, velit ipsum cursus lorem, ut scelerisque arcu lacus id odio. Cras eget urna a libero aliquam varius. Nulla facilisi. Aenean consequat tellus et neque sodales, ac interdum ex tincidunt." 
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
                                            value:"Name7"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Proin ut orci non urna pulvinar facilisis. In faucibus dolor eu sapien vehicula malesuada. Vestibulum rhoncus, odio vel suscipit tristique, libero ex efficitur neque, vitae tempor enim augue sit amet velit." 
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
                                            value:"Name2"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Morbi pharetra ante eget nunc posuere, nec tempus nunc malesuada. Ut vel massa sed libero consequat convallis. Mauris elementum massa nec mauris faucibus, ut convallis felis fermentum." 
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
                                            value:"Name3"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Praesent eget lacus sed sapien eleifend cursus. Suspendisse id ligula quis augue fermentum fringilla. Phasellus et arcu at velit sollicitudin convallis. Ut nec lacus quis magna malesuada cursus." 
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
                                            value:"Name6"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:" Duis at lectus vitae lorem condimentum maximus. Nam vel purus sed est tincidunt facilisis. Curabitur sit amet orci non magna tristique tincidunt a vitae odio. Nulla facilisi. " 
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
                                            value:"Name4"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Cras laoreet quam ut libero tempor, non aliquet lectus condimentum. Curabitur sit amet vestibulum urna. Vivamus tincidunt feugiat lorem, et vulputate metus volutpat id. Nullam aliquam tellus in sapien dictum auctor. Integer sagittis suscipit odio non consectetur. " 
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
                                            value:"Name5"  
                                        },
                                        {
                                            type:"string",
                                            key:"comment",
                                            displayer:"Comment",
                                            value:"Vestibulum posuere dapibus malesuada. Aenean congue eros ac enim vehicula, a sagittis libero sollicitudin. Mauris ut purus sed erat ullamcorper mattis ac a libero. Sed vestibulum, lorem eget feugiat eleifend." 
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
        return "Socail 1";
    }
    
    handleMouseEnter=()=>{
        this.setComponentState("isPaused", true);
    };
    handleMouseLeave=()=>{
        this.setComponentState("isPaused", false);
    };
  
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      };
    const title = this.getPropValue("title");
    const isTitle = this.castToString(title)
    const description = this.getPropValue("description");
    const isDescription = this.castToString(description);
    const cardItems = this.castToObject<CardItem[]>("cards");
    const maxLength = cardItems.length 
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    return (
        <div className={this.decorateCSS("wrapper")}>
        {(isTitle || isDescription || (buttons.length>0 )) && 
            <Base.Container className={this.decorateCSS("container")}>
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
                    <div className={this.decorateCSS("button-wrapper")}>
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
            <div className={this.decorateCSS("slide-content")} id={"slide-content"} style={{ animationPlayState: this.getComponentState("isPaused") ? "paused" : "running" }}>
                {cardItems.map((item: any, index: number)=>{                 
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
                                                    {item.icon && (
                                                        <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }}/>
                                                    )}
                                                    {item.image && (
                                                        <img src={item.image} className={this.decorateCSS("image")}/>
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
            <div className={this.decorateCSS("slide-content")} id={"slide-content"} style={{ animationPlayState: this.getComponentState("isPaused") ? "paused" : "running" }}>
                    {cardItems.map((item: any, index: number)=>{                 
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
                                                    {item.icon && (
                                                        <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }}/>
                                                    )}
                                                    {item.image && (
                                                        <img src={item.image} className={this.decorateCSS("image")}/>
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
                <ComposerSlider {...settings} className={this.decorateCSS("slide-content-mobile")} >
                    {cardItems.map((item: any, index: number) => (
                        <div className={this.decorateCSS("cards")} key={index}>
                            <div className={this.decorateCSS("cards-wrapper")}>
                                {item.items.map((item: ItemType, index: number) => (
                                    <ComposerLink path={item.cardLink} key={index}>
                                        <div className={this.decorateCSS("card-container")}>
                                            <div className={this.decorateCSS("card-upper")}>
                                                <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }}/>
                                                <img src={item.image} className={this.decorateCSS("image")}/>
                                                <div className={this.decorateCSS("name")}>{item.name}</div>
                                            </div>
                                            <div className={this.decorateCSS("comment")}>{item.comment}</div>
                                        </div>
                                    </ComposerLink>
                                ))}
                            </div>
                        </div>
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