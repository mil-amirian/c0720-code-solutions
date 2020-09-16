/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    1: {
      name: 'Mil',
      hand: []
    }
  },
  {
    2: {
      name: 'Dan',
      hand: []
    }
  },
  {
    3: {
      name: 'Jon',
      hand: []
    }
  },
  {
    4: {
      name: 'Sara',
      hand: []
    }
  }
];

const suit = [
  'Heart',
  'Club',
  'Diamond',
  'Spade'
];

const rank = [
  'Ace',
  'King',
  'Queen',
  'Jack',
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2
];

const cardDeck = [];

const startGame = () => {
  const playerCards = [];
  const playerScores = [];
  const finalScores = [];
  dealCards();
  for (let i = 0; i < players.length; i++) {
    const playerCard1 = players[i][`${i + 1}`].hand[0];
    const playerCard2 = players[i][`${i + 1}`].hand[1];
    playerCards.push([`player${i + 1}`, playerCard1, playerCard2]);
  }
  for (let j = 0; j < playerCards.length; j++) {
    if (playerCards[j][1].rank === 'Ace') {
      playerScores.push(11);
    } else if (playerCards[j][1].rank === 'King' || playerCards[j][1].rank === 'Queen' || playerCards[j][1].rank === 'Jack') {
      playerScores.push(10);
    } else {
      playerScores.push(playerCards[j][1].rank);
    }

    if (playerCards[j][2].rank === 'Ace') {
      playerScores.push(11);
    } else if (playerCards[j][2].rank === 'King' || playerCards[j][2].rank === 'Queen' || playerCards[j][2].rank === 'Jack') {
      playerScores.push(10);
    } else {
      playerScores.push(playerCards[j][2].rank);
    }
  }

  const player1Score = playerScores[0] + playerScores[1];
  const player2Score = playerScores[2] + playerScores[3];
  const player3Score = playerScores[4] + playerScores[5];
  const player4Score = playerScores[6] + playerScores[7];

  console.log('Player 1 Cards: ', playerCards[0][1], playerCards[0][2], 'SCORE: ', player1Score);
  console.log('Player 2 Cards: ', playerCards[1][1], playerCards[1][2], 'SCORE: ', player2Score);
  console.log('Player 3 Cards: ', playerCards[2][1], playerCards[2][2], 'SCORE: ', player3Score);
  console.log('Player 4 Cards: ', playerCards[3][1], playerCards[3][2], 'SCORE: ', player4Score);

  finalScores.push(player1Score, player2Score, player3Score, player4Score);
  for (let i = 0; i < finalScores.length; i++) {
    if (Math.max(...finalScores) === finalScores[i]) { console.log('WINNER is: ', `Player ${i + 1}`); }
  }
  resetGame();
};

startGame();

const dealCards = () => {
  shuffleDeck();
  for (let j = 0; j < players.length; j++) {
    const playersHand = players[j][`${j + 1}`].hand;
    playersHand.push(cardDeck.pop());
    playersHand.push(cardDeck.pop());
  }
};

const shuffleDeck = () => {
  resetCardDeck();
  for (let r = cardDeck.length - 1; r > 0; r--) {
    const randomNumber = Math.floor(Math.random() * r);
    const temp = cardDeck[r];
    cardDeck[r] = cardDeck[randomNumber];
    cardDeck[randomNumber] = temp;
  }
};

const resetCardDeck = () => {
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      cardDeck.push({ suit: suit[i], rank: rank[j] });
    }
  }
};

const resetGame = () => {
  for (let i = 0; i < players.length; i++) {
    players[i][`${i + 1}`].hand = [];
  }
};
