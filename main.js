const backToTop = document.querySelector('.backToTop')

window.addEventListener('scroll', () => {
  visibleButton()
})

function visibleButton() {
  if (window.scrollY >= 300) {
    backToTop.classList.add('active')
  } else {
    backToTop.classList.remove('active')
  }
}

const scrollTop = () => {
  window.scroll({
    top: 0,

  })
}

backToTop.onclick = scrollTop


const cardTitle = document.querySelectorAll('.coin')
const cardValue = document.querySelectorAll('.percentage')

const production = 'https://api.hgbrasil.com/finance'

const local = 'https://cors-everywhere.onrender.com/https://api.hgbrasil.com/finance?key=SUA-CHAVE'

fetch(`${local}`)
  .then(response => response.json())
  .then(data => {
    const results = data.results
    const currencies = results.currencies
    const stocks = results.stocks

    cardTitle[0].innerHTML = stocks.IBOVESPA.name
    cardValue[0].innerHTML = stocks.IBOVESPA.variation + ' %'

    cardTitle[1].innerHTML = 'IFIX'
    cardValue[1].innerHTML = stocks.IFIX.variation + ' %'


    /* actions */

    cardTitle[2].innerHTML = currencies.USD.name
    cardValue[2].innerHTML = currencies.USD.buy.toFixed(2)

    cardTitle[3].innerHTML = currencies.CAD.name
    cardValue[3].innerHTML = currencies.CAD.buy.toFixed(2)

    cardTitle[4].innerHTML = currencies.AUD.name
    cardValue[4].innerHTML = currencies.AUD.buy.toFixed(2)

    cardTitle[5].innerHTML = currencies.EUR.name
    cardValue[5].innerHTML = currencies.EUR.buy.toFixed(2)

    cardTitle[6].innerHTML = currencies.ARS.name
    cardValue[6].innerHTML = currencies.ARS.buy.toFixed(2)

    cardTitle[7].innerHTML = currencies.JPY.name
    cardValue[7].innerHTML = currencies.JPY.buy.toFixed(2)

    cardTitle[8].innerHTML = currencies.GBP.name
    cardValue[8].innerHTML = currencies.GBP.buy.toFixed(2)

    cardTitle[9].innerHTML = currencies.CNY.name
    cardValue[9].innerHTML = currencies.CNY.buy.toFixed(2)

    cardTitle[10].innerHTML = currencies.BTC.name
    cardValue[10].innerHTML = currencies.BTC.buy.toFixed(2)

  })

const date = new Date(),
  day = date.getDate().toString().padStart(2, '0'),
  month = (date.getMonth() + 1).toString().padStart(2, '0'),
  year = date.getFullYear();

const fullDate = day + '/' + month + '/' + year


const notification = document.querySelector('.notification')
notification.innerHTML = 'Última atualização na data ' + fullDate + '  à 00:00h'

