import paimonImage from "../../assets/title/paimonThinking.png";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import PageHeaderProps from "./type";
import "./styles.scss";
import { useEffect, useRef, useState } from "react";

const PageHeader = ({ title, dataLoaded, solvedValue }: PageHeaderProps) => {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const [initialLoad, setInitialLoad] = useState(true);
  const [displayedValue, setDisplayedValue] = useState(solvedValue);
  const valueRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  // animate the solved value changing like a tally counter
  // the old value moves up "out of frame" and disappears
  // the new value starts "out of frame", moves up, and gradually appears
  useEffect(() => {
    // prevent animation from playing when navigating from nav bar
    if (valueRef.current && !initialLoad) {
      const valueSpanElement = valueRef.current!;
      // the transition parameters are different for out and into "frame"
      // the displayed value is still the old value at this point
      valueSpanElement.classList.add("old-transition");
      valueSpanElement.classList.add("old-end");
      setTimeout(() => {
        valueSpanElement.classList.remove("old-transition");
        valueSpanElement.classList.remove("old-end");
        // at this point, the element has no transition styling
        // this is intentional as the element has to immediately
        // be moved to the starting position where it moves up
        // if the element still had styling, this would not be immediate
        valueSpanElement.classList.add("new-start");
      }, 100);
      setTimeout(() => {
        // the value being moved up is the new value
        // so the display value has to be changed
        setDisplayedValue(solvedValue);
        valueSpanElement.classList.add("new-transition");
        valueSpanElement.classList.add("new-end");
        setTimeout(() => {
          // clean up by removing all animation-related classes
          // for a fresh start when the value changes
          // and the animation has to be played again
          valueSpanElement.classList.remove("new-transition");
          valueSpanElement.classList.remove("new-start");
          valueSpanElement.classList.remove("new-end");
        }, 150);
      }, 200);
    } else {
      setDisplayedValue(solvedValue);
    }
  }, [solvedValue]);

  return (
    <header>
      <img
        src={paimonImage}
        alt="A thinking Paimon sticker from a Genshin Impact web event on the Chinese servers."
      />
      <div className="header-content-container">
        <h1>Which {capitalizedTitle} is Paimon Thinking of...?</h1>
        {dataLoaded ? (
          solvedValue === 1 ? (
            <p>{`1 Traveler has guessed Paimon's ${title} today!`}</p>
          ) : (
            <p>
              <span ref={valueRef} className="solved-value">
                {displayedValue}
              </span>
              {`
              Travelers have guessed Paimon's ${title} today!`}
            </p>
          )
        ) : (
          <LoadingSkeleton quantity={1} width={"50%"} hasContainer={false} />
        )}
      </div>
    </header>
  );
};

export default PageHeader;
