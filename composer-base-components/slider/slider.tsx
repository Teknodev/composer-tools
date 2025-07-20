import React, { forwardRef, useEffect, useRef, useState, useCallback } from "react";
import Slider, { Settings } from "react-slick";
import { debounce } from "lodash";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ComposerSlider = forwardRef<Slider, Settings>((props, ref) => {
  const [sliderSettings, setSliderSettings] = useState<Settings>({...props, responsive: []});
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

  const restartSlider = useCallback(
    debounce(() => {
      props = {
        ...props,
        slidesToShow: props.slidesToShow || 1,
        slidesToScroll: props.slidesToScroll || 1
      };
      setSliderSettings({...props, responsive: []});
      sliderRef.current?.slickPlay();
    }, 200),
    [props]
  );

  useEffect(() => {
    restartSlider();

    if (!props.responsive) return;

    const sortedBreakpoints = [...props.responsive].sort((a, b) => a.breakpoint - b.breakpoint);

    const updateSlidesToShow = (width: number) => {
      const matchedBreakpoint = sortedBreakpoints.find(({ breakpoint }) => width <= breakpoint);

      if (matchedBreakpoint?.settings) {
        setSliderSettings((prev) => ({
          ...prev,
          ...(matchedBreakpoint.settings as Settings),
          responsive: []
        }));
        return;
      }

      setSliderSettings(props);
    };

    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (entries.length > 0) {
        updateSlidesToShow(sliderRef.current?.innerSlider?.list?.offsetWidth || entries[0].contentRect.width);
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
  }, [props, restartSlider]);

  return (
    <Slider ref={setRef} {...sliderSettings}>
      {props.children}
    </Slider>
  );
});

export default ComposerSlider