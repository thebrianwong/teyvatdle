import { forwardRef } from "react";
import SelectOptionsProps from "./type";
import emptyListImage from "../../assets/misc/bongoHead.png";
import "./styles.scss";

const SelectOptions = forwardRef<HTMLUListElement, SelectOptionsProps>(
  ({ dataList, dataType, filterValue, guesses, handleGuess }, ref) => {
    const guessesNames = guesses.map((guess) => {
      return guess[`${dataType}_name` as keyof typeof guess].toString();
    });

    const filteredData = () => {
      const dataFilteredByGuesses = dataList.filter((item) => {
        return !guessesNames.includes(
          item[`${dataType}_name` as keyof typeof item].toString()
        );
      });
      if (filterValue.trim() === "") {
        return dataFilteredByGuesses;
      } else {
        const dataFilteredBySearch = dataFilteredByGuesses.filter((item) => {
          return item[`${dataType}_name` as keyof typeof item]
            .toString()
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
                key={item[`${dataType}_name` as keyof typeof item].toString()}
                onClick={() => handleGuess(item)}
              >
                <div className="select-options-image-container">
                  <img
                    loading="lazy"
                    src={item[
                      `${dataType}_image_url` as keyof typeof item
                    ].toString()}
                    alt=""
                  />
                </div>
                <p>
                  {item[`${dataType}_name` as keyof typeof item].toString()}
                </p>
              </li>
            );
          })
        ) : (
          <li>
            <img src={emptyListImage} alt="" />
            <p className="empty-result">Paimon doesn't remember that one...</p>
          </li>
        )}
      </ul>
    );
  }
);

export default SelectOptions;
