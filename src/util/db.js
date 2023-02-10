/* import {MongoClient} from "mongodb";


export default async function connectDB(){
  console.log(`${process.env.MONGO_URI}`)
  const client = MongoClient(process.env.MONGO_URI)
  try {
    await client.connect()
    console.log(`mongodb is connected`)
  } catch (error) {
    console.log(`mongo db is not connected : ${error.message}`)
  }finally{
    client.close()
  }
} */

import mongoose from 'mongoose'

export default async function connectDB (){
  console.log(`${process.env.MONGO_URI}`)
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongodb is connected`)
  } catch (error) {
    console.log(`mongodb is not connected : ${error.message}`)
    
  }
}