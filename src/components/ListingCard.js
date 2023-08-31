import React, { useState } from "react";

function ListingCard({listing, url, onDelete}) {
  const {id, description, image, location} = listing
  const [isLiked, setIsLiked] = useState(false)

  function handleLikeClick(){
    setIsLiked(!isLiked)
  }

  function handleDeleteClick(){
    fetch(`${url}/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(onDelete(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={handleLikeClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
