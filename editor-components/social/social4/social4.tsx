import { BaseSocial } from "composer-tools/editor-components/EditorComponent";
import styles from "./social4.module.scss"
import { Base } from "composer-tools/composer-base-components/base/base";
import { Card } from "@stripe/stripe-js";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import React from "react";
import { Recycling } from "@mui/icons-material";

type CardItem ={
    videoUrl: React.JSX.Element,
    imageItems: ImageItem[],
    likeCount: number,
    commentCount: number,
    description: React.JSX.Element,
    url: string,
    videoIconActive: boolean,
    imageIconActive : boolean,
    name: React.JSX.Element,
    porfileImage: string,
    socialIcon: string,
    button: INPUTS.CastedButton;
}
type ImageItem={
    image : string
}

class Social4 extends BaseSocial {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
        type: "string",
        key:"title",
        displayer: "Title",
        value: "Follow us on Instagram"
    })
    this.addProp({
        type: "number",
        key: "initialCount",
        displayer:"Image Count Initial",
        value:8
    })
    this.addProp({
        type: "number",
        key:"rowCount",
        displayer: "Count in a row",
        value:4
    })
    this.addProp({
        type: "number",
        key:"moreCount",
        displayer:"More Image Count",
        value:4
    })
    this.addProp({
        type: "array",
        key: "cardItems",
        displayer: "Card Items",
        value:[
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f93240fb049c002cc77162?alt=media&timestamp=1744732484672"
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: ""
                            }
                        ]
                    }
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 7.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 7.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: " Spontaneous video from the magical Al Ula. Solomon was so exited to see this giant Elephant rock. Though he said it is a mammoth and I agree with him. Continuing to shoot our #SaudiSenses project with #VisitSaudi   Сол очень хотел увидеть этого большого слона. Правда приглядевшись он понял, что это мамонт и я с ним полностью согласен :)."
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "muradosman"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1744799202064"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },
            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link")
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f93240fb049c002cc77162?alt=media&timestamp=1744732484672"
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: ""
                            }
                        ]
                    }
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 7.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 7.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: " BAON х FollowMeTo Следуй за нами на край света: любовь и путешествия на Сахалине   Хотим пригласить вас в виртуальное путешествие, снятое в одном из самых красивых мест нашей страны - острове Сахалин, в специальной истории для BAON.  Уже много лет мы исследуем планету, показывая захватывающие направления для путешествий. Особое место занимают маршруты по России и их новое прочтение. Сахалин буквально украл наше сердце: величие и сила природы. Конечно же, важная роль при планировании поездок отводится продумыванию гардероба: удобные и прекрасно выглядящие в кадре вещи.  #BAON_покоряяСтихии #BAON_путешествия #FollowMeTo #Сахалин"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "muradosman"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1744799202064"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link")
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f93240fb049c002cc77162?alt=media&timestamp=1744732484672"
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: ""
                            }
                        ]
                    }
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 7.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 7.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: " Make creativity your lifestyle with the upcoming residential Design Quarter at d3 by @meraasdubai"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "muradosman"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1744799202064"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link")
            ]

        },
        {
            type:"object",
            key: "cardItem",
            displayer:"Card Item",
            value:[
            {
                type:"string",
                key: "videoUrl",
                displayer:"Video Url",
                value: ""
            },
            {
                type:"array",
                key: "imageItems",
                displayer:"Image Items",
                value: [
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a3cfb049c002cc41bc7?alt=media&timestamp=1744799202064"
                            },
                        ]
                    },
                    {
                        type:"object",
                        key: "imageItem",
                        displayer: "Image Item",
                        value:
                        [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a3cfb049c002cc41bc7?alt=media&timestamp=1744799202064"
                            },
                        ]
                    }
                ]
            },
            {
                type:"number",
                key: "likeCount",
                displayer:"Like Count",
                value: 7.500
            },
            {
                type:"number",
                key: "commentCount",
                displayer:"Comment Count",
                value: 7.500
            },
            {
                type:"string",
                key: "description",
                displayer:"Description",
                value: "Happy Diwali to our followers from India #diwali"
            },
            {
                type: "page",
                key: "url",
                displayer: "Url",
                value: ""
            },
            {
                type:"boolean",
                key: "videoIconActive",
                displayer: "Video Icon Active",
                value: true
            },
            {
                type:"boolean",
                key: "imageIconActive",
                displayer: "Image Icon Active",
                value: false
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "muradosman"
            },
            {
                type: "image",
                key: "porfileImage",
                displayer:"Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1744799202064"
            },
            {
                type: "icon",
                key: "socialIcon",
                displayer: "Social Icon",
                value: "FaInstagram"
            },

            INPUTS.BUTTON("button", "Button", "Follow", "", null, null, "Link")
            ]

        }
        ]
    })
    this.addProp({
        type: "icon",
        key: "videoIcon",
        displayer: "Video Icon",
        value: "FaVideo"
    })
    this.addProp({
        type: "icon",
        key: "imageIcon",
        displayer: "Image Icon",
        value: "GrGallery"
    })
    this.addProp({
        type: "icon",
        key: "likeIcon",
        displayer: "Like Icon",
        value:"SlHeart"
    })
    this.addProp({
        type: "icon",
        key: "commentIcon",
        displayer: "Comment Icon",
        value:"TfiComment"
    })
    this.setComponentState("postOverlayActive",false)
    this.setComponentState("selectedPost",0)

  }

  static getName(): string {
    return "Social 4";
  }
  handleClickItem =(index: number) =>{
    this.setComponentState("postOverlayActive", true)
    this.setComponentState("selectedPost", index)
  }

  render() {
    const cardItems = this.castToObject<CardItem[]>("cardItems");

    const settingsCard = {
        dots: false,
        infinite: true,        
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
    };
    const settingsPost = {
        dots: false,
        infinite: true,        
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        swipeToSlide: true,
        initialSlide: this.getComponentState("selectedPost"),
    };
    
    return (
        <>
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
                        <Base.ListGrid gridCount={{ pc: this.getPropValue("rowCount") }} className={this.decorateCSS("gallery-grid")}>
                            {cardItems.slice(0, this.getComponentState("initialCount")).map((item: CardItem, index: number) => {
                                return (
                                    <div className={this.decorateCSS("gallery-item")} key={index}>
                                        {(item.imageItems.length>0 && !this.castToString(item.videoUrl)) && 
                                        <div className={this.decorateCSS("image-container")}>
                                            <img src={item.imageItems[0].image} alt={item.imageItems[0].image} className={this.decorateCSS("gallery-image")}/>
                                        </div>
                                        }
                                        <div className={this.decorateCSS("video-container")}>
                                            {this.castToString(item.videoUrl) && (
                                                <video src={this.castToString(item.videoUrl)} controls={false} className={this.decorateCSS("gallery-video")}/>
                                            )}
                                        </div>
                                        <div className={this.decorateCSS("icon-container")}>
                                            {(this.getPropValue("videoIcon") && this.castToString(item.videoUrl) && item.videoIconActive) && (<ComposerIcon name={this.getPropValue("videoIcon")} propsIcon={{className:this.decorateCSS("icon")}}></ComposerIcon>)}
                                            {(this.getPropValue("imageIcon") && item.imageItems.length > 1) && (<ComposerIcon name={this.getPropValue("imageIcon")} propsIcon={{className:this.decorateCSS("icon")}}></ComposerIcon>)}
                                        </div>
                                        <div className={this.decorateCSS("overlay")} onClick={() => this.handleClickItem(index)}>
                                        <div className={this.decorateCSS("content-container")}>
                                            <div className={this.decorateCSS("like-and-commnet-container")}>
                                                <div className={this.decorateCSS("like-container")}>
                                                    <ComposerIcon name={this.getPropValue("likeIcon")} propsIcon={{className: this.decorateCSS("like-icon")}}></ComposerIcon>
                                                    <div className={this.decorateCSS("like-number")}>{item.likeCount}</div>
                                                </div>
                                                <div className={this.decorateCSS("comment-container")}>
                                                    <ComposerIcon name={this.getPropValue("commentIcon")} propsIcon={{className: this.decorateCSS("comment-icon")}}></ComposerIcon>
                                                    <div className={this.decorateCSS("comment-number")}>{item.commentCount}</div>
                                                </div>
                                            </div>
                                            <div className={this.decorateCSS("description")}>{item.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Base.ListGrid>
                        

        </Base.MaxContent>
      </Base.Container>
      {this.getComponentState("postOverlayActive") && (
      <Base.Overlay className ={this.decorateCSS("post-overlay")} isVisible={this.getComponentState("postOverlayActive") }>
        <div className={this.decorateCSS("slider-wrapper")}>
        <ComposerSlider className={this.decorateCSS("slider-container")} {...settingsPost}>
        {cardItems.map((item: CardItem , index: number) => {
            return(
                <div className={this.decorateCSS("post-container")}>
                    <div className={this.decorateCSS("upper-container")}>
                        <div className={this.decorateCSS("left-container")}>
                        <div className={this.decorateCSS("profile-image-container")}>
                            <img className={this.decorateCSS("profile-image")} src={item.porfileImage}></img>
                        </div>
                        <div className={this.decorateCSS("name")}>{item.name}</div>
                        </div>
                        <div className={this.decorateCSS("right-container")}>
                            <ComposerLink path={item.button.url}>
                                <div className={this.decorateCSS("button-container")}>
                                    <Base.Button buttonType={item.button.type}>{item.button.text}</Base.Button>
                                </div>
                            </ComposerLink>

                            <ComposerIcon name={item.socialIcon} propsIcon={{className: this.decorateCSS("socail-icon")}}></ComposerIcon>
                        </div>
                    </div>
                    {this.castToString(item.videoUrl) && (
                    <div className={this.decorateCSS("post-video-container")}>
                        <video src={this.castToString(item.videoUrl)} controls className={this.decorateCSS("video")}></video>
                    </div>
                    )}
                    {(item.imageItems.length > 0 && !this.castToString(item.videoUrl)) && (
                        <div className={this.decorateCSS("post-image-container")}>
                        <ComposerSlider {...settingsCard}>
                        {item.imageItems.map((item: ImageItem, index: number) =>{
                            return(
                                <img src={item.image} alt={item.image} className={this.decorateCSS("image")}/>
                            )
                        })
                        }
                        </ComposerSlider>
                        </div>
                    )} 
                    <div className={this.decorateCSS("bottom-container")}>
                        <div className={this.decorateCSS("like-and-share-container")}>
                            <div className={this.decorateCSS("like-part")}>
                                <div className={this.decorateCSS("like-count")}>{item.likeCount}</div>
                                <div className={this.decorateCSS("like-text")}>likes</div>
                            </div>
                            <div className={this.decorateCSS("share-part")}>
                                <div className={this.decorateCSS("share-icon-container")}>
                                    <ComposerIcon name={this.getPropValue("shareIcon")} propsIcon={{className: this.decorateCSS("share-icon")}}></ComposerIcon>
                                </div>
                                <div className={this.decorateCSS("share-text")}>
                                    Share
                                </div>                    
                            </div>                            
                        </div>
                        <div className={this.decorateCSS("name-and-description")}>
                            <div className={this.decorateCSS("name")}>{item.name}</div>
                            <div className={this.decorateCSS("description")}>{item.description}</div>
                        </div>
                    </div>
                </div>   
            )
        })}
        </ComposerSlider>
        </div>

      </Base.Overlay>
      )} 
        </>

    );
  }
}

export default Social4;
