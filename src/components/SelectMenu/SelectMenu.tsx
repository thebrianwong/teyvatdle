import { useEffect, useRef, useState } from "react";
import SelectMenuProps from "./type";
import SelectSearchBar from "../SelectSearchBar/SelectSearchBar";
import SelectOptions from "../SelectOptions/SelectOptions";

const SelectMenu = ({ selectType, data }: SelectMenuProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const [showResults, setShowResults] = useState<boolean>(false);

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

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showResults]);

  return (
    <search is="search">
      <label>Guess a {selectType}!</label>
      <SelectSearchBar
        handleClick={() => setShowResults(true)}
        ref={inputRef}
      />
      {showResults && <SelectOptions dataList={data} ref={menuRef} />}
    </search>
  );
};

export default SelectMenu;
