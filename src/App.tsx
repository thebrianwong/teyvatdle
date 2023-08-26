import dummy from "./placeholder.json";
import dummyQiqi from "./nonTravPlaceholder.json";
import dummyWeapon from "./weaponPlaceholder.json";
import dummyFood from "./foodPlaceholder.json";
import GuessTableRow from "./components/GuessTableRow/GuessTableRow";
import CharacterAPIData from "./types/data/characterAPIData.type";
import WeaponAPIData from "./types/data/weaponAPIData.type";
import FoodAPIData from "./types/data/foodAPIData.type";

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <GuessTableRow
            rowType="character"
            rowDataProp={dummyQiqi as CharacterAPIData}
          />
          <GuessTableRow
            rowType="character"
            rowDataProp={dummy as CharacterAPIData}
          />
          <GuessTableRow
            rowType="weapon"
            rowDataProp={dummyWeapon as WeaponAPIData}
          />
          <GuessTableRow
            rowType="food"
            rowDataProp={dummyFood as FoodAPIData}
          />
        </tbody>
      </table>
    </div>
  );
}

export default App;
