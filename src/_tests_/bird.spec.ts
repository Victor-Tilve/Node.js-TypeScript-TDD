import { Bird, Eagle, Penguin } from '../models/bird-model'

describe('Bird', () => {
  test('Should be a Bird', () => {
    const brid = new Bird({
      name: 'Bird',
      age: 20,
      origen: 'North America'
    })
    expect(brid.fly()).toEqual('Bird')
  })

  test('Should Fly', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 20,
      origen: 'North America'
    })
    expect(eagle.fly()).toEqual('Eagle')
  })

  test('Should not Fly', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 20,
      origen: 'North America'
    })
    expect(penguin.fly()).toEqual(new Error('I can not Fly'))
  })

  test('Should Walk and swim', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 20,
      origen: 'North America'
    })
    expect(penguin.walk()).toEqual('I can Walk')
    expect(penguin.swim()).toEqual('I can Swim')
  })
})
