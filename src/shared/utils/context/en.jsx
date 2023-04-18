const AGE = new Date().getFullYear() - 2004;
const Mydescription = () => {
  return ( 
  <p className="description">
    <span>Hello 👋🏼</span>

    My name is <b> Eliseo </b> Arévalo, I'm <b>{AGE}</b> years old. A <b>frontend</b> developer and programer, student of <b>software</b> development in the ESFE <br /> <br />

     In building <b>JavaScript</b> applications
     , I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — <b>performance</b> and <b>scalabilty</b> are priorities
    <span></span>
    
 </p> 
 
 );
}

const en = 
{
  home:{
    title: "index",
    name: "Eliseo Arévalo",
    profile: "Frontend Developer",
    gmail: "eliseoarevalo20@gmail.com",
    number: 74629868,
    greating: "Welcome to my web... where do you want to go?",
    buttons: ["About me", "Projects", "Contact", "<Blog />", "Services"],
  },
  aboutMe:{
    title: "About me",
    description: <Mydescription/>,
    myTec:"My web tecnologíes"
  },
  projects:{
  },
  contact:{
    form:{
      name:"Name",
      lastName:"Last Name",
      affair:"Affair"
    }
  },
  blog:{
    description:"This site is in contruction but you can visit my repository of my notes"
  }
};

export default en;




