import './Footer.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Nav } from '../Nav';

interface ILink {
  href: string;
  label: string;
}

const LINKS: ILink[] = [
  { href: '/', label: 'header.navigation.home' },
  { href: '/order-documents', label: 'header.navigation.orderDocuments' },
  { href: '/contacts', label: 'header.navigation.contacts' },
];

export const Footer: FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="author">
        <p className="author__label">
          {t("footer.author")}
          <a className="author__link" href="https://www.linkedin.com/in/oleksandr-shtonda/" target="_blank">Oleksandr Shtonda</a>
        </p>
      </div>
      
      <Nav belongsTo={'footer'} links={LINKS} />
    </footer>
  );
};
