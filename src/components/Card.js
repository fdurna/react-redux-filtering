import React from 'react';

function Card({card}) {
    return (
        <div className="post">
            <h2>{card.title}</h2>
            <p>{card.body}</p>
        </div>
    );
}

export default Card;