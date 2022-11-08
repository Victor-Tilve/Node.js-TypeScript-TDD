import { AddAccount, AddAccountVehicle } from '../../domain/useCases/add-account'
import VehicleService from '../../services/vehicle-service'

export class DbAddAccount implements AddAccount {
  async add (vehicle: AddAccountVehicle): Promise<AddAccountVehicle> {
    const vehicleDb = await VehicleService.create(vehicle)
    return await new Promise(resolve => resolve(
      vehicleDb
    ))
  }
}
