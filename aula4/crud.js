let usuarios = [];
let indiceSelecionado = null;

function adicionar(){
    var [nome, telefone, email] = getInfo();
    
    var novoUsuario = {nome, telefone, email};
    usuarios.push(novoUsuario);

    appendUser(novoUsuario, usuarios.length - 1);
    resetInput();
}

function getInfo(){
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    if(nome === "" || telefone === "" || email === ""){
        alert("Um campo está sem informação");
        return;
    } else {
        return [nome, telefone, email];
    }
}

function appendUser(usuario, index){
    var novoItem = document.createElement("li");
    novoItem.textContent = usuario.nome + " - " + usuario.telefone + " - " + usuario.email;
    novoItem.style.cursor = "pointer";

    // Clique para selecionar
    novoItem.onclick = function(){
        indiceSelecionado = index;
        document.getElementById("selecionado").textContent = 
            "Usuário selecionado: " + usuario.nome + " (" + usuario.email + ")";
    };

    document.getElementById("lista_usuario").appendChild(novoItem);
}

function resetInput(){
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
}

function recuperar(){
    if(indiceSelecionado === null){
        alert("Selecione um usuário primeiro!");
        return;
    }
    var usuario = usuarios[indiceSelecionado];
    document.getElementById("nome").value = usuario.nome;
    document.getElementById("telefone").value = usuario.telefone;
    document.getElementById("email").value = usuario.email;
}

function atualizar(){
    if(indiceSelecionado === null){
        alert("Selecione um usuário primeiro!");
        return;
    }
    var [nome, telefone, email] = getInfo();
    usuarios[indiceSelecionado] = {nome, telefone, email};
    renderList();
    resetInput();
}

function deletar(){
    if(indiceSelecionado === null){
        alert("Selecione um usuário primeiro!");
        return;
    }
    usuarios.splice(indiceSelecionado, 1);
    indiceSelecionado = null;
    renderList();
    document.getElementById("selecionado").textContent = "";

function renderList(){
    let lista = document.getElementById("lista_usuario");
    lista.innerHTML = "";
    usuarios.forEach((u, i) => appendUser(u, i));
}