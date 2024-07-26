import React from 'react';
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './home/Navbar';
import HomePage from './home/HomePage';
import TextSummarizer from './Components/TextSummarizer';
import TextToSpeech from './Components/TextToSpeech';
import Translator from './Components/Translator';
import Review_Analysis from './Components/Review_Analysis';
import Grammar from './Components/Grammar';
import Generate from './Components/Generate';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/text-summarizer" element={<TextSummarizer />} />
          <Route path="/textToSpeech" element={<TextToSpeech />} />
          <Route path="/translate" element={<Translator />} />
          <Route path="/review" element={<Review_Analysis />} />
          <Route path="/correct" element={<Grammar />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
