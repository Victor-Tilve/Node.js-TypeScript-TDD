import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { AddMailAccount, IMessage } from '../domain/useCases/add-email'

export class MailNodemailerProvider implements AddMailAccount {
  private readonly transporter: Mail
  constructor () {
    this.transporter = nodemailer.createTransport({
      host: process.env.HOSTNAME,
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
  }

  async sendMail (message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.to.name,
        address: message.to.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
