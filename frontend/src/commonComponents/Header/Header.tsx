import './Header.scss';
import '../../i18n';
import image from '../../assets/aku-logo.png';
import { LangSwitcher } from '../LangSwitcher';
import { Nav } from '../Nav';

interface ILink {
  href: string;
  label: string;
}

const LINKS: ILink[] = [
  {
    href: '/',
    label: 'header.navigation.home',
  },
  {
    href: '/officialdom',
    label: 'header.navigation.officialdom',
  },
];

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={image}
        alt="AKU logo"
      />
      
      <div className="header__right-side">
        <Nav belongsTo={'header'} links={LINKS} />
        
        <LangSwitcher belongsTo={'header'} />
      </div>
    </header>
  );
}
