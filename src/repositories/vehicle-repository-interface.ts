import { IVehicle } from '../interfaces/Vehicle-interface'

export interface IVehicleRepository {
  findById: (id: number) => Promise<IVehicle>
  save: (vehicle: IVehicle) => Promise<void>
}
