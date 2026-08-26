import {z} from "zod";

export const taskIdSchema = z.object({
    id: z.coerce
        .number({
            error: 'O ID deve ser um número!'
        })
        .int({
            error: 'O Id deve ser um numero inteiro!'
        })
        .positive({
            error: 'O Id tem que ser positivo, maior que 0!'
        })
});

export const createTaskSchema = z.object({
    title: z
        .string({
            error: 'O título deve ser uma string!'
        })
        .min(1, {
            error: 'O título é obrigatório!'
        })
        .max(150, {
            error: 'O título deve ter no máximo 150 caracteres!'
        }),

    description: z
        .string({
            error: 'A descrição deve ser em texto!'
        })
        .optional(),

    completed: z
        .boolean({
            error: 'Completed deve ser true ou false'
        })
        .default(false)
        .optional()
})

export const updateTaskSchema = createTaskSchema.partial();
