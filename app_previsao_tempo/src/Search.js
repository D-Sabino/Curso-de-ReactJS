/*
//Inicialização padrão (Exemplo)
function Search() {
    return(
        <div></div>
    )
}

export default Search;
*/

function Search() {
    function searchInput(e){
        e.preventDefault();
        let currentValue = document.querySelector('input[name=searchInput').value;
        
        /* Requisição API */
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
        fetch(url).then(response => response.json()).then(data=>{
            const {main, name, sys, weather} = data;
            
        })
    }   

    return(
        <div className="search">
            <h2>Digite a cidade que você quer saber a previsão.</h2>

            <form onSubmit={(e)=>searchInput(e)}>
                <input placeholder="Digite a cidade" type="text" name="searchInput" />
                <input type="submit" value="Pesquisar" />
            </form>
        </div>
    )
}

export default Search;