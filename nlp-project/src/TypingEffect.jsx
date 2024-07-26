import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './home/TypingEffect.css'

const TypingEffect = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Text Summarizer', 'Text to Speech', 'Translator', 'Sentiment Analysis','Grammar Corrector','GPT'],
      typeSpeed: 70,
      backSpeed: 35,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typing-effect">
      <span ref={typedElement}></span>
    </div>
  );
};

export default TypingEffect;
