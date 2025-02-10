import { FC } from 'react';
import './BurgerMenu.scss';

import { ILinkWithSublinks } from '../../interfaces/ILinkWithSublinks.ts';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import BurgerMenuLink from './BurgerMenuLink.tsx';

interface Props {
  links: ILinkWithSublinks[],
  shown: boolean,
}

const BurgerMenu: FC<Props> = ({
  links,
  shown
}) => {
  const { t } = useTranslation();
  const classes = classNames(
    'burger-menu',
    { 'burger-menu--shown': shown }
  )
  
  return (
    <div className={classes}>
      <ul>
        { links.map(link => (
          <BurgerMenuLink
            href={link.href}
            subLinks={link.subLinks}
            label={t(link.label)}
            key={link.label}
          />
        )) }
      </ul>
    </div>
  );
};

export default BurgerMenu;
