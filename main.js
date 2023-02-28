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
    const taxes = results.taxes

    console.log()


    /* actions */

    cardTitle[0].innerHTML = stocks.IBOVESPA.name
    cardValue[0].innerHTML = stocks.IBOVESPA.variation + ' %'

    cardTitle[1].innerHTML = 'IFIX'
    cardValue[1].innerHTML = stocks.IFIX.variation + ' %'


    cardTitle[2].innerHTML = 'NASDAQ'
    cardValue[2].innerHTML = stocks.NASDAQ.variation + '%'

    cardTitle[3].innerHTML = 'DOWJONES'
    cardValue[3].innerHTML = stocks.DOWJONES.variation + '%'

    cardTitle[4].innerHTML = 'CAC'
    cardValue[4].innerHTML = stocks.CAC.variation + '%'

    cardTitle[5].innerHTML = 'NIKKEI'
    cardValue[5].innerHTML = stocks.NIKKEI.variation + '%'


    /* coin */

    cardTitle[6].innerHTML = currencies.USD.name
    cardValue[6].innerHTML = 'R$' + currencies.USD.buy.toFixed(2)

    cardTitle[7].innerHTML = 'R$' + currencies.CAD.name
    cardValue[7].innerHTML = 'R$' + currencies.CAD.buy.toFixed(2)

    cardTitle[8].innerHTML = 'R$' + currencies.AUD.name
    cardValue[8].innerHTML = 'R$' + currencies.AUD.buy.toFixed(2)

    cardTitle[9].innerHTML = 'R$' + currencies.EUR.name
    cardValue[9].innerHTML = 'R$' + currencies.EUR.buy.toFixed(2)

    cardTitle[10].innerHTML = 'R$' + currencies.ARS.name
    cardValue[10].innerHTML = 'R$' + currencies.ARS.buy.toFixed(2)

    cardTitle[11].innerHTML = 'R$' + currencies.JPY.name
    cardValue[11].innerHTML = 'R$' + currencies.JPY.buy.toFixed(2)

    cardTitle[12].innerHTML = 'R$' + currencies.GBP.name
    cardValue[12].innerHTML = 'R$' + currencies.GBP.buy.toFixed(2)

    cardTitle[13].innerHTML = 'R$' + currencies.CNY.name
    cardValue[13].innerHTML = 'R$' + currencies.CNY.buy.toFixed(2)

    cardTitle[14].innerHTML = 'R$' + currencies.BTC.name
    cardValue[14].innerHTML = 'R$' + currencies.BTC.buy.toFixed(2)



    /* rates */


    cardTitle[15].innerHTML = 'CDI'
    cardValue[15].innerHTML = taxes[0].cdi + '%'

    cardTitle[16].innerHTML = 'Selic'
    cardValue[16].innerHTML = taxes[0].selic + '%'


    cardTitle[17].innerHTML = 'Daily Factor'
    cardValue[17].innerHTML = taxes[0].daily_factor.toFixed(2)



    cardValue.forEach((element) => {

      const text = element.innerText
      const value = parseFloat(text)

      if (value < 0) {
        element.classList.add('red')
      }

    })

  })

const date = new Date();

let day = (date.getDate())
let month = ((date.getMonth() + 1))
let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()

const fullDate = day + '/' + month + '/' + year

function addZero(time) {
  return (time < 10) ? '0' + time : time;
}

const notification = document.querySelector('.notification')

notification.innerHTML = `Última atualização na data  ${addZero(day)}/${addZero(month)}/${addZero(year)}  às ${addZero(hour)}:${addZero(minutes)}`
