import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <h1 className='text-4xl font-bold text-gray-800 mb-8'>¡Hola! Soy Chris, un desarrollador web.</h1>
                <p className='text-xl text-gray-700 mb-8'>Me especializo en construir aplicaciones web modernas y escalables utilizando las últimas tecnologías. Con experiencia en React, Node.js y MongoDB, puedo ayudarte a crear una aplicación web que se ajuste a tus necesidades.</p>
                <div className='flex justify-center'>
                    <Link to='/projects' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full'>
                        Ver mis proyectos
                    </Link>
                </div>
            </div>
        </div>
    );
}
