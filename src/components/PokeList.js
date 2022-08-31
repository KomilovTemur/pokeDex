import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavaBar";

const PokeList = () => {
  const [pokemons] = useState([]);
  const [offset, setOffset] = useState(1);
  const getPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((data) => data.json())
      .then((data) => {
        pokemons.push(data);
      });
  };
  const getPokemons = (limit = 10, offset = 1) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((data) => data.json())
      .then((data) => {
        for (let i = offset; i < limit + 1; i++) {
          getPokemon(i);
        }
      });
  };
  setTimeout(() => {
    setOffset(50);
  }, 500);
  getPokemons(52, offset);
  if (pokemons) {
    console.log("ok");
  } else {
    console.log("Nok");
  }
  return (
    <div>
      <NavBar />
      <div className="container">
        <h2 className="text-center mt-4">Pokedex</h2>
        <div className="row">
          {pokemons ? (
            <>
              {pokemons.map((pokeData, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <Link
                    to={"/pokemon/" + pokeData.name}
                    className="text-decoration-none text-dark"
                  >
                    <div className="card p-3 mt-5 mb-2">
                      <div className="image">
                        <img
                          src={pokeData.sprites.other.dream_world.front_default}
                          alt={pokeData.name}
                        />
                      </div>
                      <div className="data">
                        <p className="m-0"># {pokeData.id}</p>
                        <p className="m-0 fw-bold mb-2">{pokeData.name}</p>
                        <div className="d-flex justify-content-center types">
                          {pokeData.types.map((typeName) => (
                            <p className="w-50 m-0 mx-1 p-1 bg-success text-center text-light rounded-pill fs-5">
                              {typeName.type.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    </div>
  );
};
export default PokeList;
