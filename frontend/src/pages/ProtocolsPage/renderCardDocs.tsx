import { TFunction } from 'i18next';
import { Button } from '../../UI/Button';
import { LinkToDoc } from './protocols.page.tsx';

export const renderDocs = (
  doc: LinkToDoc,
  callBackForButton: (key: LinkToDoc['key']) => void,
  t: TFunction<'translation', undefined>,
  lang: 'en' | 'uk',
) => (
  <article className="links-to-documents__link link" key={doc.key}>
    <h2 className="link__label">{doc[lang].label}</h2>
    
    <Button
      callback={() => callBackForButton(doc.key)}
      type={'primary'}
      submit={false}
      belongsTo="link"
    >
      {t('protocolsPage.protocol.viewButton')}
    </Button>
  </article>
);
