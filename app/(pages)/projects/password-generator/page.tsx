"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [useUppercase, setUseUppercase] = useState(false);
  const [useDigits, setUseDigits] = useState(false);
  const [useSpecialChars, setUseSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:",.<>?';

  useEffect(() => {
    generatePassword();
  }, [length, useUppercase, useDigits, useSpecialChars]);

  const generatePassword = () => {
    let characters = lowercase;
    if (useUppercase) characters += uppercase;
    if (useDigits) characters += digits;
    if (useSpecialChars) characters += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setGeneratedPassword(password);
  };

  const handleLengthChange = (e: { target: { value: string; }; }) => {
    const newLength = parseInt(e.target.value);
    setLength(!isNaN(newLength) && newLength >= 0 ? newLength : 0);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword).then(
      () => {
        setCopySuccess('Copied!');
        setTimeout(() => {
          setCopySuccess('');
        }, 2000);
      },
      () => {
        setCopySuccess('Failed to copy!');
      }
    );
  };

  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="text-2xl font-bold mb-6">Password Generator</h1>
      <div className="mb-3">
        <label className="block mb-2">Length:</label>
        <input
          type="number"
          min="0"
          value={length}
          onChange={handleLengthChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="flex mb-4 space-x-2">
        {/* Toggle buttons for criteria */}
        <button onClick={() => setUseUppercase(!useUppercase)} className={`p-2 border rounded ${useUppercase ? 'bg-blue-500 text-white' : 'bg-white'}`}>A-Z</button>
        <button onClick={() => setUseDigits(!useDigits)} className={`p-2 border rounded ${useDigits ? 'bg-blue-500 text-white' : 'bg-white'}`}>0-9</button>
        <button onClick={() => setUseSpecialChars(!useSpecialChars)} className={`p-2 border rounded ${useSpecialChars ? 'bg-blue-500 text-white' : 'bg-white'}`}>{}...!@#</button>
      </div>
      {generatedPassword && (
        <div className="relative border p-3 rounded mb-4">
          <div className="overflow-x-auto whitespace-nowrap">
            <span className="text-sm">
              {generatedPassword}
            </span>
          </div>
          <div className="absolute right-3 top-3">
            <FontAwesomeIcon icon={faCopy} className="cursor-pointer" onClick={copyToClipboard} />
          </div>
        </div>
      )}
      {copySuccess && <div className="text-green-500">{copySuccess}</div>}
    </div>
  );
};
