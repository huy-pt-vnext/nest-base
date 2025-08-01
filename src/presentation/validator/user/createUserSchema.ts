import z from 'zod';

export const createUserSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string(),
	password: z.string().min(6, 'Password must be at least 6 characters'),
	isActive: z.boolean().optional(),
});

export type CreateUserInputs = z.infer<typeof createUserSchema>;
