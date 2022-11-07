import { IVehicle } from '../interfaces/Vehicle-interface'

export interface CreatVehicleDTO extends IVehicle {
  id: number
  name: string
  description: string
}
