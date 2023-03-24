let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-pesquisa");
btnBuscarFilme.onclick= () => {

    if(inputBuscarFilme.value.length > 0) { 
        let filmes = new Array();
            fetch("https://www.omdbapi.com/?i=tt3896198&apikey=768c9c1&s="+inputBuscarFilme.value, {mode:"cors"})
            .then((resp) => resp.json())
            .then((resp)=>{ 
                console.log(resp)
             resp.Search.forEach ((item)=>{
            console.log(item); 
            let filme=new Filme(
                item.imdbID,
                item.Title,
                item.Year,
                null, 
                null,
                null, 
                item.Poster,
                null,
                null,
                null,
                null
            );
            filmes.push(filme);
        });
        listarFilmes(filmes);
        })
    }
        return false;
    } 
    let listaFilmes = document.querySelector("#lista-filmes")
    
    let listarFilmes = async (filmes) => { 
    let listaFilmes = await document.querySelector("#lista-filmes"); 
    listaFilmes.innerHTML = "";
    

    let detalhe = await document.querySelector("#lista-filmes"); 
    detalhe.innerHTML = "";

   //console.log(listaFilmes);

    if (filmes.length > 0) {
        filmes.forEach(async (filme) => { 
         listaFilmes.appendChild (await filme.getCard());
                filme.getBtnDetalhes().onclick = () =>  {
                    detalhesFilme(filme.id);
                }
            });
        }
    }
    let detalhesFilme = async (id) => {
        fetch("https://www.omdbapi.com/?&apikey=768c9c1&i="+id)
        .then((resp) => resp.json())
        .then((resp) => {
            console.log(resp);
            let filme=new Filme(
                resp.imdbID,
                resp.Title,
                resp.Year,
                resp.Genre.split(","),
                resp.Runtime,
                resp.Plot,
                resp.Poster,
                resp.Director,
                resp.Actors.split(","),
                resp.Awards,
                resp.imdbRating
            )
            let listaFilmes = document.querySelector("#lista-filmes"); 
    listaFilmes.innerHTML = "";
    let detalhe = document.querySelector("#mostrar-filme"); 
    detalhe.innerHTML = "";
    detalhe.appendChild(filme.getDetalhes());
            console.log(filme);
            
     })
     
     
}