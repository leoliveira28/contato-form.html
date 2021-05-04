// getElementbyClassName()

// const element = document.getElementsByClassName ('teste')
// console.log(element)

// getElementbyTagNAme()
// const element = document.getElementsByTagName ('h1')
// console.log(element)


// querySelector() trás os seletores que encontar primeiro
// const element = document.querySelector ('')
// console.log(element)

// const element = document.querySelectorAll ('') trás todos os seletores podendo usar o 'each'
//  console.log(element)


 //const element = document.querySelector ('h1')
//element.textContent = " Meudei esse texto com JS!" aqui é possivel mudar o texto da tag no caso h1 para qualquer outro texto ou ate mesmo concatenar.

// manipulando conteudo
// value

// const element = document.querySelector('input')
// element.value = " estou aqui tbm"

// manipulando conteudo
// atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')
const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))