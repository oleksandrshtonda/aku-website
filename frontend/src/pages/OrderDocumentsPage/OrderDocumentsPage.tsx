import { FC, FormEvent, useEffect, useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import './OrderDocumentsPage.scss';
import { CustomerData, OrderDocumentsApi } from './api/orderDocuments.api.ts';

import { Select } from '../../UI/Select';
import { Button } from '../../UI/Button';
import { Input } from '../../UI/Input';
import { Popup } from '../../widgets/Popup';

const docs = [
  { value: 'document.chooseLabel', label: 'document.chooseLabel', disabled: true, defaultValue: true },
  { value: 'document.pedigree', label: 'document.pedigree' },
  { value: 'document.dogsBirthCertificate', label: 'document.dogsBirthCertificate' },
  { value: 'document.tribalCard', label: 'document.tribalCard' },
  { value: 'document.certificateOfBreedingMale', label: 'document.certificateOfBreedingMale' },
  { value: 'document.certificateOfBreedingFemale', label: 'document.certificateOfBreedingFemale' },
  { value: 'document.kennelCertificate', label: 'document.kennelCertificate' },
  { value: 'document.championCertificate', label: 'document.championCertificate' },
  { value: 'document.certificateOfWorkingQualities', label: 'document.certificateOfWorkingQualities' },
];

export const OrderDocumentsPage: FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [fatherName, setFatherName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [documentType, setDocumentType] = useState<string>('document.chooseLabel');
  const [modalIsShown, setModalIsShown] = useState<boolean>(false);
  
  const [lang, setLang] = useState<string>(i18n.language);
  
  useEffect(() => {
    const handleLanguageChange = (lang: string) => {
      setLang(lang);
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const settersOfTheForm = [setName, setSurname, setEmail, setPhone, setFatherName, setDocumentType];
    settersOfTheForm.forEach(setter => setter(v => v.trim()));
    event.preventDefault();
    
    if (documentType === 'document.chooseLabel') {
      alert('Choose a doc');
      
      return;
    }
    
    const preparedDocs = OrderDocumentsApi.transformDoc(documentType);
    const dataToSend: CustomerData = {
      name,
      surname,
      email,
      phone,
      fatherName: fatherName ? fatherName : '',
      documentType: preparedDocs,
    }
    
    OrderDocumentsApi.send(dataToSend)
      .then(() => {
        setModalIsShown(true);
        settersOfTheForm.forEach(setter => setter(''));
      })
      .catch((e) => alert(e));
  }
  
  return (
    <div className="order-documents">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__heading">
          {t("documentPage.title")}
        </h2>
        
        <Input
          type={'text'}
          value={name}
          setValue={setName}
          belongsTo={'form'}
          required={true}
          error={''}
        >
          {t("documentPage.field.name")}
        </Input>
        
        <Input
          type={'text'}
          value={surname}
          setValue={setSurname}
          belongsTo={'form'}
          required={true}
          error={''}
        >
          {t("documentPage.field.surname")}
        </Input>
        
        {lang === 'uk' && (
            <Input type={'text'}
              value={fatherName}
              setValue={setFatherName}
              belongsTo={'form'}
              required={true}
              error={''}
            >
              {t("documentPage.field.fatherName")}
            </Input>
          )}
        
        <Input
          type={'text'}
          value={email}
          setValue={setEmail}
          belongsTo={'form'}
          required={true}
          error={''}
        >
          {t("documentPage.field.email")}
        </Input>
        
        <Input
          type={'phone'}
          value={phone}
          setValue={setPhone}
          belongsTo={'form'}
          required={true}
          error={''}
        >
          {t("documentPage.field.phone")}
        </Input>
        
        <Select
          belongsTo='form'
          error=''
          items={docs}
          value={documentType}
          setValue={setDocumentType}
        />
        
        <Button
          callback={() => {}}
          type="primary"
          belongsTo="form"
          submit={true}
        >
          {t('documentPage.order')}
        </Button>
      </form>
      
      {modalIsShown && (
        <Popup closePopup={setModalIsShown} title={'Your order has been placed!'}>
          <p>
            Thank you very much for placing the order! <br />
            Our staff will contact you soon. <br />
          </p>
          
          <img
            src="https://i.gifer.com/nTw.webp"
            className="popup__dog-img"
            alt="happy-dog"
          />
        </Popup>
      )}
    </div>
  );
};
