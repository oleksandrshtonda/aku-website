import i18n from 'i18next';
import { BACKEND_URL } from '../../../../config.ts';

export type Document = {
  ua: string;
  en: string;
};

export interface CustomerData {
  email: string;
  name: string;
  fatherName: string;
  surname: string;
  phone: string;
  documentType: Document;
}

export class OrderDocumentsApi {
  static async send(data: CustomerData): Promise<boolean> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(`${BACKEND_URL}/email`, options);
    
    return response.ok;
  }
  
  static transformDoc(documentType: string): Document {
    return {
      ua: i18n.t(documentType, { lng: 'uk' }),
      en: i18n.t(documentType, { lng: 'en' }),
    };
  }
}