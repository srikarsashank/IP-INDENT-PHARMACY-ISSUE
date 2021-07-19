import mongoose from 'mongoose';

const { Schema } = mongoose;

const issuedindent = new Schema({
    wardsisterid: {
        type: String,
        required: [true, "Wardsister is required"]
    },
    wardsistername: {
        type: String,
        required: [true, "WardsisterName is required"]
    },
    patientid: {
        type: String,
        required: [true, "PatientId is required"]
    },
    patientname: {
        type: String,
        required: [true, "PatientName is required"]
    },
    wardno: {
        type: String,
        required: [true, "WardNo is required"]
    },

    bedno: {
        type: "String",
        required: [true, "Bed No is reuired"]
    },
    consultant: {
        type: String,
        required: [true, "Consultant name is required"]
    },
    items: {
        type: String,
        required: [true, "Items is required"]
    }
});

export default mongoose.model('issuedindents', issuedindent);