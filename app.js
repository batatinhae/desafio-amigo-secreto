
let amigos = [];


function mensagemAlerta(tag,texto){
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function adicionarAmigo(){

    addAmigo = document.getElementById("amigo").value;

        if (addAmigo == ""){
            mensagemAlerta("h2","Nome inserido não é valido, insira um nome");
            }else{
                amigos.push(addAmigo);
                alert("Amigo adicionado");
                mensagemAlerta("h2","Insira um nome");
                
                limparCampo();
                criandoLista();
                
            }
    
}

function sortearAmigo(){
if (amigos == "") {
    mensagemAlerta("h2","Não há nomes para serem sorteados, insira um nome e adicione!");
    
} else {
    let numeroAleatorio = Math.floor(Math.random()*amigos.length );
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "";

    //limpa a lista acima

    lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    // cria um li para exibir na lista
    let li = document.createElement("li");
    li.innerHTML = amigos[numeroAleatorio];
    resultado.appendChild(li);
        }
}



function criandoLista(){
    
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  
        for (let i = 0 ; i<amigos.length ;i++){
            let li = document.createElement('li');
            li.innerHTML ='->' + amigos[i];
            lista.appendChild(li);
        }

}



function limparCampo(){
    campo = document.getElementById("amigo");
    campo.value = "";
}