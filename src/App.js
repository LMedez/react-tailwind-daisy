import logo from "./logo.svg";
import "./App.css";
import CardComponent from "./components/CardComponent/CardComponent";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listItems = numbers.map((number) => (
    <CardComponent key={number}></CardComponent>
  ));
  return (
    <div>
      <NavBar></NavBar>
      <div class="grid grid-cols-4 gap-6">{listItems}</div>
    </div>
  );
}

export default App;
