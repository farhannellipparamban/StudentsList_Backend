"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StudentsController_1 = __importDefault(require("../controllers/StudentsController"));
const router = express_1.default.Router();
// Route to fetch all students
router.get("/allStudents", StudentsController_1.default.getAllStudents);
// Route to add a new student
router.post("/addStudent", StudentsController_1.default.addStudents);
// Route to update an existing student
router.put("/editStudent/:id", StudentsController_1.default.updateStudent);
// Route to delete an existing student
router.delete("/deleteStudent/:id", StudentsController_1.default.deleteStudent);
exports.default = router;
