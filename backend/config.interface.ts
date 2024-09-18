/*
      This is the interface for config.
      You need to create config.ts at the /backend folder
      To feel the file, write like this:
        export const SEND_EMAIL: SEND_EMAIL_I = {
          ...
        }
        
        export const EMAIL_DATA: EMAIL_DATA_I = {
          ...
        }
      
      Your IDE will help you to fill the config.ts in the right way
 */

export interface SEND_EMAIL_I {
  fromEmail: string;
  toEmail: string;
}

export interface EMAIL_DATA_I {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}
