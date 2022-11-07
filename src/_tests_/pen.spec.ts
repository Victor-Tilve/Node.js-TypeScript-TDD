import { Pen } from '../models/pen-model'

describe('Pen', () => {
  test('write', () => {
    const pen = new Pen()
    expect(pen.message).toBe('Hola Mundo')
  })
})
