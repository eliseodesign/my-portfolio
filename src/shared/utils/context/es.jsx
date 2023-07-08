const AGE = new Date().getFullYear() - 2004;
const Mydescription = () => {
  return ( 
  <p className="description">
    <span>Hola 👋🏼</span>
    Mi nombre es <b>Eliseo</b> Arévalo tengo <b>{AGE}</b> años. Fullstack developer <b>Javascript</b>, también  <b>.Net</b> developer, estudiante de <b>software</b> en <a href="https://www.esfe.agape.edu.sv/">ESFE</a><br /> <br /> 

    Puedo crear aplicaciones <b>JavaScript</b> Fullstack, domino las herramientas adecuadas y puedo funcionar absolutamente independientemente de ellas. En cada desarrollo el <b>rendimiento</b> y la <b>escalabilidad</b> son prioridades 
    <span></span>
  </p> );
}


const es = 
{
  home:{ 
    title: 'index',
    name: 'Eliseo Arévalo',
    profile: 'Desarrollador Frontend',
    gmail: 'eliseoarevalo20@gmail.com',
    number: 74629868,
    greating: 'Bienvenido a mi web... ¿Ahora a dondé quieres ir?',
    buttons: ['Sobre mí', 'Proyectos', 'Contacto', '<Blog />', 'Servicios'],
  },
  aboutMe:{ 
    title: 'Sobre mí',
    description:<Mydescription />,
    myTec:'¿Qué puedo hacer?'
  },
  projects:{
  },
  contact:{
    form:{
      name:'Tus nombres',
      lastName:'Tus Apellidos',
      affair:'Asunto'
    }
  },
  blog:{
    description:'Esta página no esta terminada pero puedes visitar el repositorio con mis notas'
  }
};

export default es;
