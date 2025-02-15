import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { TailSpin } from 'react-loader-spinner';
import './Button.scss';

type ButtonType = 'primary' | 'secondary';

interface Props {
  callback: () => void;
  type: ButtonType;
  belongsTo?: string;
  children: ReactNode;
  submit: boolean;
  loading?: boolean;
}

export const Button: FC<Props> = ({ callback, type, children, belongsTo, submit, loading }) => {
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
      {loading ? <TailSpin height={21} color="#ffffff" wrapperClass="button__loader" /> : children}
    </button>
  );
};
