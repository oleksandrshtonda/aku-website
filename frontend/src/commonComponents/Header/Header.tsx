import './Header.scss';
import image from '../../assets/aku-logo.png';
import '../../i18n';
import { useTranslation } from 'react-i18next';

interface Props {}

export const Header: React.FC<Props> = () => {
  const { t } = useTranslation();
  
  return (
    <header className="header">
      <img
        className="header__logo"
        src={image}
        alt="AKU logo"
      />
      
      <nav className="header__nav nav">
        <ul className="nav__links">
          <li className="nav__link">{t('header.navigation.home')}</li>
          <li className="nav__link">{t('header.navigation.news')}</li>
          <li className="nav__link">{t('header.navigation.officialdom')}</li>
          <li className="nav__link">{t('header.navigation.kennels')}</li>
          <li className="nav__link">{t('header.navigation.orderDocuments')}</li>
          <li className="nav__link">{t('header.navigation.contacts')}</li>
        </ul>
      </nav>
    </header>
  );
}
