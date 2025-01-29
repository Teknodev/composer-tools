import React, { forwardRef, useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

const ComposerSlider = forwardRef<Slider, Settings>((props, ref) => {
  const [slidesSettings, setSliderSettings] = useState(props);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!props.responsive) return;

    const sortedBreakpoints = [...props.responsive].sort((a, b) => a.breakpoint - b.breakpoint);

    const updateSlidesToShow = (width: number) => {
      const matchedBreakpoint = sortedBreakpoints.find(({ breakpoint }) => width <= breakpoint);

      if (matchedBreakpoint?.settings) {
        setSliderSettings((prev) => {
          return { ...prev, ...(matchedBreakpoint?.settings as Settings) };
        });
      } else {
        setSliderSettings(props);
      }
    };

    const observer = new ResizeObserver(([entry]) => {
      updateSlidesToShow(entry.contentRect.width);
    });

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [props.responsive, props.slidesToShow]);

  return (
    <div ref={containerRef}>
      <Slider ref={ref} {...slidesSettings}>
        {props.children}
      </Slider>
    </div>
  );
});

export default ComposerSlider;
