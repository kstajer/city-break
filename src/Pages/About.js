import React from 'react'
import { SocialIcon } from 'react-social-icons';

const About = () => {
  return (
    <div className='content about'>
        <div className='title'>O stronie</div>
        <div className='content'>
          Strona zawiera inspiracje i informacje pomagające 
          zorganizować krótki weekendowy wyjazd. Kolejne miasta będą dodawane :)
        </div>
        <div className='content'>
          Karol Stajer
          <br/>
          kastajer1@gmail.com
        </div>
        <div className='socials'>
          <SocialIcon url="https://github.com/kstajer" />
          <SocialIcon url="https://www.linkedin.com/in/karolstajer/" />
        </div>

    </div>

  )
}

export default About