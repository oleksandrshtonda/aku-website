import { Document } from './documents';

export interface CustomerData {
  email: string;
  name: string;
  fatherName: string;
  surname: string;
  phone: string;
  documentType: Document;
}
