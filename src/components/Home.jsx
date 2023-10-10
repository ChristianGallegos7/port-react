import { Link } from 'react-router-dom';
import me from '../images/me.jpg'

export const Home = () => {
    return (
        <div className='bg-gray-100 flex flex-col lg:flex-row items-center justify-center h-screen'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:w-1/2'>
                <h1 className='text-4xl text-center font-bold text-gray-800 mb-8'>¡Hola! Soy Christian Gallegos, un desarrollador web.</h1>
                <p className='text-xl text-gray-700 mb-8'>Me especializo en construir aplicaciones web modernas y escalables utilizando las últimas tecnologías. Con experiencia en React, Node.js y MongoDB, puedo ayudarte a crear una aplicación web que se ajuste a tus necesidades.</p>
                <div className='flex justify-center'>
                    <Link to='/projects' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full'>
                        Ver mis proyectos
                    </Link>
                </div>
            </div>
            <div className='w-60 h-60 lg:w-1/2 lg:h-auto p-4'>
                <img src={me} alt='Me' className='rounded-full w-full h-full object-cover' />
            </div>
        </div>
    );
}
