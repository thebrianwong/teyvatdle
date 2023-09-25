import paimonImage from "../../assets/title/paimonThinking.png";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import PageHeaderProps from "./type";

const PageHeader = ({ title, dataLoaded, solvedValue }: PageHeaderProps) => {
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <header>
      <img
        src={paimonImage}
        alt="A thinking Paimon sticker from a Genshin Impact web event on the Chinese servers."
      />
      <div>
        <h1>Which {capitalizedTitle} is Paimon Thinking of...?</h1>
        {dataLoaded ? (
          solvedValue === 1 ? (
            <p>{"1 Traveler has guessed Paimon's weapon today!"}</p>
          ) : (
            <p>{`${solvedValue} Travelers have guessed Paimon's weapon today!`}</p>
          )
        ) : (
          <LoadingSkeleton quantity={1} width={"50%"} hasContainer={false} />
        )}
      </div>
    </header>
  );
};

export default PageHeader;
