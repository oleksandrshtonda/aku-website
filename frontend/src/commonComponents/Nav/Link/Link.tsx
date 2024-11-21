import { FC, useState } from 'react';
import './Link.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ILink } from '../../interfaces/ILink.ts';
import { SubNav } from '../SubNav';

interface Props extends ILink {
  subLinks: ILink[];
}

export const Link: FC<Props> = ({ href, label, subLinks }) => {
  const [ isHovered, setIsHovered ] = useState<boolean>(false);
  const { t } = useTranslation();
  
  const getClassNames = ({ isActive }: { isActive: boolean }) => {
    return classNames('nav__link', { 'nav__link--is-active': isActive });
  }
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => setIsHovered(false);
  
  return (
    <li
      className="nav__item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink
        to={href}
        className={getClassNames}
      >
        {t(label)}
      </NavLink>
      
      { isHovered && subLinks.length > 0 && <SubNav subLinks={subLinks} onClickFunc={handleClick} /> }
    </li>
  );
};
