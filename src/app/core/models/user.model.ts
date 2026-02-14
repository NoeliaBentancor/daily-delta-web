import { z } from 'zod';

const UserSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    picture: z.string().url()
});

export type User = z.infer<typeof UserSchema>;
