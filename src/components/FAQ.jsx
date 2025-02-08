import React from "react";
import {
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const FAQ = () => {
  return (
    <section id="faq" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
            <InformationCircleIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                What is mental health, and why is it important?
              </h3>
              <p className="mt-2 text-gray-700">
                Mental health refers to a person’s emotional, psychological, and
                social well-being. It affects how we think, feel, and act in our
                daily lives. Maintaining good mental health is essential for
                managing stress, building relationships, and making decisions.
                Learn more about mental health{" "}
                <a
                  href="https://www.who.int/health-topics/mental-health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
            <QuestionMarkCircleIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                How can I recognize if I’m experiencing mental health
                challenges?
              </h3>
              <p className="mt-2 text-gray-700">
                Mental health challenges can manifest as changes in mood, sleep
                patterns, appetite, or energy levels. You might also feel
                overwhelmed, anxious, or persistently sad. If these symptoms
                last for more than a few weeks, consider reaching out for
                support. For more guidance, visit{" "}
                <a
                  href="https://www.nimh.nih.gov/health/topics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  this page
                </a>
                .
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
            <HeartIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                What should I do if I suspect a friend or loved one is
                struggling with mental health issues?
              </h3>
              <p className="mt-2 text-gray-700">
                If someone you know is struggling, listen without judgment and
                encourage them to seek help. Offer to assist them in finding a
                therapist or other resources. If you believe they’re in danger,
                contact a mental health hotline or emergency services. Visit{" "}
                <a
                  href="https://www.mentalhealth.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  MentalHealth.gov
                </a>{" "}
                for more advice.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
            <LightBulbIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                How can I manage stress and maintain good mental health?
              </h3>
              <p className="mt-2 text-gray-700">
                Managing stress involves adopting healthy habits such as regular
                exercise, mindfulness meditation, maintaining a balanced diet,
                and getting adequate sleep. Staying connected with supportive
                friends and family can also help. Check out our{" "}
                <a
                  href="/resources"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  resources page
                </a>{" "}
                for more tips.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
            <UserGroupIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">
                Where can I find professional mental health support?
              </h3>
              <p className="mt-2 text-gray-700">
                Professional mental health support can be found through
                therapists, counselors, psychologists, or psychiatrists. Many
                online platforms also offer virtual therapy sessions. Explore
                our{" "}
                <a
                  href="/specialists"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Meet Our Specialists
                </a>{" "}
                section for trusted professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
