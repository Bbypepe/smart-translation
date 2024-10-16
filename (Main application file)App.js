import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubscriptionPlans from './components/SubscriptionPlans';
import TranslateStream from './components/TranslateStream';
import VoiceChanger from './components/VoiceChanger';
import SmartKeyboard from './components/SmartKeyboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/subscription" element={<SubscriptionPlans />} />
          <Route path="/translate" element={<TranslateStream />} />
          <Route path="/voicechanger" element={<VoiceChanger />} />
          <Route path="/keyboard" element={<SmartKeyboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
