import React, { useState } from 'react';

function Grammar() {
    const [text, setText] = useState('');
    const [max, setMax] = useState(0);
    const [corrected, setCorrected] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleMaxChange = (event) => {
        setMax(Number(event.target.value));
    };

    const handleCorrect = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/correct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    text, 
                    max,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setCorrected(data.corrected);

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <div>
            <h1>Grammar Corrector</h1>
            <textarea
                value={text}
                onChange={handleTextChange}
                rows="10"
                className="form-control mb-3"
                placeholder="Enter text here"
            />
            <input
                type="number"
                className="form-control"
                placeholder="Max Candidates"
                value={max}
                onChange={handleMaxChange}
                min="1"
            />
            <button onClick={handleCorrect} className="btn btn-primary">
                Correct
            </button>

            {corrected && (
                <div>
                    <h2>Corrected:</h2>
                    <p>{corrected}</p>
                </div>
            )}
        </div>
    );
}

export default Grammar;
