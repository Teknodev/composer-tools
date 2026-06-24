import { BaseSocial, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./social3.module.scss";
import React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";

type PostItem = {
  title: React.JSX.Element,
  description: React.JSX.Element,
  media: TypeMediaInputValue,
  overlay: boolean;
}
type Interaction = {
  icon: TypeMediaInputValue,
  text: React.JSX.Element
}
type Social = {
  icon: TypeMediaInputValue,
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
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, "", "Primary"),
      ],
    });

    this.addProp({
      type: "object",
      key: "profile",
      displayer: "Profile",
      value: [
        {
          type: "media",
          key: "profileMedia",
          displayer: "Profile Media",
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67e40a6cfb049c002cc41c31?alt=media&timestamp=1744289020159"
          },
          additionalParams: {
            availableTypes: ["icon", "image"],
          }
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
          type: "media",
          key: "dateIcon",
          displayer: "Date Icon",
          value: {
            type: "icon",
            name: "CiClock2"
          },
          additionalParams: {
            availableTypes: ["icon", "image"],
          }
        }
      ]
    })
    this.addProp({
      type: "object",
      key: "post",
      displayer: "Post",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Broadway Canyon of Heroes"
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "One's destination is never place, but a new way of seeing things."
        },
        {
          type: "media",
          key: "media",
          displayer: "Media",
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f7bd84fb049c002cc6ffab?alt=media&timestamp=1744289157829"
          },
          additionalParams: {
            availableTypes: ["image", "video"],
          }
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false
        },
      ]
    })
    this.addProp({
      type: "array",
      key: "interactions",
      displayer: "Interactions",
      value: [
        {
          type: "object",
          key: "interaction",
          displayer: "Interaction",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "AiOutlineLike"
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
              }
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Like"
            }
          ]
        },
        {
          type: "object",
          key: "interaction",
          displayer: "Interaction",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "FaRegCommentAlt"
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
              }
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Comment"
            }
          ]
        },
        {
          type: "object",
          key: "interaction",
          displayer: "Interaction",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              value: {
                type: "icon",
                name: "RiShareForwardLine"
              },
              additionalParams: {
                availableTypes: ["icon", "image"],
              }
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Share"
            }
          ]
        }
      ]
    }),
      this.addProp({
        type: "array",
        key: "socials",
        displayer: "Socials",
        value: [
          {
            type: "object",
            key: "social",
            displayer: "Social",
            value: [
              {
                type: "media",
                key: "icon",
                displayer: "Icon",
                value: {
                  type: "icon",
                  name: "LuFacebook"
                },
                additionalParams: {
                  availableTypes: ["icon", "image"],
                }
              },
              {
                type: "string",
                key: "text",
                displayer: "Text",
                value: "Facebook"
              },
              {
                type: "page",
                key: "url",
                displayer: "Navigate To",
                value: ""
              }
            ]
          },
          {
            type: "object",
            key: "social",
            displayer: "Social",
            value: [
              {
                type: "media",
                key: "icon",
                displayer: "Icon",
                value: {
                  type: "icon",
                  name: "LuTwitter"
                },
                additionalParams: {
                  availableTypes: ["icon", "image"],
                }
              },
              {
                type: "string",
                key: "text",
                displayer: "Text",
                value: "Twitter"
              },
              {
                type: "page",
                key: "url",
                displayer: "Navigate To",
                value: ""
              }
            ]
          },
          {
            type: "object",
            key: "social",
            displayer: "Social",
            value: [
              {
                type: "media",
                key: "icon",
                displayer: "Icon",
                value: {
                  type: "icon",
                  name: "SlSocialLinkedin"
                },
                additionalParams: {
                  availableTypes: ["icon", "image"],
                }
              },
              {
                type: "string",
                key: "text",
                displayer: "Text",
                value: "Linkedin"
              },
              {
                type: "page",
                key: "url",
                displayer: "Navigate To",
                value: ""
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
  handleLikeClick = () => {
    this.setComponentState("isLiked", !this.getComponentState("isLiked"))
  }
  render() {
    const post = this.castToObject<PostItem>("post");
    const interactions = this.castToObject<Interaction[]>("interactions");
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
                              <Base.P className={this.decorateCSS("button-text")}>
                                {item.text}
                              </Base.P>
                            )}
                            {iconExist && (
                              <Base.Media
                                value={item.icon!}
                                className={`${this.decorateCSS("button-icon")} ${item.icon!.type === "icon" ? this.decorateCSS("is-icon") : ""}`}
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
            {(profile.profileMedia ||
              this.castToString(profile.name) ||
              profile.dateIcon ||
              this.castToString(profile.date)) && (
                <div className={this.decorateCSS("upper-section")}>
                  {profile.profileMedia && (
                    <Base.Media
                      value={profile.profileMedia}
                      className={`${this.decorateCSS("profile-media")} ${profile.profileMedia.type === "icon" ? this.decorateCSS("is-icon") : ""}`}
                    />
                  )}
                  {(this.castToString(profile.name) ||
                    profile.dateIcon ||
                    profile.date) && (
                      <div className={this.decorateCSS("right-container")}>
                        {this.castToString(profile.name) && (
                          <Base.H4 className={this.decorateCSS("user-name")}>
                            {profile.name}
                          </Base.H4>
                        )}
                        {(profile.dateIcon ||
                          this.castToString(profile.date)) && (
                            <div className={this.decorateCSS("date-container")}>
                              {profile.dateIcon && (
                                <Base.Media
                                  value={profile.dateIcon}
                                  className={`${this.decorateCSS("date-icon")} ${profile.dateIcon.type === "icon" ? this.decorateCSS("is-icon") : ""}`}
                                />
                              )}
                              {this.castToString(profile.date) && (
                                <Base.P className={this.decorateCSS("date")}>
                                  {profile.date}
                                </Base.P>
                              )}
                            </div>
                          )}
                      </div>
                    )}
                </div>
              )}
            {this.castToString(post.title) && (
              <Base.H5 className={this.decorateCSS("post-title")}>
                {post.title}
              </Base.H5>
            )}
            {this.castToString(post.description) && (
              <Base.P className={this.decorateCSS("post-description")}>
                {post.description}
              </Base.P>
            )}
            {post.media && (
              <div className={this.decorateCSS("post-image-container")}>
                <Base.Media
                  value={post.media}
                  className={this.decorateCSS("post-image")}
                />
                {post.overlay && (
                  <div className={this.decorateCSS("overlay-item")} />
                )}
              </div>
            )}
            {interactions.length > 0 && (
              <div className={this.decorateCSS("interactions-container")}>
                {interactions.map((item: Interaction, index: number) => {
                  const isLike = index === 0;
                  const isShare = index === interactions.length - 1;
                  const iconExist = item.icon && (item.icon.type === "icon" ? this.castToString((item.icon as any).name) : (item.icon as any).url);
                  const textExist = this.castToString(item.text);

                  if (!iconExist && !textExist && !(isShare && socials.length > 0)) return null;

                  return (
                    <div
                      key={index}
                      className={`${this.decorateCSS("interaction")} ${isShare ? this.decorateCSS("share") : ""}`}
                      onClick={isLike ? () => this.handleLikeClick() : undefined}
                    >
                      {iconExist && (
                        <Base.Media
                          value={item.icon}
                          className={`${this.decorateCSS("icon")} ${item.icon.type === "icon" ? this.decorateCSS("is-icon") : ""} ${isLike && this.getComponentState("isLiked") ? this.decorateCSS("liked") : ""}`}
                        />
                      )}
                      {textExist && (
                        <Base.P className={this.decorateCSS("text")}>
                          {item.text}
                        </Base.P>
                      )}
                      {isShare && socials.length > 0 && (
                        <div className={this.decorateCSS("socials")}>
                          {socials.map((social, sIndex: number) => {
                            if (!social.icon && !this.castToString(social.text)) return null;
                            return (
                              <ComposerLink path={social.url} key={sIndex}>
                                <div className={this.decorateCSS("social")}>
                                  {social.icon && (
                                    <Base.Media
                                      value={social.icon}
                                      className={`${this.decorateCSS("social-icon")} ${social.icon.type === "icon" ? this.decorateCSS("is-icon") : ""}`}
                                    />
                                  )}
                                  {this.castToString(social.text) && (
                                    <Base.P className={this.decorateCSS("social-text")}>
                                      {social.text}
                                    </Base.P>
                                  )}
                                </div>
                              </ComposerLink>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Social3;
