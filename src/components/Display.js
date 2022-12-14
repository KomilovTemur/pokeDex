
import axios from "axios";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Logo from "./MainLogo.png";
const Display = () => {
  const params = useParams();
  const [pokemonName, setPokemonName] = useState("");
  const [pokeData, setPokeData] = useState([]);
  if (pokemonName) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokeData(res.data);
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
            <img src={Logo} onLoad={handleLoad} alt=" " />
            <h2 className="text-center">Search Pokemon</h2>
            <h4>
              or <Link to="/">You can see pokemons list</Link>
            </h4>
          </div>
        ) : (
          <div className="card w-75 d-flex p-2 mb-3">
            <div className="card-header d-flex align-items-center justify-content-center ">
              <div className="bg-dark rounded-circle">
                <img
                  src={pokeData.sprites.other.dream_world.front_default}
                  alt=""
                />
              </div>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-sm-12">
                  <h2>Name: {pokeData.name}</h2>
                  <h2>
                    Abilities:
                    {pokeData.abilities.map((ability) => (
                      <i className="text-decoration-underline">
                        {" "}
                        {ability.ability.name}{" "}
                      </i>
                    ))}
                  </h2>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row text-center">
                <h1>Specs</h1>
                {pokeData.stats.map((stat) => (
                  <div className="col-md-6 col-sm-12">
                    <h2>
                      {stat.stat.name}:{" "}
                      <p className="d-inline text-success">{stat.base_stat}</p>
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Link className="backToHome bg-dark" to="/">
        <i className="fa-solid fa-house"></i>
      </Link>
    </div>
  );
};

export default Display;
