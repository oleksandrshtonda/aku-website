import './NotFoundPage.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../../UI/Button';
import dogImage from "../../assets/notFound/not-found-dog.png";

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate('/');
  }
  
  return (
    <div className="not-found-page">
      <img src={dogImage} alt="not found dog" />
      
      <p className="not-found-page__label">
        {t("notFoundPage.label")}
      </p>
      
      <Button
        belongsTo="not-found-page"
        callback={navigateToHomePage}
        type={'primary'}
        submit={false}
      >
        {t("notFoundPage.button.text")}
      </Button>
    </div>
  );
};
