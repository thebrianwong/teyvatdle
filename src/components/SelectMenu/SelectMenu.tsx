import { useEffect, useRef, useState } from "react";
import SelectMenuProps from "./type";
import SelectSearchBar from "../SelectSearchBar/SelectSearchBar";
import SelectOptions from "../SelectOptions/SelectOptions";
import TableAPIData from "../../types/data/tableAPIData.type";

const SelectMenu = ({
  selectType,
  data,
  guesses,
  gameCompleted,
  handleGuess,
}: SelectMenuProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const [showResults, setShowResults] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        showResults &&
        inputRef.current &&
        !inputRef.current.contains(e.target as HTMLElement) &&
        menuRef.current &&
        !menuRef.current.contains(e.target as HTMLElement)
      ) {
        setShowResults(false);
      }
    };
    const closeWithEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", closeWithEsc);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", closeWithEsc);
    };
  }, [showResults]);

  return (
    <search
      is="search"
      style={{
        width: "clamp(190px, 30vw, 350px)",
      }}
    >
      <SelectSearchBar
        value={searchValue}
        gameCompleted={gameCompleted}
        selectType={selectType}
        handleClick={() => setShowResults(true)}
        handleInput={(value) => setSearchValue(value)}
        ref={inputRef}
      />
      {showResults && (
        <SelectOptions
          dataList={data}
          dataType={selectType}
          filterValue={searchValue}
          guesses={guesses}
          handleGuess={(guess: TableAPIData) => {
            handleGuess(guess);
            setShowResults(false);
            setSearchValue("");
          }}
          ref={menuRef}
        />
      )}
    </search>
  );
};

export default SelectMenu;
