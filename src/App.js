import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";

function App() {
  const url =
    "https://api.rawg.io/api/games?key=aaee83edeb2d45729a0e63a5e57d628c";
  const [games, getGames] = useState([]);

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const games = response.data.results;
        getGames(games);
      })
  };

  return (
    <div>
      <NavBar></NavBar>
      <div class="grid grid-cols-4 gap-8 container mx-auto">
        {games.map((game) => (
          <CardComponent value={game}></CardComponent>
        ))}
      </div>
    </div>
  );
}

export default App;
