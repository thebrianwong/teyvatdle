import GuessListItemProps from "./type";

const GuessListItem = ({ itemData, answer }: GuessListItemProps) => {
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

  return (
    <li className={`${chooseAppropriateClassName()}`}>
      <img src={chooseAppropriateImageURL()} alt="" />
      <p>{itemData.character_name}</p>
    </li>
  );
};

export default GuessListItem;
