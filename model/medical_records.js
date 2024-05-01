import mongoose from "mongoose";

const medical_recordsSchema = new Schema(
    {
        
    },
    { timeStamps: true }
);

export const MedicalRecords = mongoose.model('MedicalRecords', medical_recordsSchema);