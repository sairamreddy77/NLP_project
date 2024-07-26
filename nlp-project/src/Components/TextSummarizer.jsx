import React, { useState } from 'react';

const TextSummarizer = () => {
  const [text, setText] = useState('');
  const [num_sentences, setNum_sentences] = useState(5);
  const [min_length, setMin_length] = useState(5)
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/api/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        num_sentences: num_sentences,
        min_length: min_length,
      }),
    });
    const data = await response.json();
    setSummary(data.summary);
  };
  

  return (
    <div>
      <h1>Text Summarizer</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Enter text to summarize:</label>
          <textarea
            className="form-control" id="text" rows="10" value={text} onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="number" className="form-control" placeholder="num_sentences" value={num_sentences}
            onChange={(e) => setNum_sentences(Number(e.target.value))}
            min="1"
          />
          <input
            type="number" className="form-control" placeholder="min_length" value={min_length}
            onChange={(e) => setMin_length(Number(e.target.value))}
            min="1"
          />
        </div>
        <button type="submit" className="btn btn-primary">Summarize</button>
      </form>
      {summary && (
        <div>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
      {error && (
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default TextSummarizer;
    