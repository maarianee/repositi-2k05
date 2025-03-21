document.addEventListener('DOMContentLoaded',function(){

const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
const opecoesDeAcessebilidade=documento.getElementById('opcoes-acessibilidade');

botaoDeAcessibilidade.addEventListener('click',function(){
botaoDeAcessibilidade.classList.toggle('rotacao=botao');
opecoesDeAcessebilidade.classList.togglr('apresenta-lista');


const botaoselecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')==='true';
botaoDeAcessibilidade.setAttribute('aria-expanded',!botaoselecionado)


})
const aumentaFontBotao=document.getElementById('aumentar-font');
const diminuiFontebotao=document.getElementById('diminuir-font');

const alternaContraste=document.getElementById('alterna-contraste')

let tamanhoAtulFont=1;

aumentaFontBotao.addEventListener('click',function(){
tamanhoAtulFont+=0.1;
document.body.style.fontSize='${tamanhoAtualFont}rem'


})
diminuiFontebotao.addEventListener('click',function(){
tamanhoAtulFont-=0.1;
document.body.style.fontSize='$(tamanhoAtualFont)rem'

})

alternaContraste.addEventListener('click',function(){

      document.body.classList.toggle('alto-contraste')
})

})

scrollReveal().reveal('#inicio',{delay:500});
scrollReveal().reveal('#tropicalia',{delay:500});
scrollReveal().reveal('#galeria',{delay:500});
scrollReveal().reveal('#contato',{delay:500});







