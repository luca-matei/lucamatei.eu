"use client";
import React, { useState, useEffect, useCallback } from 'react';
import QRCode from 'qrcode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  const [activeTab, setActiveTab] = useState('text'); // 'text', 'url', or 'wifi'
  const [input, setInput] = useState({
    text: '',
    url: '',
    ssid: '',
    wifiType: '',
    wifiPassword: '',
  });
  const [imageUrl, setImageUrl] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [debounce, setDebounce] = useState(null);

  // useEffect hook for handling QR code generation with debounce
  useEffect(() => {
    // Clear any existing timeout to reset the debounce timer
    if (debounce) {
      clearTimeout(debounce);
    }

    const newDebounce = setTimeout(() => {
      generateQRCode();
    }, 500); // Wait for 1s after the user stops typing

    // Save the new timeout in state
    setDebounce(newDebounce);

    // Cleanup function to clear the timeout when component unmounts or input changes
    return () => {
      if (debounce) {
        clearTimeout(debounce);
      }
    };
  }, [input]); // useEffect will trigger on input change

  const generateQRCode = async (): Promise<void> => {
    let data: string = '';

    // Function to escape special characters in Wi-Fi passwords
    const escapeWifiPassword = (password: string): string => {
      const charsToEscape = /([\\;":])/g; // Define characters that need escaping
      return password.replace(charsToEscape, '\\$1'); // Replace them with the escaped version
    };

    try {
      switch (activeTab) {
        case 'text':
          if (input.text.trim() === '') return; // Skip if text is empty
          data = input.text;
          break;
        case 'url':
          if (input.url.trim() === '') return; // Skip if URL is empty
          data = input.url;
          break;
        case 'wifi':
          if (input.ssid.trim() === '') return; // Skip if SSID is empty
          // Only add the password if it's not a 'nopass' network
          const escapedPassword = escapeWifiPassword(input.wifiPassword);
          data = input.wifiType === 'nopass' ? `WIFI:S:${input.ssid};T:${input.wifiType};;` : `WIFI:S:${input.ssid};T:${input.wifiType};P:${escapedPassword};;`;
          break;
      }

      if (data) {
        const url = await QRCode.toDataURL(data);
        setImageUrl(url);
      } else {
        // Clear the QR code or set a default image/message if there's no input
        setImageUrl(''); // or set to a default image/message
      }
    } catch (error) {
      console.error('Error generating QR:', error);
    }
  };

  // Updated handleInputChange to only update input state
  const handleInputChange = (field, value) => {
    // Update input state immediately for user responsiveness
    setInput(prevInput => ({ ...prevInput, [field]: value }));
  };

  return (
    <>
      {/* Tab Headers */}
      <div className="flex justify-center mb-4">
        {/* Tab buttons for Text, URL, and Wi-Fi */}
        <button
            onClick={() => setActiveTab('text')}
            className={`px-4 py-2 ${activeTab === 'text' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Text
        </button>
        <button
            onClick={() => setActiveTab('url')}
            className={`px-4 py-2 ${activeTab === 'url' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          URL
        </button>
        <button
            onClick={() => setActiveTab('wifi')}
            className={`px-4 py-2 rounded-tr-lg ${activeTab === 'wifi' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Wi-Fi
        </button>
      </div>
      {/* Input Fields */}
      {activeTab === 'text' || activeTab === 'url' ? (
          // Text and URL inputs
          <input
              type={activeTab === 'url' ? 'url' : 'text'}
              value={activeTab === 'text' ? input.text : input.url}
              onChange={(e) => handleInputChange(activeTab, e.target.value)}
              placeholder={activeTab === 'text' ? 'Enter text' : 'Enter URL'}
              className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
        />
      ) : (
        // Wi-Fi inputs
        <div>
          {/* SSID Input */}
          <input
            type="text"
            value={input.ssid}
            onChange={(e) => handleInputChange('ssid', e.target.value)}
            placeholder="Enter SSID"
            className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 mt-2"
          />
          {/* Network Type Input */}
          <select
            value={input.wifiType}
            onChange={(e) => handleInputChange('wifiType', e.target.value)}
            className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 mt-2"
          >
            <option value="" disabled>Select network type</option>
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="nopass">No Password</option>
          </select>
          {/* Conditional Password Input */}
          {input.wifiType !== 'nopass' && (
            <div className="relative mt-2">
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={input.wifiPassword}
                onChange={(e) => handleInputChange('wifiPassword', e.target.value)}
                placeholder="Enter Password"
                className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 pr-10"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} className="h-5 w-5 text-gray-700" />
              </div>
            </div>
          )}
        </div>
      )}
      {/* QR Code Display */}
      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="QR Code" className="mx-auto" />
        </div>
      )}
    </>
  );
};
