import './ProtocolsPage.scss';
import { FC, useState } from 'react';
import regulationsUrl from '../../documents/pdf/Statut.pdf';
import { Button } from '../../UI/Button';
import { PDFViewer } from '../../widgets/PDFViewer';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

interface LinkToDoc {
  en: { label: string; url: string; }
  uk: { label: string; url: string; }
  key: string;
}

const docs: LinkToDoc[] = [
  {
    en: {
      label: 'Regulations',
      url: regulationsUrl,
    },
    uk: {
      label: 'Статут',
      url: regulationsUrl,
    },
    key: 'regulations',
  }
];

const getUrlByKey = (key: LinkToDoc['key']): LinkToDoc => {
  return docs.find(doc => doc.key === key) as unknown as LinkToDoc;
}

const renderDocs = (
  doc: LinkToDoc,
  callBackForButton: (key: LinkToDoc['key']) => void,
  t: TFunction<"translation", undefined>,
  lang: 'en' | 'uk'
) => (
  <div className="links-to-documents__link link">
    <h2 className="link__label">{doc[lang].label}</h2>
    
    <Button
      callback={() => callBackForButton(doc.key)}
      type={'primary'}
      submit={false}
      belongsTo="link"
    >
      {t("protocolsPage.protocol.viewButton")}
    </Button>
  </div>
)


export const ProtocolsPage: FC = () => {
  const [ currentDoc, setCurrentDoc ] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'uk';
  
  const onClickHandler = (key: string | null): void => {
    setCurrentDoc(key);
  }
  
  return (
    <>
      <h1 className="protocols-heading">
        {t("protocolsPage.heading")}
      </h1>
      
      {currentDoc == null && (
        <div className="links-to-documents">
          {docs.map(doc => {
            return renderDocs(doc, onClickHandler, t, lang);
          })}
        </div>
      )}
      
      {currentDoc !== null && (
        <div className="controls">
          <p>
            {t("protocolsPage.viewer.heading")} {getUrlByKey(currentDoc)[lang].label}
          </p>
          
          <Button
            callback={() => onClickHandler(null)}
            type={'secondary'}
            submit={false}
          >
            {t("protocolsPage.viewer.closeButton")}
          </Button>
        </div>
      )}
      
      {currentDoc && <PDFViewer uriToPDF={getUrlByKey(currentDoc)[lang].url} />}
    </>
  );
};
