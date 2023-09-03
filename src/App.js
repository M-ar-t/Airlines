import "./App.css";
import Cards from "./components/Cards/Cards";
import FilterComponent from "./components/FilterComponent/FilterComponent";
import { selectAllFlights, selectProcessFlights } from "./store/reducer";
import { useSelector } from "react-redux";

function App() {
  const processFlights = useSelector(selectProcessFlights);
  const allFlights = useSelector(selectAllFlights);

  return (
    <div className="wrapper">
      <div className="main">
        <FilterComponent data={allFlights} />
        <Cards data={processFlights} />
      </div>
    </div>
  );
}

export default App;
