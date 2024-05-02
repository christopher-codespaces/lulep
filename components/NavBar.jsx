import { useState } from 'react';
import Image from 'next/image';
import lulep from './assets/lulep.png';

const NavBar = () => {
  // Removed state since it's not needed for desktop view
  const navigation = [
    { title: 'About Us', path: 'aboutus' },
    { title: 'Get Involved', path: 'getinvolved' },
    { title: 'Programs', path: 'programs' },
    { title: 'Empower Learning', path: 'empowerlearning' },
    { title: 'Contact Us', path: 'contactus' },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="javascript:void(0)">
            <Image src={lulep} width={120} height={50} alt="Lulep" />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}>
              {/* Icon rendering based on state */}
            </button>
          </div>
        </div>
        {/* Always render the navigation list in desktop view */}
        <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0">
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a href="javascript:void(0)" className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
