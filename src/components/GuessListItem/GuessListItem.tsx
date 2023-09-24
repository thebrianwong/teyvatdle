import { memo } from "react";
import GuessListItemProps from "./type";
import "./styles.scss";

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
    <li
      className={`${chooseAppropriateClassName()} guess-list-item guess-list-item-${chooseAppropriateClassName()}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px",
        maxWidth: "500px",
        margin: "16px auto",
      }}
    >
      <img
        src={chooseAppropriateImageURL()}
        alt={`${chooseAppropriateAltText()}`}
      />
      <p style={{ fontSize: "x-large", margin: "0" }}>
        {itemData.character_name}
      </p>
    </li>
  );
});

export default GuessListItem;
