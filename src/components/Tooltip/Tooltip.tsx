import { memo, useEffect, useRef, useState } from "react";
import "./styles.scss";
import TooltipProps from "./type";
import { GameDataType } from "../../__generated__/graphql";

const Tooltip = memo(({ type }: TooltipProps) => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        boxRef.current &&
        !boxRef.current.contains(e.target as HTMLElement) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as HTMLElement)
      ) {
        setIsDisplaying(false);
      }
    };
    const closeWithEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDisplaying(false);
      }
    };

    if (isDisplaying) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", closeWithEsc);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
        document.removeEventListener("keydown", closeWithEsc);
      };
    }
  }, [isDisplaying]);

  return (
    <div className="tooltip-container">
      {isDisplaying && (
        <div className="arrow-box" ref={boxRef}>
          {type !== "troll" && (
            <>
              <p>
                <span className="tooltip-wrong">Red</span>:{" "}
                {type === GameDataType.Talent ||
                type === GameDataType.Constellation
                  ? "Wrong character."
                  : "Both answers are wrong."}
              </p>
              {type === GameDataType.Character && (
                <p className="tooltip-birthday">
                  Birthday: Month and day are wrong.
                </p>
              )}
              {type !== GameDataType.Talent &&
                type !== GameDataType.Constellation && (
                  <p>
                    <span className="tooltip-partial">Yellow</span>: One answer
                    is correct.
                  </p>
                )}
              {type === GameDataType.Character && (
                <p className="tooltip-birthday">
                  Birthday: Either month or day are correct.
                </p>
              )}
              <p>
                <span className="tooltip-correct">Green</span>:{" "}
                {type === GameDataType.Talent ||
                type === GameDataType.Constellation
                  ? "Correct character."
                  : "Both answers are correct."}
              </p>
            </>
          )}
          {type === "troll" && (
            <>
              <p>I ACTIVATE THE SPELL CARD KOKOMI OF GREED.</p>
              <p>
                KOKOMI OF GREED ALLOWS ME TO DRAW 2 CARDS FROM MY DECK AND ADD
                THEM TO MY HAND.
              </p>
            </>
          )}
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
});

export default Tooltip;
