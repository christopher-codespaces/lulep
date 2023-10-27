import React from "react";

const NGO= () => {
    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                    <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                    Bridging Gaps, Inspiring Minds: Join Our Educational Journey
                    </h1>

                        <p className="mt-8 text-base text-gray-600 sm:text-xl">
                        {`Addressing a crucial need in education,  Lesedi*Ukhanyo*Light Academy  was founded to bridge content and pedagogical gaps,
                        empowering teachers to effectively teach Mathematics, Languages, and Sciences.
                        Our mission is to improve learner outcomes and create opportunities for future mathematicians, scientists, doctors, and engineers from marginalized communities.`}                        </p>

                        <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Start exploring </a>


                        </div>
                    </div>

                    <div>
                        <img className="w-full" src="https://images.pexels.com/photos/18395403/pexels-photo-18395403/free-photo-of-teacher-with-learners-in-classroom.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NGO;
