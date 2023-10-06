import { useEffect, useRef, useState } from "react";
import AnimatedValueProps from "./type";
import "./styles.scss";

const AnimatedValue = ({ value, direction }: AnimatedValueProps) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [displayedValue, setDisplayedValue] = useState(value);
  const valueRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  // comments for direction up

  // animate the solved value changing like a tally counter
  // the old value moves up "out of frame" and disappears
  // the new value starts "out of frame", moves up, and gradually appears
  useEffect(() => {
    // prevent animation from playing when navigating from nav bar
    if (valueRef.current && !initialLoad) {
      const valueSpanElement = valueRef.current!;
      if (direction === "up") {
        // the transition parameters are different for out and into "frame"
        // the displayed value is still the old value at this point
        valueSpanElement.classList.add("old-transition");
        valueSpanElement.classList.add("up-old-end");
        setTimeout(() => {
          valueSpanElement.classList.remove("old-transition");
          valueSpanElement.classList.remove("up-old-end");
          // at this point, the element has no transition styling
          // this is intentional as the element has to immediately
          // be moved to the starting position where it moves up
          // if the element still had styling, this would not be immediate
          valueSpanElement.classList.add("up-new-start");
        }, 100);
        setTimeout(() => {
          // the value being moved up is the new value
          // so the display value has to be changed
          setDisplayedValue(value);
          valueSpanElement.classList.add("new-transition");
          valueSpanElement.classList.add("up-new-end");
          setTimeout(() => {
            // clean up by removing all animation-related classes
            // for a fresh start when the value changes
            // and the animation has to be played again
            valueSpanElement.classList.remove("new-transition");
            valueSpanElement.classList.remove("up-new-start");
            valueSpanElement.classList.remove("up-new-end");
          }, 150);
        }, 200);
      } else {
        valueSpanElement.classList.add("old-transition");
        valueSpanElement.classList.add("down-old-end");
        setTimeout(() => {
          valueSpanElement.classList.remove("old-transition");
          valueSpanElement.classList.remove("down-old-end");
          valueSpanElement.classList.add("down-new-start");
        }, 100);
        setTimeout(() => {
          setDisplayedValue(value);
          valueSpanElement.classList.add("new-transition");
          valueSpanElement.classList.add("down-new-end");
          setTimeout(() => {
            valueSpanElement.classList.remove("new-transition");
            valueSpanElement.classList.remove("down-new-start");
            valueSpanElement.classList.remove("down-new-end");
          }, 150);
        }, 200);
      }
    } else {
      setDisplayedValue(value);
    }
  }, [value]);

  return (
    <span ref={valueRef} className="animated-value">
      {displayedValue}
    </span>
  );
};

export default AnimatedValue;
