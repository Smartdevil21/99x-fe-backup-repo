import React from 'react'
import { useState } from 'react';

const VerticalCarousel = () => {
    
    const words = ["that acquire users seamlessly", "worth it", "Chinese?", "Mexican?"];
    const [currentIndex, setCurrentIndex] = useState(0); 

    const wordElements = words.map((word, index) => {
        const style = {
          color: "#FF8811",
          marginTop: "",
          // width: '8.3vw',
          position: "absolute",
          transition: "margin-top 0.7s, width 0.5s ease-in-out",
        };
        if (index === currentIndex && index%4 === 0) {
         
        } else {
            style.marginTop = `${index > currentIndex ? "3.47vw" : `-3.47vw`}`;
          
        }
    
        return (
          <div className={"slider_word"} key={index} style={style}>
            {word.word}
          </div>
        );
      });

  return (
    <div>{wordElements}</div>
  )
}

export default VerticalCarousel