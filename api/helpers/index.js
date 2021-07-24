  
const nodeMailer = require("nodemailer")

const defaultEmailData = { from: "noreply@node-react.com" }

exports.sendEmail = emailData => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "swatkins876@gmail.com",
      pass: "quxrnqrjhfqdvlgr"
    }
  })
  return transporter
    .sendMail(emailData)
    .then(info => console.log(`Message sent: ${info.response}`.green.inverse))
    .catch(err => console.log(`Problem sending email: ${err}`.red.inverse))
}