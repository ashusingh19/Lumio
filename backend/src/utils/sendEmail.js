import nodemailer from "nodemailer";

const sendEmail = async (email, otp) => {

  console.log(
    "EMAIL USER =>",
    process.env.EMAIL_USER
  );

  console.log(
    "EMAIL PASS =>",
    process.env.EMAIL_PASS
  );

  const transporter =
    nodemailer.createTransport({

      host: "smtp.gmail.com",

      port: 465,

      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

    });

  const mailOptions = {

    from: process.env.EMAIL_USER,

    to: email,

    subject: "OTP Verification",

    html: `
      <h2>Your OTP Code</h2>
      <h1>${otp}</h1>
      <p>OTP valid for 5 minutes.</p>
    `,
  };

  const info =
    await transporter.sendMail(
      mailOptions
    );

  console.log(
    "MAIL SENT =>",
    info.response
  );
};

export default sendEmail;