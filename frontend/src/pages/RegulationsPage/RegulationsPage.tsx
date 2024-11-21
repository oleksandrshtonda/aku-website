import './RegulationsPage.scss';
import { FC } from 'react';
import doc from '../../documents/pdf/Statut.pdf';
import { PDFViewer } from '../../widgets/PDFViewer';

export const RegulationsPage: FC = () => {
  return (
    <div className="regulations-doc">
      <PDFViewer uriToPDF={doc} />
    </div>
  );
};
