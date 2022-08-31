import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const PokeList = () => {
  const [pokemons] = useState([]);
  const [offset, setOffset] = useState(1)
  const getPokemons = async (limit = 10, offset = 1) => {
    try {
      for (let i = offset; i < limit; i++) {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((res) => pokemons.push(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  ;
  console.log(offset);
  console.log(pokemons);
  return (
    <div className="container">
      <button
        onClick={() => getPokemons(10, setOffset(offset + 10))}
        className="btn btn-dark m-2"
      >
        Next
      </button>
      <Link to="/pokemon">Back to home</Link>
      <h2>Pokedex</h2>
      <div className="row">
        {pokemons.map((pokeData, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <Link to="/pokemon" className="text-decoration-none text-dark">
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
      </div>
    </div>
  );
};
export default PokeList;
