import { useEffect, useState } from "react";

const usePlaygroundResize = () => {
  const [style, setStyle] = useState({maxWidth: '0', maxHeight: '0'});

  useEffect(() => {
    const element = document.getElementById("playground");
    if (!element) {
      setTimeout(() => {setStyle({ maxWidth: "100vw", maxHeight: "100vh"})}, 200);
      return;
    };

    const resizeObserver = new ResizeObserver(() => {
      setStyle({
        maxWidth: `${element.offsetWidth}px`,
        maxHeight: `${element.offsetHeight}px`,
      });
    });

    resizeObserver?.observe(element);

    return () => {
      resizeObserver?.disconnect();
    };
  }, []);

  return { style };
};

export default usePlaygroundResize;
