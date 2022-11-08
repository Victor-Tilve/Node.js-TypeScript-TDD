import mongoose from 'mongoose'
import VehicleSchema from '../models/vehicle-model'

export default mongoose.model('vehicle', VehicleSchema)
