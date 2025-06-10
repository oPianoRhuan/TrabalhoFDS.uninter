// Função para exibir a frase e esconder


function mostrarFrase() {
    document.querySelector("#frase").textContent = "A disciplina transforma talento em arte.";

};
function esconderFrase() {
    document.querySelector("#frase").textContent = "";

}
// Selecionando o botão e alterando o estilo

let botão = document.querySelector("#botão");
botão.style.background = "lightgray";


botão.addEventListener("mouseover", e =>{
botão.style.background = "gray";

});
botão.addEventListener("mouseout", e =>{
botão.style.background = "lightgray";


});
// Adicionando eventos de clique e duplo clique para visualização e ocultação da frase

botão.addEventListener("click", e =>{
    
    let frase = document.getElementById("frase");
    frase.textContent = "A disciplina transforma talento em arte.";
});

botão.addEventListener("dblclick", e =>{

    let frase = document.getElementById("frase");
    textContent = "";
})
