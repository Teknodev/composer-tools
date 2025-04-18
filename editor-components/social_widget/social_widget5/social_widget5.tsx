import { BaseSocialWidget } from "composer-tools/editor-components/EditorComponent";
import styles from "./social_widget5.module.scss"
import { Base } from "composer-tools/composer-base-components/base/base";
import { ComposerEmbededLink } from "composer-tools/composer-base-components/embeded-link/embeded-link";

class TikTokWidget extends BaseSocialWidget {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "embededLink",
            key: "embededLink",
            displayer: "Embeded Link",
            value: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@whatifshow/video/7448763914180955414" data-video-id="7448763914180955414" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@whatifshow" href="https://www.tiktok.com/@whatifshow?refer=embed">@whatifshow</a> What if we evolved into a type 7 civilization? 🤯 Find out in the full video linked in our bio! 🔗 <a title="whatif" target="_blank" href="https://www.tiktok.com/tag/whatif?refer=embed">#WhatIf</a> <a title="kardashevscale" target="_blank" href="https://www.tiktok.com/tag/kardashevscale?refer=embed">#KardashevScale</a> <a title="evolution" target="_blank" href="https://www.tiktok.com/tag/evolution?refer=embed">#Evolution</a> <a title="science" target="_blank" href="https://www.tiktok.com/tag/science?refer=embed">#Science</a> <a title="future" target="_blank" href="https://www.tiktok.com/tag/future?refer=embed">#Future</a> <a title="humanity" target="_blank" href="https://www.tiktok.com/tag/humanity?refer=embed">#Humanity</a> <a target="_blank" title="♬ original sound - WHAT IF" href="https://www.tiktok.com/music/original-sound-7448763902471179030?refer=embed">♬ original sound - WHAT IF</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
        });
    }

    static getName(): string {
        return "TikTok Widget";
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

export default TikTokWidget