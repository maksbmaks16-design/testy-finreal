import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for contact form
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "Wszystkie wymagane pola muszą być wypełnione." });
    }

    try {
      // Configure Nodemailer
      // NOTE: User must provide these in .env
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.example.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Formularz Kontaktowy" <${process.env.SMTP_USER}>`,
        to: process.env.COMPANY_EMAIL || "biuro@finreal.pl",
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
      res.status(200).json({ message: "Wiadomość została wysłana pomyślnie!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
