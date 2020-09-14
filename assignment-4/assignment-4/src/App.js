import React, { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Keypad from './components/Keypad';



function App() {

  let [result, setResult] = useState('');

  const onClick = button => {
    
    if(button === "clear"){
        backSpace(); 
    }
    else if (button === "=" ){

        calculate();
    }
    else{
  
        setResult(
            result + button
        )
    }
} 

const calculate = () => {
    try {
        setResult(
            eval((result) || "") + ""
        )
    }
    catch (e){
        setResult(() => e)
    }
}

const backSpace = () => {
    setResult(
        result.slice(0, -1)
    )
}



  return (
    <div className="App">
      <h1>Simple Calculator App</h1>
      <Result 
        userResult={result}/>
      <Keypad 
        onClick= {onClick}/>
    </div>
  );
}

export default App;