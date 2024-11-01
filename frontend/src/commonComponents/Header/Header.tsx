import './Header.scss';
import image from '../../assets/aku-logo.png';

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={image}
        alt="AKU logo"
      />
      
      <nav className="header__nav nav">
        <ul className="nav__links">
          <li className="nav__link"></li>
          <li className="nav__link"></li>
          <li className="nav__link"></li>
          <li className="nav__link"></li>
        </ul>
      </nav>
    </header>
  );
}
