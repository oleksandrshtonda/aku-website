import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { CustomerData } from './customerData.interface';
import { OrderMarkup } from './order.markup';
import { EMAIL_DATA, SEND_EMAIL } from '../../config';

@Injectable()
export class EmailService {
  async sendMail(data: CustomerData): Promise<boolean> {
    const transporter = nodemailer.createTransport({
      host: EMAIL_DATA.host,
      port: EMAIL_DATA.port,
      secure: EMAIL_DATA.secure,
      auth: EMAIL_DATA.auth,
    });

    try {
      await transporter.sendMail({
        from: SEND_EMAIL.fromEmail,
        to: SEND_EMAIL.toEmail,
        subject: 'Нове замовлення!',
        html: OrderMarkup.get(data),
      });

      return true;
    } catch (error) {
      return false;
    }
  }
}
