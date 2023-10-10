import { useEffect } from 'react';
import laravelCert from '../images/laravel.png';
import englishCert from '../images/ingles.png';
import './certifications.css'; // Importa el archivo CSS que defines anteriormente

export const Certifications = () => {
    useEffect(() => {
        document.body.classList.add('no-overflow-hidden'); // Agrega la clase al cuerpo del documento cuando el componente se monta

        return () => {
            document.body.classList.remove('no-overflow-hidden'); // Elimina la clase cuando el componente se desmonta
        };
    }, []); // El segundo argumento [] asegura que se ejecute solo una vez al montar y desmontar el componente

    const certifications = [
        {
            title: 'Certificación de Laravel',
            institution: 'Academia de Desarrollo Web',
            date: 'Octubre 2022',
            image: laravelCert
        },
        {
            title: 'Certificación de Inglés',
            institution: 'Instituto de Idiomas',
            date: 'Mayo 2023',
            image: englishCert
        }
    ];

    return (
        <div className='bg-gray-100 py-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Mis certificaciones</h2>
                <div className='flex flex-col items-center'>
                    {certifications.map((certification, index) => (
                        <div key={index}>
                            <div

                                className='bg-white rounded-lg shadow-lg p-4 mb-4' // Agrega margen inferior
                                style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                            >
                                <img src={certification.image} alt={certification.title} className='mx-auto mb-4' />

                            </div>
                            <h3 className='text-xl font-bold text-gray-800 text-center'>{certification.title}</h3>
                            <p className='text-gray-700 text-center'>{certification.institution}</p>
                            <p className='text-gray-700 text-center'>{certification.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
