import yo from '../images/yo.jpg'

export const AboutMe = () => {

  return (
    <div className='bg-gray-100 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-gray-800 mb-8 text-center'>Acerca de mí</h2>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='lg:w-1/2 ml-40'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Christian Gallegos Yaguachi</h3>
            <p className='text-gray-700 mb-4'>Programador web</p>
            <ul className='list-disc list-inside mb-4'>
              <li>Trabajo en equipo</li>
              <li>Confiable</li>
              <li>Sociable</li>
            </ul>
            <img src={yo} alt="me" width={150} className='rounded-full' />
          </div>
          <div className='lg:w-1/2 lg:pl-8 ml-10 '>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Habilidades</h3>
            <ul className='list-disc list-inside mb-4'>
              <li>Node JS | Express</li>
              <li>React | Next</li>
              <li>Tailwind</li>
              <li>Git | Github</li>

            </ul>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Experiencia</h3>
            <ul className='list-disc list-inside mb-4'>
              <li>Practicas Pre-profesionales</li>
            </ul>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Educación</h3>
            <ul className='list-disc list-inside'>
              <li>Unidad Educativa Antonio Jose de Sucre <strong>- Finalizado</strong></li>
              <li>Unidad Educativa Luxemburgo <strong>- Finalizado</strong></li>
              <li>Instituto Tecnologico Superior Cordillera <strong>- En curso</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
