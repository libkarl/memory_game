import './App.css';

import React from 'react';
import { useState } from 'react';
import ball from './assets/8-ball.png';
import potato from './assets/baked-potato.png';
import dinosaur from './assets/dinosaur.png';
import kronos from './assets/kronos.png';
import rocket from './assets/rocket.png';
import unicorn from './assets/skinny-unicorn.png';
import guy from './assets/that-guy.png';
import zeppelin from './assets/zeppelin.png';
import { SingleCard } from './components/SingleCard';

const cardImages = [
  { src: ball },
  { src: potato },
  { src: dinosaur },
  { src: kronos },
  { src: rocket },
  { src: unicorn },
  { src: guy },
  { src: zeppelin },
];

console.log(test);

function App() {
  const [cards, setCards] = useState<{ id: number; src: string }[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // shuffle cards
  const shuffleCards = () => {
    // duplicate card into the shuggledCards array
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      // spred card properties
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(turns, cards);

  // handle choice
  const handleChoices = (id: number): void => {
    return console.log(id);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>NewGame</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard src={card.src} handleChoice={handleChoices(card.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
