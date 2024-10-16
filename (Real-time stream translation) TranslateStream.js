import React, { useState } from 'react';
import { translateStream } from '../services/TranslationService';

const TranslateStream = () => {
  const [inputLanguage, setInputLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('fr');
  const [streaming, setStreaming] = useState(false);

  const handleStartStream = () => {
    setStreaming(true);
    translateStream(inputLanguage, outputLanguage);
  };

  const handleStopStream = () => {
    setStreaming(false);
  };

  return (
    <div>
      <h1>Real-time Stream Translation</h1>
      <select onChange={(e) => setInputLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
        {/* Add more language options */}
      </select>
      <select onChange={(e) => setOutputLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">French</option>
        {/* Add more language options */}
      </select>
      <button onClick={handleStartStream}>Start Translation</button>
      <button onClick={handleStopStream}>Stop Translation</button>
    </div>
  );
};

export default TranslateStream;
