import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import './Popup.scss';
import CIcon from '@coreui/icons-react';
import { cilX } from '@coreui/icons';

type status = '' | 'success' | 'error';

interface Props {
  closePopup: Dispatch<SetStateAction<status>>;
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
    closePopup('');
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
          >
            <CIcon icon={cilX}/>
          </button>
        </header>
        
        
        <div className="popup__body">
          {children}
        </div>
      </div>
    </div>
  );
};
