import './Header.scss';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import image from '../../assets/aku-logo.png';
import { LangSwitcher } from '../LangSwitcher';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  
  const getClassNames = ({ isActive }: { isActive: boolean }) => {
    return classNames('nav__link', { 'nav__link--is-active': isActive });
  }
  
  return (
    <header className="header">
      <img
        className="header__logo"
        src={image}
        alt="AKU logo"
      />
      
      <div className="header__right-side">
        <nav className="header__nav nav">
          <ul className="nav__links">
            <li className="nav__item">
              <NavLink to={'/'} className={getClassNames}>
                {t('header.navigation.home')}
              </NavLink>
            </li>
            
            <li className="nav__item">
              <NavLink to={'/news'} className={getClassNames}>
                {t('header.navigation.news')}
              </NavLink>
            </li>
            
            <li className="nav__item">
              <NavLink to={'/officialdom'} className={getClassNames}>
                {t('header.navigation.officialdom')}
              </NavLink>
            </li>
            
            <li className="nav__item">
              <NavLink to={'/our-partners'} className={getClassNames}>
                {t('header.navigation.ourPartners')}
              </NavLink>
            </li>
            
            <li className="nav__item">
              <NavLink to={'/kennels'} className={getClassNames}>
                {t('header.navigation.kennels')}
              </NavLink>
            </li>
            
            <li className="nav__item">
              <NavLink to={'/order-documents'} className={getClassNames}>
                {t('header.navigation.orderDocuments')}
              </NavLink>
            </li>
            
            <li className="nav__item">
              <NavLink to={'/contacts'} className={getClassNames}>
                {t('header.navigation.contacts')}
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <LangSwitcher belongsTo={'header'} />
      </div>
    </header>
  );
}
