import React, { useState } from 'react';
import { translateStreamText } from '../services/TranslationService';
import { WebSpeechAPI } from '../utils/WebSpeechAPI';
import { applyKeyboardCorrections } from '../services/KeyboardService';  // استدعاء مصحح الأخطاء

const TranslateStream = ({ language }) => {
  const [transcription, setTranscription] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleStream = async () => {
    WebSpeechAPI.startRecognition(async (text) => {
      setTranscription(text);
      const correctedText = applyKeyboardCorrections(text);  // تصحيح النص باستخدام لوحة المفاتيح الذكية
      const translation = await translateStreamText(correctedText, language);
      setTranslatedText(translation);
    });
  };

  return (
    <div>
      <button onClick={handleStream}>Start Translation</button>
      <p>Original: {transcription}</p>
      <p>Translated: {translatedText}</p>
    </div>
  );
};

export default TranslateStream;
