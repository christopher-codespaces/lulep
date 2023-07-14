import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaUtensils, FaSuitcase, FaPlane, FaHandsHelping } from "react-icons/fa";

const Pro = () => {
  const programs = [
    {
      icon: <FaUserGraduate className="w-6 h-6" />,
      title: "Youth Empowerment",
      description:
        "Our Youth Empowerment program focuses on empowering young individuals through skills training, mentorship, and career guidance. We provide them with the necessary tools and resources to unlock their full potential and succeed in their chosen paths.",
    },
    {
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      title: "Teacher Mentoring",
      description:
        "In our Teacher Mentoring program, we offer support and guidance to teachers in underprivileged schools. We believe that teachers play a crucial role in shaping the future of education, and we provide them with training, resources, and mentoring to enhance their teaching skills and create a positive learning environment for students.",
    },
    {
      icon: <FaUtensils className="w-6 h-6" />,
      title: "Providing Food to Children",
      description:
        "We are committed to ensuring that no child goes to bed hungry. Through our Providing Food to Children program, we distribute nutritious meals to children in need, enabling them to focus on their education and overall well-being. We believe that access to proper nutrition is essential for their growth and development.",
    },
    {
      icon: <FaSuitcase className="w-6 h-6" />,
      title: "Exclusive Trips to South Africa",
      description:
        "Our Exclusive Trips to South Africa program offers young individuals the opportunity to explore the vibrant culture, diverse landscapes, and rich heritage of South Africa. Through guided tours and immersive experiences, we aim to broaden their horizons, inspire a sense of adventure, and create lifelong memories.",
    },
    {
      icon: <FaPlane className="w-6 h-6" />,
      title: "International Exchange Programs",
      description:
        "Through our International Exchange Programs, we facilitate cross-cultural learning experiences for students. By collaborating with partner organizations worldwide, we provide students with the opportunity to immerse themselves in different cultures, gain global perspectives, and develop lifelong connections. We believe in fostering understanding, empathy, and global citizenship.",
    },
    {
      icon: <FaHandsHelping className="w-6 h-6" />,
      title: "Community Engagement",
      description:
        "Our Community Engagement program aims to actively involve community members in social initiatives. We organize volunteering events, community clean-ups, and awareness campaigns to create a positive impact and foster a sense of belonging. Together, we can make a difference and build a stronger community.",
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
