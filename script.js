const cardArray = [
  {
    name: 'fries',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/hotdog.png'
  },
  {
    name: 'fries',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/hotdog.png'
  }
]
const grid = document.querySelector('.grid')
cardArray.sort(() => 0.5 - Math.random())
const cardChosen =[]

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'https://stackblitz.com/files/web-platform-emme2g/github/ode7/memory-game1/main/image/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click',flipcard)
    grid.append(card)
  }
}
createBoard()
function flipcard(){
  const cardId = this.getAtttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  this.setAttribute('src',cardArray[cardId].img)
}