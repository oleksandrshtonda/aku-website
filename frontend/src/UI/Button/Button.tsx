import './Button.scss';
import classNames from 'classnames';
import { ReactNode } from 'react';

type ButtonType = 'primary' | 'secondary';

interface Props {
  callback: () => void;
  type: ButtonType;
  belongsTo?: string;
  children: ReactNode;
}

export const Button: React.FC<Props> = ({ callback, type, children, belongsTo }) => {
  const getClassName = () => {
    return classNames(
      {[`${belongsTo}__button`]: belongsTo && belongsTo?.length > 0},
      'button',
      { 'button--primary': type === 'primary' },
      { 'button--secondary': type === 'secondary' },
    );
  }
  
  return (
    <button
      className={getClassName()}
      onClick={callback}
    >
      {children}
    </button>
  );
};
