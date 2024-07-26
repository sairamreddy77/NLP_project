import React, { useState } from 'react';

function Review_Analysis(){
    const [text, setText] = useState('');
    const [label, setLabel] = useState('');
    const [score, setScore] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleReview = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/api/review',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
          });
    
            const data = await response.json();
            setLabel(data.label);
            setScore(data.score);
    
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };

    return (
        <div >
            <h1>Sentiment Analysis</h1>
            <textarea
                value={text} onChange={handleTextChange} rows="10" className="form-control mb-3" placeholder="Enter text here"
            />
            <button onClick={handleReview} className="btn btn-primary">
                Review
            </button>

            {(
            <div>
                <h2>Label : </h2> <p>{label}</p>
                {/* <h2>Score : </h2> <p>{score}</p> */}
            </div>
            )}
        </div>
      );

}

export default Review_Analysis