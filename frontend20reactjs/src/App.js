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

/*
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
*/

//Simulando um relogio
import React, { useState, useEffect } from "react";

export default function App(){
  const[hora,setHora] = useState(0);
  const[minuto,setMinuto] = useState(0);
  const[segundo, setSegundo] = useState(0);

  //function callAlert(){}

  useEffect(() => {
    const interval = setInterval(() => {

      setSegundo(segundo+1);
      if(segundo == 59){
        setSegundo(0);
      
        if(minuto == 59){
          setMinuto(0);
          setHora((hora+1) % 24);
        
        }
        else{
          setMinuto(minuto + 1);
        }
         
      }
      else{
        setSegundo(segundo + 1);
      }
    }, 1000);
    return() => clearInterval(interval);

  });

  return(
    <div>
      <h2 style={{textAlign:'center'}}>{hora}:{minuto}:{segundo}</h2>
    </div>
  );
  
}