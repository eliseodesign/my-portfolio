import { useContext } from 'react'
import { Contexto } from '@/shared/utils/context/Contexto'
import { projects } from '@/shared/utils/context/projects'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { BiWindowOpen } from 'react-icons/bi'

import '@/style/projects.css'

function Projects() {
	const { dataLanguage } = useContext(Contexto)

	return (
		<div>
			{projects.map((p, i) => {
				return (
					<article
						key={i}
						data-aos="zoom-in"
						className="card"
					>
						<div className="card-img">
							<Image
								src={
									'https://eliseodesign.github.io/assets/images/' +
									p.reference +
									'.png'
								}
								width={250}
								height={250}
								alt={p.reference}
							/>
						</div>
						<div className="project">
							<h2 className="title">{p.name}</h2>
							<p className="text">{p.description}</p>

							<div className="project-tags">
								<span className="tag">{p.tecnologies[0]}</span>
								<span className="tag">{p.tecnologies[1]}</span>
								<span className="tag">{p.tecnologies[2]}</span>
							</div>

							<div className="btns">
								<a
									target="_blank"
									href={p.demo}
									className="button button--primary"
								>
									Demo
								</a>
								<a
									target="_blank"
									href={p.github}
									className="button button--ghost"
								>
									Github
								</a>
							</div>
						</div>
					</article>
				)
			})}
		</div>
	)
}

export default Projects
