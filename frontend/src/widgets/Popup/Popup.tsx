import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import './Popup.scss';

interface Props {
  closePopup: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
}

export const Popup: FC<Props> = (
  {
    closePopup,
    title,
    children,
  }
) => {
  const handleClosePopup = () => {
    closePopup(false);
  }
  
  return (
    <div className="popup-container">
      <div className="popup">
        <header className="popup__header">
          <h2 className="popup__heading">
            {title}
          </h2>
          
          <button
            className="popup__close-button"
            onClick={handleClosePopup}
          />
        </header>
        
        
        <div className="popup__body">
          {children}
        </div>
      </div>
    </div>
  );
};
