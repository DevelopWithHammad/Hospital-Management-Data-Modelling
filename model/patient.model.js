import mongoose from "mongoose";

const patientsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        bloodGroup: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Others"],
        },
        diagnosedIn: {
            type: String,
            required: true,
        },
        admittedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        },
    },
    { timeStamps: true }
);

export const Patient = mongoose.model('Patient', patientsSchema); 