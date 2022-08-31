import { useState } from "react";
const SearchBar = ({ setPokemonName }) => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!(data == "")) {
      setError("");
      setPokemonName(data);
    } else {
      setError("Enter a pokemon name");
    }
  };
  return (
    <div className="container mt-5">
      {error == "" ? "" : <div className="alert alert-danger">{error}</div>}
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          className="form-control"
          onChange={(e) => setData(e.target.value)}
          name="pokemonName"
          placeholder="Search pokemon"
        />
        <button className="btn btn-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
