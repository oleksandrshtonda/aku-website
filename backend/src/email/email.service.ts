import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { CustomerData } from './customerData.interface';
import { OrderMarkup } from './order.markup';

@Injectable()
export class EmailService {
  static transporter = nodemailer.createTransport({});

  static sendMail(data: CustomerData) {
    const info = this.transporter.sendMail({
      from: 'static email 2',
      to: 'static email 2',
      subject: 'Нове замовлення!',
      html: OrderMarkup.get(data),
    });
  }
}
