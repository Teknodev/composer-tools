import * as React from "react";
import { Base } from "composer-tools/composer-base-components/base/base";
import { BasePrivacyPolicy } from "../EditorComponent";
import styles from "./privacy-policy.module.scss";

class PrivacyPolicyPage extends BasePrivacyPolicy {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Privacy Policy",
    });

    this.addProp({
      type: "string",
      key: "effectiveDate",
      displayer: "Effective Date",
      value: "Effective Date: 2030-01-01",
    });

    this.addProp({
      type: "string",
      key: "lastUpdated",
      displayer: "Last Updated",
      value: "Last Updated: 2025-01-01",
    });
    
    this.addProp({
      type: "string",
      key: "introduction",
      displayer: "Introduction",
      value: "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or interact with this website Blinkpage.",
    });
   
    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: `
        1. Information We Collect<br/>
        a. Information You Provide<br/><br/>
        Contact Forms: When you submit information through a contact or inquiry form, we may collect your name, email address, and any other data you provide voluntarily.<br/><br/>

        Newsletter Subscriptions: If you subscribe to our newsletter, we will collect your email address to send periodic updates or promotional content.<br/><br/>

        Other Fields: Custom fields may collect data such as your phone number or organization, depending on the form setup.<br/><br/>

        b. Automatically Collected Information<br/><br/>
        Cookies & Analytics:<br/>
        This Site uses cookies and third-party tools (such as Google Analytics) to collect anonymous data about your interactions (e.g., pages visited, time on site, browser type). These tools help us understand how the site is used and improve performance.<br/><br/>

        2. How We Use Your Information<br/><br/>
        Your data may be used to:<br/><br/>

        Communicate with you<br/><br/>

        Respond to inquiries<br/><br/>

        Send newsletters and updates<br/><br/>

        Analyze traffic and improve website functionality<br/><br/>

        3. Sharing Your Information<br/><br/>
        We do not sell your personal information. Your data may be shared with:<br/><br/>

        Trusted service providers (e.g., analytics or newsletter platforms)<br/><br/>

        Authorities when legally required<br/><br/>

        4. Your Rights<br/><br/>
        Depending on your jurisdiction, you may have rights to:<br/><br/>

        Access or update your information<br/><br/>

        Request deletion of your personal data<br/><br/>

        Withdraw consent for communications<br/><br/>

        To exercise your rights, please contact us using the information provided on the site.<br/><br/>

        5. Data Retention<br/><br/>
        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.<br/><br/>

        6. External Links<br/><br/>
        This website may contain links to third-party websites. We are not responsible for their content or privacy practices.<br/><br/>

        7. Security<br/><br/>
        We implement reasonable safeguards to protect your information, but no system is 100% secure.<br/><br/>

        8. Policy Changes<br/><br/>
        We may update this privacy policy as needed. Revisions will be posted on this page with an updated date.<br/><br/>

        9. Contact<br/><br/>
        If you have any questions about this policy, please contact us via the form or email provided on this website.`,
    });
  }

  static getName(): string {
    return "Privacy Policy";
  }
  render() {
    const titleExist = this.castToString(this.getPropValue("title"));
    const effectiveDateExist = this.castToString(this.getPropValue("effectiveDate"));
    const lastUpdatedExist = this.castToString(this.getPropValue("lastUpdated"));
    const introductionExist = this.castToString(this.getPropValue("introduction"));
    const textExist = this.castToString(this.getPropValue("text"));
    return (
      <Base.Container className={styles.privacyPolicy}>
        <Base.MaxContent className={styles.maxContent}>
            <Base.VerticalContent className={styles.container}>
            {titleExist &&<span className={styles.text}>{this.getPropValue("title")}</span>}
            {effectiveDateExist &&<span className={styles.text}>{this.getPropValue("effectiveDate")}</span>}
            {lastUpdatedExist &&<span className={styles.text}>{this.getPropValue("lastUpdated")}</span>}
            {introductionExist &&<span className={styles.text}>{this.getPropValue("introduction")}</span>}
            {textExist &&<div className={styles.text}>{this.getPropValue("text")}</div>}
        </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default PrivacyPolicyPage;
