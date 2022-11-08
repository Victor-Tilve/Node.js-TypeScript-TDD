import { VehicleHelper } from '../helpers/vehicle-model-helper'
import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class VehicleModel', () => {
    const vehicleModel = new VehicleModel(
      {
        name: 'Nissan',
        model: 'DXT',
        year: 2020,
        price: 30000,
        inventory: true
      })

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toBe(2020)
    expect(vehicleModel.getPrice()).toBe(30000)
    expect(vehicleModel.getInventory()).toBe(true)
  })
  it('VehicleHelper', () => {
    const vehicleHelper = new VehicleHelper()
    expect(vehicleHelper).toEqual(vehicleHelper)
  })
})