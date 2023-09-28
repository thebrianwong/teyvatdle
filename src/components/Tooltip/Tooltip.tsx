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
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        maxWidth: "290px",
      }}
    >
      {isDisplaying && (
        <div className="arrow-box" ref={boxRef}>
          <p>
            <span style={{ color: "#e03c31" }}>Red</span>: Both answers are
            wrong.
          </p>
          {type === "character" && (
            <p style={{ marginLeft: "16px" }}>
              Birthday: Month and day are wrong.
            </p>
          )}
          <p>
            <span style={{ color: "#fdee00" }}>Yellow</span>: One answer is
            correct.
          </p>
          {type === "character" && (
            <p style={{ marginLeft: "16px" }}>
              Birthday: Either month or day are correct.
            </p>
          )}
          <p>
            <span style={{ color: "#00a86b" }}>Green</span>: Both answers are
            correct.
          </p>
        </div>
      )}
      <button
        className="tooltip-button"
        style={{
          borderRadius: "30px",
          position: "relative",
          border: "4px solid darkgray",
          right: "19.5px",
          alignSelf: "end",
          width: "50px",
          height: "50px",
        }}
        onClick={() => setIsDisplaying(!isDisplaying)}
        ref={buttonRef}
      >
        ?
      </button>
    </div>
  );
};

export default Tooltip;
