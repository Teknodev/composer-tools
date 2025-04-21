import { BaseSocialWidget } from "composer-tools/editor-components/EditorComponent";
import styles from "./social_widget4.module.scss"
import { Base } from "composer-tools/composer-base-components/base/base";
import { ComposerEmbededLink } from "composer-tools/composer-base-components/embeded-link/embeded-link";

class LinkedinWidget extends BaseSocialWidget {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "embededLink",
            key: "embededLink",
            displayer: "Embeded Link",
            value: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7312821815867817985" height="842" width="504" frameborder="0" allowfullscreen="" title="Gömülü gönderi"></iframe>`,
        });
    }

    static getName(): string {
        return "Linkedin Widget";
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

export default LinkedinWidget;