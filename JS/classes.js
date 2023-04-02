class Ator{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}
class Diretor{
    constructor(id,nome){
        this.nome=nome;
        this.id=id;
    }
}
class Filme{
    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao, btnDetalhes){
         this.id=id;
         this.titulo=titulo;
         this.ano=ano;
         this.genero=genero;
         this.duracao=duracao;
          this.sinopse=sinopse
         this.cartaz=cartaz;
         this.direcao=direcao;
         this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=btnDetalhes;
    }
    getCard = async () => { 
        let card = document.createElement("div");
        card.setAttribute("class","card");

        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-ing-top"); 
        imgCartaz.setAttribute("src", this.cartaz);

        let cardBody = document.createElement("div"); 
        cardBody.setAttribute("class","card-body");

        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");

        let divDetalhes = document.createElement("div"); 
        divDetalhes.setAttribute("style","display: flex; justify-content:space-around;");

        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");

        let divAnoProducao = document.createElement("div"); 
        divAnoProducao.setAttribute("style", "flex-grow:1;"); 

        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode (this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode (this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz); card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
        }
        setBtnDetalhes = ()=>  {
            this.btnDetalhes = document.createElement('button');
            this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
            this.btnDetalhes.setAttribute("id",this.id);
            this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
        }
        getBtnDetalhes = () => {
            return this.btnDetalhes
        }
        
        getDetalhes = () => {
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img"); 
        imgCartaz.setAttribute("src", this.cartaz);

        let cardBody = document.createElement("div"); 
        cardBody.setAttribute("class","card-detalhes");

        let divDetalhes = document.createElement("div"); 
        divDetalhes.setAttribute("class","informacoes" );

        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");

        let divAnoProducao = document.createElement("div"); 
        divAnoProducao.setAttribute("style", "flex-grow:1;"); 

        let card2 = document.createElement("div");
        card2.setAttribute("class","card2");
        let hCardTitle = document.createElement("h2");
        hCardTitle.setAttribute("class", "card-informacoes");
        let duracaoDetalhes = document.createElement("p");
        duracaoDetalhes.setAttribute("class", "card-informacoes");
        let sinopseDetalhes = document.createElement("p");
        sinopseDetalhes.setAttribute("class", "card-informacoes");
        let direcaoDetalhes = document.createElement("p");
        direcaoDetalhes.setAttribute("class", "card-informacoes");
        let atorDetalhes = document.createElement("p");
       atorDetalhes.setAttribute("class", "card-informacoes");
        let  classificacaoDetalhes= document.createElement("p");
        classificacaoDetalhes.setAttribute("class", "card-informacoes");
        let avaliacaoDetalhes = document.createElement("p");
        avaliacaoDetalhes.setAttribute("class", "card-informacoes");
        let anoDetalhes = document.createElement("p");
        anoDetalhes.setAttribute("class", "card-informacoes");
        let generoDetalhes = document.createElement("p");
        generoDetalhes.setAttribute("class", "card-informacoes");
        

        

        hCardTitle.appendChild(document.createTextNode (this.titulo));
        classificacaoDetalhes.appendChild(document.createTextNode (this.classificacao));
        duracaoDetalhes.appendChild(document.createTextNode(this.duracao));
        generoDetalhes.appendChild(document.createTextNode(this.genero));
        anoDetalhes.appendChild(document.createTextNode(this.ano));
        avaliacaoDetalhes.appendChild(document.createTextNode(this.avaliacao));
        atorDetalhes.appendChild(document.createTextNode(this.elenco));
        sinopseDetalhes.appendChild(document.createTextNode(this.sinopse));
        direcaoDetalhes.appendChild(document.createTextNode(this.direcao));
    
        divDetalhes.appendChild(hCardTitle);
        divDetalhes.appendChild(classificacaoDetalhes);
        divDetalhes.appendChild(duracaoDetalhes);
        divDetalhes.appendChild(generoDetalhes);
        divDetalhes.appendChild(anoDetalhes);
        divDetalhes.appendChild(avaliacaoDetalhes);
        divDetalhes.appendChild(atorDetalhes);
        divDetalhes.appendChild(sinopseDetalhes);
        divDetalhes.appendChild(direcaoDetalhes);

       
        
        card2.appendChild(imgCartaz); 
        card2.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
        
        let btnSalvar=document.createElement("button");
        btnSalvar.appendChild(document.createTextNode("Favoritar"));
        btnSalvar.setAttribute("id", "btnSalvar");
        divDetalhes.appendChild(btnSalvar);
        
        let btnFechar=document.createElement("button");
        btnFechar.appendChild(document.createTextNode("Fechar"));
        btnFechar.setAttribute("id","btnFechar");
        divDetalhes.appendChild(btnFechar);
        
        let btnLimparFavoritos=document.createElement("button");
        btnLimparFavoritos.appendChild(document.createTextNode("Desfavoritar"));
        btnLimparFavoritos.setAttribute("id","btnLimparFavoritos");
        divDetalhes.appendChild(btnLimparFavoritos);
        
        let btnEditar = document.createElement("button");
        btnEditar.setAttribute("type", "text");
        btnEditar.setAttribute("id","btnEditar");
        divDetalhes.appendChild(btnEditar);

         btnEditar.addEventListener('click',()=>{
        
          let novoTitulo = document.querySelector(".hCardTitle");
          novoTitulo.innerHTML="";
            document.querySelector("#classificacaoDetalhes").style.display="none";
            document.querySelector("#duracaoDetalhes").style.display="none";
            document.querySelector("#generoDetalhes").style.display="none";
            document.querySelector("#anoDetalhes").style.display="none";
            document.querySelector("#avaliacaoDetalhes").style.display="none";
            document.querySelector("#atorDetalhes").style.display="none";

        })

        

        return card2;
        }
        
}

    

