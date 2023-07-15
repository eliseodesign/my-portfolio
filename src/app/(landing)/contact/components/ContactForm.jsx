import { useContext } from 'react';
import { Contexto } from '@/shared/utils/context/Contexto'

function Form() {
  // const { dataLanguage } = useContext(Contexto);yarn add formik
  return (
    <form className="contact-form">
      <input type="text" placeholder="Nombre"/>
      <input type="email" placeholder="Nombre"/>
      <textarea name="" id="" rows="4" placeholder="Asunto"></textarea>
    </form>
  )
}
export default Form