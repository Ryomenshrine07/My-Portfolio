import React from 'react';
import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';

function AchievementsCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
      setIsHovered(true);
  };

  const handleMouseOut = () => {
      setIsHovered(false);
  };
  const divStyle = {
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    cursor: 'pointer'
};
  return (
    <AnimatePresence mode='wait'>
    <motion.div 
    className='achieveCard' 
    style={divStyle} 
    onMouseOver={handleMouseOver} 
    onMouseOut={handleMouseOut}>
        <img src={props.image} alt="" />
        <p>Certified by {props.certify} <span>{props.language}</span></p>
    </motion.div>
    </AnimatePresence>
  )
}

export default AchievementsCard