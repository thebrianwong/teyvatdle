import paimonImage from "../../assets/title/paimonThinking.png";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import PageHeaderProps from "./type";
import "./styles.scss";
import AnimatedValue from "../AnimatedValue/AnimatedValue";

const PageHeader = ({ title, dataLoaded, solvedValue }: PageHeaderProps) => {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

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
          <LoadingSkeleton quantity={1} width={"50%"} hasContainer={false} />
        )}
      </div>
    </header>
  );
};

export default PageHeader;
