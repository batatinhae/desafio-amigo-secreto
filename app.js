
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
                obterElementosDaLista();
                limparCampo();
                percorrendoLista();
            }
    

}function percorrendoLista(){
    for(elemente of amigos) console.log(amigos)
    


}


function obterElementosDaLista(){
    lista = document.getElementById("listaAmigos", );
    lista.innerHTML = (amigos);
    
}

function limparCampo(){
    campo = document.getElementById("amigo");
    campo.value = "";
}