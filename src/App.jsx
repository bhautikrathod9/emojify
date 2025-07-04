import { use, useState } from 'react';
import './App.css'
import Header from './components/Header';
import ModeSelector from './components/ModeSelector';
import TextInputSection from './components/TextInputSection';
import PinInput from './components/PinInput';
import ActionButton from './components/ActionButton';
import OutputBox from './components/OutputBox';

function App() {
  const [mode, setMode] = useState('encrypt');
  const [inputText, setInputText] = useState('');
  const [pin, setPin] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <ModeSelector mode={mode} setMode={setMode} />
      <TextInputSection 
        mode={mode}
        inputText={inputText}
        setInputText={setInputText}
      />
      <PinInput 
        pin={pin}
        setPin={setPin}
      />
      <ActionButton 
        mode={mode}
        handleAction={setMode}
      />
      <OutputBox 
        outputText={inputText}
      />
    </div>
  );
}

export default App;
