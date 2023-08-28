import { forwardRef } from "react";
import SelectOptionsProps from "./type";

const SelectOptions = forwardRef<HTMLUListElement, SelectOptionsProps>(
  ({ dataList, filterValue, guesses, handleGuess }, ref) => {
    const filteredData = () => {
      const dataFilteredByGuesses = dataList.filter((item) => {
        return !guesses.includes(item.character_name);
      });
      if (filterValue.trim() === "") {
        return dataFilteredByGuesses;
      } else {
        const dataFilteredBySearch = dataFilteredByGuesses.filter((item) => {
          return item.character_name
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
        }}
        ref={ref}
      >
        {filteredData().map((item) => {
          return (
            <li
              key={item.character_name}
              style={{ display: "flex", maxHeight: "100px" }}
              onClick={() => handleGuess(item.character_name)}
            >
              <img
                src={item.character_image_url}
                alt=""
                style={{ height: "100px", width: "auto" }}
              />
              <p>{item.character_name}</p>
            </li>
          );
        })}
      </ul>
    );
  }
);

export default SelectOptions;
