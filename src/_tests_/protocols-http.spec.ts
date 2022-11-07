import { UrlWithParsedQuery } from 'url'
import { InvalidArgument } from '../errors/invalid-arg'
import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols Http and Querys', () => {
  test('Url login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:8080/login') as UrlWithParsedQuery

    expect(parsedUrl.href).toBe('http://localhost:8080/login')
    expect(parsedUrl.port).toBe('8080')
  })
  test('Response Query', () => {
    const parsedUrl = (UrlLogin.parseUrl('http://localhost:8080/login?user=user&password=password') as UrlWithParsedQuery)
    const expectAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parsedUrl.query).toEqual(expectAuth)
  })
  test('Invalid Url', () => {
    expect(UrlLogin.parseUrl('')).toStrictEqual(new InvalidArgument(''))
  })
})
