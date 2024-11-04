import './Button.scss';
import classNames from 'classnames';
import { ReactNode } from 'react';

type ButtonType = 'primary' | 'secondary';

interface Props {
  callback: () => void;
  type: ButtonType;
  belongsTo?: string;
  children: ReactNode;
  submit: boolean;
}

export const Button: React.FC<Props> = ({ callback, type, children, belongsTo, submit }) => {
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
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};
