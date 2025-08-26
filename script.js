//Parte 1: seletores simples

//1
const titulo = document.getElementById('titulo-pagina');
console.log(titulo.innerText);

//2
var elmentos_subtitulo = document.getElementsByClassName('subtitulo');
const subtitulo = elmentos_subtitulo[0].innerText;

console.log(subtitulo);

//3
const modulo1 = document.getElementById('modulo-1');
console.log(modulo1.innerText)

//4 
var elementos_tarefa = document.getElementsByClassName('tarefa')

for (i = 0; i < elementos_tarefa.length; i++) {
    if (!elementos_tarefa[i].classList.contains('importante')) {
        console.log(elementos_tarefa[i]);
    }
} 

//5 
var lista_li = document.getElementsByTagName('li');
console.log("Total de tags <li>: ",lista_li.length);


//Parte 2: querySelector/querySelectorAll

//1
const primeiroItem = document.querySelector('#modulo-1 li');
console.log(primeiroItem.innerText);

//2
const importanteClasse = document.querySelector('#modulo-2 .importante');
console.log(importanteClasse.innerText);

//3
const span = document.querySelector('#modulo-2 li.importante .tag');
console.log(span.innerText);

//4
const titulosModulos = document.querySelectorAll('.titulo-modulo')

titulosModulos.forEach(titulo =>[
    console.log(titulo.innerText)
]);


//Parte 3: innerText, textContent, innerHTML

const tarefaImportante = document.querySelector('#modulo-1 .importante')

console.log(tarefaImportante.innerText)
console.log(tarefaImportante.textContent)
console.log(tarefaImportante.innerHTML)

//1

var tarefas = document.getElementsByClassName('tarefa')

for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i].innerText)
    
}

//2
const tarefas2 = document.querySelectorAll(' #modulo-2 .tarefa')

tarefas2.forEach(tarefa =>[
    console.log(tarefa.innerText)
]);




//Parte 4: Desafios de leitura

const tags = document.querySelectorAll('.tag');
const textos = Array.from(tags).map(el => el.innerText);
console.log(textos);

//1
const contagemStatus = {
  pendente: 0,
  visto: 0,
  'em andamento': 0,
  bloqueado: 0
};

tags.forEach(tag => {
  const status = tag.innerText.trim().toLowerCase();
  if (contagemStatus.hasOwnProperty(status)) {
    contagemStatus[status]++;
  }
});

console.log(contagemStatus);


//2
const tarefasFormato = document.querySelectorAll('.tarefa');

tarefasFormato.forEach(tarefa => {
    const nome = tarefa.childNodes[0].textContent.trim();
    const status = tarefa.querySelector('.tag').innerText.trim();
    console.log(`Tarefa: ${nome} - Status: ${status}`);
});






