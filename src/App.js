import logo from "./logo.svg";
import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "34ac07d6c6msha04ac9dce72ed55p17b068jsn47163612c7b8",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <NavBar></NavBar>
        <div class="grid grid-cols-4 gap-8 container mx-auto">
          {users.map((game) => (
            <CardComponent value={game}></CardComponent>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
