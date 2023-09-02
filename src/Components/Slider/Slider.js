import { useState } from 'react';
import './Slider.scss';

const slides = [
  {
    id: 0,
    url: 'https://github.com/DanielSorokowski/web-wizard-test-task/blob/main/src/img/reinhart-julian-_r0lZDocH78-unsplash@2x.webp?raw=true',
    translate: '150% + 150px'
  },
  {
    id: 1,
    url: 'https://github.com/DanielSorokowski/web-wizard-test-task/blob/main/src/img/reinhart-julian-S9BOTsGr2ww-unsplash@2x.webp?raw=true',
    translate: '50% + 50px'
  },
  {
    id: 2,
    url: 'https://github.com/DanielSorokowski/web-wizard-test-task/blob/main/src/img/reinhart-julian-VnI_piHNlok-unsplash@2x.webp?raw=true',
    translate: '-50% - 50px'
  },
  {
    id: 3,
    url: 'https://raw.githubusercontent.com/DanielSorokowski/web-wizard-test-task/main/src/img/reinhart-julian-H4AejIh_l7g-unsplash%402x.webp',
    translate: '-150% - 150px'
  },
]

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(prevState => prevState + 1)
    }
  }

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1)
    } else {
      setCurrentSlide(prevState => prevState - 1)
    }
  }

  const handleDotSlide = (id) => {
    setCurrentSlide(id);
  }

  return (
    <section className="slider" id="galery">
      <h2 className='slider__title'>galeria</h2>
      <div className='slider__content'>
        <div className='slider__slides'>
          {slides.map(slide => (
            <img 
              src={slide.url} 
              className='slider__element' 
              style={{ 
                transform: `translateX(calc(${slides[currentSlide].translate}))`,
                opacity: `${slide.id === currentSlide ? '1' : '0.25'}`
              }}
              key={slide.id}
            ></img>
          ))}
          
        </div>
        <button className='slider__prev' onClick={handlePrevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28.2" height="48" viewBox="0 0 28.2 48">
            <path id="arrow-left" d="M128.912,22.127,107.551.767a2.631,2.631,0,0,0-3.714,0l-1.573,1.573a2.629,2.629,0,0,0,0,3.714L120.2,23.99,102.245,41.947a2.632,2.632,0,0,0,0,3.714l1.573,1.572a2.631,2.631,0,0,0,3.714,0l21.381-21.38a2.65,2.65,0,0,0,0-3.726Z" transform="translate(129.678 48) rotate(180)" fill="currentColor"/>
          </svg>
        </button>
        <button className='slider__next' onClick={handleNextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28.2" height="48" viewBox="0 0 28.2 48">
            <path id="arrow-right" d="M128.912,22.127,107.551.767a2.631,2.631,0,0,0-3.714,0l-1.573,1.573a2.629,2.629,0,0,0,0,3.714L120.2,23.99,102.245,41.947a2.632,2.632,0,0,0,0,3.714l1.573,1.572a2.631,2.631,0,0,0,3.714,0l21.381-21.38a2.65,2.65,0,0,0,0-3.726Z" transform="translate(-101.478)" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <div className='slider__dots'>
        {slides.map(slide => (
          <button 
            className={`slider__dot ${slide.id === currentSlide && 'slider__dot--active'}`}
            onClick={() => handleDotSlide(slide.id)}
            key={slide.id}
          >
          </button>
        ))}
      </div>
    </section>
  )
}