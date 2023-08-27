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

function App() {
  return (
    <div className="App">
      <GuessTable tableType="food" />
    </div>
  );
}

export default App;
