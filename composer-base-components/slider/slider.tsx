import React, { forwardRef, useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

const ComposerSlider = forwardRef<Slider, Settings>((props, ref) => {
  const [sliderSettings, setSliderSettings] = useState<Settings>(props);
  const sliderRef = useRef<Slider>(null);

  // Combine the forwarded ref with our local ref
  const setRef = (slider: Slider) => {
    sliderRef.current = slider;

    // Handle the forwarded ref
    if (!ref) return;

    if (typeof ref === "function") {
      ref(slider);
        return;
      }

    ref.current = slider;
  };

  useEffect(() => {
    if (!props.responsive) return;

    const sortedBreakpoints = [...props.responsive].sort((a, b) => a.breakpoint - b.breakpoint);

    const updateSlidesToShow = (width: number) => {
      const matchedBreakpoint = sortedBreakpoints.find(({ breakpoint }) => width <= breakpoint);

      if (matchedBreakpoint?.settings) {
        setSliderSettings((prev) => ({
          ...prev,
          ...(matchedBreakpoint.settings as Settings),
        }));
        return;
      }

      setSliderSettings(props);
    };

    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (entries.length > 0) {
        updateSlidesToShow(entries[0].contentRect.width);
      }
    };

    const observer = new ResizeObserver(handleResize);

    // Observer on the slider element directly
    const sliderElement = sliderRef.current && sliderRef.current.innerSlider?.list;

    if (sliderElement) {
      observer.observe(sliderElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [props.slidesToShow, props.responsive]);

  return (
    <Slider ref={setRef} {...sliderSettings}>
      {props.children}
    </Slider>
  );
});

export default ComposerSlider;
