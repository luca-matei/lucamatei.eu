"use client";
import React, { useState, useEffect } from 'react';

export default function WordCounter() {
    const [text, setText] = useState<string>(''); // Specify the type as string
    const [wordCount, setWordCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [characterCount, setCharacterCount] = useState(0);

    useEffect(() => {
        // Calculate word count
        const words = text.trim().split(/\s+/);
        setWordCount(text.trim() === '' ? 0 : words.length);

        // Calculate sentence count
        const sentences = text.trim().split(/[.!?]+/);
        setSentenceCount(sentences.length - 1); // Subtract 1 to exclude the last empty sentence

        // Calculate character count (including spaces)
        setCharacterCount(text.length);
    }, [text]);

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Word Counter</h1>
            <textarea
                rows={4}
                cols={50}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here..."
                className="p-2 border rounded"
            ></textarea>
            <div className="mt-2">
                <p>Word Count: {wordCount}</p>
                <p>Sentence Count: {sentenceCount}</p>
                <p>Character Count (with spaces): {characterCount}</p>
            </div>
        </>
    );
}
