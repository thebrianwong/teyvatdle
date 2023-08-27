import dummy from "./placeholder.json";
import dummyQiqi from "./nonTravPlaceholder.json";
import dummyWeapon from "./weaponPlaceholder.json";
import dummyFood from "./foodPlaceholder.json";
import dummyTwoStarWeapon from "./twoStarWeapon.json";
import GuessTableRow from "./components/GuessTableRow/GuessTableRow";
import CharacterAPIData from "./types/data/characterAPIData.type";
import WeaponAPIData from "./types/data/weaponAPIData.type";
import FoodAPIData from "./types/data/foodAPIData.type";
import GuessTable from "./components/GuessTable/GuessTable";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import allCharData from "./allChars.json";
import TableAPIData from "./types/data/tableAPIData.type";

function App() {
  const sortedTestData = allCharData.sort((a, b) => {
    if (a.character_name < b.character_name) {
      return -1;
    } else if (a.character_name > b.character_name) {
      return 1;
    } else {
      return 0;
    }
  });
  return (
    <div className="App">
      {/* <GuessTable tableType="character" /> */}
      <SelectMenu
        selectType="character"
        data={sortedTestData as CharacterAPIData[]}
      />
    </div>
  );
}

export default App;
