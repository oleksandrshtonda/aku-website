import { CustomerData } from './customerData.interface';

function formatDate(lang: 'en' | 'uk'): string {
  const today = new Date();
  const day = today.getDate();
  const monthIndex = today.getMonth();
  const year = today.getFullYear();
  
  if (lang === 'uk') {
    const dayStr = String(day).padStart(2, '0');
    const monthStr = String(monthIndex + 1).padStart(2, '0');
    
    return `${dayStr}-${monthStr}-${year}`;
  }
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[monthIndex];
  
  const getOrdinalSuffix = (num: number): string => {
    if (num > 3 && num < 21) {
      return 'th';
    }
    
    const lastDigit = num % 10;
    
    return lastDigit === 1 ? 'st' : lastDigit === 2 ? 'nd' : lastDigit === 3 ? 'rd' : 'th';
  };
  
  return `${day}${getOrdinalSuffix(day)} of ${month} ${year}`;
}

export class OrderMarkup {
  static get(data: CustomerData): string {
    const { name, surname, phone, email, fatherName, documentType } = data;

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
  
  static getForClient(data: CustomerData): string {
    const { name, surname, fatherName, documentType } = data;
    
    return fatherName ? (
      `
        <h2>Добрий день, ${surname} ${name} ${fatherName}!</h2>
        <hr />
        <p>
          ${formatDate('uk')} Ви замовили ${documentType.ua.toLowerCase()} на нашому веб-сервісі!
          В найближчий робочий день з Вами зв'яжуться стосовно Вашого замовлення!
          
          Якщо замовлення зробили не Ви, будь ласка, повідомте про це електронним листом на <a href="mailto:worldbreedersfederation@gmail.com">worldbreedersfederation@gmail.com</a>!
        </p>
      `
    ) : (
      `
        <h2>Hello, ${name} ${surname}!</h2>
        <hr />
        <p>
          ${formatDate('en')}, you have ordered a ${documentType.en.toLowerCase()} on our web service!
          A representative will contact you on the next business day regarding your order.

          If you did not place this order, please let us know by sending an email to <a href='mailto:wbf.inf@gmail.com'>wbf.inf@gmail.com</a>!
        </p>
      `
    );
  }
}
