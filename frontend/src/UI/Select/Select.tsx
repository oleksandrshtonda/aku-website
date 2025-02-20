import './Select.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  defaultValue?: boolean;
}

interface Props {
  items: Array<Option>,
  belongsTo: string,
  error: string,
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
}

function getClassNames(belongsTo: string, error: string): string {
  return classNames(
    {[`${belongsTo}__select`]: belongsTo && belongsTo.length > 1},
    'select',
    {'select--error': error.length > 0},
  )
}

export const Select: React.FC<Props> = (
  {
    items,
    value,
    setValue,
    belongsTo,
    error,
  }
) => {
  const { t } = useTranslation();
  
  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  }
  
  return (
    <select
      className={getClassNames(belongsTo, error)}
      value={value}
      onChange={e => changeHandler(e)}
    >
      {items.map((item, index) => (
        <option
          key={index}
          value={item.value}
          disabled={item?.disabled || false}
          // selected={item?.defaultValue || false}
        >
          {t(item.label)}
        </option>
      ))}
    </select>
  );
};
