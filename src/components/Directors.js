import React from "react";
import { directors } from "../data";

function Directors() {

const items = directors.map(direct=>(
  <div key={direct.name}>
    <h2>Name: {direct.name}</h2>
    <p>Movies</p>
    <ul>
      {direct.movies.map(movie=><li key={movie}>{movie}</li>)}
    </ul>
  </div>
))

  return (
  <div>
    <h1>Directors Page</h1>
    {items}
  </div>);
}

export default Directors;
