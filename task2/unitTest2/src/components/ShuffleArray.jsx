import React, { useState } from 'react'

export default function ShuffleArray(items) {
    const [shuffledItems, setShuffledItems] = useState(["banana","apple","mango","millon"]);
    // const [shuffledItems, setShuffledItems] = useState([...items]);

  // Function to shuffle the items array
  const shuffleItems = () => {
    const shuffled = [...shuffledItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    setShuffledItems(shuffled);
  };
  return (
    <div>
      <h2>Shuffle Array</h2>
      <ul>
        {shuffledItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={shuffleItems}>Shuffle</button>
    </div>
  )
}
