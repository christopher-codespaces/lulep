import React from "react";
import { RiLightbulbLine, RiHandHeartLine, RiBookOpenLine } from 'react-icons/ri';
// Import other required icons from 'react-icons' library

const Mission = () => {
  const features = [
    {
      icon: <RiLightbulbLine className="w-6 h-6 text-indigo-600" />,
      title: "Empowering Teachers",
      desc: "We believe in empowering teachers to create engaging and impactful learning experiences."
    },
    {
      icon: <RiHandHeartLine className="w-6 h-6 text-indigo-600" />,
      title: "Enriching Lives",
      desc: "Our mission is to enrich the lives of learners, enabling them to reach their full potential."
    },
    {
      icon: <RiBookOpenLine className="w-6 h-6 text-indigo-600" />,
      title: "Quality Education",
      desc: "We strive to provide quality education that transcends socio-economic barriers."
    },
    // Add more features/icons as needed
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Empowering Teachers, Enriching Lives
          </h1>
          <p className="mt-3">
           {`At Lesedi Ukhanyo Light Education Project,we are dedicated to provide quality education and empowering learners
             to make a difference in learners' lives through inclassroom mentoring support of content and pedagogy in
              Mathematics ,Languages and Sciences.
           `}
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
