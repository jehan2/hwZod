"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parkSchema = void 0;
const zod_1 = require("zod");
exports.parkSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z
            .string({ required_error: 'ID is required !' })
            .min(2, 'You id must be more than 2'),
        name: zod_1.z
            .string({ required_error: 'name is required !' })
            .min(4, 'You name must be more than 4 char'),
        type: zod_1.z.enum(['rollercoaster', 'thriller', 'water'], { required_error: 'type is required !' }),
        tickets: zod_1.z.number({ required_error: 'number is required !' }),
        price: zod_1.z.number({ required_error: 'salary is required !' })
    }),
});
