import React from "react";
import Slider from "react-slick"; // React Slick Carousel
import { image1, image2, image3 } from "../assets/index.js";

const HeroSection = () => {
  const carouselData = [
    {
      title: "Take care of your mind",
      description:
        "Mental health is just as important as physical health. Start your journey today.",
      image: image1,
    },
    {
      title: "Resources for support",
      description:
        "Find the tools and resources that can help improve your mental well-being.",
      image: image2,
    },
    {
      title: "Guided Meditation",
      description:
        "Discover meditation techniques to help reduce stress and anxiety.",
      image: image3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="relative bg-blue-600 text-white py-12">
      {/* Carousel */}
      <Slider {...settings} className="max-w-7xl mx-auto px-4">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-4">
              <div className="z-10">
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="mt-4 text-lg">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Features Section */}
      <div className="mt-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-amber-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">
              Self-Care Tips
            </h3>
            <p className="mt-2 text-gray-700">
              Simple and actionable tips for improving mental health.
            </p>
            <a
              href="/self-care"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Learn more
            </a>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">
              Therapist Directory
            </h3>
            <p className="mt-2 text-gray-700">
              Find a professional therapist near you for personalized support.
            </p>
            <a
              href="/directory"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Find a Therapist
            </a>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">
              Guided Meditations
            </h3>
            <p className="mt-2 text-gray-700">
              Explore meditation practices designed to reduce stress and
              anxiety.
            </p>
            <a
              href="/meditation"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
