"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Define the schema for the Students collection
const StudentsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    enrollNo: {
        type: String,
        required: true,
    },
    doAdmission: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("students", StudentsSchema);
