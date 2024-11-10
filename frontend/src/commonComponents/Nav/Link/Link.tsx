import './Link.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { FC } from 'react';

interface Props {
  href: string;
  label: string;
}

export const Link: FC<Props> = ({ href, label }) => {
  const { t } = useTranslation();
  
  const getClassNames = ({ isActive }: { isActive: boolean }) => {
    return classNames('nav__link', { 'nav__link--is-active': isActive });
  }
  
  return (
    <li className="nav__item">
      <NavLink to={href} className={getClassNames}>
        {t(label)}
      </NavLink>
    </li>
  );
};
