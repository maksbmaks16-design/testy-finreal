import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Vercel obsługuje tylko specyficzne metody
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metoda niedozwolona' });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Wszystkie wymagane pola muszą być wypełnione.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Formularz Kontaktowy" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL || process.env.SMTP_USER,
      subject: `Nowa wiadomość od ${firstName} ${lastName}`,
      text: `
        Imię: ${firstName}
        Nazwisko: ${lastName}
        E-mail: ${email}
        Telefon: ${phone || "Nie podano"}
        
        Wiadomość:
        ${message}
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Wiadomość została wysłana pomyślnie!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Błąd serwera pocztowego. Sprawdź konfigurację SMTP w Vercel." });
  }
}
