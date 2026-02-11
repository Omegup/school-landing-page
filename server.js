import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

// ─── ENV ──────────────────────────────────────────────────────────────────────
dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || 3001;

// ─── TRUST PROXY ──────────────────────────────────────────────────────────────
app.set("trust proxy", 1);

// ─── SECURITY ─────────────────────────────────────────────────────────────────
app.use(helmet());

// ─── CORS ──────────────────────────────────────────────────────────────────────
// Allow your Vercel frontend + your main domains
const allowedOrigins = [
  "https://schoolup.info",
  "https://www.schoolup.info",
  "https://schoolup-landing-page-icia.vercel.app",
  "http://localhost:8080",
  "http://localhost:5173",
];

const corsOptions = {
  origin: allowedOrigins, // simple array form
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  optionsSuccessStatus: 204,
};

// apply CORS to all routes (and preflight)
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// ─── JSON PARSING ─────────────────────────────────────────────────────────────
app.use(express.json());

// ─── RATE LIMIT ───────────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per window
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});
// only rate-limit the email endpoint
app.use("/api/send-email", limiter);

// ─── MAILER SETUP ─────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: "mail.schoolup.info", // LWS SMTP server
  port: 465, // SSL port for SMTP
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
  debug: true,
});

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ─── EMAIL TEMPLATES ─────────────────────────────────────────────────────────
// Email templates for different languages
const getEmailTemplate = (
  language,
  name,
  subject,
  message,
  company,
  country,
  phone
) => {
  // Default to English if language is not supported
  const lang = ["en", "fr", "ar"].includes(language) ? language : "en";

  const templates = {
    // English template
    en: `<div style="font-family:'Quicksand',Arial,sans-serif; max-width:600px; margin:0 auto; background:#ffffff;">
          <div style="text-align:center; margin-bottom:30px; padding:20px; background:linear-gradient(135deg, #3879F0 0%, #A068AE 100%);">
            <img src="https://www.schoolup.info/Logo.svg" alt="Forfellow Logo" style="max-width:180px; filter:brightness(0) invert(1);">
          </div>
          <div style="padding:0 20px;">
            <h2 style="color:#3879F0; text-align:center; font-family:'Krona One',Arial,sans-serif; margin-bottom:20px;">Thank You for Contacting Forfellow!</h2>
            <p style="color:#323232; font-size:16px; line-height:1.6;">Dear ${name},</p>
            <p style="color:#323232; font-size:16px; line-height:1.6;">We've received your inquiry about "${subject}". Here are the details you provided:</p>
            <div style="background:#DEEAFF; padding:20px; border-left:4px solid #3879F0; margin:20px 0; border-radius:8px;">
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">Phone:</strong> ${
                phone || "Not specified"
              }</p>
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">Company:</strong> ${
                company || "Not specified"
              }</p>
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">Country:</strong> ${
                country || "Not specified"
              }</p>
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">Message:</strong></p>
              <p style="margin:8px 0; color:#323232; font-style:italic;">${message.replace(
                /\n/g,
                "<br>"
              )}</p>
            </div>
            <p style="color:#323232; font-size:16px; line-height:1.6;">Our educational technology specialists will review your inquiry and respond within 24 hours with detailed information about Forfellow's comprehensive school management platform.</p>
            <p style="color:#323232; font-size:16px; line-height:1.6; margin-top:20px;">Best regards,</p>
            <p style="color:#3879F0; font-size:16px; font-weight:bold;">Forfellow Team</p>
          </div>
          <footer style="font-size:12px; color:#777; text-align:center; margin-top:40px; border-top:1px solid #DEEAFF; padding:20px; background:#f8f9fa;">
            © ${new Date().getFullYear()} Forfellow. All rights reserved.<br>
            <span style="color:#3879F0;">${
              process.env.EMAIL_USER
            }</span> | <a href="https://www.schoolup.info" style="color:#3879F0; text-decoration:none;">www.schoolup.info</a>
          </footer>
        </div>`,

    // French template
    fr: `<div style="font-family:'Quicksand',Arial,sans-serif; max-width:600px; margin:0 auto; background:#ffffff;">
          <div style="text-align:center; margin-bottom:30px; padding:20px; background:linear-gradient(135deg, #3879F0 0%, #A068AE 100%);">
            <img src="https://www.schoolup.info/Logo.svg" alt="Forfellow Logo" style="max-width:180px; filter:brightness(0) invert(1);">
          </div>
          <div style="padding:0 20px;">
            <h2 style="color:#3879F0; text-align:center; font-family:'Krona One',Arial,sans-serif; margin-bottom:20px;">Merci d'avoir contacté Forfellow !</h2>
            <p style="color:#323232; font-size:16px; line-height:1.6;">Cher/Chère ${name},</p>
            <p style="color:#323232; font-size:16px; line-height:1.6;">Nous avons bien reçu votre demande concernant "${subject}". Voici les détails que vous avez fournis :</p>
            <div style="background:#DEEAFF; padding:20px; border-left:4px solid #3879F0; margin:20px 0; border-radius:8px;">
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">Téléphone:</strong> ${
                phone || "Non spécifié"
              }</p>
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">Entreprise:</strong> ${
                company || "Non spécifié"
              }</p>
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">Pays:</strong> ${
                country || "Non spécifié"
              }</p>
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">Message:</strong></p>
              <p style="margin:8px 0; color:#323232; font-style:italic;">${message.replace(
                /\n/g,
                "<br>"
              )}</p>
            </div>
            <p style="color:#323232; font-size:16px; line-height:1.6;">Nos spécialistes en technologie éducative examineront votre demande et vous répondront dans les 24 heures avec des informations détaillées sur la plateforme complète de gestion scolaire Forfellow.</p>
            <p style="color:#323232; font-size:16px; line-height:1.6; margin-top:20px;">Cordialement,</p>
            <p style="color:#3879F0; font-size:16px; font-weight:bold;">L'équipe Forfellow</p>
          </div>
          <footer style="font-size:12px; color:#777; text-align:center; margin-top:40px; border-top:1px solid #DEEAFF; padding:20px; background:#f8f9fa;">
            © ${new Date().getFullYear()} Forfellow. Tous droits réservés.<br>
            <span style="color:#3879F0;">${
              process.env.EMAIL_USER
            }</span> | <a href="https://www.schoolup.info" style="color:#3879F0; text-decoration:none;">www.schoolup.info</a>
          </footer>
        </div>`,

    // Arabic template (right-to-left)
    ar: `<div style="font-family:'Quicksand',Arial,sans-serif; max-width:600px; margin:0 auto; direction:rtl; text-align:right; background:#ffffff;">
          <div style="text-align:center; margin-bottom:30px; padding:20px; background:linear-gradient(135deg, #3879F0 0%, #A068AE 100%);">
            <img src="https://www.schoolup.info/Logo.svg" alt="Forfellow Logo" style="max-width:180px; filter:brightness(0) invert(1);">
          </div>
          <div style="padding:0 20px;">
            <h2 style="color:#3879F0; text-align:center; font-family:'Krona One',Arial,sans-serif; margin-bottom:20px;">شكراً لتواصلك مع Forfellow!</h2>
            <p style="color:#323232; font-size:16px; line-height:1.6;">عزيزي/عزيزتي ${name}،</p>
            <p style="color:#323232; font-size:16px; line-height:1.6;">لقد استلمنا استفسارك بخصوص "${subject}". إليك التفاصيل التي قدمتها:</p>
            <div style="background:#DEEAFF; padding:20px; border-right:4px solid #3879F0; margin:20px 0; border-radius:8px;">
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">الهاتف:</strong> ${
                phone || "غير محدد"
              }</p>
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">الشركة:</strong> ${
                company || "غير محدد"
              }</p>
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">البلد:</strong> ${
                country || "غير محدد"
              }</p>
              <p style="margin:8px 0; color:#323232;"><strong style="color:#3879F0;">الرسالة:</strong></p>
              <p style="margin:8px 0; color:#323232; font-style:italic;">${message.replace(
                /\n/g,
                "<br>"
              )}</p>
            </div>
            <p style="color:#323232; font-size:16px; line-height:1.6;">سيقوم متخصصو التكنولوجيا التعليمية لدينا بمراجعة استفسارك والرد عليك خلال 24 ساعة بمعلومات مفصلة حول منصة Forfellow الشاملة لإدارة المدارس.</p>
            <p style="color:#323232; font-size:16px; line-height:1.6; margin-top:20px;">مع أطيب التحيات،</p>
            <p style="color:#3879F0; font-size:16px; font-weight:bold;">فريق Forfellow</p>
          </div>
          <footer style="font-size:12px; color:#777; text-align:center; margin-top:40px; border-top:1px solid #DEEAFF; padding:20px; background:#f8f9fa;">
            © ${new Date().getFullYear()} Forfellow. جميع الحقوق محفوظة.<br>
            <span style="color:#3879F0;">${
              process.env.EMAIL_USER
            }</span> | <a href="https://www.schoolup.info" style="color:#3879F0; text-decoration:none;">www.schoolup.info</a>
          </footer>
        </div>`,
  };

  return templates[lang];
};

// Get email subject based on language
const getEmailSubject = (language) => {
  const subjects = {
    en: "Thank you for contacting Forfellow - Educational Management Platform",
    fr: "Merci d'avoir contacté Forfellow - Plateforme de Gestion Éducative",
    ar: "شكراً لتواصلك مع Forfellow - منصة إدارة التعليم",
  };

  return subjects[language] || subjects.en;
};

// ─── ENDPOINTS ────────────────────────────────────────────────────────────────
app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, message, company, country, language } = req.body;
  // Default to English if no language is provided
  const userLanguage = language || "en";
  // Use phone as subject or default subject
  const subject = phone ? `Contact from ${phone}` : "Contact Form Inquiry";

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All required fields must be provided",
    });
  }

  if (!isValidEmail(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email format" });
  }

  if (message.length > 5000) {
    return res
      .status(400)
      .json({ success: false, message: "Message is too long" });
  }

  try {
    await transporter.verify();

    // → Org notification (always in English for staff)
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Forfellow Contact Form: ${subject}`,
      html: `<div style="font-family:'Quicksand',Arial,sans-serif; max-width:600px; margin:0 auto; background:#ffffff;">
               <div style="text-align:center; margin-bottom:20px; padding:15px; background:linear-gradient(135deg, #3879F0 0%, #A068AE 100%);">
                 <h2 style="color:#ffffff; font-family:'Krona One',Arial,sans-serif; margin:0;">New Contact Inquiry - Forfellow</h2>
               </div>
               <div style="padding:0 20px;">
                 <p style="color:#323232; font-size:16px;"><strong style="color:#3879F0;">Name:</strong> ${name}</p>
                 <p style="color:#323232; font-size:16px;"><strong style="color:#3879F0;">Email:</strong> ${email}</p>
                 <p style="color:#323232; font-size:16px;"><strong style="color:#3879F0;">Phone:</strong> ${
                   phone || "Not specified"
                 }</p>
                 <p style="color:#323232; font-size:16px;"><strong style="color:#3879F0;">Company:</strong> ${
                   company || "Not specified"
                 }</p>
                 <p style="color:#323232; font-size:16px;"><strong style="color:#3879F0;">Country:</strong> ${
                   country || "Not specified"
                 }</p>
                 <p style="color:#323232; font-size:16px;"><strong style="color:#3879F0;">Subject:</strong> ${subject}</p>
                 <p style="color:#323232; font-size:16px;"><strong style="color:#3879F0;">Language:</strong> ${userLanguage}</p>
                 <div style="background:#DEEAFF; padding:20px; border-left:4px solid #3879F0; margin:20px 0; border-radius:8px;">
                   <h3 style="color:#3879F0; margin-top:0;">Message:</h3>
                   <p style="color:#323232; font-style:italic;">${message.replace(
                     /\n/g,
                     "<br>"
                   )}</p>
                 </div>
               </div>
             </div>`,
    });

    // → Confirmation to sender in their preferred language
    await transporter.sendMail({
      from: `"Forfellow" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: getEmailSubject(userLanguage),
      html: getEmailTemplate(
        userLanguage,
        name,
        subject,
        message,
        company,
        country,
        phone
      ),
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    let msg = "Failed to send email";

    if (
      err.code === "EENVELOPE" &&
      err.response?.includes("Domain not found")
    ) {
      msg = "Email domain not found.";
    } else if (err.code === "EAUTH") {
      msg = "Authentication failed.";
    } else if (["ESOCKET", "ECONNECTION"].includes(err.code)) {
      msg = "Connection to email server failed.";
    }

    res.status(500).json({
      success: false,
      message: msg,
      ...(process.env.NODE_ENV === "development" && { error: err.message }),
    });
  }
});

// Health check
app.get("/health", (_req, res) =>
  res.json({ status: "ok", service: "Schoolup API" })
);

// 404 + generic error
app.use((_req, res) =>
  res.status(404).json({ success: false, message: "Not found" })
);
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

// ─── START ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Schoolup API Server running on port ${PORT}`);
});
