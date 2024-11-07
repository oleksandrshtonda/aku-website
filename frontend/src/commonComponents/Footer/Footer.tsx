import './Footer.scss';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { t } = useTranslation();
  
  const getClassNames = ({ isActive }: { isActive: boolean }) => {
    return classNames('nav__link', { 'nav__link--is-active': isActive });
  }
  
  return (
    <footer className="footer">
      <div className="author">
        <p className="author__label">
          {t("footer.author")}
        </p>
      </div>
      
      <nav className="footer__nav nav">
        <ul className="nav__links">
          <li className="nav__item">
            <NavLink to={'/'} className={getClassNames}>
              {t('header.navigation.home')}
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
    </footer>
  );
};
