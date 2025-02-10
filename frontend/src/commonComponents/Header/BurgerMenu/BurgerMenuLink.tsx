import { FC, useState } from 'react';
import { ILink } from '../../interfaces/ILink.ts';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props extends ILink {
  subLinks: ILink[];
}

const BurgerMenuLink: FC<Props> = ({
  label,
  subLinks,
  href,
}) => {
  const [toggled, setToggled] = useState<boolean>(false);
  const { t } = useTranslation();
  
  return (
    <li
      className="burger-nav__item item"
    >
      <NavLink
        to={href}
        className="item__link"
      >
        {t(label)}
      </NavLink>
      
      {subLinks.length > 0 && (
        <button
          onClick={() => setToggled(v => !v)}
          className="item__btn"
        />
      )}
      
      {toggled && subLinks.length > 0 && (
        <ul className="item__sublinks">
          {subLinks.map(link => (
            <li>
              <a href={link.href}>{t(link.label)}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default BurgerMenuLink;
