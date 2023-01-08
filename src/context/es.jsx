const AGE = new Date().getFullYear() - 2004;
const Mydescription = () => {
  return ( 
  <p className="description">
    <span>Hola 👋🏼</span>
    Mi nombre es <b>Eliseo</b> Francisco Arévalo tengo <b>{AGE}</b> años de edad. Soy programador, también desarrollador web <b>frontend</b>, estudiante de la carrera de desarrollo de <b>software</b> en ESFE <br /> <br /> 
    En la creación de aplicaciones de <b>JavaScript</b>, domino las herramientas adecuadas y puedo funcionar absolutamente independientemente de ellas para ofrecer soluciones rápidas y resistentes optimizadas: el <b>rendimiento</b> y la <b>escalabilidad</b> son prioridades 
  </p> );
}
 
const es = [
  {
    title: "index",
    name: "Eliseo Arévalo",
    profile: "Desarrollador Frontend",
    gmail: "eliseoarevalo20@gmail.com",
    number: 74629868,
    greating: "Bienvenido a mi web... ¿Ahora a dondé quieres ir?",
    buttons: ["Sobre mí", "Proyectos", "Contacto", "<Blog />", "Servicios"],
  },
  {
    title: "Sobre mí",
    description:<Mydescription />,
    myTec:"Tecnologías web que uso"
  },
  {},
  {
    description:"Esta página no esta terminada pero puedes visitar el repositorio con mis notas"
  }
];
export default es;
