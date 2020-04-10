const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const mailer = require('./mailer')

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('/api/processForm', [
    check('firstName').isLength({ min: 1 }).trim().escape(),
    check('lastName').isLength({ min: 1 }).trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('message').trim().escape()
  ], (req, res) => {
  
    console.log("Received form submission");

    const firstName  = req.body.firstName;
    const lastName  = req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;

    const mailBody = firstName + lastName + email + message;
    const mailFrom = "apatel@alachuacounty.us";

    mailer({ mailFrom, text: mailBody }).then(() => {
      console.log('success')
      res.send('success')
    }).catch((error) => {
      console.log('failed', error)
      res.send('error')
    })


    
    //res.send(req.body);
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})