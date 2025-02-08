import React from "react";
import { Link } from "react-router-dom"; // For routing to different assessment pages

const ResourcePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Mental Health Assessments
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore various assessments to better understand your mental health
          and take the first step toward improving your well-being.
        </p>

        {/* Resource List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          {/* Assessment 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Anxiety Assessment
            </h2>
            <p className="text-gray-500 mb-4">
              Assess your current level of anxiety and learn how to manage it
              effectively.
            </p>
            <Link
              to="/anxiety"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Take the Assessment
            </Link>
          </div>

          {/* Assessment 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Depression Screening
            </h2>
            <p className="text-gray-500 mb-4">
              Take a screening test to evaluate your symptoms and get
              personalized recommendations.
            </p>
            <Link
              to="/assessments/depression"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Take the Assessment
            </Link>
          </div>

          {/* Assessment 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Stress Management Test
            </h2>
            <p className="text-gray-500 mb-4">
              Find out how well you're managing stress and discover strategies
              to cope better.
            </p>
            <Link
              to="/assessments/stress"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Take the Assessment
            </Link>
          </div>

          {/* Assessment 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Sleep Quality Evaluation
            </h2>
            <p className="text-gray-500 mb-4">
              Assess your sleep quality and identify areas for improvement in
              your sleep habits.
            </p>
            <Link
              to="/assessments/sleep"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Take the Assessment
            </Link>
          </div>

          {/* Assessment 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Relationship Health Test
            </h2>
            <p className="text-gray-500 mb-4">
              Evaluate the strength of your relationships and receive tips on
              improving communication.
            </p>
            <Link
              to="/assessments/relationship"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Take the Assessment
            </Link>
          </div>

          {/* Assessment 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Self-Esteem Assessment
            </h2>
            <p className="text-gray-500 mb-4">
              Understand your level of self-esteem and learn ways to improve it.
            </p>
            <Link
              to="/assessments/self-esteem"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Take the Assessment
            </Link>
          </div>
        </div>

        {/* Specialist Section as a Card */}
        <div className="bg-white p-6 rounded-lg  hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 max-w-md mx-auto mt-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Meet Our Specialist
          </h2>
          <div className="flex items-center space-x-6">
            <img
              src="/src/assets/specialist4.jpeg" // Make sure the path is correct and the image exists
              alt="Dr. Mary Joy"
              className="h-32 w-32 rounded-full object-cover border-4 border-blue-600 shadow-lg"
            />
            <div className="text-left flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Dr. Mary Joy
              </h3>
              <p className="text-gray-500 mb-2">
                Clinical Psychologist & Mental Health Specialist
              </p>
              <p className="text-gray-700 mb-4">
                Dr. Mary Joy has over 15 years of experience helping individuals
                manage anxiety, stress, and other mental health challenges. She
                is passionate about empowering individuals to take control of
                their mental well-being through evidence-based approaches.
              </p>
              <Link
                to="/"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Contact Dr. Mary Joy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
