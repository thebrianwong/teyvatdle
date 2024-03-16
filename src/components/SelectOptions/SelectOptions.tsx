import { forwardRef } from "react";
import SelectOptionsProps from "./type";
import emptyListImage from "../../assets/misc/bongoHead.png";
import "./styles.scss";

const SelectOptions = forwardRef<HTMLUListElement, SelectOptionsProps>(
  ({ dataList, dataType, filterValue, guesses, handleGuess }, ref) => {
    const nameKey = `${dataType}Name`;
    const imageUrlKey = `${dataType}ImageUrl`;

    const guessesNames = guesses.map((guess) => {
      return guess[nameKey as keyof typeof guess]!.toString();
    });

    const filteredData = () => {
      const dataFilteredByGuesses = dataList.filter((item) => {
        return !guessesNames.includes(
          item[nameKey as keyof typeof item]!.toString()
        );
      });
      if (filterValue.trim() === "") {
        return dataFilteredByGuesses;
      } else {
        const dataFilteredBySearch = dataFilteredByGuesses.filter((item) => {
          return item[nameKey as keyof typeof item]!.toString()
            .toLowerCase()
            .includes(filterValue.trim().toLowerCase());
        });
        return dataFilteredBySearch;
      }
    };

    return (
      <ul className="select-options-container" ref={ref}>
        {filteredData().length > 0 ? (
          filteredData().map((item) => {
            return (
              <li
                key={item[nameKey as keyof typeof item]!.toString()}
                onClick={() => handleGuess(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleGuess(item);
                  }
                }}
                tabIndex={0}
              >
                <div className="select-options-image-container">
                  <img
                    loading="lazy"
                    src={item[imageUrlKey as keyof typeof item]!.toString()}
                    alt=""
                  />
                </div>
                <p>{item[nameKey as keyof typeof item]!.toString()}</p>
              </li>
            );
          })
        ) : (
          <li>
            <div className="select-options-image-container">
              <img src={emptyListImage} alt="" />
            </div>
            <p className="empty-result">Paimon doesn't remember that one...</p>
          </li>
        )}
      </ul>
    );
  }
);

export default SelectOptions;
