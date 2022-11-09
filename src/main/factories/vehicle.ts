import { RegisterVehicle } from '../../controllers/register-vehicle/register-vehicle'
import { DbAddAccount } from '../../data/useCases/db-add-account'
import { MailNodemailerProvider } from '../../utils-adapters/nodemailer-adapter'

export const makeRegisterVehicleController = (): RegisterVehicle => {
  const mailNodemailerProvider = new MailNodemailerProvider()
  const dbAddAccount = new DbAddAccount(mailNodemailerProvider)
  const registerVehicle = new RegisterVehicle(dbAddAccount)

  return registerVehicle
}
