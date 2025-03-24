import * as React from "react";
import { BaseSocial } from "../../EditorComponent";
import styles from "./social.module.scss";
import { Base } from "../../../composer-base-components/base/base";

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
                        type:"image",
                        key:"image",
                        displayer:"Image",
                        value:""
                    },
                    {
                        type:"string",
                        key:"name",
                        displayer:"Name",
                        value:"PaoloRicciuti"  
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

    })
  }

  static getName(): string {
    return "Socail 1";
  }

  render() {
    const title = this.getPropValue("title");
    const isTitle = this.castToString(title)
    const description = this.getPropValue("description");
    const isDescription = this.castToString(description)
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


            </Base.MaxContent>
        </Base.Container>
    )
  }
}

export default Social1;