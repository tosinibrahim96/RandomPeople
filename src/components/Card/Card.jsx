import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className="card-container">
      <img
        src={`https://i.pravatar.cc/300?img=${props.monster.id}`}
        alt="ugly robot"
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
}
