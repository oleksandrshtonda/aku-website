import { FC, useState } from 'react';
import { ILink } from '../../interfaces/ILink.ts';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

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
      <a
        href={href}
        className="item__link"
      >
        {t(label)}
      </a>
      
      {toggled && subLinks.length > 0 && (
        <ul className="item__sublinks">
          {subLinks.map(link => (
            <li key={link.href}>
              <a href={link.href}>
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>
      )}
      
      {subLinks.length > 0 && (
        <button
          onClick={() => setToggled(v => !v)}
          className={classNames('item__btn', toggled ? 'item__btn--up-arrow' : 'item__btn--down-arrow')}
        />
      )}
    </li>
  );
}

export default BurgerMenuLink;
