import * as React from "react";
import { Team } from "../../EditorComponent";
import styles from "./team14.module.scss";

interface Card {
  image: string;
  name: string;
  position: string;
  description: string;
}

class Team14 extends Team {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Team",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Meet the creative minds behind the magic! Our team is dynamic blend of visionaries, storytellers, and artisans, united by a passion for innovation and excellence",
    });
    this.addProp({
      type: "array",
      key: "team",
      displayer: "Team",
      value: [
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Mark",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Senior Product Manager",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Crafting innovative design for the future, with a blend of experience and creativity.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
          ],
        },
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jullie",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Content Creator",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Cragfting captivating content to inform, inspire and engage. Let's tell your story together.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
          ],
        },
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jade",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Creative Director",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Bringing visions to life through innovative ideas and strategic executions. Transforming concenpts into captivating visual stories.",
            },            
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
          ],
        },
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "John",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Project Manager",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Empower your projects with expertise and precisions",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
          ],
        },
      ],
    });
  }
  componentDidMount() {
    const downPageElement = document.querySelector(`.${styles["down-page"]}`);
    if (downPageElement) {
      const images = downPageElement.querySelectorAll("img");
      if (images.length == 0) {
        downPageElement.remove();
      }
    }
  }

    getName(): string {
      return "Team 14";
    }
    render() {
      const title = this.getPropValue("title");
      const subtitle = this.getPropValue("subtitle");
      const team = this.castToObject<Card[]>("team");
      return (
        <div className={this.decorateCSS("container")}>
          <div className={this.decorateCSS("max-content")}> 
            {(title || subtitle )&&(
              <div className={this.decorateCSS("up-page")}>
                {title && <h1 className={this.decorateCSS("title")}>{title}</h1>}
                {subtitle && <p className={this.decorateCSS("subtitle")}>{subtitle}</p>}
              </div>
            )}
              <div className={this.decorateCSS("down-page")}>
              {team.map((teamMember, index) => (
                  <div className={this.decorateCSS("portfolio")}>
                    <img className={this.decorateCSS("image")} src={teamMember.image} alt={`${teamMember.name}'s image`} />
                    <div className={this.decorateCSS("info")}>
                      <div className={this.decorateCSS("name")}>{teamMember.name}</div>
                      <div className={this.decorateCSS("position")}>{teamMember.position}</div>
                      <div className={this.decorateCSS("description")}>{teamMember.description}</div>
                    </div>
                </div>
              ))}
            </div>
          
        </div>
      </div>
    );
  }
}
  export default Team14;


        
        //<div className={this.decorateCSS("container")}>
        //   <div className={this.decorateCSS("max-content")}>
        //     {this.castToObject<Portfolio[]>("portfolio").map(
        //       (portfolio: Portfolio, indexPortfolio: number) => (
        //         <div className={this.decorateCSS("card-item-count")} style={{
        //           width: 90 / this.getPropValue("itemCount") + "%",
        //         }}>
        //         <div key={indexPortfolio} className={this.decorateCSS("portfolio")}>
        //           <img className={this.decorateCSS("image")} src={portfolio.image} alt=""></img>
        //           <div className={this.decorateCSS("little-container")}>
        //             <h3 className={this.decorateCSS("title")}>{portfolio.title}</h3>
        //             <p className={this.decorateCSS("description")}>
        //               {portfolio.description}
        //             </p>
        //           </div>
        //         </div>
        //         </div>
        //       )
        //     )}
        //   </div>
        // </div>


        //////////////////////////////////////////////



/*            <div className={this.decorateCSS("down-page")} style={{ display: "flex", flexWrap: "wrap" }}>
                {/ {this.castToObject<Card[]>("portfolio").map(
                  (portfolio: any, index: number) => {
                    return (
                      <div
                        key={indexTeamMembers}
                        className={this.decorateCSS("card")}
                        style={{ width: 90 / this.getPropValue("reverse") + "%" }}
                      >
                        <img src={item.image} alt="team" />
                        <div className={this.decorateCSS("person-info")}>
                          <h2 className={this.decorateCSS("item-name")}>{item.name}</h2>
                          <p className={this.decorateCSS("item-position")}>{item.position}</p>
                          <p className={this.decorateCSS("item-description")}>{item.description}</p>
                        </div>
                      </div>
                    ); }         */