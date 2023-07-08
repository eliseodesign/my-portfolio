/* eslint-disable max-len */
export interface DataLanguage {
  home:Home,
  aboutMe:About
  projects:Projects,
  contact: Contact,
  blog: Blog
};

interface Home{
  title: string,
  name: string,
  profile: string,
  gmail: string,
  number: number,
  greating: string
}

interface About{
  title: string,
  description: JSX.Element,
  myTec: string
}

interface Projects{

}

interface Contact{
  form:{
    name: string,
    lastName: string,
    affair: string
  }
}

interface Blog{
  description:string
}

const MyComponent = () => {
  return <br />
}


export const empty:DataLanguage = 
{
  home:{
    title: '',
    name: '',
    profile: '',
    gmail: '',
    number: 0,
    greating: ''
  },
  aboutMe:{
    title: '',
    description: <MyComponent />,
    myTec:''
  },
  projects:{
  },
  contact:{
    form:{
      name:'',
      lastName:'',
      affair:''
    }
  },
  blog:{
    description:''
  }
};