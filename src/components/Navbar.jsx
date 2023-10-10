import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center py-4 px-6'>
      <h1 className='font-bold text-3xl transition duration-500 ease-in-out transform hover:-translate-y-1'>ChrisDev_</h1>
      <ul className='flex'>
        <li>
          <Link to="/" className='hover:text-gray-300 transition duration-500 ease-in-out'>Home</Link>
        </li>
        <li className='ml-10'>
          <Link to="/aboutme" className='hover:text-gray-300 transition duration-500 ease-in-out'>About Me</Link>
        </li>
        <li className='ml-10'>
          <Link to="/projects" className='hover:text-gray-300 transition duration-500 ease-in-out'>Projects</Link>
        </li>
        <li className='ml-10'>
          <Link to="/certifications" className='hover:text-gray-300 transition duration-500 ease-in-out'>Certifications</Link>
        </li>
      </ul>
      <Link to="/contact" className='bg-white text-gray-900 py-2 px-4 rounded-full transition duration-500 ease-in-out hover:bg-gray-300 hover:text-gray-900'>Contact</Link>
    </nav>
  );
}