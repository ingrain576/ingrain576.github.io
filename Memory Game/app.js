document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'axe',
            img: 'images/axe.png'
        },
        {
            name: 'bara',
            img: 'images/bara.png'
        },
        {
            name: 'bh',
            img: 'images/bh.png'
        },
        {
            name: 'bm',
            img: 'images/bm.png'
        },
        {
            name: 'cm',
            img: 'images/cm.png'
        },
        {
            name: 'dk',
            img: 'images/dk.png'
        },
        {
            name: 'drow',
            img: 'images/drow.png'
        },
        {
            name: 'es',
            img: 'images/es.png'
        },
        {
            name: 'huskar',
            img: 'images/huskar.png'
        },
        {
            name: 'invoker',
            img: 'images/invoker.png'
        },
        {
            name: 'kunkka',
            img: 'images/kunkka.png'
        },
        {
            name: 'lina',
            img: 'images/lina.png'
        },
        {
            name: 'lion',
            img: 'images/lion.png'
        },
        {
            name: 'lycan',
            img: 'images/lycan.png'
        },
        {
            name: 'mirana',
            img: 'images/mirana.png'
        },
        {
            name: 'omni',
            img: 'images/omni.png'
        },
        {
            name: 'silencer',
            img: 'images/silencer.png'
        },
        {
            name: 'sniper',
            img: 'images/sniper.png'
        },
        {
            name: 'sven',
            img: 'images/sven.png'
        },
        {
            name: 'tinker',
            img: 'images/tinker.png'
        },
        {
            name: 'void',
            img: 'images/void.png'
        },
        {
            name: 'warlock',
            img: 'images/warlock.png'
        },
        {
            name: 'wr',
            img: 'images/wr.png'
        },
        {
            name: 'zeus',
            img: 'images/zeus.png'
        },
        {
            name: 'axe',
            img: 'images/axe.png'
        },
        {
            name: 'bara',
            img: 'images/bara.png'
        },
        {
            name: 'bh',
            img: 'images/bh.png'
        },
        {
            name: 'bm',
            img: 'images/bm.png'
        },
        {
            name: 'cm',
            img: 'images/cm.png'
        },
        {
            name: 'dk',
            img: 'images/dk.png'
        },
        {
            name: 'drow',
            img: 'images/drow.png'
        },
        {
            name: 'es',
            img: 'images/es.png'
        },
        {
            name: 'huskar',
            img: 'images/huskar.png'
        },
        {
            name: 'invoker',
            img: 'images/invoker.png'
        },
        {
            name: 'kunkka',
            img: 'images/kunkka.png'
        },
        {
            name: 'lina',
            img: 'images/lina.png'
        },
        {
            name: 'lion',
            img: 'images/lion.png'
        },
        {
            name: 'lycan',
            img: 'images/lycan.png'
        },
        {
            name: 'mirana',
            img: 'images/mirana.png'
        },
        {
            name: 'omni',
            img: 'images/omni.png'
        },
        {
            name: 'silencer',
            img: 'images/silencer.png'
        },
        {
            name: 'sniper',
            img: 'images/sniper.png'
        },
        {
            name: 'sven',
            img: 'images/sven.png'
        },
        {
            name: 'tinker',
            img: 'images/tinker.png'
        },
        {
            name: 'void',
            img: 'images/void.png'
        },
        {
            name: 'warlock',
            img: 'images/warlock.png'
        },
        {
            name: 'wr',
            img: 'images/wr.png'
        },
        {
            name: 'zeus',
            img: 'images/zeus.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const msgDisplay = document.querySelector('#msg')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')            
            alert('You clicked the same hero!')
        } else if (cardsChosen[0] === cardsChosen[1]) {            
            alert('You have found a match!')
            cards[optionOneId].setAttribute('src', 'images/empty.png')
            cards[optionTwoId].setAttribute('src', 'images/empty.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')            
            alert('Try again :(')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.lenght === cardArray.lenght/2) {
            msgDisplay.textContent = 'Congratulations, you found all!'
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})