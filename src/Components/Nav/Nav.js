import { useState } from 'react';
import Logo from '../../img/LOGO_Placeholder.svg'
import './Nav.scss';
export const Nav = ({ setIsModal }) => {
  const [isActive, setIsActive] = useState(false)

  const handleMobileMenu = () => {
    setIsActive(prevState => !prevState)
  }

  return (
    <nav className="nav">
      <img 
        src={Logo} 
        alt="Logo"
        className='nav__logo'
      ></img>
      <button className="nav__btn" onClick={handleMobileMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
      </button>
      <div className={`nav__content ${isActive && 'nav__content--active'}`}>
        <ul className="nav__list">
          <li className="nav__element">
            <a href="#start" className="nav__link">start</a>
          </li>
          <li className="nav__element">
            <a href="#about" className="nav__link">o mnie</a>
          </li>
          <li className="nav__element">
            <a href="#galery" className="nav__link">galeria</a>
          </li>
          <li className="nav__element">
            <a href="" className="nav__link" onClick={(event) => {
              event.preventDefault()
              setIsModal(prevState => !prevState)
            }}>kontakt</a>
          </li>
        </ul>
        <ul className="nav__socials">
          <li className="nav__element-icon">
            <a href="#" className="nav__link-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28.55" height="28.377" viewBox="0 0 28.55 28.377">
                <path id="facebook" d="M28.55,14.348a14.275,14.275,0,1,0-16.505,14.1V18.475H8.42V14.347h3.625V11.2c0-3.577,2.132-5.554,5.392-5.554a21.91,21.91,0,0,1,3.2.28V9.442h-1.8A2.063,2.063,0,0,0,16.5,11.671v2.677h3.959l-.633,4.128H16.5V28.45A14.28,14.28,0,0,0,28.55,14.348Z" transform="translate(0 -0.073)" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li className="nav__element-icon">
            <a href="#" className="nav__link-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28.55" height="28.55" viewBox="0 0 28.55 28.55">
                <path id="instagram" d="M14.275,0C10.4,0,9.913.018,8.39.086A10.526,10.526,0,0,0,4.925.749,6.991,6.991,0,0,0,2.4,2.4,6.965,6.965,0,0,0,.749,4.925,10.5,10.5,0,0,0,.086,8.39C.014,9.913,0,10.4,0,14.275s.018,4.362.086,5.885a10.533,10.533,0,0,0,.664,3.465A7,7,0,0,0,2.4,26.154,6.981,6.981,0,0,0,4.925,27.8a10.539,10.539,0,0,0,3.465.664c1.523.071,2.007.086,5.885.086s4.362-.018,5.885-.086a10.563,10.563,0,0,0,3.465-.664A7.3,7.3,0,0,0,27.8,23.625a10.532,10.532,0,0,0,.664-3.465c.071-1.523.086-2.007.086-5.885s-.018-4.362-.086-5.885A10.557,10.557,0,0,0,27.8,4.925,7.006,7.006,0,0,0,26.154,2.4,6.955,6.955,0,0,0,23.625.749,10.5,10.5,0,0,0,20.16.086C18.637.014,18.153,0,14.275,0Zm0,2.569c3.81,0,4.265.019,5.769.084a7.865,7.865,0,0,1,2.649.494A4.7,4.7,0,0,1,25.4,5.856a7.881,7.881,0,0,1,.491,2.649c.068,1.506.083,1.958.083,5.769s-.018,4.265-.088,5.769a8.033,8.033,0,0,1-.5,2.649,4.533,4.533,0,0,1-1.069,1.644A4.453,4.453,0,0,1,22.678,25.4a7.939,7.939,0,0,1-2.659.491c-1.516.068-1.962.083-5.78.083s-4.266-.018-5.78-.088a8.094,8.094,0,0,1-2.66-.5,4.421,4.421,0,0,1-1.64-1.069,4.334,4.334,0,0,1-1.071-1.642,8.1,8.1,0,0,1-.5-2.659c-.054-1.5-.073-1.962-.073-5.762s.019-4.266.073-5.783a8.092,8.092,0,0,1,.5-2.658A4.232,4.232,0,0,1,4.159,4.174,4.222,4.222,0,0,1,5.8,3.106a7.9,7.9,0,0,1,2.642-.5c1.517-.054,1.963-.071,5.78-.071l.054.036Zm0,4.375a7.33,7.33,0,1,0,7.33,7.33,7.33,7.33,0,0,0-7.33-7.33Zm0,12.088a4.758,4.758,0,1,1,4.758-4.758A4.757,4.757,0,0,1,14.275,19.033ZM23.608,6.656A1.713,1.713,0,1,1,21.9,4.944,1.714,1.714,0,0,1,23.608,6.656Z" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li className="nav__element-icon">
            <a href="#" className="nav__link-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40.275" height="28.377" viewBox="0 0 40.275 28.377">
                <path id="youtube" d="M39.433,7.977a5.061,5.061,0,0,0-3.561-3.585c-3.14-.847-15.734-.847-15.734-.847s-12.594,0-15.736.847A5.063,5.063,0,0,0,.842,7.977C0,11.139,0,17.734,0,17.734s0,6.6.842,9.757A5.061,5.061,0,0,0,4.4,31.075c3.14.847,15.734.847,15.734.847s12.594,0,15.736-.847a5.06,5.06,0,0,0,3.561-3.585c.841-3.162.841-9.757.841-9.757S40.275,11.139,39.433,7.977ZM16.018,23.721V11.746l10.527,5.988Z" transform="translate(0 -3.545)" fill="currentColor"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}