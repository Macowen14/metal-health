import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const AnxietyAssessment = () => {
  const [answers, setAnswers] = useState(Array(8).fill(null)); // Initially, answers are null
  const [error, setError] = useState(false); // Error state for unfilled questions
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Words mapping for the scale
  const scaleWords = ["Very Low", "Low", "Moderate", "High", "Very High"];

  // Function to update the answer of a question
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    setError(false); // Reset error when a selection is made
  };

  // Function to calculate the anxiety score and level
  const calculateAnxietyLevel = () => {
    const totalScore = answers.reduce(
      (sum, answer) => sum + (answer ? answer : 0),
      0
    );
    const maxScore = answers.length * 5; // Maximum score possible (5 points for each question)
    const percentage = (totalScore / maxScore) * 100;
    return { totalScore, percentage };
  };

  const { totalScore, percentage } = calculateAnxietyLevel();

  // Dispatch the score to Redux store
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if all questions are answered
    if (answers.includes(null)) {
      setError(true); // Set error if there are unanswered questions
      return;
    }

    // Dispatch the score and navigate to the results page
    dispatch({ type: "UPDATE_SCORE", payload: totalScore });
    navigate("/results"); // Use navigate instead of history.push
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto text-center bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Anxiety Assessment
        </h1>
        <form onSubmit={handleSubmit}>
          {[
            "How often do you feel nervous or anxious?",
            "How often do you find it hard to relax, even when you have no responsibilities?",
            "How often do you worry about things that aren't directly related to your daily life?",
            "How often do you feel tense, restless, or uneasy?",
            "How difficult is it for you to stay calm during stressful situations?",
            "How overwhelmed do you feel by the demands of your life?",
            "How frequently do you experience physical symptoms of anxiety (e.g., heart racing, shortness of breath)?",
            "How difficult is it for you to control your anxiety when it starts to build up?",
          ].map((question, index) => (
            <div key={index} className="mb-8 text-left">
              {" "}
              {/* Increased bottom margin for spacing */}
              <p className="text-lg text-gray-700 mb-4">{question}</p>{" "}
              {/* Increased bottom margin for question */}
              <div className="flex justify-between space-x-4">
                {" "}
                {/* Added space between answer options */}
                {scaleWords.map((word, value) => (
                  <label key={value} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={value + 1} // Use values from 1 to 5 internally
                      checked={answers[index] === value + 1}
                      onChange={() => handleAnswerChange(index, value + 1)}
                      className="form-radio text-blue-500"
                    />
                    <span>{word}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          {error && (
            <div className="bg-red-500 text-white py-2 px-4 rounded-lg mb-4">
              Please answer all questions before submitting.
            </div>
          )}
          <button
            type="submit"
            className="block mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Submit Assessment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnxietyAssessment;
