// import { IEmailValidator } from '../protocols/email-validator'
import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('Email Validator', () => {
  it('Should return false validator', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('email@email.com')
    expect(isValid).toBe(false)
  })

  it('Should return true validator', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('email@email.com')
    expect(isValid).toBe(true)
  })
  // it('IEmailValidator', () => {
  //   const emailValidator: IEmailValidator = {
  //     isValid (email: string): boolean {
  //       return false
  //     }
  //   }
  //   expect(emailValidator).toEqual(emailValidator)
  // })
})
