import './SubNav.scss';
import { FC } from 'react';
import { ILink } from '../../interfaces/ILink.ts';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

interface Props {
  subLinks: ILink[];
  onClickFunc: () => void;
}

export const SubNav: FC<Props> = ({ subLinks, onClickFunc }) => {
  const { t } = useTranslation();
  
  return (
    <div className="sub-nav">
      { subLinks.map(subLink => (
        <NavLink
          className="sub-nav__link"
          key={subLink.label}
          to={subLink.href}
          onClick={onClickFunc}
        >
          { t(subLink.label) }
        </NavLink>
      ))}
    </div>
  );
};
