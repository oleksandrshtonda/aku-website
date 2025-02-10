import { Dispatch, FC, SetStateAction } from 'react';
import './burger-button.component.scss';

interface Props {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const BurgerButton: FC<Props> = ({
  active,
  setActive,
}) => {
  const classes = `burger-button ${active && 'burger-button--active'}`
  const onClickHandle = () => setActive(v => !v);
  
  return (
    <button className={classes} onClick={onClickHandle}>
      <div className="burger-button__line-1"></div>
      <div className="burger-button__line-2"></div>
      <div className="burger-button__line-3"></div>
    </button>
  );
}

export default BurgerButton;