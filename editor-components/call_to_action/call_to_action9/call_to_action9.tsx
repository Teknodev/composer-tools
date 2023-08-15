import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action9.module.scss";

class CallToAction9Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Join Our Exclusive Club",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Be the first to know about new products, receive exclusive discounts, and get access to VIP events by joining our club today.",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Sign Up Now",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Button Link",
      value: "",
    });
    this.addProp({
      type: "image",
      key: "top-left",
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Hnf78cqTzhoYjXcH4lN1Cnhwxhy9MD8VDo2x4UbgxGwyV39THOlkXMZxQPnGC35GRfc&usqp=CAU",
      displayer: "Top Left",
    });
    this.addProp({
      type: "image",
      key: "top-center",
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Hnf78cqTzhoYjXcH4lN1Cnhwxhy9MD8VDo2x4UbgxGwyV39THOlkXMZxQPnGC35GRfc&usqp=CAU",
      displayer: "Top Center",
    });
    this.addProp({
      type: "image",
      key: "top-right",
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJSjj24dr3WRuhtHIs7UIzzwCOBW59olmwrmpJsZLF4yyStPfLLIohqCAfoYQJ601d3I&usqp=CAU",
      displayer: "Top Right",
    });
    this.addProp({
      type: "image",
      key: "bottom-left",
      value:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACpCAMAAABEdevhAAAAgVBMVEX///85QUkvOEElLzk0PEU2P0cpMzzz9PSNkZUnMTsjLjhGTlUtN0G3urz8/PwxOkIdKTRgZmyEiIzP0dJVW2Hc3d49RU3X2drj5OXt7u9wdXrExshma3FbYWfP0NKbnqGusLOXmp4XJDCxs7aRlZh9gYZCSlGjpqlNVFvHycp3fIAo/sXMAAAIvUlEQVR4nO2afZuCKhOHFQEDNS1fUnuvLd2+/wd8GPB1t7a9rq1T5zlz/5OSIPwcmBnUshAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQR7JZu5ls2D66m78GzjJkDHqeGlXMl18pj9U+O9yEraG8sIUTCdciuh8fG233pFFZDeQiy5wPQ5nTJYv7tn7cSKtVvbBhYJVWyD2r+7bu3FmnVbOpzW0M1u4r+7cm5H1WomlOp+T8TnSMbV7rSJwfivanfvVq3v3Xri9NMyGgllfwHdXKlTAn2OxNH7W/HY38bMixVh00sgACgZayc2VChn3efTXgZaR5J9/bOM6R8dx2OIpTVunsLUqOYfzqdfNSeZdqwD/+3/UaidVOMee8fg3EYOmn2K04PUY4VxIf2cKnD6EuGZWD9FKxynOM1IDEwGJ4AlNFxljst4Hy2VrtqWegowxcuOGj9BqC9GuKP7WyFXMCsKf4JQ+M0rPo3UjUGZFOMuyepJfr/MIrVybk+gpke5e5xzRQ9fCfLGId2vJqDca9tK3w2ifu9Pba8kjtLLc6uM5sZsbEsbE6oEtBpl0hODKXslwIuQXafPVHR3GWhWL4POLAU7zePPNJqepmua3W87jOB8+nmm+GRfcqLZp7gS3NJcXF6/+uFvx95Sy9XXtxI6r+emS8NAmdxPmoVaLWSiFkN4g3nL3nnQcMcuXdZLUjfG4k7MUXLJLo2Gq/ksgU9/qi/I1V1W8baulO1HP0pHZBzTrrtW1Z/PHWR3OVOHCU9X2eQJX1QsrXztw+dZc9FD3Wsk+Mtdm5a4in4QhLIv87p0GWs0jE4sxnrU+bcG4fg6UnAiljnEPn9zXhSyMzLNJJaXhTB1MuDooifEn3DYOpqDN5dwrYG2jlB5M6wd1eFY9jCOon+lq1A+YjnuY88ipZ3D76JOuoWBadylgG6kHdRQl1zeweq1WfUMsMsPU4Q24UdU2NKe1CqI+jZITrZVagSmMbAJ37oJfdtCt1F1BqFZTFxLWRisIcDyl1cZpbmI63R1MHq3VcqCVfhIfvLczPUnctVTdpU5yzat3Wu1NO9Sok0GRq0986mWmSa1VbjYumFFAJwdjrbQZGtM6q1Y2YPZhSIjqQVnc1spmQjbV2yPy6Bh010tDYXWa9pswLIMp2NlZ6F2Zka1Whe4vd1aeXv34R6t6tFUDDELWalXCDKFRMnOItobvWlGx+libVirTP3pxi8lhDWZ2Uytaf6Zb3Qk40k/u4RsjA61C0GrTR+pMr6Hb7gJ+JQZqtdr7zdisXE8aocYw6O9CNlrlB3jg2rtOdAgafJuDCfy5AE2gAxX8OVMmHeuGbmnFbN0kPIgQjmAviTw6ZtsMlnZwHYM5abQa7NLw21olEHEY11PA0iE2VizbaW2ZRBO0gkfDamOgF1UWnr5oZQZt6dq2k1tL+KX+epv+qJWeE9aSt0eBGgZ5+ILVZ8eH/ItWNXSu19KW34P3Ris9hKiZo/BMlVuAlhr5jEag1YT0LiMFMZMvWnUDhJadjcretVujvkyWP2hFdKoP6atpIHaeodXm0IhlnFIwWNrBhgvnN1oV0AZpyqAJv9IPuZsGx0YrsC9hppPlErN7MdKKt3knKK6s0yo8YTpID9tfaTV/nlZW4EMAE8qProvtlAPHV/R2ZovvlUd21ZRVau3iRzM11u3Iw4FdNeFH0Vwwtqs2zIa81wFVp7va4doxRumrtbKKPYmc0jzsafdygh30E057rZq3YCPa9WpN+7mlZ09sPKowuuhWQCuwr1ZA0BRGNl6vzk120qxXmrxac2PoekPNbC7CFf+4VtYgEwC3w1Q0Q5zM7FcduznJrkzBTquqdWoq7IcRw3zU4YGc5NPiSNqYoQAB/RPcbwf6wcuisR80TrIAZ6EXTOuTQU9AWLgoYa3taWVfoFVLzFUkV5/2+/2ykS9pw+bQuRaudPGVr2dtPSltUEjo6EEvdcTPyCAW1TuvJLvMa5CKwmYrGN0gviLZfDfX4bvYqUZKh2ZBuoCXJORknKfNT8ughDu+UKujYOS8HJcolbgQjpxd3cHq4naTVjKiY/XQRAW7Jka3BzlOoaNMRnV0avbwv2gFO7P6X6qEKA4hpILSabXTMYQdCrOCvUQrtyjyoydsPl6TlN8PxWm5WKQ38oU+H5z3wQXJmnRod2jTaTAL4+Jip8/4Ir2ajbUK2wWT6lS+6vMIqjOnpH0lEL5Gq6q2achV1klnw2J379ii/HFz9xxSyo2OFSdmU0HOOmHTFee+L9hyybtwIPVEs5NAjQnDPgPR+wxKq3Bua+tiTm0MeSvDRu9MFxRZ84HFnFAatvsM3GjVHW3g6AlauYmgzcOMmt0UN14ujyfqq5Xh57rlbDZbN9LkcyqEkKvRlm0RVFXg6pirDZ0gCFCz2qvaeolqA0Zo4quihH/r7guwxUWdC3FuN7Tcia/+D3eWqjZbwf4V1NdBb9od6bIn7LMnXUhl8gPLPUWO4LBodPHRLykWX/YvPxurhLDN6UV08/SKubaxqJuOp/w0/7IG5Isb2//PJugjcxMhuedOPCf+U9PFJZpp7ZZwD35vj2QUt78lg1fLQsdUZSfV9fenv2W694lNvI9dVcIScy2UHfP+Wg2SY21Gce95wjur1R1KYSIAn2qnd/cN4PtrFX3R6qPPCP/qdVf99A751ffWI95fq2TweQcsmSV9mFYqQuUhZSz05foXq/E84vzw1h+m7rrs2Hi9S9hp5W/vVb5HsSuTOim3v/paIQ4UL/Jwv2PavSmR+sXJbvBd0f158x8jt/UbOBrt9KnbZRnmczVkiDvJIhmt2o9jgkMj1WM/mvi/oUgH8XbFOWWUv7dLeheKapatt8/4IgpBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEORfx/8A44OAXjUBJ4IAAAAASUVORK5CYII=",
      displayer: "Bottom Left",
    });
    this.addProp({
      type: "image",
      key: "bottom-center",
      value:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Hnf78cqTzhoYjXcH4lN1Cnhwxhy9MD8VDo2x4UbgxGwyV39THOlkXMZxQPnGC35GRfc&usqp=CAU",
      displayer: "Bottom Center",
    });
    this.addProp({
      type: "image",
      key: "bottom-right",
      value: "https://topgrading.com/wp-content/uploads/2021/08/images-1.jpg",
      displayer: "Bottom Right",
    });
  }

  getName(): string {
    return "Call To Action 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action9-page")}>
            <h1>{this.getPropValue("title")}</h1>
            <ComposerLink path={this.getPropValue("link")}>
              <span className={this.decorateCSS("button")}>
                {this.getPropValue("buttonText")}
              </span>
            </ComposerLink>
            <h3>{this.getPropValue("description")}</h3>

            <div className={this.decorateCSS("sponsor-container")}>
              <div className={this.decorateCSS("sponsor")}>
                <img src={this.getPropValue("top-left")} />
                <img src={this.getPropValue("top-center")} />
                <img src={this.getPropValue("top-right")} />
              </div>
              <div className={this.decorateCSS("sponsor")}>
                <img src={this.getPropValue("bottom-left")} />
                <img src={this.getPropValue("bottom-center")} />
                <img src={this.getPropValue("bottom-right")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction9Page;
