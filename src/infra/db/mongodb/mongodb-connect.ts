import mongoose from 'mongoose'

export default async (): Promise<void> => {
  const url = process.env.MONGODB_URL as string
  await mongoose.connect(url, { dbName: 'tdd' }, (err) => {
    if (err) {
      console.log(err.message)
    } else {
      console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online')
    }
  })
}
