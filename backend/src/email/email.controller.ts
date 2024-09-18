import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { CustomerData } from './customerData.interface';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  async sendEmail(@Body() data: CustomerData): Promise<boolean> {
    console.log(this);

    return await this.emailService.sendMail(data);
  }
}
