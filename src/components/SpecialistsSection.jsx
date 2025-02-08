import React from "react";

const SpecialistsSection = () => {
  const specialists = [
    {
      name: "Dr. Emily Johnson",
      expertise: "Psychiatrist",
      image: "/src/assets/specialist1.jpeg",
    },
    {
      name: "Dr. Mark Stevens",
      expertise: "Therapist",
      image: "/src/assets/specialist2.jpeg",
    },
    {
      name: "Dr. Rachel Lee",
      expertise: "Mental Health Counselor",
      image: "/src/assets/specialist3.jpeg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="specialists">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Meet Some of Our Specialists
        </h2>
        <div className="flex justify-center gap-8">
          {specialists.map((specialist, index) => (
            <div
              key={index}
              className="bg-white text-blue-600 p-8 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <img
                src={specialist.image}
                alt={specialist.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-xl">{specialist.name}</h3>
              <p className="text-sm text-gray-500">{specialist.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
