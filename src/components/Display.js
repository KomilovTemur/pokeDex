import axios from "axios";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavaBar";
import Logo from "./MainLogo.png";
const Display = () => {
  const params = useParams();
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
        let stat = res.data.stats[0].stat.name;
        let base_stat1 = res.data.stats[1].base_stat;
        let stat1 = res.data.stats[1].stat.name;
        let fetched = {
          abilities: abilities,
          image: image,
          name: name,
          base_stat: base_stat,
          stat: stat,
          base_stat1: base_stat1,
          stat1: stat1,
        };
        setPokeData(fetched);
      });
  }
  const handleLoad = () => {
    if (params.name == "") {
      setPokemonName();
    } else {
      setPokemonName(params.name);
    }
  };
  return (
    <div>
      <NavBar />
      <SearchBar setPokemonName={setPokemonName} />
      <div className="container d-flex justify-content-center mt-5">
        {pokeData == "" ? (
          <div className="d-flex align-items-center flex-column">
            <img src={Logo} onLoad={handleLoad} />
            <h2 className="text-center">Search Pokemon</h2>
            <h4>
              or <Link to="/">You can see pokemons list</Link>
            </h4>
          </div>
        ) : (
          <div className="card w-75 d-flex p-2 mb-3">
            <div className="card-header d-flex align-items-center justify-content-center ">
              <div className="bg-dark rounded-circle">
                <img src={pokeData.image} />
              </div>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-sm-12">
                  <h2>Name: {pokeData.name}</h2>
                  <h2>Ability: {pokeData.abilities}</h2>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row text-center">
                <h1>Specs</h1>
                <div className="col-md-6 col-sm-12">
                  <h2>
                    {pokeData.stat}:
                    <p className="d-inline text-success">
                      {pokeData.base_stat}
                    </p>
                  </h2>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h2>
                    {pokeData.stat1}:
                    <p className="d-inline text-success">
                      {pokeData.base_stat1}
                    </p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
        <Link className="backToHome bg-dark" to="/">
          <i class="fa-solid fa-house"></i>
        </Link>
    </div>
  );
};

export default Display;
