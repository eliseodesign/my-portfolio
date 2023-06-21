const AGE = new Date().getFullYear() - 2004;
const Mydescription = () => {
  return ( 
  <p className="description">
    <span>Hello 👋🏼</span>

    My name <b> Eliseo </b> Arévalo, I'm <b>{AGE}</b>. A <b>JavaScript</b> fullstack dev and <b>.Net</b> dev, <b>software</b> development student in <a href="https://www.esfe.agape.edu.sv/">ESFE</a> <br /> <br />

    When it comes to building <b>JavaScript</b> applications, I have the necessary tools and expertise to work efficiently. I am capable of delivering high-performance and scalable solutions independently. Prioritizing <b>performance</b> and <b>scalability</b> is always a key focus in my development process.
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
    myTec:"What I do?"
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




