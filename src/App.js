import logo from './logo.svg';
import domek from './domek.png'
import React, {useState} from "react";
import './App.css';

function App() {
const [likes, setLikes]=useState(0);
const[zapisz, setZapisz]=useState(false);
const handleLike=() => {setLikes(prev=> prev +1);
  alert("polubiono");
};
const handleUnlike = () =>{
  setLikes(prev =>(prev >0 ? prev -1 : 0));
  alert("usunieto polubienie");
};
const handleZapisz = () => {
  setZapisz(true);
  alert("zapisano");
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={domek}  alt="domek w gorach"/>
        <div className="przyciski">
          <button onClick={handleLike}> polub</button>
          <button onClick={handleUnlike}> usun</button>
          <button onClick={handleZapisz}> zapisz</button>
        </div>


        <p>
          {likes} polubień
          opis
          Odwiedz komfortowy domek w Sudetach, blisko do szlakow turystycznych
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
