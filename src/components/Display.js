import axios from "axios";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Display = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokeData, setPokeData] = useState([]);
  if (pokemonName) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        let name = res.data.name;
        let image = res.data.sprites.other.dream_world.front_default;
        let abilities = res.data.abilities[0].ability.name;
        let base_stat = res.data.stats[0].base_stat;
        let stat = res.data.stats[1].stat.name;
        let fetched = {
          abilities: abilities,
          image: image,
          name: name,
          base_stat: base_stat,
          stat: stat,
        };
        setPokeData(fetched);
      });
  }
  return (
    <div>
      <SearchBar setPokemonName={setPokemonName} />
      <div className="container  d-flex justify-content-center mt-5">
        {pokeData == "" ? (
          <div>
            <h2 className="text-center">Search Pokemon</h2>
            <h4>
              or <Link to="/pokeList">You can see pokemons list</Link>
            </h4>
          </div>
        ) : (
          <div className="card w-75 d-flex p-2">
            <div className="card-header d-flex align-items-center justify-content-center ">
              <div className="bg-dark rounded-circle">
                <img src={pokeData.image} />
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <h2>Name: {pokeData.name}</h2>
                  <h2>Ability: {pokeData.abilities}</h2>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h2>Specs: {pokeData.stat}</h2>
                  <h2>Stat: {pokeData.base_stat}</h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Display;
