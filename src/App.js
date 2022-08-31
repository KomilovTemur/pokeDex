import Display from "./components/Display";
import PokeList from "./components/PokeList";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokeList />} />
      <Route path="/Pokemon" element={<Display />} />
    </Routes>
  );
}

export default App;
