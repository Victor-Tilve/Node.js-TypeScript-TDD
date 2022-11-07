import { FoodHelper } from '../helpers/food-model-helper'
import { FoodModel } from '../models/food-model'

describe('Testing Food Model', () => {
  it('Class FoodModel', () => {
    const foodModel = new FoodModel(
      {
        name: 'Lechuga',
        description: 'Una verdura saludable',
        price: 3000,
        inventory: 25
      })
    expect(foodModel.getName()).toEqual('Lechuga')
    expect(foodModel.getDescription()).toEqual('Una verdura saludable')
    expect(foodModel.getPrice()).toBe(3000)
    expect(foodModel.getInventory()).toBe(25)
    expect(foodModel.getFood()).toEqual(foodModel)
  })
  it('FoodHelper', () => {
    const foodHelper = new FoodHelper()
    expect(foodHelper).toEqual(foodHelper)
  })
})
