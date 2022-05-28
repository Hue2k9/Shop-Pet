const nodemailer = require("nodemailer");

const sendEmail = async (email, username, data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "httt2hauik15@gmail.com",
      pass: "pvguttcyktekoiax",
    },
  });

  const mailOptions = {
    from: "shop pet",
    to: email,
    subject: "Verify shop pet account registration",
    text: `Please click: http://localhost:8080/api/auth/register?username=${username}&code=${data}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  sendEmail,
};
