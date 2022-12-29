const AGE = new Date().getFullYear() - 2004;
const Mydescription = () => {
  return ( <p className="description">My name is <b> Eliseo </b> Arévalo, I'm <b>{AGE}</b> year old. A <b>frontend</b> developer and programer, studen of <b>software</b> development in the ESFE                                                                                                                                       
  </p> );
}
 
const en = [
  {
    title: "index",
    name: "Eliseo Arévalo",
    profile: "Frontend developer",
    gmail: "eliseoarevalo20@gmail.com",
    number: 74629868,
    greating: "Welcome to my portfolio web... where do you want to go?",
    buttons: ["About me", "Projects", "Contact", "<Blog />"],
  },
  {
    title: "About me",
    description: <Mydescription/>,
    myTec:"My web tecnologíes"
  },
];

export default en;




