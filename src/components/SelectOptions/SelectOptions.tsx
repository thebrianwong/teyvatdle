import { forwardRef } from "react";
import SelectOptionsProps from "./type";
import emptyListImage from "../../assets/misc/bongoHead.png";

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
      <ul
        style={{
          maxHeight: "500px",
          overflowY: "auto",
          listStyle: "none",
          position: "absolute",
          backgroundColor: "white",
          border: "solid 1px darkgray",
          zIndex: 1,
        }}
        ref={ref}
      >
        {filteredData().length > 0 ? (
          filteredData().map((item) => {
            return (
              <li
                key={item[`${dataType}_name` as keyof typeof item].toString()}
                style={{ display: "flex", maxHeight: "100px" }}
                onClick={() => handleGuess(item)}
              >
                <img
                  loading="lazy"
                  src={item[
                    `${dataType}_image_url` as keyof typeof item
                  ].toString()}
                  alt=""
                  style={{ height: "100px", width: "auto" }}
                />
                <p>
                  {item[`${dataType}_name` as keyof typeof item].toString()}
                </p>
              </li>
            );
          })
        ) : (
          <li style={{ display: "flex", maxHeight: "100px" }}>
            <img
              src={emptyListImage}
              alt=""
              style={{ height: "100px", width: "auto" }}
            />
            <p>Paimon doesn't remember that one...</p>
          </li>
        )}
      </ul>
    );
  }
);

export default SelectOptions;
