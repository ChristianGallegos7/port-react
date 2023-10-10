
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from 'react-icons/fa';

const contactStyles = {
    background: '#111827',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
};

const iconStyles = {
    fontSize: '2rem',
    marginRight: '8px',
    
};

const iconContainerStyles = {
    display: 'flex',
    alignItems: 'center',
};

export const Contact = () => {
    return (
        <div style={contactStyles} className='-mt-30'>
            <div className='-mt-52'>
                <h2 className='text-3xl mb-10 text-center'>Contact Me</h2>
                <div style={iconContainerStyles} className='gap-10'>
                    <a
                        href="https://www.linkedin.com/in/tu-perfil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:scale-110' // Aplica el efecto de hover aquí
                    >
                        <FaLinkedin style={iconStyles} /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/tu-usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:scale-110'// Aplica el efecto de hover aquí
                    >
                        <FaGithub style={iconStyles} /> GitHub
                    </a>
                    <a
                        href="mailto:tu-email@gmail.com"
                        className='hover:scale-110'// Aplica el efecto de hover aquí
                    >
                        <FaEnvelope style={iconStyles} /> Email
                    </a>
                    <a
                        href="https://www.facebook.com/tu-perfil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:scale-110' // Aplica el efecto de hover aquí
                    >
                        <FaFacebook style={iconStyles} /> Facebook
                    </a>
                </div>
            </div>
        </div>
    );
};
