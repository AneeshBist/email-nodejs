const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  //smtp connection
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "nathanael48@ethereal.email",
      pass: "NeC92DNVq26w3xYdNx",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"My Ghost 👻" <foo@monasters.com>', // sender address
    to: "giblish@ghosty.com, kamnio@vampy.com", // list of receivers
    subject: "Hello Ghosts ✔", // Subject line
    text: "We welcome all the ghosts and mosnters", // plain text body
    html: "<b>Welcome Amigos !!!</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
