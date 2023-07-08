interface Constants {
  readonly NOMBRE: string;
  readonly NOMBRE_COMPLETO: string;
  readonly EMAIL: string;
  readonly AGE: number
}

export interface RoutesConstants {
  readonly HOME: string[][];
  readonly ABOUT: string[][];
  readonly PROJECTS: string[][];
  readonly CONTACT: string[][];
  readonly BLOG: string[][];
}
/**
* @description Constantes inmutables de la aplicación
*/

export const inmutableConstants: Constants = {
  NOMBRE: 'Eliseo Arévalo',
  NOMBRE_COMPLETO: 'Eliseo Francisco Arévalo',
  EMAIL: 'eliseo.arev@gmail.com',
  AGE:  new Date().getFullYear() - 2004
};

/**
* @description Constantes de rutas
*/
export const routesContstants: RoutesConstants = {
  HOME: [
      ['/home', 'Home', 'Home']
  ],
  ABOUT:[
    ['/about', 'About me', 'Sobre mí']
  ],
  PROJECTS: [
      ['/projects', 'Projects', 'Proyectos']
  ],
  CONTACT: [
      ['/contact', 'Contact', 'Contacto']
  ],
  BLOG: [
    ['/blog', '<Blog />', '<Blog />']
  ]
};