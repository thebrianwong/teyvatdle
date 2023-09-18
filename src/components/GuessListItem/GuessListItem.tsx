import { memo } from "react";
import GuessListItemProps from "./type";

const GuessListItem = memo(({ itemData, answer }: GuessListItemProps) => {
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
    <li className={`${chooseAppropriateClassName()}`}>
      <img
        src={chooseAppropriateImageURL()}
        alt={`${chooseAppropriateAltText()}`}
      />
      <p>{itemData.character_name}</p>
    </li>
  );
});

export default GuessListItem;
