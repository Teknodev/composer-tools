import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials13.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";

//CLASS
class Testimonials13Page extends Testimonials {

    //constructor
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "writing",
            displayer: "Writing",
            value: "TESTIMONIALS",
        });
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Hear What Our Clients Have to Say",
        });
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua.",
        })
        this.addProp({
            type: "image",
            key: "bigImage1",
            displayer: "Image 1 : ",
            value: "",
        })
        this.addProp({
            type: "array",
            key: "profile",
            displayer: "Profile",
            value: [
                //1
                {
                    type: "array",
                    key: "object1",
                    displayer: "Object 1 :",
                    value: [
                        {
                            type: "image",
                            key: "badge1",
                            displayer: "Badge 1",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
                        },
                        {
                            type: "string",
                            key: "author",
                            value: "Alex Madson",
                            displayer: "Author",
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            value: "Student",
                            displayer: "Subtitle",
                        },
                    ]
                }, //1 end

                //2
                {
                    type: "array",
                    key: "object2",
                    displayer: "Object 2 :",
                    value: [
                        {
                            type: "image",
                            key: "badge2",
                            displayer: "Badge 2",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
                        },
                        {
                            type: "string",
                            key: "author",
                            value: "Helen Lee",
                            displayer: "Author",
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            value: "Artist",
                            displayer: "Subtitle",
                        },
                    ]
                }, //2 end

                //3
                {
                    type: "array",
                    key: "object3",
                    displayer: "Object 3 :",
                    value: [
                        {
                            type: "image",
                            key: "badge3",
                            displayer: "Badge 3",
                            value: ""
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
                        },
                        {
                            type: "string",
                            key: "author",
                            value: "Michael Moore",
                            displayer: "Author",
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            value: "Designer",
                            displayer: "Subtitle",
                        },
                    ]
                }, //3 end
            ],
        });
        this.addProp({
            type: "image",
            key: "bigImage2",
            displayer: "Image 2 : ",
            value: "",
        })

    }//constructor end

    getName(): string {
        return "Testimonials 13";
    }

    //RENDER
    render() {

        //RETURN
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <main id="main_id">
                        <section>
                            <div className={this.decorateCSS("container")}>
                                <div className={this.decorateCSS("flexItems")}>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );//end RETURN
    }//end RENDER

}//end CLASS

//Higher Order Component
export default Testimonials13Page;