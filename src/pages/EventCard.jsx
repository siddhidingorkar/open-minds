// EventCard.jsx

import React from 'react';

function EventCard({ title, content, imageSrc }) {
  return (
    <div className="event-card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default EventCard;
