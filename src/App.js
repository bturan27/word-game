import Word from './components/Word';
import './App.css';
import {useDebugValue, useState} from 'react';


function App() {
  const [guesses, setGuesses] = useState([
    // "coast",
    // "singe",
    // "spine",
    // "shine"
  ]);
  
  const [input, setInput] = useState("");
  const [answer,setAnswer] = useState("shine");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setGuesses([...guesses,input]);
  }


  return (
    <div className="App">
      <h1>wordle clone!</h1>
      <form className='w-25 d-block mx-auto my-3' onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <input type="text" className='form-control'placeholder='whats your guess??' onChange={(event)=>{
            setInput(event.target.value)
          }}/>
        </div>
          <input type="submit" className='btn btn-success m-1'/>
      </form>

      {
        guesses.map((item,i) => {
          return <Word key={i} answer={answer} guess={item}/>
          })
          //whatever gets returned for the map is an array dont forget
        }

      {/* <ul> 
        { buradakini ustekiyle degistirdik components olusturduktan sonra
        guesses.map((item,i) => {
          return <li key={i}>{i}.{item}</li>
          })
        }
      </ul> */}
    </div>
  );
}
export default App;
