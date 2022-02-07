// Abre e fecha menu

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Acessar sessão da pagina e fechar menu ao clicar

const links = document.querySelectorAll('nav ul li a')
// Essa variavel vai acessar atraves da querySelectorAll, todos os links que estão dentro da nav > ul > li > a.
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Adciona um estilo de sombreamento quando rolarmos a pagina //

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
