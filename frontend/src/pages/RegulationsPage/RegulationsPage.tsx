import './RegulationsPage.scss';
import { FC, useState } from 'react';
import { PDFViewer } from '../../widgets/PDFViewer';
import { useTranslation } from 'react-i18next';

export const RegulationsPage: FC = () => {
  const [document, setDocument] = useState<string | null>(null);
  const { t } = useTranslation();
  const lang = t("system.lang");
  const docUrl = `../../documents/pdf/statut_${lang}.pdf`;
  
  import(docUrl).then(doc => setDocument(doc.default));
  
  return (
    <div className="regulations-doc">
      <PDFViewer uriToPDF={document as unknown as string} />
    </div>
  );
};
