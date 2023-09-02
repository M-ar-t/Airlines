import "./App.css";
import Cards from "./components/Cards/Cards";
import FilterComponent from "./components/FilterComponent/FilterComponent";
import { selectAllFlights, selectProcessFlights } from "./store/reducer";
import { useSelector } from "react-redux";

function App() {
  const processFlights = useSelector(selectProcessFlights);
  const allFlights = useSelector(selectAllFlights);
  // console.log("new flights = ", flights);

  return (
    <div className="main">
      <FilterComponent data ={allFlights}/>
      <Cards data={processFlights} />
    </div>
  );
}

export default App;
