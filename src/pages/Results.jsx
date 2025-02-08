import React from "react";
import { useSelector } from "react-redux";

const Results = () => {
  const score = useSelector((state) => state.score);
  const percentage = (score / 40) * 100;

  // Determine color and feedback based on the score
  const getColor = (percentage) => {
    if (percentage < 30) return "bg-green-500"; // Low anxiety
    if (percentage < 60) return "bg-yellow-500"; // Moderate anxiety
    return "bg-red-500"; // High anxiety
  };

  const getFeedback = (percentage) => {
    if (percentage < 30) {
      return <div>Your anxiety is low. Keep up the good work!</div>;
    } else if (percentage < 60) {
      return (
        <div>
          Your anxiety is moderate. Consider practicing relaxation techniques.
        </div>
      );
    } else {
      return (
        <div>
          Your anxiety is high. It’s recommended to seek professional help.
        </div>
      );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto text-center bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Your Anxiety Assessment Result
        </h1>
        <div className={`p-6 text-white rounded-lg ${getColor(percentage)}`}>
          <h2 className="text-2xl font-semibold">Your Anxiety Level</h2>
          <p className="text-5xl font-bold">{Math.round(percentage)}%</p>
        </div>
        <div className="mt-6">{getFeedback(percentage)}</div>
      </div>
    </div>
  );
};

export default Results;
