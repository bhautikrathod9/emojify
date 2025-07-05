import { useState } from 'react';
import Header from '../components/Header';
import ModeSelector from '../components/ModeSelector';
import TextInputSection from '../components/TextInputSection';
import PinInput from '../components/PinInput';
import ActionButton from '../components/ActionButton';
import OutputBox from '../components/OutputBox';
import { encryptText, decryptText } from '../utils/cryptoUtils';

function Home(){
    const [mode, setMode] = useState('encrypt');
    const [inputText, setInputText] = useState('');
    const [pin, setPin] = useState('');
    const [outputText, setOutputText] = useState('');
    const [error, setError] = useState('');

    const handleAction = () => {
        if (!inputText.trim() || !pin.trim()) {
            setError('Both text and PIN are required.');
            setOutputText('');
            return;
    }

    setError('');
    if (mode === 'encrypt') {
        setOutputText(encryptText(inputText, pin));
    } else {
        try {
            setOutputText(decryptText(inputText, pin));
        } catch (err) {
            setOutputText('');
            setError('Decryption failed. Check your PIN or emoji string.');
        }
    }
    };

    return(
        <div>
            <Header />
            <ModeSelector mode={mode} setMode={setMode} />
            <TextInputSection mode={mode} inputText={inputText} setInputText={setInputText} />
            <PinInput pin={pin} setPin={setPin} />
            <ActionButton mode={mode} handleAction={handleAction} />
            {error && (
                <div className="w-full max-w-2xl mx-auto mt-4 px-4 text-red-600 font-medium">
                ⚠️ {error}
                </div>
            )}
            <OutputBox outputText={outputText} />
        </div>
    )
}

export default Home;