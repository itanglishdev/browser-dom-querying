
const body = document.querySelector('body')

body.style.fontFamily = 'Arial'
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
// mainHtml.style.display = 'flex'
// mainHtml.style.flexDirection = 'column'
// mainHtml.style.alignItems = 'center'
// document.body.style.fontFamily = '

const hOne = document.querySelector('h1')

hOne.style.textAlign = 'center'

const menuHeadings = document.querySelectorAll('.category')

// if (menuHeadings) {
for (const el of menuHeadings) {

  el.style.color = 'red'
  el.style.fontFamily = 'Times New Roman'
  el.style.fontSize = "1.6rem"
}

const randomColours = ['Azure', 'cornSilk', 'BlanchedAlmond', 'BurlyWood', 'CornflowerBlue']

const unorderedList = document.querySelectorAll('.food-category')

function colorGenerator() {

  for (const el of unorderedList) {

    el.style.backgroundColor = randomColours[Math.floor(Math.random() * 3 + 1)]
    // el.style.leftMargin = '1px'
  }
}
colorGenerator()

const mainHtml = document.querySelector('.main')
const footer = document.querySelector('footer')
const footerElements = document.getElementsByClassName('footer .food-desc')

function modifyForDesktop(elem) {
  if (elem.matches) {
    mainHtml.style.display = 'flex'
    mainHtml.style.justifyContent = 'space-around'
    // footer.style.flexDirection = 'row'
    footer.style.display = 'flex'
    // footerElements.style.padding = '2px'
    // footerElements.style.justifyContent = 'space-between'

  }
  else {
    mainHtml.style.flexDirection = 'column'

    mainHtml.style.display = 'flex'
    // mainHtml.style.alignItems = 'center'


  }
}
const atDeskTop = window.matchMedia('(min-width: 600px)')

atDeskTop.addListener(modifyForDesktop)
modifyForDesktop(atDeskTop)

const warningAtEnd = document.getElementById('warning')

warningAtEnd.style.fontSize = '2rem'

const allergies = document.querySelector('.allergies')

// allergies.style.textAlign = 'center'
allergies.style.listStyleType = 'none'

const allergiesEven = document.querySelectorAll('.allergy-warning')

// allergiesEven.style.backgroundColor = 'lightgreen'
// allergiesEven.style.maxWidth = '95%'



// footer.style.flexDirection = 'column'
// footer.style.display = 'flex'

