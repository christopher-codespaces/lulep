import React from "react";
import Image from "next/image";

const CTA = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium">
            Transforming education
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
           through {`    `}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              {` Lesedi Ukhanyo Light Education Project`} (LULEP) innovative solutions
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
           {`Unleashing the potential of your learners and teachers by harnessing  Lesedi Ukhanyo Light Academy 's advanced tailor-made
              techniques and technology designed to enhance teaching and learning in Mathermatics,Languages and Sciences.`}
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="aboutus"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Learn More
            </a>
            <a
              href="contactus"
              className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-14">
          <Image
            src="https://images.pexels.com/photos/9628111/pexels-photo-9628111.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full shadow-lg rounded-lg border"
            width={900}
            height={80}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
