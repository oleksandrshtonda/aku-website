import './PDFViewer.scss';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { FC, useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useTranslation } from 'react-i18next';
import { Button } from '../../UI/Button';
import LoaderBox from '../loader/loader.component.tsx';

interface Props {
  uriToPDF: string,
}

const calculateSize = (screenWidth: number): number => {
  return screenWidth - 80;
}

export const PDFViewer: FC<Props> = ({ uriToPDF }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [width, setWidth] = useState(calculateSize(960));
  const { t } = useTranslation();
  
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  
  const goToNextPage = () => {
    if (currentPage < (numPages || 0)) setCurrentPage(currentPage + 1);
  };
  
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  
  useEffect(() => {
    const updateWidth = () => {
      const mainElement = document.querySelector(".main");
      
      if (mainElement) {
        const newWidth = mainElement.clientWidth;
        console.log("Ширина main:", newWidth);
        setWidth(calculateSize(newWidth));
      }
    };
    
    const handleResize = () => {
      clearTimeout((window as any).resizeTimer);
      (window as any).resizeTimer = setTimeout(updateWidth, 100);
    };
    
    updateWidth();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div
      className="pdf-viewer"
    >
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
      
      <Document
        file={uriToPDF}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<LoaderBox loaderType="falling-lines" />}
      >
        <Page
          pageNumber={currentPage}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          width={width}
          loading={<LoaderBox loaderType="falling-lines" />}
        />
      </Document>
    </div>
  );
};
