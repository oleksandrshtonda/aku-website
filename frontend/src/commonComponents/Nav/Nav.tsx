import './Nav.scss';
import { FC } from 'react';
import { Link } from './Link';

interface ILink {
  href: string;
  label: string;
}

interface Props {
  belongsTo: string;
  links: ILink[];
}

export const Nav: FC<Props> = ({ belongsTo, links }) => (
  <nav className={`${belongsTo ? `${belongsTo}__nav` : ''} nav`}>
    <ul className="nav__links">
      { links.map(link => <Link href={link.href} label={link.label} key={link.label} />) }
    </ul>
  </nav>
);
