import { VehicleModel } from '../models/vehicle-model'

export interface AddAccountVehicle {
  name: string
  model: string
  year: string
  color: string
  email: string
  sale: string
}

export interface AddAccount {
  add: (vehicle: AddAccountVehicle) => Promise<VehicleModel>
}
