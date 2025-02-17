import './protocols.page.scss';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import regulationsUkUrl from '../../documents/pdf/statut_uk.pdf';
import regulationsEnUrl from '../../documents/pdf/statut_en.pdf';

import { Button } from '../../UI/Button';
import { PDFViewer } from '../../widgets/PDFViewer';
import { renderDocs } from './renderCardDocs.tsx';

export interface LinkToDoc {
  en: { label: string; url: string; }
  uk: { label: string; url: string; }
  key: string;
}

const docs: LinkToDoc[] = [
  {
    en: {
      label: 'Regulations',
      url: regulationsEnUrl,
    },
    uk: {
      label: 'Статут',
      url: regulationsUkUrl,
    },
    key: 'regulations',
  }
];

const getUrlByKey = (key: LinkToDoc['key']): LinkToDoc => {
  return docs.find(doc => doc.key === key) as unknown as LinkToDoc;
}

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
