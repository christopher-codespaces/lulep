import React from "react";
import Image from "next/image";
import bongani from "./assets/bongani.png";
import brain from "./assets/brain.png";
import christopher from "./assets/christopher.png";



const Team = () => {
  return (
    <>
      <section>
        <h1
          style={{
            fontSize: 34,
            textAlign: "center",
            fontWeight: "900",
            marginTop: 150,
          }}
        >
          Team
        </h1>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={bongani}
                alt="Director"
                loading="lazy"
                layout="responsive"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Bongani Voyiya
              </h1>
              <h2>Director</h2>


              <div className="mt-4"></div>
            </div>
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src="brain"
                alt="Brain Makombe"
                loading="lazy"
                layout="responsive"
              />

              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Brain Makombe</h1>
              <h2>Director</h2>
              <div className="mt-4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;