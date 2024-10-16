import React, { useState } from 'react';
import { changeVoice } from '../services/TranslationService';

const VoiceChanger = () => {
  const [voice, setVoice] = useState('normal');

  const handleChangeVoice = (voiceType) => {
    setVoice(voiceType);
    changeVoice(voiceType);
  };

  return (
    <div>
      <h1>Real-time Voice Changer</h1>
      <select onChange={(e) => handleChangeVoice(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="robot">Robot</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default VoiceChanger;
