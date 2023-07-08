/* eslint-disable max-len */
import { RoutesConstants, inmutableConstants, routesContstants } from './constants';

interface SEO {
    title: string;
    description: string;
    keywords: string[];
}

type RouteKey = keyof RoutesConstants;

// Definición de las rutas y sus metadatos de SEO
const seoByRoute: Record<RouteKey, SEO> = {
    HOME: {
      title: `${inmutableConstants.NOMBRE} web site`,
      description: 'Complejo Educativo Pedro F. Cantor - oficial website - informate de nuestras publicaciones, eventos y material educativo',
      keywords: [`
            ${inmutableConstants.NOMBRE_COMPLETO} Full-Stack`,
            `Portafolio ${inmutableConstants.NOMBRE}`,
            'Especialista Full-Stack',
            'Programador Full-Stack Web',
            'Servicios de Desarrollo Full-Stack',
            'Proyectos destacados de Desarrollo Full-Stack',
            'Desarrollador Full-Stack con experiencia',
            'Desarrollador Next 13 - React',
            'Desarrollo profesional de aplicaciones web',],
    },
    ABOUT:{
      title: `${inmutableConstants.NOMBRE} | ${routesContstants.PROJECTS[0][1]}`,
      description: `Información sobre ${inmutableConstants.NOMBRE}`,
      keywords: [
        'experiencia', 'typescript', 'tecnologías', 'desarrollo'
      ]
    },
    PROJECTS: {
      title: `${inmutableConstants.NOMBRE} | ${routesContstants.PROJECTS[0][1]}`,
      description: 'Proyectos Fullstack',
      keywords: [
        'proyectos Javacript FullStack', 'typescript Proyectos', 'proyectos personales', 'colaboracion'
      ]
    },
    
    CONTACT: {
      title: `${inmutableConstants.NOMBRE}| ${routesContstants.CONTACT[0][1]}`,
      description: 'Conoce mas sobre mí y contactame',
      keywords: [
        'acerca de', 'formulario de contacto', 'redes', 'github', 'linkedin'
      ]
    },
    BLOG:{
      title: `Inicio - ${inmutableConstants.NOMBRE} | ${routesContstants.BLOG[0][1]}`,
      description: 'Blog personal de tecnología',
      keywords: [
        `${inmutableConstants.NOMBRE} blog`,
        'blog consejos',
        'blog Next',
        'blog React'
      ]
    },
    
};

// Función para obtener los metadatos de SEO de una ruta específica
export function getSEO(route: RouteKey): SEO | undefined {
    return seoByRoute[route];
}