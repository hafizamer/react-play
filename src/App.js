import { useState, useEffect } from 'react';
import Propgo from "./Propgo";
import Data from "./Data";
import Struct from "./struct";
import Struct2 from "./Struct2";
import './App.css';

const App = () => {
  const namae = "John";

  const check = 7;

  const drama =  {
    "Title": "Hello World",
    "Year": "2025"
    
  }
  
    const drama2 =  {
    "Title": "Bye World",
    "Year": "2026"
    
}

  const Kamen = (kamen) => {
    return (
      <>
      <p>Rider Name: {kamen.name}</p>
      <p>Hobby:{kamen.hobby}</p>
      </>
    )
  }

  const add = () => {
    setCount(count+1)
  }

    const minus = () => {
    setCount(count-1)
    }
  
  const look = () => {
    const mini = 1;
    setDramas(mini);
  }

  const [count, setCount] = useState(0);
  const [dramas, setDramas] = useState("");
  useEffect(() => {
    look();
})
  
  return (
    <div className="App">
      {check < 5 ? namae : "wrong"}
      <h1>Hello</h1>
      <Kamen
      name={'Kuuga'} hobby={'chilling'}
      />
      <Kamen
      name={'Agito'} hobby={'reading'}
      />

      <button onClick={minus}>-</button>
      <h1>{count}</h1>
      <button onClick={add}>+</button>

      <Propgo name={'JK'} age={25} />
      <Propgo name={'Fujiko'} age={44} />

      <Data name={'Hisui'} age={17} height={170} />
      <Data name={'Yu'} age={18} height={180} />
      
      <Struct Title={drama.Title} Year={drama.Year} />
      <h6>{drama.Year}</h6>
      {dramas.title>0?(
        <Struct2 drama={drama2} />) : "nope"
        
      }

      


    </div>
  );
}

export default App;
