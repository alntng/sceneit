const nodemailer = require('nodemailer')
import {YAHOOID, YAHOOPW} from '../../secrets'

const emailTransporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,
  service: 'yahoo',
  secure: false,
  auth: {
    user: YAHOOID,
    pass: YAHOOPW
  },
  debug: false,
  logger: true
})
