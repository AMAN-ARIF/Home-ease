import mongoose from 'mongoose'

const defaultMongoUri = 'mongodb://localhost:27017/homeease'

export async function connectToDatabase(mongoUri = process.env.MONGO_URI || defaultMongoUri) {
  if (mongoose.connection.readyState === 1) return mongoose.connection
  mongoose.set('strictQuery', true)
  await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 5000,
    autoIndex: true,
  })
  return mongoose.connection
}
