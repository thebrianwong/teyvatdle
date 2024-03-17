import paimonImage from "../../assets/title/paimonThinking.png";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import PageHeaderProps from "./type";
import "./styles.scss";
import AnimatedValue from "../AnimatedValue/AnimatedValue";
import { KeyboardEvent, memo, useRef } from "react";

const PageHeader = memo(
  ({ title, dataLoaded, solvedValue }: PageHeaderProps) => {
    const paimonRef = useRef<HTMLImageElement>(null);

    return (
      <header>
        <img
          src={paimonImage}
          alt="A thinking Paimon sticker from a Genshin Impact web event on the Chinese servers."
          className="header-paimon"
          ref={paimonRef}
          onClick={() => {
            if (paimonRef.current) {
              paimonRef.current.classList.add("paimon-animation");
            }
          }}
          onKeyDown={(e: KeyboardEvent) => {
            if ((e.key === " " || e.key === "Enter") && paimonRef.current) {
              paimonRef.current.classList.add("paimon-animation");
            }
          }}
          onAnimationEnd={() => {
            if (paimonRef.current) {
              paimonRef.current.classList.remove("paimon-animation");
            }
          }}
        />
        <div className="header-content-container">
          <h1>Which {title} is Paimon Thinking of...?</h1>
          {dataLoaded ? (
            solvedValue === 1 ? (
              <p>
                <AnimatedValue value={solvedValue} direction="up" />
                {` Traveler has guessed Paimon's ${title} today!`}
              </p>
            ) : (
              <p>
                <AnimatedValue value={solvedValue} direction="up" />
                {`
              Travelers have guessed Paimon's ${title} today!`}
              </p>
            )
          ) : (
            <LoadingSkeleton
              quantity={1}
              width={"50%"}
              alignment="right"
              hasContainer={false}
            />
          )}
        </div>
      </header>
    );
  }
);

export default PageHeader;
