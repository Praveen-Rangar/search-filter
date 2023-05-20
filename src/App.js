import "./App.css";
import data from "./MOCK_DATA.json";

function App() {
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search"
        name="fruit"
        list="fruits"
        autocomplete="off"
      />

      <div>
        {data.map((ob) => (
          <div>
            {ob.first_name}
            {ob.last_name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
