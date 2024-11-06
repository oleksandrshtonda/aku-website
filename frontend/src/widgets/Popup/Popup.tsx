import './Popup.scss';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

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
    <div className="popup">
      <header className="popup__header">
        <button
          className="popup__close-button"
          onClick={handleClosePopup}
        >
          X
        </button>
      </header>
      
      <h1 className="popup__heading">
        {title}
      </h1>
      
      <div className="popup__body">
        {children}
      </div>
    </div>
  );
};
