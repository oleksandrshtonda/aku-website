import { FC } from 'react';
import './BurgerMenu.scss';
import { ILinkWithSublinks } from '../../interfaces/ILinkWithSublinks.ts';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

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
      { links.map(link => (
        <Link
          to={link.href}
          key={link.label}
        >
          {t(link.label)}
        </Link>
      )) }
    </div>
  );
};

export default BurgerMenu;
