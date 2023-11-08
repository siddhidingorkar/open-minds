// EventCard.jsx

import React from 'react';

function EventCard({ title, content, imageSrc }) {
  const cardStyle = {
    border: '2px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    maxWidth: '1000px',
    margin: '20px',
    padding: '20px',
  };

  const imageStyle = {
    display: 'block',
    padding: '20px',
    margin: '0 auto', // Center-align the image horizontally
    width: '50%', // Set the width to 100% for responsiveness
    height: '70%', // Set the maximum height to limit the image size
  };

  const titleStyle = {
    fontSize: '24px', // Set the font size for the title
    color: 'yellow', // Set the color for the title
  };

  const contentStyle = {
    fontSize: '16px', // Set the font size for the content
    color: 'black', // Set the color for the content
  };

  return (
    <div style={cardStyle} className="event-card">
      <img src={imageSrc} alt={title} style={imageStyle} />
      <div>
        <h2 style={titleStyle}>{title}</h2>
        <p style={contentStyle}>{content}</p>
      </div>
    </div>
  );
}

export default EventCard;
