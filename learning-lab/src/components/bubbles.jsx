import React, { useEffect, useState } from "react";

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const bubbleArray = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 10, 
      left: Math.random() * 100, 
      animationDuration: Math.random() * 5 + 3, 
    }));
    setBubbles(bubbleArray);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Bubbles;
