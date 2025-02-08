import React from "react";

const DescriptionSection = () => {
  return (
    <section className="bg-amber-50 py-16 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Start Your Journey to a Healthier Mind
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Mental well-being is the foundation of a fulfilling life. At
            MindCare, we provide expert resources, personal support, and guided
            tools to help you prioritize your mental health and wellness.
            Explore our website for tips, therapy resources, and
            stress-relieving practices designed to nurture your mind.
          </p>
        </div>

        {/* Image and Description Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/src/assets/about.jpg" // Replace with your image URL
              alt="Mental Health"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-blue-600">
              Why Prioritize Your Mental Health?
            </h3>
            <p className="text-lg text-gray-700">
              The state of your mind directly affects your physical well-being,
              relationships, and overall happiness. Our goal is to help you
              discover ways to foster mental resilience, reduce stress, and find
              balance in an often chaotic world.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">&#10003;</span> Enhance
                emotional resilience and coping skills.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">&#10003;</span> Build
                self-awareness and positive habits.
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">&#10003;</span> Improve
                focus, sleep, and energy levels.
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Call-to-Action */}
        <div className="mt-12 text-center">
          <a
            href="/resources"
            className="inline-block py-3 px-8 bg-blue-600 text-white text-xl font-semibold rounded-lg transform hover:scale-105 transition-all duration-500"
          >
            Explore Our Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
