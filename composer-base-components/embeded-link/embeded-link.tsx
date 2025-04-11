import { useEffect, useRef } from "react";

type ComposerEmbededLinkProps = {
  path: string;
  className?: string
};

export function ComposerEmbededLink({ path , className}: ComposerEmbededLinkProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = path;

    const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      script.setAttribute("async", "true");
      script.setAttribute("charset", "utf-8");
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (window.twttr && window.twttr.widgets) {
        // @ts-ignore
        window.twttr.widgets.load(ref.current);
      }
    }
  }, [path]);

  return <div className={className} ref={ref} />;
}
