const calendar = document.querySelector('.calendar')
const title = document.querySelector('.title')
const emoji = ['👞', '🚗', '☃️', '🧶', '🛷', '🐈‍⬛', '🎩', '🍪', '🎿', '❄️', '🍎', '🏵', '🎺', '🎁', '🎀', '🧸', '🥧', '🛵', '⛸', '🎾', '🌟', '🎄', '🍰', '🎅🏻'] 
const array = [...Array(24).keys()].map(i => i+1)
const date = new Date()
const year = date.getFullYear()
const day = date.getDate()
const december = new Date(year, 12, 01)
const counter = Math.round((december - date) / (1000 * 60 * 60 * 24))
title.textContent = `Advent Calendar ${year}`

for (let i = 0; i < 24; i++){
  const square = document.createElement('div')
  calendar.appendChild(square)
  square.textContent = array[i]
}

const squares = document.querySelectorAll('.calendar div')
  if (date.toString().includes('Dec')){
    for (let i = 0; i < day; i++){
      squares[i].addEventListener('click', () => {
        squares[i].classList.add('content')
        squares[i].innerHTML = emoji[i]
      })
    }
} else {
  title.textContent = `Advent calendar ${year} opens again in ${counter} days!`
}