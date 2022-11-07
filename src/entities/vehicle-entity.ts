import { IVehicle } from '../interfaces/Vehicle-interface'

export class Vehicle implements IVehicle {
  id: number
  name: string
  description: string

  constructor (props: IVehicle) {
    Object.assign(this, props)
  }
}
