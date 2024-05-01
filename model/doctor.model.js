import mongoose from "mongoose";

const doctorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
        qualification: {
            type: String,
            required: true,
        },
        experienceInYears: {
            type: Number,
            default: 0,
        },
        worksInHospitals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Hospital"
            }
        ],
    },
    { timeStamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);