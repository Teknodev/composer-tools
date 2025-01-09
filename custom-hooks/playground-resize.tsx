import { useEffect, useState } from "react";

const usePlaygroundResize = () => {
  const [style, setStyle] = useState({ maxWidth: "0", maxHeight: "0" });

  useEffect(() => {
    const element = document.getElementById("playground");
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      setStyle({
        maxWidth: `${element.offsetWidth}px` || "100vw",
        maxHeight: `${element.offsetHeight}px` || "100vh",
      });
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { style };
};

export default usePlaygroundResize;
