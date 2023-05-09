import * as React from "react";
import styles from "./team8.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";

class Team8 extends Team {
  constructor(props?: any) {
    super(props, styles);

    let placeholder: TypeUsableComponentProps = {
      type: "object",
      key: "team-member",
      displayer: "Team Member",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: PlaceholderFiller.image(),
        },
        {
          type: "string",
          key: "name",
          displayer: "Name",
          value: "Jason Covereye",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "Ceo",
        },
      ],
    };

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Team Members",
    });
    this.addProp({
      type: "array",
      key: "team-members",
      displayer: "Team Members",
      value: [
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
        JSON.parse(JSON.stringify(placeholder)),
      ],
    });
  }


  getName(): string {
    return "Team Page";
  }


  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <span className={this.decorateCSS("title")} >
            {this.getPropValue("title")}
          </span>

          <div
            className={this.decorateCSS("team-members")}
            
          >
            {this.getPropValue("team-members").map(
              (teamMember: any, index: number) => (
                <div
                  key={index}
                  className={this.decorateCSS("team-member")}
                  
                >
                  <div
                    
                    className={this.decorateCSS("name-and-position")}
                  >
                    <img
                      
                      className={this.decorateCSS("member-image")}
                      src={teamMember.value[0].value}
                      alt={teamMember.value[1].value}
                    />
                    <div
                      
                      className={this.decorateCSS("content")}
                    >
                      <span>{teamMember.value[1].value}</span>
                      <p>{teamMember.value[2].value}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Team8;