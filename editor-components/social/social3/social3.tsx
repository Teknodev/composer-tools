import { Base } from "../../../composer-base-components/base/base";
import { BaseSocial } from "../../EditorComponent";
import styles from "./social3.module.scss";
import React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type PostItem ={
    title: React.JSX.Element,
    description: React.JSX.Element,
    image: string,
    imageOverlay: boolean;
}
type Interaction ={
    icon: string,
    text: React.JSX.Element
}
type Social ={
    icon: string,
    text: React.JSX.Element,
    url: string
}

class Social3 extends BaseSocial {
  constructor(props?: any) {
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
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, "", "Primary")],
    });

    this.addProp({
        type: "object",
        key: "profile",
        displayer: "Profile",
        value: [
            {
                type: "image",
                key: "profileImage",
                displayer: "Profile Image",
                value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1744289020159"
            },
            {
                type: "string",
                key: "name",
                displayer: "Name",
                value: "TTM"
            },
            {
                type: "string",
                key: "date",
                displayer: "Date",
                value: "03-03-2019"
            },
            {
                type: "icon",
                key: "dateIcon",
                displayer: "Date Icon",
                value: "CiClock2"
            }
        ]
    })
    this.addProp({
        type: "object",
        key: "post",
        displayer: "Post",
        value: [
        {
            type:"string",
            key: "title",
            displayer: "Title",
            value: "Broadway Canyon of Heroes"
        },
        {
            type:"string",
            key: "description",
            displayer: "Description",
            value: "One's destination is never place, but a new way of seeing things."
        },
        {
            type:"image",
            key: "image",
            displayer: "Image",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f7bd84fb049c002cc6ffab?alt=media&timestamp=1744289157829"
        },
        {
            type: "boolean",
            key: "imageOverlay",
            displayer: "Image Overlay",
            value: false
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
            displayer:"Social",
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
                    key: "url",
                    displayer: "URL",
                    value:""
                }
            ]
        },
        {
            type:"object",
            key:"social",
            displayer:"Social",
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
                    key: "url",
                    displayer: "URL",
                    value:""
                }
            ]
        },
        {
            type:"object",
            key:"social",
            displayer:"Social",
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
                    key: "url",
                    displayer: "URL",
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
    const commentInteraction = this.castToObject<Interaction>(
      "commentInteraction"
    );
    const shareInteraction = this.castToObject<Interaction>("shareInteraction");
    const socials = this.castToObject<Social[]>("socials");
    const profile = this.castToObject<any>("profile");

    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => {
      const textExist = this.castToString(btn.text);
      const iconExist = btn.icon && this.castToString((btn.icon as any).name);
      return !!(textExist || iconExist);
    });

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(titleExist || subtitleExist || descriptionExist || hasValidButtons) && (
            <Base.VerticalContent
              className={this.decorateCSS("upper-container")}
            >
              {subtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    const textExist = this.castToString(item.text);
                    const iconExist =
                      item.icon && this.castToString((item.icon as any).name);
                    if (!textExist && !iconExist) return null;
                    return (
                      <div
                        className={this.decorateCSS("button-wrapper")}
                        key={index}
                      >
                        <ComposerLink path={item.url}>
                          <Base.Button
                            buttonType={item.type}
                            className={this.decorateCSS("button")}
                          >
                            {textExist && (
                              <div className={this.decorateCSS("button-text")}>
                                {item.text}
                              </div>
                            )}
                            {iconExist && (
                              <Base.Icon
                                name={item.icon}
                                propsIcon={{
                                  className: this.decorateCSS("button-icon"),
                                }}
                              />
                            )}
                          </Base.Button>
                        </ComposerLink>
                      </div>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          <div className={this.decorateCSS("post-container")}>
            {(profile.profileImage ||
              this.castToString(profile.name) ||
              profile.dateIcon ||
              this.castToString(profile.date)) && (
              <div className={this.decorateCSS("upper-section")}>
                {profile.profileImage && (
                  <img
                    className={this.decorateCSS("profile-image")}
                    src={profile.profileImage}
                    alt={profile.profileImage}
                  />
                )}
                {(this.castToString(profile.name) ||
                  profile.dateIcon ||
                  profile.date) && (
                  <div className={this.decorateCSS("right-container")}>
                    {this.castToString(profile.name) && (
                      <div className={this.decorateCSS("user-name")}>
                        {profile.name}
                      </div>
                    )}
                    {(profile.dateIcon ||
                      this.castToString(profile.date)) && (
                      <div className={this.decorateCSS("date-container")}>
                        {profile.dateIcon && (
                          <Base.Icon
                            name={profile.dateIcon}
                            propsIcon={{
                              className: this.decorateCSS("date-icon"),
                            }}
                          />
                        )}
                        {this.castToString(profile.date) && (
                          <div className={this.decorateCSS("date")}>
                            {profile.date}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            {this.castToString(post.title) && (
              <div className={this.decorateCSS("post-title")}>
                {post.title}
              </div>
            )}
            {this.castToString(post.description) && (
              <div className={this.decorateCSS("post-description")}>
                {post.description}
              </div>
            )}
            {post.image && (
              <div className={this.decorateCSS("post-image-container")}>
                <img
                  className={this.decorateCSS("post-image")}
                  src={post.image}
                  alt={post.image}
                />
                {post.imageOverlay && (
                  <div className={this.decorateCSS("image-overlay")} />
                )}
              </div>
            )}
            {(likeInteraction.icon ||
              this.castToString(likeInteraction.text) ||
              commentInteraction.icon ||
              this.castToString(commentInteraction.text) ||
              socials.length > 0 ||
              shareInteraction.icon ||
              this.castToString(shareInteraction.text)) && (
              <div className={this.decorateCSS("interactions-container")}>
                {(likeInteraction.icon ||
                  this.castToString(likeInteraction.text)) && (
                  <div
                    className={this.decorateCSS("interaction")}
                    onClick={() => this.handleLikeClick()}
                  >
                    {likeInteraction.icon && (
                      <Base.Icon
                        name={likeInteraction.icon}
                        propsIcon={{
                          className: `${this.decorateCSS(
                            "icon"
                          )} ${this.getComponentState("isLiked") &&
                            this.decorateCSS("liked")}`,
                        }}
                      />
                    )}
                    {this.castToString(likeInteraction.text) && (
                      <div className={this.decorateCSS("text")}>
                        {likeInteraction.text}
                      </div>
                    )}
                  </div>
                )}
                {(commentInteraction.icon ||
                  this.castToString(commentInteraction.text)) && (
                  <div className={this.decorateCSS("interaction")}>
                    {commentInteraction.icon && (
                      <Base.Icon
                        name={commentInteraction.icon}
                        propsIcon={{
                          className: this.decorateCSS("icon"),
                        }}
                      />
                    )}
                    {this.castToString(commentInteraction.text) && (
                      <div className={this.decorateCSS("text")}>
                        {commentInteraction.text}
                      </div>
                    )}
                  </div>
                )}
                {(socials.length > 0 ||
                  shareInteraction.icon ||
                  this.castToString(shareInteraction.text)) && (
                  <div
                    className={`${this.decorateCSS(
                      "interaction"
                    )} ${this.decorateCSS("share")}`}
                  >
                    {shareInteraction.icon && (
                      <Base.Icon
                        name={shareInteraction.icon}
                        propsIcon={{
                          className: this.decorateCSS("icon"),
                        }}
                      />
                    )}
                    {this.castToString(shareInteraction.text) && (
                      <div className={this.decorateCSS("text")}>
                        {shareInteraction.text}
                      </div>
                    )}
                    {socials.length > 0 && (
                      <div className={this.decorateCSS("socials")}>
                        {socials.map((item, index: number) => {
                          if (!item.icon && !this.castToString(item.text)) return null;
                          return (
                            <ComposerLink path={item.url} key={index}>
                              <div
                                className={this.decorateCSS("social")}
                              >
                                {item.icon && (
                                  <Base.Icon
                                    name={item.icon}
                                    propsIcon={{
                                      className: this.decorateCSS(
                                        "social-icon"
                                      ),
                                    }}
                                  />
                                )}
                                {this.castToString(item.text) && (
                                  <div
                                    className={this.decorateCSS("social-text")}
                                  >
                                    {item.text}
                                  </div>
                                )}
                              </div>
                            </ComposerLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Social3;
