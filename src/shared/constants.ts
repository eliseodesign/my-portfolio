interface Constants {
  readonly NOMBRE: string;
  readonly NOMBRE_COMPLETO: string;
  readonly EMAIL: string;
}

export interface RoutesConstants {
  readonly HOME: string[][];
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
  EMAIL: 'eliseo.arev@gmail.com'
};

/**
* @description Constantes de rutas
*/
export const routesContstants: RoutesConstants = {
  HOME: [
      ['/home', 'Home']
  ],
  PROJECTS: [
      ['/projects', 'Projects']
  ],
  CONTACT: [
      ['/contact', 'Contact']
  ],
  BLOG: [
    ['/blog', 'Blog']
  ]
};