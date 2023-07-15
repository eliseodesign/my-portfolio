'use client'
import { useContext, useEffect } from 'react';
import { Contexto } from '@/shared/utils/context/Contexto';
import Slider from './components/Slider'
import Image from 'next/image'

import { SvgCsharp, SvgMongo, SvgTailwind } from './components'

import { FaJsSquare, FaNode, FaReact, FaSass } from 'react-icons/fa';
import { DiMsqlServer, DiSqllite, DiDotnet } from 'react-icons/di';

function AboutMe(): JSX.Element {
  const { dataLanguage } = useContext(Contexto);

  const { aboutMe } = dataLanguage

  return (
    <>
      <div className="about-info">
        <Image src="/im.jfif" width={150} height={150} alt="eliseodesign"/>
        {aboutMe.description}
      </div>

      <p className="about-title"> {dataLanguage.aboutMe.myTec} 🤔</p>
      <h3>Web</h3>

      <Slider of="backend">
        <p>Express</p>
        <SvgMongo />
        <FaJsSquare />
        <FaSass />
        <FaReact />
        <SvgTailwind />
        <FaNode />
      </Slider>

      <h3>Desktop</h3>
      <Slider of="desktop">
        <DiDotnet />
        <SvgCsharp />
        <DiMsqlServer />
        <DiSqllite />
      </Slider>

    </>
  )
}

export default AboutMe;







