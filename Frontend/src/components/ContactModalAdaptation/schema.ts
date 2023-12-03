import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('name is needed'),
  phone: z
    .string()
    .nonempty('phone is needed')
    .regex(/^\d+$/, 'phone must contain only number'),
  email: z.string().email('Invalid E-Mail').nonempty('E-Mail'),
});

type UpdateData = z.infer<typeof schema>;

export { schema };

export type { UpdateData };
