import mongoose from 'mongoose'

const VehicleSchema = new mongoose.Schema({
  name: { type: String },
  model: { type: String },
  year: { type: String },
  color: { type: String }
})

export default VehicleSchema

export class VehicleModel {
  name: string
  model: string
  year: string
  color: string
}
