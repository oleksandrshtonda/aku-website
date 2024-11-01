import './Footer.scss';

interface Props {}

export const Footer: React.FC<Props> = () => {
  
  return (
    <footer className="footer">
      {/*{ language === 'en' && 'This website was created by Oleksandr Shtonda' }*/}
      {/*{ language === 'uk' && 'Цей вебсайт був створений розробником Олександр Штонда' }*/}
      {/*{ language === 'pl' && 'Ta strona internetowa została stworzona przez Oleksandr Shtonda' }*/}
    </footer>
  );
};
