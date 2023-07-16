import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function CardInfo() {
  return (
    <section className='contact-info'>
      <h3>Eliseo Francisco Arévalo Espinoza</h3>
      <div className='contact-links'>
        <a title='linkedin' href="https://www.linkedin.com/in/eliseodesign/">
          <FaLinkedin /> <b> in/eliseodesign</b>
        </a>
        <a title='github' href="https://github.com/eliseodesign">
          <FaGithub />  <b> @eliseodesign</b>
        </a>
        <a title='telephone' href="https://api.whatsapp.com/send?phone=+50374629868&text=Hola Eliseo">
          <FaWhatsapp /> <b> +503 74629868</b>
        </a>
        <a title='gmail' href="mailto:eliseo.arev@gmail.com">
          <FaEnvelope /> <b> eliseo.arev@gmail.com</b>
        </a>
      </div>
    </section>
  )
}
export default CardInfo