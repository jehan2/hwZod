"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../middleware/validate"));
const park_schema_1 = require("../zod_schema/park.schema");
const router = express_1.default.Router();
let park = [];
router.get('/', (req, res, next) => {
    return res.status(200).json(park);
});
router.post('/', (0, validate_1.default)(park_schema_1.parkSchema), (req, res, next) => {
    const newpark = req.body;
    park.push(newpark);
    return res.status(201).json({ message: ' Added !' });
});
router.put('/:id', (0, validate_1.default)(park_schema_1.parkSchema), (req, res) => {
    const uppark = req.body;
    const { id } = req.params;
    const updatedpark = park.filter((i) => {
        return i.id !== id;
    });
    updatedpark.push(uppark);
    park = updatedpark;
    return res.json({
        message: ' Updated !',
    });
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const newpa = park.filter((i) => {
        return i.id !== id;
    });
    park = newpa;
    return res.json({
        message: ' Deleted !',
    });
});
exports.default = router;
