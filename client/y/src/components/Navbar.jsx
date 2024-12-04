import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full flex flex-col md:flex-row justify-between items-center bg-gray-900 p-4">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-bold text-white">Personal Portfolio</h1>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:gap-8`}>
        <h1 className="text-xl md:text-2xl text-white"><Link to='/'>Home</Link></h1>
        <h1 className="text-xl md:text-2xl text-white"><Link to='/about'>About</Link></h1>
        <h1 className="text-xl md:text-2xl text-white"><Link to='/projects'>Projects</Link></h1>
        <h1 className="text-xl md:text-2xl text-white"><Link to='/contacts'>Contacts</Link></h1>
      </div>
    </div>
  );
};

export default Navbar;
