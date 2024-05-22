"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongodb_1 = __importDefault(require("./config/mongodb"));
const studentRoute_1 = __importDefault(require("./routes/studentRoute"));
dotenv_1.default.config();
(0, mongodb_1.default)();
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "https://studentslist-five.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
}));
app.use("/", studentRoute_1.default);
app.listen(PORT, () => {
    console.log(`server running successfully in port ${PORT}`);
});
