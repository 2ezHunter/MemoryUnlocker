const cardArray = [

    {
        name:"pic1",
        img:'igg.png'

    },
    {
        name:"pic2",
        img:'pic2.jpeg'
    },
    {
        name:"pic3",
        img:'pic3.png'
    },
    {
        name:"pic4",
        img:'pic4.jpeg'
    },
    {
        name:"pic5",
        img:'pic5.jpeg'
    }, 
       {
        name:"pic6",
        img:'pic6.jpg'
    },
    {
        name:"pic1",
        img:'igg.png'

    },
    {
        name:"pic2",
        img:'pic2.jpeg'
    },
    {
        name:"pic3",
        img:'pic3.png'
    },
    {
        name:"pic4",
        img:'pic4.jpeg'
    },
    {
        name:"pic5",
        img:'pic5.jpeg'
    }, 
       {
        name:"pic6",
        img:'pic6.jpg'
    }

]

let CardChosen = []
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardChosenIds = []
function createBord() {
    for(i=0;i<cardArray.length;i++) {
        const card = document.createElement('img')
        card.setAttribute('src','open.png')
        card.setAttribute('data-id',i)
        card.setAttribute('width','200px')
        card.setAttribute('height','200px')
        card.addEventListener('click',flipCard)
        gridDisplay.append(card)
    }

}

createBord();
function checkMatch() {
    const cards = document.querySelectorAll('img');
    console.log('Check Match');
    
    if (CardChosen[0] === CardChosen[1]) {
      alert('It\'s a match!');
      cards[cardChosenIds[0]].setAttribute('src', 'grey.png');
      cards[cardChosenIds[1]].setAttribute('src', 'grey.png');
      cards[cardChosenIds[0]].removeEventListener('click', flipCard);
      cards[cardChosenIds[1]].removeEventListener('click', flipCard);
    } else {
      console.log(CardChosen);
      if (cardChosenIds.length > 0) {
        cards[cardChosenIds[0]].setAttribute('src', 'open.png');
      }
      if (cardChosenIds.length > 1) {
        cards[cardChosenIds[1]].setAttribute('src', 'open.png');
      }
      alert('You could not find a match! Try again..');
      cardChosenIds = []; // Reset the array when the cards do not match

    }
  
    CardChosen = [];
    cardChosenIds = [];
  }
  
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    console.log(`clicked: ${cardId}`)
    CardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (CardChosen.length == 2) {
        setTimeout(function() {
            checkMatch();
            setTimeout(resetCards, 500);
        }, 500);
    }
}

function resetCards() {
    let cards = document.querySelectorAll('img');
    cards[cardChosenIds[0]].setAttribute('src','open.png')
    cards[cardChosenIds[1]].setAttribute('src','open.png')
    cardChosenIds = [];
    CardChosen = [];
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];
    console.log("Check Match");
    if (CardChosen[0] == CardChosen[1]) {
        alert("Its a match!");
        cards[optionOneId].setAttribute('src', 'grey.png');
        cards[optionTwoId].setAttribute('src', 'grey.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
    } else {
        console.log(CardChosen);
        cards[optionOneId].setAttribute('src', 'open.png');
        cards[optionTwoId].setAttribute('src', 'open.png');
        alert("You could not find a match! Try again..");
    }
    CardChosen = [];
    cardChosenIds = [];
}
