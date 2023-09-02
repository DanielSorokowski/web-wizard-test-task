import { useState } from 'react'
import './Modal.scss'

export const Modal = ({setIsModal} ) => {
  const [error, setError] = useState('')
  const [correct, setCorrect] = useState(false)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [accept, setAccept] = useState(false)

  const handleResetForm = () => {
    setError('')
    setName('')
    setSurname('')
    setEmail('')
    setAccept(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!name || !surname || !email || !accept) {
      setError('Proszę uzupełnić wymagane pola!')
      setCorrect(false)
    } else if (!emailRegex.test(email)) {
      setError('Proszę wprowadzić poprawny email!')
      setCorrect(false)
    } else {
      setCorrect(true)
      handleResetForm()

      const formData = {
        name,
        surname,
        email,
        accept,
      };

      const formDataJson = JSON.stringify(formData);
      console.log(formDataJson);
    }
  }

  return (
    <section className="modal">
      <button className="modal__close" onClick={() => setIsModal(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path id="close" d="M15.96,12l7.425-7.425a2.1,2.1,0,0,0,0-2.969l-.99-.99a2.1,2.1,0,0,0-2.97,0L12,8.041,4.576.615a2.1,2.1,0,0,0-2.969,0l-.991.99a2.1,2.1,0,0,0,0,2.97L8.041,12,.617,19.425a2.1,2.1,0,0,0,0,2.97l.99.99a2.1,2.1,0,0,0,2.969,0L12,15.96l7.424,7.425a2.1,2.1,0,0,0,2.97,0l.99-.99a2.1,2.1,0,0,0,0-2.97Zm0,0" fill="currentColor"/>
        </svg>
      </button>
      <form className="modal__form" onSubmit={(event) => handleSubmit(event)}>
        <div className="modal__form-element">
          <label htmlFor="name" className='modal__form-label'>Imię <span className="modal__required">*</span></label>
          <input type="text" placeholder="- wpisz -" name="name" id="name" className='modal__form-input' value={name} onChange={(event) => setName(event.target.value)}></input>
        </div>
        <div className="modal__form-element">
          <label htmlFor="surname" className='modal__form-label'>Nazwisko <span className="modal__required">*</span></label>
          <input type="text" placeholder="- wpisz -" name="surname" id="surname" className='modal__form-input' value={surname} onChange={(event) => setSurname(event.target.value)}></input>
        </div>
        <div className="modal__form-element">
          <label htmlFor="email" className='modal__form-label'>Adres E-Mail <span className="modal__required">*</span></label>
          <input type="text" placeholder="- wpisz -" name="email" id="email" className='modal__form-input' value={email} onChange={(event) => setEmail(event.target.value)}></input>
        </div>
        <p className='modal__form-info'><span className="modal__required">*</span> - pole wymagane</p>
        <div className="modal__form-element-check">
          <input type="checkbox" name="accept" id="accept" className='modal__form-check' checked={accept} onChange={() => setAccept(prevState => !prevState)}></input>
          <label htmlFor="accept" className='modal__form-check-label'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>
        </div>
        <button className="modal__form-btn">Wyślij</button>
        {error && <p className="modal__form-error">{error}</p>}
        {correct && <p className="modal__form-correct">Dziękujemy za wysłanie formularza</p>}
      </form>
    </section>
  )
}