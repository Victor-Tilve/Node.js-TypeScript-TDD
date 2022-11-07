import { FoodModel } from '../models/food-model'

describe('Testing Food Model', () => {
  it('Class FoodModel', () => {
    const foodModel = new FoodModel('Lechuga',
      'Una verdura saludable', 3000)
    expect(foodModel.getName()).toEqual('Lechuga')
    expect(foodModel.getDescription()).toEqual('Una verdura saludable')
    expect(foodModel.getPrice()).toBe(3000)
  })
})