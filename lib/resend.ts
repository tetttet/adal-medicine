"use server";
import { Resend } from "resend";

const resend = new Resend("re_9U49evwb_PTjGZbYFUwYDfUo9HZwkWMuC");

export const sendEmail = async (formData: {
  firstName: string;
  lastName: string;
  emailOrWhatsapp: string;
  contact: string;
  amount?: string;
  comment?: string;
}) => {
  const { firstName, lastName, emailOrWhatsapp, contact, amount, comment } =
    formData;
  const htmlContent = `
  <div style="font-family: Arial, sans-serif; background-color: #ffffff; padding: 20px;">
    <!-- Header / Logo -->
    <div style="text-align: center; margin-bottom: 30px;">
      <img src="https://adal-medicine.vercel.app/images/logo/big-logo-1.png" alt="Adal Medicine" style="height: 150px; object-fit: contain;" />
    </div>

    <!-- Main Content -->
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 10px; border: 1px solid #2b3344;">
      <h2 style="color: #0F172A; margin-bottom: 20px;">Новая заявка на демо</h2>
      <p>Поступила новая предварительная заявка. Пожалуйста, свяжитесь с клиентом для уточнения деталей:</p>

      <ul style="list-style: none; padding: 0; line-height: 1.6; color: #1F2937;">
        <li><strong>Имя:</strong> ${firstName}</li>
        <li><strong>Фамилия:</strong> ${lastName || "-"}</li>
        <li><strong>Email / WhatsApp:</strong> ${emailOrWhatsapp}</li>
        <li><strong>Предпочтительный способ связи:</strong> ${contact}</li>
        <li><strong>Предполагаемый бюджет:</strong> ${amount || "-"}</li>
        <li><strong>Комментарий:</strong> ${comment || "-"}</li>
      </ul>

      <p style="margin-top: 20px;">Спасибо за внимание. Рекомендуется связаться с клиентом как можно скорее.</p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 30px; color: #6B7280; font-size: 12px;">
      <p>Adal Medicine &copy; ${new Date().getFullYear()}</p>
      <p style="margin: 5px 0;">ул. Примерная, 123, Нур-Султан, Казахстан</p>
      <p style="margin: 5px 0;">Тел.: +7 701 123 45 67 | Email: info@adalmedicine.kz</p>
    </div>
  </div>
`;

  await resend.emails.send({
    from: "Adal Medicine <onboarding@resend.dev>",
    to: "fagutlaxabit@gmail.com",
    subject: "Adal Medicine - Запрос демо",
    html: htmlContent,
  });
};

export const sendContactEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  Specialist: string;
  DateTime: string;
  Time: string;
}) => {
  const { firstName, lastName, email, Specialist, DateTime, Time } = formData;
  const htmlContent = `
  <div style="font-family: Arial, sans-serif; background-color: #ffffff; padding: 20px;">
    <!-- Header / Logo -->
    <div style="text-align: center; margin-bottom: 30px;">
      <img src="https://adal-medicine.vercel.app/images/logo/big-logo-1.png" alt="Adal Medicine" style="height: 150px; object-fit: contain;" />
    </div>

    <!-- Main Content -->
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 10px; border: 1px solid #2b3344;">
      <h2 style="color: #0F172A; margin-bottom: 20px;">Новое сообщение с контактной формы</h2>
      <p>Поступило новое сообщение. Пожалуйста, свяжитесь с отправителем для уточнения деталей:</p>

      <ul style="list-style: none; padding: 0; line-height: 1.6; color: #1F2937;">
        <li><strong>Имя:</strong> ${firstName}</li>
        <li><strong>Фамилия:</strong> ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Специалист:</strong> ${Specialist}</li>
        <li><strong>Дата:</strong> ${DateTime}</li>
        <li><strong>Время:</strong> ${Time}</li>
      </ul>

      <p style="margin-top: 20px;">Спасибо за внимание. Рекомендуется связаться с отправителем как можно скорее.</p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; margin-top: 30px; color: #6B7280; font-size: 12px;">
      <p>Adal Medicine &copy; ${new Date().getFullYear()}</p>
      <p style="margin: 5px 0;">ул. Примерная, 123, Нур-Султан, Казахстан</p>
      <p style="margin: 5px 0;">Тел.: +7 701 123 45 67 | Email: info@adalmedicine.kz</p>
    </div>
  </div>
`;

  await resend.emails.send({
    from: "Adal Medicine <onboarding@resend.dev>",
    to: "fagutlaxabit@gmail.com",
    subject: "Adal Medicine - Запрос от контакта",
    html: htmlContent,
  });
};
