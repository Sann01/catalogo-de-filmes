const pesquisar = document.querySelector ("#barra-pesquisa");
pesquisar.addEventListener("keypress", function (e){
    if(e.key=="Enter"){
        e.preventDefault();
        const conteudo = e.target.value;
        const apiKey = "768c9c1";
        fetch(`http://www.omdbapi.com/?s=${conteudo}&apikey=${apiKey}`).then(response =>{
            return response.json();
        }).then(corpo => vemApi(corpo));
    }
})
    const vemApi = (corpo) => {
        const nome = corpo.Search;
        console.log(nome);
        const test = corpo.Response;
        if(test=="False"){
            alert("Este filme não existe");
        }
    }
    const listaMov = (json) => {
        const lista = document.querySelector("menu");
        lista.innerHTML = "";

        json.Search.forEach(Elemento=>{
            console.log(Elemento);

            let item = createElement("div");
            item.classList.add("contorno-capa");
            item.innerHTML = `<img src="${Elemento.Poster }"/><h1>${Elemento.Title}<h1/>`
            lista.appendChild(item);
            console.log("item")
            })
        }