import * as React from "react";
import { BaseSocial } from "../../EditorComponent";
import styles from "./social1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";

type CardItem={
    item: ItemType
}
type ItemType={
    image: string,
    name: string,
    comment: string
    icon: string,
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
                                        value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d26803b007002cc7aa71?alt=media"
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
                                        value:"Using supabase I'm really pleased on the power of postgres (and sql in general). Despite being a bit dubious about the whole backend as a service thing I have to say I really don't miss anything. The whole experience feel very robust and secure." 
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
                                        value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d26803b007002cc7aa71?alt=media"
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
                                        value:"Using supabase I'm really pleased on the power of postgres (and sql in general). Despite being a bit dubious about the whole backend as a service thing I have to say I really don't miss anything. The whole experience feel very robust and secure." 
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
                                        value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d26803b007002cc7aa71?alt=media"
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
                                        value:"Using supabase I'm really pleased on the power of postgres (and sql in general). Despite being a bit dubious about the whole backend as a service thing I have to say I really don't miss anything. The whole experience feel very robust and secure." 
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
                                        value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d26803b007002cc7aa71?alt=media"
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
                                        value:"Using supabase I'm really pleased on the power of postgres (and sql in general). Despite being a bit dubious about the whole backend as a service thing I have to say I really don't miss anything. The whole experience feel very robust and secure." 
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
                                        value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d26803b007002cc7aa71?alt=media"
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
                                        value:"Using supabase I'm really pleased on the power of postgres (and sql in general). Despite being a bit dubious about the whole backend as a service thing I have to say I really don't miss anything. The whole experience feel very robust and secure." 
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
                                        value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b1d26803b007002cc7aa71?alt=media"
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
                                        value:"Using supabase I'm really pleased on the power of postgres (and sql in general). Despite being a bit dubious about the whole backend as a service thing I have to say I really don't miss anything. The whole experience feel very robust and secure." 
                                    },
                                ]                                
                            }
                        ]
                    }
                ]            
            },


        ]

    })
  }

  static getName(): string {
    return "Socail 1";
  }

  render() {
    const title = this.getPropValue("title");
    const isTitle = this.castToString(title)
    const description = this.getPropValue("description");
    const isDescription = this.castToString(description);
    const cardItems = this.castToObject<CardItem[]>("cards");
    console.log("cardItems", cardItems)
    const items = this.castToObject<ItemType[]>("items");
    console.log("items", items)

    return (
        <Base.Container>
            <Base.MaxContent>
            {(isTitle && isDescription ) &&
                <Base.VerticalContent>
                {isTitle &&
                    <Base.SectionTitle>
                        {title}
                    </Base.SectionTitle>
                }
                {isDescription &&
                    <Base.SectionDescription>
                        {description}
                    </Base.SectionDescription>
                    }
                </Base.VerticalContent>
            }

{/* <div className={this.decorateCSS("loop-slide")}>
    <div className={this.decorateCSS("cards")}>
    <div className={this.decorateCSS("cards-wrapper")}>
  {cardItems.map((item: any, index: number) => (
    <div key={`card-${index}`} className={this.decorateCSS("card-container")}>
      <div className={this.decorateCSS("card-upper")}>
        <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
        <img className={this.decorateCSS("image")} src={item.image} />
        <div className={this.decorateCSS("name")}>{item.name}</div>
      </div>
      <div className={this.decorateCSS("comment")}>{item.comment}</div>
    </div>
  ))}

</div>
<div className={this.decorateCSS("cards-wrapper")}>
{cardItems.map((item: any, index: number) => (
    <div key={`clone-card-${index}`} className={`${this.decorateCSS("card-container")}`}>
      <div className={this.decorateCSS("card-upper")}>
        <ComposerIcon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />
        <img className={this.decorateCSS("image")} src={item.image} />
        <div className={this.decorateCSS("name")}>{item.name}</div>
      </div>
      <div className={this.decorateCSS("comment")}>{item.comment}</div>
    </div>
  ))}
</div>
    </div>

</div>  

<div className={this.decorateCSS("loop-slide")}>
    <div>
        <div>DENEME1</div>
        <div>DENEME2</div>
        <div>DENEME3</div>
        <div>DENEME4</div>
        <div>DENEME5</div>
        <div>DENEME6</div>
        <div>DENEME1</div>
        <div>DENEME2</div>
        <div>DENEME3</div>
        <div>DENEME4</div>
       <div>DENEME5</div>
        <div>DENEME6</div>
    </div>

</div> */}

           

            </Base.MaxContent>
        </Base.Container>
    )
  }
}

export default Social1;