import { memo, useEffect, useRef } from "react";
import GuessListItemProps from "./type";
import "./styles.scss";

const GuessListItem = memo(({ itemData, answer }: GuessListItemProps) => {
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setTimeout(() => {
      itemRef.current?.classList.add("guess-animation-end");
    }, 0);
  }, []);

  const chooseAppropriateClassName = () => {
    if (itemData.character_name === answer.character_name) {
      return "correct";
    } else {
      return "wrong";
    }
  };

  const chooseAppropriateImageURL = () => {
    if (itemData.character_name === answer.character_name) {
      return itemData.character_correct_image_url;
    } else {
      return itemData.character_wrong_image_url;
    }
  };

  const chooseAppropriateAltText = () => {
    if (itemData.character_name === answer.character_name) {
      return "One of Paimon's Paintings indicating the correct answer.";
    } else {
      return "One of Paimon's Paintings indicating a wrong answer.";
    }
  };

  return (
    <li
      ref={itemRef}
      className={`${chooseAppropriateClassName()} guess-list-item guess-list-item-${chooseAppropriateClassName()} guess-animation-start`}
    >
      <div className="guess-list-image-container">
        <img
          src={chooseAppropriateImageURL()}
          alt={chooseAppropriateAltText()}
        />
      </div>
      <p>{itemData.character_name}</p>
    </li>
  );
});

export default GuessListItem;
