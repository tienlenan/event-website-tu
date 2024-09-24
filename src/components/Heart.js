import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Heart.css';
import Lottie from 'react-lottie';
import animationData from '../img/animation.json';
import fingerprint from "../img/fingerprint.json";

const AnimatedHeart = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleTap = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className="heart-container" // {{ edit_2 }} - Changed to custom CSS class
      onClick={handleTap}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="heart-animation"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Lottie
              options={{
                animationData,
                loop: true,
                autoplay: true
              }}
              width={400}
              height={400}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!isVisible && (
        <button className="heart-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
        </button>
      )}
    </div>
  );
};

export default AnimatedHeart;