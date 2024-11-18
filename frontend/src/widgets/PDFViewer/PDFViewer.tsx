import './PDFViewer.scss';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { FC, useState } from 'react';
import { Button } from '../../UI/Button';
import { Document, Page } from 'react-pdf';
import { useTranslation } from 'react-i18next';

interface Props {
  uriToPDF: string,
}

export const PDFViewer: FC<Props> = ({ uriToPDF }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageHeight, setPageHeight] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  
  const onPageLoadSuccess = (page: any) => {
    setPageHeight(page.height);
    setPageWidth(page.width);
  };
  
  const goToNextPage = () => {
    if (currentPage < (numPages || 0)) setCurrentPage(currentPage + 1);
  };
  
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  
  const stylesForDoc = {
    height: pageHeight ? pageHeight + 101 : 'unset',
    width: pageWidth ? pageWidth : 'unset',
  }
  
  return (
    <div className="pdf-viewer" style={stylesForDoc}>
      <div className="pagination-controls">
        <Button callback={goToPrevPage} type={'secondary'} submit={false}>
          {t('widgets.pdfViewer.prevBtnLabel')}
        </Button>
        
        <span>
          {t('widgets.pdfViewer.pageLabel')} {currentPage} {t('widgets.pdfViewer.ofLabel')} {numPages}
        </span>
        
        <Button callback={goToNextPage} type={'primary'} submit={false}>
          {t('widgets.pdfViewer.nextBtnLabel')}
        </Button>
      </div>
      
      <hr />
      
      <Document file={uriToPDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={currentPage} onLoadSuccess={onPageLoadSuccess} />
      </Document>
    </div>
  );
};
