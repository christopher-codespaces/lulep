import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUtensils,
  FaSuitcase,
  FaPlane,
  FaHandsHelping,
} from "react-icons/fa";

const Pro = () => {
  const programs = [
    {
      icon: <FaUserGraduate className="w-6 h-6" />,
      title: "Teacher Mentoring",
      description:
        "In our Teacher Mentoring program, we provide guidance to Mathematics, Languages, and Science teachers.",
    },
    {
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      title: "Saturday Classes",
      description:
        "We offer Saturday classes in Mathematics, Science, and Languages to learners in the schools where we mentor their teachers, providing a synthesis of work covered during the week.",
    },
    {
      icon: <FaUtensils className="w-6 h-6" />,
      title: "Workshops",
      description:
        "We offer 4-hour workshops to schools and their teachers on how to manage learner behavior, how to plan effective and engaging lessons that cater to all different levels of learners, and how to check for learners' understanding during the lessons.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl text-center">
            Our Programs
          </h3>
          <p className="text-gray-600 mt-3 text-center">
            Explore the diverse programs we offer to make a positive impact and transform lives.
          </p>
        </div>
        <div className="grid gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div key={index}>
              <div className="max-w-sm mx-auto">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg">
                  {program.icon}
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {program.title}
                  </h4>
                  <p className="mt-2 text-gray-600">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pro;
