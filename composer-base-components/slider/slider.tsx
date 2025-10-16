import React, { forwardRef, useEffect, useRef, useState, useCallback } from "react";
import Slider, { Settings } from "react-slick";
import { debounce } from "lodash";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function shallowEqual(objA: any, objB: any) {
  if (objA === objB) return true;
  if (!objA || !objB) return false;
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (objA[key] !== objB[key]) return false;
  }
  return true;
}

const ComposerSlider = forwardRef<Slider, Settings>((props, ref) => {
  // Manual memoization for props
  const memoizedPropsRef = useRef<Settings>({ ...props });
  if (!shallowEqual(props, memoizedPropsRef.current)) {
    memoizedPropsRef.current = { ...props };
  }
  const memoizedProps = memoizedPropsRef.current;

  const [sliderSettings, setSliderSettings] = useState<Settings>({ ...memoizedProps, responsive: [] });
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
      const newProps = {
        ...memoizedProps,
        slidesToShow: memoizedProps.slidesToShow || 1,
        slidesToScroll: memoizedProps.slidesToScroll || 1
      };
      setSliderSettings({ ...newProps, responsive: [] });
      if (memoizedProps.autoplay) {
        sliderRef.current?.slickPlay();
      }
    }, 200),
    [memoizedProps]
  );

  useEffect(() => {
    restartSlider();

    if (!memoizedProps.responsive) return;

    const sortedBreakpoints = [...memoizedProps.responsive].sort((a, b) => a.breakpoint - b.breakpoint);

    const updateSlidesToShow = (width: number) => {
      const matchedBreakpoint = sortedBreakpoints.find(({ breakpoint }) => width <= breakpoint);

      if (matchedBreakpoint?.settings) {
        setSliderSettings((prev) => ({
          ...prev,
          ...(matchedBreakpoint.settings as Settings),
          autoplay: memoizedProps.autoplay,
          autoplaySpeed: memoizedProps.autoplaySpeed,
          responsive: []
        }));
        return;
      }

      setSliderSettings(memoizedProps);
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
  }, [memoizedProps, restartSlider]);

  return (
    <Slider ref={setRef} {...sliderSettings}>
      {memoizedProps.children}
    </Slider>
  );
});

export default ComposerSlider;