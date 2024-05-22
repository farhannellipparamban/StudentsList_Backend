"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentsModel_1 = __importDefault(require("../model/studentsModel"));
class StudentController {
    constructor() {
        // Controller for fetching all students
        this.getAllStudents = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield studentsModel_1.default.find();
                return res.status(200).json({ data: students });
            }
            catch (error) {
                console.error("An error occurred while updating student details:", error);
                return res.status(500).json({ message: "Internal Server Error" });
            }
        });
        // Controller for adding a new student
        this.addStudents = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, mobile, enrollNo, doAdmission } = req.body;
                const student = new studentsModel_1.default({
                    name,
                    email,
                    mobile,
                    enrollNo,
                    doAdmission,
                });
                yield student.save();
                return res
                    .status(201)
                    .json({ message: "Student added successfully", data: student });
            }
            catch (error) {
                console.error("An error occurred while adding student :", error);
                return res.status(500).json({ message: "Internal Server Error" });
            }
        });
        // Controller for updating an existing student
        this.updateStudent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email, mobile, enrollNo, doAdmission } = req.body;
                const student = yield studentsModel_1.default.findById(id);
                if (student) {
                    student.name = name;
                    student.email = email;
                    student.mobile = mobile;
                    student.enrollNo = enrollNo;
                    student.doAdmission = doAdmission;
                    yield student.save();
                    return res.status(200).json({
                        message: "Student details successfully updated",
                        data: student,
                    });
                }
                else {
                    return res
                        .status(404)
                        .json({ message: "Student not found. Unable to update details." });
                }
            }
            catch (error) {
                console.error("An error occurred while updating student details:", error);
                return res.status(500).json({ message: "Internal Server Error" });
            }
        });
        // Controller for deleting an existing student
        this.deleteStudent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield studentsModel_1.default.findByIdAndDelete({ _id: id });
                return res.status(200).json({ message: "Student successfully deleted" });
            }
            catch (error) {
                console.error("An error occurred while deleting student :", error);
                return res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.default = new StudentController();
