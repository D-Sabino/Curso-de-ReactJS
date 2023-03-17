import React, { useState } from "react";

function App(){
  //Declare uma nova variavel de state, a qual chamaremos de "count"
  //const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Joao");
  const [numeros, setNumeros] = useState([1,2,3,4,5])
  const [obj, setObj] = useState({nome: 'Daniel', idade: 24});

  return(
    <div>
      {
        numeros.map(function(val){
          return(<p>{val}</p>)
        })
      }
      <button onClick={() => setNome("Daniel")}>
        Click me
      </button>
    </div>
  );
}

export default App;