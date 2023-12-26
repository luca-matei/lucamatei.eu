"use client";

import { useState, useEffect } from 'react';

export default function Page() {
    const [targetDate, setTargetDate] = useState('');
    const [targetTime, setTargetTime] = useState('00:00');
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const calculateCountdown = () => {
            const now = new Date();
            const targetDateTime = new Date(`${targetDate}T${targetTime}:00`);
            const difference = targetDateTime.getTime() - now.getTime();

            if (difference > 0) {
                // Calculate time parts
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                // Update countdown values
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        };

        // Update the countdown every second
        const intervalId = setInterval(calculateCountdown, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [targetDate, targetTime]); // Recalculate when date or time changes

    return (
        <div className="flex flex-col items-start p-4">
            <h1 className="text-2xl font-bold mb-4">Days Until</h1>
            <div className="mb-4">
                <div className="flex items-center">
                    <input
                        type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="mr-2 p-2 border rounded"
                    />
                    <input
                        type="time"
                        value={targetTime}
                        onChange={(e) => setTargetTime(e.target.value)}
                        className="p-2 border rounded"
                    />
                </div>
            </div>
            <div className="text-4xl font-bold">
                <div>{days} days</div>
                <div>{hours} hours</div>
                <div>{minutes} minutes</div>
                <div>{seconds} seconds</div>
                {days === 0 && hours === 0 && minutes === 0 && seconds === 0 && "Time's up!"}
            </div>
        </div>
    );
}
