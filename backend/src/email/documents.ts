export type Document = {
  ua: string;
  en: string;
};

export interface Documents {
  [key: string]: Document;
}

export const documents: Documents = {
  pedigree: {
    ua: 'Родовід',
    en: 'Pedigree',
  },
  dogsBirthCertificate: {
    ua: 'Свідоцтво про народження',
    en: "Dog's birth certificate",
  },
  tribalCard: {
    ua: 'Племінна карта',
    en: 'Tribal card',
  },
  certificateOfBreedingMale: {
    ua: 'Сертифікат племінного кобеля',
    en: 'Certificate of breeding male',
  },
  certificateOfBreedingFemale: {
    ua: 'Сертифікат племінної суки',
    en: 'Certificate of breeding female',
  },
  kennelCertificate: {
    ua: 'Свідоцтво розплідника',
    en: 'Kennel Certificate',
  },
  championCertificate: {
    ua: 'Сертифікат чемпіону',
    en: 'Champion certificate',
  },
  certificateOfWorkingQualities: {
    ua: 'Сертифікат з робочих якостей',
    en: 'Certificate of working qualities',
  },
};
