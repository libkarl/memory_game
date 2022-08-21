import './SingleCard.css';

import React from 'react';

import back from '../assets/back.png';

interface cardProps {
  src: string;
  id: string
  handleChoice(): void
}

export const SingleCard = (props: cardProps) => {
  const handleClick = () => {
    props.handleChoice();
  };
  return (
    <div className="card">
      <div>
        <img className="front" src={props.src} alt="card front" />
        <img
          className="back"
          src={back}
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
