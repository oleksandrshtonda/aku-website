import { CustomerData } from './customerData.interface';

export class OrderMarkup {
  static get(data: CustomerData) {
    const { name, surname, phone, email, fatherName, documentType } = data;
    console.log(data);

    return `
<div style="max-width: 800px; margin: 100px auto 0;">
  <h3>
    ${surname} ${name} ${fatherName} замовил(а) ${documentType.ua.toLowerCase()}
  </h3>

  <p>
    <strong>Ім'я: </strong>
    <span>${name}</span>
  </p>

  <p>
    <strong>Прізвище: </strong>
    <span>${surname}</span>
  </p>

  <p>
    <strong>По батькові: </strong>
    <span>${fatherName}</span>
  </p>

  <p>
    <strong>Номер телефону: </strong>
    <a href="tel:${phone}">
      ${phone}
    </a>
  </p>

  <p>
    <strong>Електронна пошта: </strong>
    <a href="mailto:${email}">
      ${email}
    </a>
  </p>

  <p>
    <strong>Замовлено:</strong>
    <span>${documentType.ua}</span>
  </p>
</div>
      `;
  }
}
