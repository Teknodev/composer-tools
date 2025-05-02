import { useEffect, useRef } from "react";

type ComposerEmbededLinkProps = {
  path: string;
  className?: string;
};

export function ComposerEmbededLink({ path, className }: ComposerEmbededLinkProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    container.innerHTML = "";

    const temp = document.createElement("div");
    temp.innerHTML = path;

    Array.from(temp.childNodes).forEach((node) => {
      container.appendChild(node.cloneNode(true));
    });
    const scripts = container.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      for (let i = 0; i < oldScript.attributes.length; i++) {
        const attr = oldScript.attributes[i];
        newScript.setAttribute(attr.name, attr.value);
      }
      if (oldScript.textContent) {
        newScript.textContent = oldScript.textContent;
      }
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, [path]);

  return <div className={className} ref={ref} />;
}
