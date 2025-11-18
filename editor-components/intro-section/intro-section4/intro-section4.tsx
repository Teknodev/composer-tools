import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section4.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";

class IntroSection4 extends BaseIntroSection {
    constructor(props?: any) {
        super(props, styles);
    }

    static getName(): string {
        return "Intro Section 4";
    }

    render() {
        return (
            <Base.Container className={this.decorateCSS("container")}>
            </Base.Container>
        )
    }
}

export default IntroSection4;