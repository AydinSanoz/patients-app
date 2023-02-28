import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const patientSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  surname: String,
  treatment: String,
  email: String,
  diagnosis: String,
  treatment: String,
  file: String,
  date: { type: Date, default: Date.now },
  updated: { type: Date, default: Date() },
});

export const patientModel = models.Patient || model("Patient", patientSchema);
