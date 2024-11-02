import './LangSwitcher.scss';
import classNames from 'classnames';
import i18next from 'i18next';
import { useState } from 'react';

interface Props {
  belongsTo: string;
}

export const LangSwitcher: React.FC<Props> = ({ belongsTo }) => {
  const [ lang, setLang ] = useState(i18next.language);
  const getClassName = () => {
    return classNames(`${belongsTo}__lang-switcher`, 'lang-switcher');
  }
  
  console.log(lang)
  
  const setLangHandler = (lang: string) => {
    i18next.changeLanguage(lang);
    setLang(lang);
  }
  
  return (
    <div className={getClassName()}>
      <button
        className={
          classNames(
            'lang-switcher__button',
            'lang-switcher__button--en',
            { 'lang-switcher__button--active': lang === 'en' }
          )
        }
        onClick={() => setLangHandler('en')}
      />
      
      <button
        className={
          classNames(
            'lang-switcher__button',
            'lang-switcher__button--uk',
            { 'lang-switcher__button--active': lang === 'uk' }
          )
        }
        onClick={() => setLangHandler('uk')}
      />
    </div>
  );
};
