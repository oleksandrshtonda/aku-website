import './Footer.scss';
import { useTranslation } from 'react-i18next';

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="author">
        <p className="author__label">
          {t("footer.author")}
        </p>
      </div>
    </footer>
  );
};
