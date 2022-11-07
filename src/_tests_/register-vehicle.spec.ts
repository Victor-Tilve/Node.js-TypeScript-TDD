import { RegisterVehicle } from '../controllers/register-vehicle'
import { MissingFormalParameter } from '../errors/client-error'

describe('RegisterVehicle', () => {
  test('if the name does not exist return 400', () => {
    // NOTE: System under Test = SUT
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'DXT',
        year: 2020,
        color: 'blue'

      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('name'))
  })

  test('if the model does not exist return 400', () => {
    // NOTE: System under Test = SUT
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'DXT',
        year: 2020,
        color: 'blue'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('model'))
  })

  test('if the year does not exist return 400', () => {
    // NOTE: System under Test = SUT
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        // year: 2020,
        color: 'blue'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('year'))
  })

  test('if the color does not exist return 400', () => {
    // NOTE: System under Test = SUT
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020
        // color: 'blue'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('color'))
  })

  test('if the model is completed return 200', () => {
    // NOTE: System under Test = SUT
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020,
        color: 'blue'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({ message: 'Vehicle was registered successfuly' })
  })
})
