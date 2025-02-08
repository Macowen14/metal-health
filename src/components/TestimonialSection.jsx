import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Mental Health Advocate",
      quote:
        "MindCare helped me find the resources I needed to improve my mental health. The support is invaluable.",
    },
    {
      name: "Jane Smith",
      title: "Therapist",
      quote:
        "A great platform for those who are struggling with mental health. The tools and community are amazing!",
    },
    {
      name: "Sam Johnson",
      title: "Content Creator",
      quote:
        "I highly recommend MindCare to anyone looking to take care of their mental well-being. It's an amazing resource.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-100">
          What Our Users Say
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-lg italic mb-4 leading-relaxed text-gray-600">
                "{testimonial.quote}"
              </p>
              <h3 className="font-bold text-xl text-indigo-600">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
