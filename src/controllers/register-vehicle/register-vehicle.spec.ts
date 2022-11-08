import { RegisterVehicle } from './register-vehicle'
import { MissingFormalParameter } from '../../errors/client-error'
import { DbAddAccount } from '../../data/useCases/db-add-account'
import { badRequest } from '../../helpers/http-helper'

const newTimeout = 10000

describe('RegisterVehicle', () => {
  test('if the name does not exist return 400', async () => {
    const dbAddAccount = new DbAddAccount()
    // NOTE: System under Test = SUT
    const sut = new RegisterVehicle(dbAddAccount)
    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'DXT',
        year: 2020,
        color: 'blue'

      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingFormalParameter('name')))
  })

  test('if the model does not exist return 400', async () => {
    const dbAddAccount = new DbAddAccount()
    // NOTE: System under Test = SUT
    const sut = new RegisterVehicle(dbAddAccount)
    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'DXT',
        year: 2020,
        color: 'blue'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingFormalParameter('model')))
  })

  test('if the year does not exist return 400', async () => {
    const dbAddAccount = new DbAddAccount()
    // NOTE: System under Test = SUT
    const sut = new RegisterVehicle(dbAddAccount)
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        // year: 2020,
        color: 'blue'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new MissingFormalParameter('year')))
  })

  test('if the color does not exist return 400', async () => {
    const dbAddAccount = new DbAddAccount()
    // NOTE: System under Test = SUT
    const sut = new RegisterVehicle(dbAddAccount)
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020
        // color: 'blue'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('color'))
  })

  test('if the model is completed return 200', async () => {
    const dbAddAccount = new DbAddAccount()
    // NOTE: System under Test = SUT
    const sut = new RegisterVehicle(dbAddAccount)
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020,
        color: 'blue'
      }
    }
    jest.setTimeout(newTimeout)
    // thrown: Exceeded timeout of 5000 ms for a test. \
    // Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test.
    const httpResponse = await sut.handle(httpRequest) // TODO: I should make a mock
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020,
        color: 'blue'
      }
    })
  })
})
