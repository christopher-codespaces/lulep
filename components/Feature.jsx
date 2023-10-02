import React from "react";
import {
    FiLifeBuoy,
    FiDollarSign,
    FiUserCheck,
    FiBriefcase,
    FiBarChart2,
    FiTarget
  } from 'react-icons/fi';

  const features = [
    {
      icon: <FiLifeBuoy size={46} />,
      title: "Mentorship Support",
      description: "Providing in-classroom mentoring support to Mathematics, Languages, and Science teachers. Addressing challenges and offering guidance for enhanced teaching and learning skills.",
    },

    {
      icon: <FiUserCheck size={46} />,
      title: "Teacher Onboarding",
      description: "Creating seamless onboarding experiences for teachers. Ensuring teachers feel welcome and are equipped with the necessary skills for effective teaching.",
    },
    {
      icon: <FiBriefcase size={46} />,
      title: "Quality Education Products",
      description: "Developing high-quality mentoring programs tailored for Mathematics, Languages, and Science teachers' needs, from ideation to delivery, focusing on excellence in education product development.",
    },
    {
      icon: <FiBarChart2 size={46} />,
      title: "Educational Quality Assurance",
      description: "Maintaining a high standard of quality in mentoring services. Upholding excellence in mentoring programs, teacher support, and positive classroom impact.",
    },
    {
      icon: <FiTarget size={46} />,
      title: "Tangible Educational Outcomes",
      description: "Delivering tangible results in education. Achieving goals through strategic mentoring planning and effective execution, ultimately benefiting teachers and learners.",
    },
  ];


const FeaturesSection = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Shaping young minds as we move</h2>
        </div>
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {features.map((feature, index) => (
            <div key={index} className={`md:p-8 lg:p-14 ${index > 0 ? 'md:border-l md:border-gray-200' : ''} ${index > 2 ? 'md:border-t' : ''}`}>
              {feature.icon}
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">{feature.title}</h3>
              <p className="mt-5 text-base text-gray-600 font-pj">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
