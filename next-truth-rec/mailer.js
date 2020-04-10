const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "mail.alachuacounty.us",
  port: 25,
  secure : false, 
  tls: {
      rejectUnauthorized: false
  }
})

const send = ({ email, text }) => {
 
  const message = {
    from: email,
    to: 'apatel@alachuacounty.us',
    subject: `New message Test`,
    text
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send
