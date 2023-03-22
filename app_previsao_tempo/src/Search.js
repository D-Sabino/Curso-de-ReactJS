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
    function searchInput(){
        let currentValue = document.querySelector('input[name=searchInput').value;
        /* Fazer requisição API */
    }   

    return(
        <div className="search">
            <h2>Digite a cidade que você quer saber a previsão.</h2>
            <input placeholder="Digite a cidade" onKeyUp={searchInput} type="text" name="searchInput" />
        </div>
    )
}

export default Search;