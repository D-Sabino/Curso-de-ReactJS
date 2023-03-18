/*

//Hooks de estado
import React, { useStatez } from "react";

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
*/

/*
//Hooks de efeito
import React, { useState, useEffect } from "react";

export default function App(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`; //Atualiza o titulo da pagina
  });

  return(
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
*/

import React, { useState, useEffect } from "react";

export default function App(){
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Daniel");
  

  function callAlert(){}

  useEffect(() => {
    callAlert();
  },[]);

  //Renderização condicional
  return(
    <div>
      {
        (nome == "Daniel")?
          <div>
            <p>{nome}</p>
          </div>:
          <div>
            <p>É preciso o nome de Daniel</p>
          </div>
      }
    </div>
  );
  
}