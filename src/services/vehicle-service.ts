import { VehicleModel } from '../domain/models/vehicle-model'
import vehicleRepository from '../domain/repositories/vehicle-repository'

export class VehicleService {
  async create (vehicle: VehicleModel): Promise<any> {
    return await vehicleRepository.create(vehicle)
  }
}

export default new VehicleService()
