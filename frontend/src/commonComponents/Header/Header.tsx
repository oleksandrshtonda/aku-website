import { Dispatch, FC, SetStateAction } from 'react';
import './Header.scss';
import '../../i18n';
import image from '../../assets/wbf-logo.png';
import { LangSwitcher } from '../LangSwitcher';
import { Nav } from '../Nav';
import { ILinkWithSublinks } from '../interfaces/ILinkWithSublinks.ts';
import { Link } from 'react-router-dom';
import BurgerButton from '../../UI/BurgerButton/burger-button.component.tsx';

export const LINKS: ILinkWithSublinks[] = [
  {
    href: '/',
    label: 'header.navigation.home',
    subLinks: [],
  },
  {
    href: '/officialdom',
    label: 'header.navigation.officialdom',
    subLinks: [
      { href: '/officialdom/regulations', label: 'header.navigation.officialdom.regulations' },
      { href: '/officialdom/protocols', label: 'header.navigation.officialdom.protocols' },
      { href: '/officialdom/breeding-rules', label: 'header.navigation.officialdom.breedingRules' },
      { href: '', label: 'header.navigation.officialdom.rulesOfEvents' },
      { href: '', label: 'header.navigation.officialdom.regulationsForHoldingSportsEvents' },
      { href: '', label: 'header.navigation.officialdom.RegulationsOnJudgesOnDogExterior' },
      { href: '', label: 'header.navigation.officialdom.RegulationsOnJudgesOnWorkingQualities' },
      { href: '', label: 'header.navigation.officialdom.orders' },
    ],
  },
  {
    href: '/structure-of-organization',
    label: 'header.navigation.structure',
    subLinks: [],
  },
  {
    href: '/about-us',
    label: 'header.navigation.aboutUs',
    subLinks: [],
  },
];

interface Props {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<Props> = ({
  active,
  setActive,
}) => {
  return (
    <header className="header">
      <Link to={'/'}>
        <img
          className="header__logo"
          src={image}
          alt="WBF logo"
        />
      </Link>
      
      <div className="header__right-side">
        <Nav belongsTo={'header'} links={LINKS} />
        
        <LangSwitcher belongsTo={'header'} />
      </div>
      
      <BurgerButton
        active={active}
        setActive={setActive}
      />
    </header>
  );
}
