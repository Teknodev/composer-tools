import { Base } from "composer-tools/composer-base-components/base/base";
import { BaseSocial } from "../../EditorComponent";
import styles from "./social3.module.scss";
import React from "react";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type PostItem ={
    postTitle: React.JSX.Element,
    postDescription: React.JSX.Element,
    postImage: string
}
type Interaction ={
    icon: string,
    text: React.JSX.Element
}
type Social ={
    icon: string,
    text: React.JSX.Element,
    link: string    
}

class Social3 extends BaseSocial {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
        type: "image",
        key:"profileImage",
        displayer: "Profile Image",
        value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1744289020159"
    })
    this.addProp({
        type: "string",
        key: "userName",
        displayer: "User Name",
        value:"TTM"
    })
    this.addProp({
        type:"dateTime",
        key: "date",
        displayer: "Date",
        value: "03-03-2019"
    })
    this.addProp({
        type:"icon",
        key: "dateIcon",
        displayer: "Date Icon",
        value: "CiClock2"
    })
    this.addProp({
        type: "object",
        key: "post",
        displayer: "Post",
        value: [
        {
            type:"string",
            key: "postTitle",
            displayer: "Post Title",
            value: "Broadway Canyon of Heroes"
        },
        {
            type:"string",
            key: "postDescription",
            displayer: "Post Description",
            value: "One's destination is never place, but a new way of seeing things."
        },
        {
            type:"image",
            key: "postImage",
            displayer: "Post Image",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f7bd84fb049c002cc6ffab?alt=media&timestamp=1744289157829"
        },
        ]
    })
    this.addProp({
        type: "object",
        key: "likeInteraction",
        displayer: "Like Interaction",
        value:[
        {
            type: "icon",
            key: "icon",
            displayer: "Icon",
            value: "AiOutlineLike"
        },
        {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Like"
        }]
    }),
    this.addProp({
        type: "object",
        key: "commentInteraction",
        displayer: "Comment Interaction",
        value:[
        {
            type: "icon",
            key: "icon",
            displayer: "Icon",
            value: "FaRegCommentAlt"
        },
        {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Comment"
        }]
    }),
    this.addProp({
        type: "object",
        key: "shareInteraction",
        displayer: "Share Interaction",
        value:[
        {
            type: "icon",
            key: "icon",
            displayer: "Icon",
            value: "RiShareForwardLine"
        },
        {
            type: "string",
            key: "text",
            displayer:"Text",
            value: "Share"
        }]
    }),
    this.addProp({
        type: "array",
        key: "socials",
        displayer: "Socials",
        value:[
        {
            type:"object",
            key:"social",
            displayer:"social",
            value:[
                {
                    type: "icon",
                    key: "icon",
                    displayer: "Icon",
                    value: "LuFacebook"
                },
                {
                    type: "string",
                    key: "text",
                    displayer:"Text",
                    value: "Facebook"
                },
                {
                    type:"page",
                    key: "link",
                    displayer: "Link",
                    value:""
                }
            ]
        },
        {
            type:"object",
            key:"social",
            displayer:"social",
            value:[
                {
                    type: "icon",
                    key: "icon",
                    displayer: "Icon",
                    value: "LuTwitter"
                },
                {
                    type: "string",
                    key: "text",
                    displayer:"Text",
                    value: "Twitter"
                },
                {
                    type:"page",
                    key: "link",
                    displayer: "Link",
                    value:""
                }
            ]
        },
        {
            type:"object",
            key:"social",
            displayer:"social",
            value:[
                {
                    type: "icon",
                    key: "icon",
                    displayer: "Icon",
                    value: "SlSocialLinkedin"
                },
                {
                    type: "string",
                    key: "text",
                    displayer:"Text",
                    value: "Linkedin"
                },
                {
                    type:"page",
                    key: "link",
                    displayer: "Link",
                    value:""
                }
            ]
        },
        ]
    })
    this.setComponentState("isLiked", false);
    
  }

  static getName(): string {
    return "Social 3";
  }
  handleLikeClick = () =>{
    this.setComponentState("isLiked", !this.getComponentState("isLiked"))
  }
  render() {
    const post = this.castToObject<PostItem>("post");
    const likeInteraction = this.castToObject<Interaction>("likeInteraction");
    const commentInteraction = this.castToObject<Interaction>("commentInteraction");
    const shareInteraction = this.castToObject<Interaction>("shareInteraction");
    const socials = this.castToObject<Social[]>("socials");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        {(this.getPropValue("profileImage") || this.castToString(this.getPropValue("userName")) || this.getPropValue("dateIcon") ||  this.getPropValue("date")) && (
        <div className={this.decorateCSS("upper-section")}>
            {this.getPropValue("profileImage") && (<img className={this.decorateCSS("profile-image")} src={this.getPropValue("profileImage")} alt={this.getPropValue("profileImage")} />)}
            {(this.castToString(this.getPropValue("userName")) || this.getPropValue("dateIcon") ||  this.getPropValue("date")) && (
            <div className={this.decorateCSS("right-container")}>
                {this.castToString(this.getPropValue("userName")) && (<div className={this.decorateCSS("user-name")}>{this.getPropValue("userName")}</div>)}
                {(this.getPropValue("dateIcon") ||  this.getPropValue("date")) && (
                <div className={this.decorateCSS("date-container")}>
                    {this.getPropValue("dateIcon") && (<Base.Icon name={this.getPropValue("dateIcon")} propsIcon={{className: this.decorateCSS("date-icon")}}/>)}
                    {this.getPropValue("date") && (<div className={this.decorateCSS("date")}>{this.getPropValue("date")}</div>)}
                </div>
                )}
            </div>
            )}
        </div>
        )}
        {(this.castToString(post.postTitle) || this.castToString(post.postDescription) || post.postImage) && (
        <div className={this.decorateCSS("post-container")}>
            {this.castToString(post.postTitle) && (<div className={this.decorateCSS("post-title")}>{post.postTitle}</div>)}
            {this.castToString(post.postDescription) && (<div className={this.decorateCSS("post-description")}>{post.postDescription}</div>)}
            {post.postImage && (<img className={this.decorateCSS("post-image")} src={post.postImage} alt={post.postImage}></img>)}
        </div>
        )}
        {(likeInteraction.icon || this.castToString(likeInteraction.text) || commentInteraction.icon || this.castToString(commentInteraction.text) || socials.length > 0 || shareInteraction.icon || this.castToString(shareInteraction.text)) && (
        <div className={this.decorateCSS("interactions-container")}>
            {(likeInteraction.icon || this.castToString(likeInteraction.text)) && (
            <div className={this.decorateCSS("interaction")} onClick={()=> this.handleLikeClick()}>
                {likeInteraction.icon && (
                    <Base.Icon name={likeInteraction.icon} propsIcon={{className: `${this.decorateCSS("icon")} ${this.getComponentState("isLiked") && this.decorateCSS("liked")}`}}/>
                )}
                {this.castToString(likeInteraction.text) && (<div className={this.decorateCSS("text")}>{likeInteraction.text}</div>)}
            </div>
            )}
            {(commentInteraction.icon || this.castToString(commentInteraction.text)) && (
            <div className={this.decorateCSS("interaction")}>
                {commentInteraction.icon && (<Base.Icon name={commentInteraction.icon} propsIcon={{className: this.decorateCSS("icon")}}/>)}
                {this.castToString(commentInteraction.text) && (<div className={this.decorateCSS("text")}>{commentInteraction.text}</div>)}
            </div>
            )}
            {(socials.length > 0 || shareInteraction.icon || this.castToString(shareInteraction.text)) &&(
            <div className={`${this.decorateCSS("interaction")} ${this.decorateCSS("share")}`}>
                {shareInteraction.icon && (<Base.Icon name={shareInteraction.icon} propsIcon={{className: this.decorateCSS("icon")}}/>)}
                {this.castToString(shareInteraction.text) && (<div className={this.decorateCSS("text")}>{shareInteraction.text}</div>)}
                {socials.length >  0 && (
                    <div className={this.decorateCSS("socials")}>
                    {socials.map((item, index: number) => {
                        return(
                            <ComposerLink path={item.link}>
                                <div className={this.decorateCSS("social")} key={index}>
                                    {item.icon && (<Base.Icon name={item.icon} propsIcon={{className: this.decorateCSS("social-icon")}}/>)}
                                    {this.castToString(item.text) && (<div className={this.decorateCSS("social-text")}>{item.text}</div>)}                          
                                </div>
                            </ComposerLink>
                        )
                    })}         
                    </div>
                )}
            </div>
            )}
        </div>
        )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Social3;
