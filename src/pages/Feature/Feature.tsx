import React, { useEffect, useState } from 'react';
import './Feature.css';


interface Card {
  id: number;
  image: string;
  matched: boolean;
}

const cardImages: string[] = [
  '/img/helmet.png',
  '/img/potion.png',
  '/img/ring.png',
  '/img/scroll.png',
  '/img/shield.png',
  '/img/sword.png',
];

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .map((image) => ({ image, id: Math.random(), matched: false }))
      .sort(() => Math.random() - 0.5);

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffled);
    setTurns(0);
  };

  const handleChoice = (card: Card) => {
    if (!disabled) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.image === choiceTwo.image) {
        setCards((prev) =>
          prev.map((card) =>
            card.image === choiceOne.image ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card === choiceOne || card === choiceTwo || card.matched ? 'flipped' : ''}`}
            onClick={() => handleChoice(card)}
          >
            <img
              className="front"
              src={card.image}
              alt="card front"
            />
            <img
              className="back"
              src="/img/cover.png"
              alt="card back"
            />
          </div>
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default App;