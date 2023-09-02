import { Nav } from '../Nav/Nav'
import './Header.scss';

export const Header = ({ setIsModal }) => {
  return (
    <header className="header">
      <Nav setIsModal={setIsModal} />
    </header>
  )
}