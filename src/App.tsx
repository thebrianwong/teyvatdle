import GuessTableRow from "./components/GuessTableRow/GuessTableRow";

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <GuessTableRow rowType="character" />
        </tbody>
      </table>
    </div>
  );
}

export default App;
