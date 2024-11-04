import './Input.scss';
import { ChangeEvent, Dispatch, FC, HTMLInputTypeAttribute, ReactNode, SetStateAction } from 'react';
import { UtilsUI } from '../UtilsUI.ts';

interface Props {
  children: ReactNode;
  type: HTMLInputTypeAttribute;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  belongsTo: string;
  required: boolean;
  error: string;
}

export const Input: FC<Props> = (
  {
    children,
    type,
    value,
    setValue,
    belongsTo,
    required,
    error,
  }
) => {
  const changeTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  
  return (
    <>
      <input
        className={UtilsUI.getClassNames('input', belongsTo, error)}
        placeholder={children ? children.toString() : ''}
        type={type}
        value={value}
        onChange={changeTextHandler}
        required={required}
      />
      
      <p className={UtilsUI.getClassNames('under-text', belongsTo, error)}>
        {error}
      </p>
    </>
  );
};
