import React, { useState } from 'react';

function Generate() {
    const [text, setText] = useState('');
    const [generated, setGenerated] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleGenerate = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    text, 
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setGenerated(data.generated);

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <div>
            <h1>GPT</h1>
            <textarea
                value={text}
                onChange={handleTextChange}
                rows="10"
                className="form-control mb-3"
                placeholder="Enter text here"
            />
            <button onClick={handleGenerate} className="btn btn-primary">
                Generate
            </button>

            { (
                <div>
                    <h2>Generated:</h2>
                    <p>{generated}</p>
                </div>
            )}

            {/* <p>Generate</p> */}
        </div>
    );
}

export default Generate;