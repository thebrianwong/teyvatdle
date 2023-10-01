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
      <ul
        className="select-options-container"
        style={{
          maxHeight: "425px",
          width: "clamp(190px, 30vw, 350px)",
          padding: "0",
          margin: "0",
          overflowY: "auto",
          listStyle: "none",
          position: "absolute",
          backgroundColor: "white",
          border: "solid 1px darkgray",
          zIndex: 2,
        }}
        ref={ref}
      >
        {filteredData().length > 0 ? (
          filteredData().map((item) => {
            return (
              <li
                key={item[`${dataType}_name` as keyof typeof item].toString()}
                style={{
                  display: "flex",
                  maxHeight: "100px",
                  alignItems: "center",
                  padding: "5px",
                }}
                onClick={() => handleGuess(item)}
              >
                <img
                  loading="lazy"
                  src={item[
                    `${dataType}_image_url` as keyof typeof item
                  ].toString()}
                  alt=""
                  style={{ height: "75px", width: "auto" }}
                />
                <p
                  style={{
                    flex: "1",
                    textAlign: "center",
                    fontSize: "large",
                    wordBreak: "break-word",
                    margin: "0",
                  }}
                >
                  {item[`${dataType}_name` as keyof typeof item].toString()}
                </p>
              </li>
            );
          })
        ) : (
          <li
            style={{
              display: "flex",
              maxHeight: "100px",
              alignItems: "center",
              padding: "5px",
            }}
          >
            <img
              src={emptyListImage}
              alt=""
              style={{ height: "75px", width: "auto" }}
            />
            <p
              style={{
                flex: "1",
                textAlign: "center",
                fontSize: "smaller",
                wordBreak: "break-word",
                margin: "0",
              }}
            >
              Paimon doesn't remember that one...
            </p>
          </li>
        )}
      </ul>
    );
  }
);

export default SelectOptions;
