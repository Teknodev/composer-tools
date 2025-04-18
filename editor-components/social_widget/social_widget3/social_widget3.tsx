import { BaseSocialWidget } from "composer-tools/editor-components/EditorComponent";
import styles from "./social_widget3.module.scss"
import { Base } from "composer-tools/composer-base-components/base/base";
import { ComposerEmbededLink } from "composer-tools/composer-base-components/embeded-link/embeded-link";

class FacebookWidget extends BaseSocialWidget {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "embededLink",
            key: "embededLink",
            displayer: "Embeded Link",
            value: `<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fvkartbox%2Fvideos%2F1041959917989888%2F&show_text=true&width=357&t=0" width="357" height="591" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
        });
    }

    static getName(): string {
        return "Facebook Widget";
    }

    render() {
        return (
            <Base.Container isFull={true} className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <ComposerEmbededLink path={this.getPropValue("embededLink")} className={this.decorateCSS("widget")}></ComposerEmbededLink>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default FacebookWidget;
