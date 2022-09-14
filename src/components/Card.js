import React from "react";
import { Link } from "react-router-dom";
const Card = ({ pokemon, loading }) => {
  const allIsCentered = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const allIsBetween = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item, index) => (
          <div className="col-md-6">
            <Link
              to={"/pokemon/" + item.name}
              className="text-decoration-none text-dark"
            >
              <div className="card my-2" key={index}>
                <div className="card-header" style={allIsBetween}>
                  <h2 className="m-0">{item.name}</h2>
                  <h2 className="m-0">{item.id}</h2>
                </div>
                <div className="card-body" style={allIsCentered}>
                  <img
                    src={item.sprites.other.dream_world.front_default}
                    alt=""
                  />
                </div>
                <div className="card-footer" style={allIsCentered}>
                  {item.types.map((type) => (
                    <p className="mx-2 d-inline bg-success text-light mb-0 p-1 px-5 rounded-pill">
                      {type.type.name}
                    </p>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </>
  );
};
export default Card;
