import { AddAccount } from '../../domain/useCases/add-account'
import { MissingFormalParameter } from '../../errors/client-error'
import { badRequest, serverError, success } from '../../helpers/http-helper'
import { Controller } from '../../interfaces/controller-interface'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export class RegisterVehicle implements Controller {
  constructor (private readonly addAccount: AddAccount) {
    this.addAccount = addAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name', 'model', 'year', 'color']

      for (const prop of requiredProperties) {
        if (httpRequest.body[prop] === undefined) {
          return badRequest(new MissingFormalParameter(prop))
        }
      }
      const { name, model, year, color, email, sale } = httpRequest.body
      const vehicle = await this.addAccount.add({
        name, model, year, color, email, sale
      })
      return success(vehicle)
    } catch (error) {
      return serverError(error)
    }
  }
}
