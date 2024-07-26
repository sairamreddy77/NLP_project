import React, { useState } from 'react';

function TextToSpeech() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/speak',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      alert(data.message);

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Text-to-Speech</h1>
      <textarea
        value={text} onChange={handleTextChange} rows="10" className="form-control mb-3" placeholder="Enter text here"
      />
      <button onClick={handleSpeak} className="btn btn-primary">
        Speak
      </button>
    </div>
  );
}

export default TextToSpeech;
