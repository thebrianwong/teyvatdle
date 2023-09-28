import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import TooltipProps from "./type";

const Tooltip = ({ type }: TooltipProps) => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isDisplaying &&
        boxRef.current &&
        !boxRef.current.contains(e.target as HTMLElement) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as HTMLElement)
      ) {
        setIsDisplaying(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDisplaying]);

  return (
    <div className="tooltip-container">
      {isDisplaying && (
        <div className="arrow-box" ref={boxRef}>
          <p>
            <span className="tooltip-wrong">Red</span>:{" "}
            {type === "talent" || type === "constellation"
              ? "Wrong character."
              : "Both answers are wrong."}
          </p>
          {type === "character" && (
            <p className="tooltip-birthday">
              Birthday: Month and day are wrong.
            </p>
          )}
          {type !== "talent" && type !== "constellation" && (
            <p>
              <span className="tooltip-partial">Yellow</span>: One answer is
              correct.
            </p>
          )}
          {type === "character" && (
            <p className="tooltip-birthday">
              Birthday: Either month or day are correct.
            </p>
          )}
          <p>
            <span className="tooltip-correct">Green</span>:{" "}
            {type === "talent" || type === "constellation"
              ? "Correct character."
              : "Both answers are correct."}
          </p>
        </div>
      )}
      <button
        className="tooltip-button"
        onClick={() => setIsDisplaying(!isDisplaying)}
        ref={buttonRef}
      >
        ?
      </button>
    </div>
  );
};

export default Tooltip;
