import './Input.scss';
import { ChangeEvent, Dispatch, FC, HTMLInputTypeAttribute, ReactNode, SetStateAction } from 'react';
import classNames from 'classnames';

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
  
  const getClassNames = (element: string ): string => {
    return classNames(
      {[`${belongsTo}__${element}`]: belongsTo && belongsTo.length > 1},
      element,
      {[`${element}--error`]: error.length > 0}
    )
  }
  
  return (
    <>
      <input
        className={getClassNames('input')}
        placeholder={children ? children.toString() : ''}
        type={type}
        value={value}
        onChange={changeTextHandler}
        required={required}
      />
      
      <p className={getClassNames('under-text')}>
        {error}
      </p>
    </>
  );
};
