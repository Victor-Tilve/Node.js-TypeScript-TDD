import { AddAccount, AddAccountVehicle } from '../../domain/useCases/add-account'
import VehicleService from '../../services/vehicle-service'
import { MailNodemailerProvider } from '../../utils-adapters/nodemailer-adapter'

export class DbAddAccount implements AddAccount {
  constructor (private readonly mailNodemailerProvider: MailNodemailerProvider) {
    this.mailNodemailerProvider = mailNodemailerProvider
  }

  async add (vehicle: AddAccountVehicle): Promise<AddAccountVehicle> {
    const vehicleDb = await VehicleService.create(vehicle)
    await this.mailNodemailerProvider.sendMail({
      to: {
        name: vehicle.sale,
        email: vehicle.email
      },
      from: {
        name: 'Victor',
        email: 'victor.tilve@gmail.com'
      },
      subject: 'You have registered a new Vehicle',
      body: '<p> Welcome to your dealer!!!</p>'
    })
    return await new Promise(resolve => resolve(
      vehicleDb
    ))
  }
}
