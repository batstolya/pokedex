import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const ReactAnimation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardAnimation = useSpring({
    transform: isExpanded ? "translateY(0%)" : "translateY(-100%)",
  });
  const infoAnimation = useSpring({
    opacity: isExpanded ? 1 : 0,
  });

  return (
    <div className='card-container'>
      <div className='card' onClick={() => setIsExpanded(!isExpanded)}>
        <h2>Card Title</h2>
      </div>
      <animated.div className='info' style={infoAnimation}>
        <p>Card Content</p>
      </animated.div>
      <animated.div className='card-expanded' style={cardAnimation}>
        <h2>Card Title</h2>
        <p>Card Content</p>
      </animated.div>
    </div>
  );
};
