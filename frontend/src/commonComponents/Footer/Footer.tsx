import './Footer.scss';
import { useAppSelector } from '../../store/hooks/hooks.ts';

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { language } = useAppSelector((state) => state.language);
  
  return (
    <footer className="footer">
      { language === 'en' && 'This website was created by Oleksandr Shtonda' }
      { language === 'uk' && 'Цей вебсайт був створений розробником Олександр Штонда' }
      { language === 'pl' && 'Ta strona internetowa została stworzona przez Oleksandr Shtonda' }
    </footer>
  );
};
