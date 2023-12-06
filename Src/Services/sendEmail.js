import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDEMAIL,
        pass: process.env.SENDPASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"Infinity Light" <${process.env.SENDEMAIL}>`,
      to,
      subject,
      html,
    });

    // تسجيل نشاط إرسال البريد بنجاح
    console.log(`Email sent successfully: ${info.messageId}`);
  } catch (error) {
    // التعامل مع الأخطاء وتسجيلها
    console.error(`Error sending email: ${error.message}`);
    throw error;
  }
};

export default sendEmail;
