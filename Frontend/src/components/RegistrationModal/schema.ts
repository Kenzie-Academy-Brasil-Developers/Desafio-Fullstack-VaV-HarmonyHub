import { z } from 'zod';

const schema = z
  .object({
    name: z.string().nonempty('Name is needed'),
    phone: z
      .string()
      .nonempty('Phone is needed')
      .regex(/^\d+$/, 'Phone must contain only number'),
    email: z.string().email('Invalid E-Mail').nonempty('E-mail is needed'),
    password: z
      .string()
      .nonempty('Password is required')
      .min(6, 'Password must have at least 6 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must have at least one uppercase letter, one lowercase letter, one number and one special character'
      ),
    confirmPassword: z.string().nonempty('Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type RegisterData = z.infer<typeof schema>;

export { schema };

export type { RegisterData };
