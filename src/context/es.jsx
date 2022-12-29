const AGE = new Date().getFullYear() - 2004;
const Mydescription = () => {
  return ( <p className="description">Mi nombre es <b>Eliseo</b> Francisco Arévalo tengo <b>{AGE}</b> años de edad. Soy programador, y desarrollador web <b>frontend</b>, estudiante de la carrera de desarrollo de <b>software</b> en ESFE</p> );
}
 
const es = [
  {
    title: "index",
    name: "Eliseo Arévalo",
    profile: "Frontend developer",
    gmail: "eliseoarevalo20@gmail.com",
    number: 74629868,
    greating: "Bienvenido a mi portafolio web... ¿Ahora a dondé quieres ir?",
    buttons: ["Sobre mí", "Proyectos", "Contacto", "<Blog />"],
  },
  {
    title: "Sobre mí",
    description:<Mydescription />,
    myTec:"Mis tecnologías web"
  },
];
export default es;
