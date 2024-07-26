import React, { useState } from 'react';

function Translator(){

    const [text, setText] = useState('');
    const [translated, setTranslated] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleTranslate = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/api/translate',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
          });
    
            const data = await response.json();
            setTranslated(data.translated);
    
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };

    return (
        <div >
            <h1>Translator</h1>
            <textarea
                value={text} onChange={handleTextChange} rows="10" className="form-control mb-3" placeholder="Enter text here"
            />
            <button onClick={handleTranslate} className="btn btn-primary">
                Translate
            </button>

            {translated && (
            <div>
                <h2>Translated Text:</h2>
                <p>{translated}</p>
            </div>
            )}
        </div>
      );

}

export default Translator