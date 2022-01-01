import React from 'react';

function Card({card}) {
    return (
        <div key={card.id} className="post">
            <h2>{card.title}</h2>
            <p>{card.body}</p>
        </div>
    );
}

export default Card;