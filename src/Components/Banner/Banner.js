import './Banner.scss'
import Image from '../../img/reinhart-julian-WxM465oM4j4-unsplash@2x.webp'
import { Parallax } from 'react-parallax';

export const Banner = () => {
  return (
    <section className="banner" id="start">
      {/* <img src={Image} className="banner__image"></img> */}
      <Parallax blur={0} bgImage={Image} bgImageAlt="the cat" strength={500} className='banner__image'>
      </Parallax>
    </section>
  )
}