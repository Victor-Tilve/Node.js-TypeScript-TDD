// Single Responsibility / Dependency inversion
import { Vehicle } from '../entities/vehicle-entity'
import { IVehicleRepository } from '../repositories/vehicle-repository-interface'
import { CreatVehicleDTO } from './create-vehicle-DTO'

export class CreatVehicle {
  constructor (private readonly vehicleRepository: IVehicleRepository) {

  }

  async execute (data: CreatVehicleDTO): Promise<void> {
    const vehicleExist = await this.vehicleRepository.findById(data.id)
    if (vehicleExist !== undefined) {
      throw new Error('Vehicle exist in database')
    }
    const vehicle = new Vehicle(data)
    await this.vehicleRepository.save(vehicle)
  }
}
