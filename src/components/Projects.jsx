import { FaGithub } from 'react-icons/fa'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import project4 from '../images/project4.png'

export const Projects = () => {
  const projects = [
    {
      title: 'Contador',
      description: 'Contador en JS vanilla',
      githubLink: 'https://github.com/usuario/proyecto1',
      pageLink: 'https://micontadorjs.netlify.app',
      image: project1
    },
    {
      title: 'Peliculas',
      description: 'Lista de peliculas en react',
      githubLink: 'https://github.com/ChristianGallegos7/Peliculas-react',
      pageLink: 'https://peliculasreac.netlify.app/',
      image: project2
    },
    {
      title: 'Validacion de formulario',
      description: 'Manejo de errores de formularios',
      githubLink: 'https://github.com/usuario/proyecto3',
      pageLink: 'https://tranquil-pasca-82227e.netlify.app',
      image: project3
    },
    {
      title: 'Agendar citas de veterinaria',
      description: 'Formulario para agendar citas',
      githubLink: 'https://github.com/usuario/proyecto4',
      pageLink: 'https://zingy-chebakia-8cdc2c.netlify.app',
      image: project4
    }
  ]

  return (
    <div className='bg-gray-100 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Mis proyectos</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='bg-white rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-t-lg' />
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>{project.title}</h3>
                <p className='text-gray-700 mb-4'>{project.description}</p>
                <div className='flex justify-between'>
                  <a href={project.githubLink} target='_blank' className='text-gray-600 hover:text-gray-900' rel="noreferrer"><FaGithub size={24} /></a>
                  <a href={project.pageLink} target='_blank' className='text-gray-600 hover:text-gray-900' rel="noreferrer">Ver proyecto</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
