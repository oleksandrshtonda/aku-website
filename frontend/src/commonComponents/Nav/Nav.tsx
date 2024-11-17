import './Nav.scss';
import { FC } from 'react';
import { Link } from './Link';
import { ILinkWithSublinks } from '../interfaces/ILinkWithSublinks.ts';

interface Props {
  belongsTo: string;
  links: ILinkWithSublinks[];
}

export const Nav: FC<Props> = ({ belongsTo, links }) => (
  <nav className={`${belongsTo ? `${belongsTo}__nav` : ''} nav`}>
    <ul className="nav__links">
      { links.map(link => (
        <Link
          href={link.href}
          label={link.label}
          subLinks={link.subLinks}
          key={link.label}
        />
      )) }
    </ul>
  </nav>
);
