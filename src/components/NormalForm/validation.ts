import { z } from 'zod';



export const SignUpSchema = z.object({
    name: z.string().min(2, {message: 'Name is required'}),
    email: z.string().email().min(5, {message: 'Email is required'}),
    password: z.string().min(8 ,'Too sort. Provide minimum 8 character.'),
})

export type TNormalForm = z.infer<typeof SignUpSchema>


