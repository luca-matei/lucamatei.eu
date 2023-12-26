"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    calculateBMI();
  }, [weight, height]);

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height) / 100;

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      setBMI(null);
      setCategory(null);
    } else {
      const bmiValue = weightValue / (heightValue * heightValue);
      setBMI(bmiValue);

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue < 24.9) {
        setCategory("Normal Weight");
      } else if (bmiValue < 29.9) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">BMI Calculator</h1>
      <div className="mb-4 w-96">
        <label className="block mb-1">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4 w-96">
        <label className="block mb-1">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      {bmi !== null && (
        <div className="mt-4">
          <p className="mb-2">Your BMI is: {bmi.toFixed(2)}</p>
          <p>Category: {category}</p>
        </div>
      )}
      {/* Displaying BMI ranges */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">BMI Categories</h2>
        <ul>
          <li>Underweight: less than 18.5</li>
          <li>Normal weight: 18.5 – 24.9</li>
          <li>Overweight: 25 – 29.9</li>
          <li>Obese: 30 or greater</li>
        </ul>
      </div>
    </>
  );
}
