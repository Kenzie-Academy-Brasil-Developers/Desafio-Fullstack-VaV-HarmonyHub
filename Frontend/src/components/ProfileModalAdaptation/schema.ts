import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('name is needed'),
  phone: z
    .string()
    .nonempty('Phone is needed')
    .regex(/^\d+$/, 'phone must contain only number'),
  email: z.string().nonempty().email('Invalid E-Mail'),
  password: z.string().optional(),
});

type UpdateData = z.infer<typeof schema>;

export { schema };

export type { UpdateData };
