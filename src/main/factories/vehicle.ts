import { RegisterVehicle } from '../../controllers/register-vehicle/register-vehicle'
import { DbAddAccount } from '../../data/useCases/db-add-account'

export const makeRegisterVehicleController = (): RegisterVehicle => {
  const dbAddAccount = new DbAddAccount()
  const registerVehicle = new RegisterVehicle(dbAddAccount)

  return registerVehicle
}
