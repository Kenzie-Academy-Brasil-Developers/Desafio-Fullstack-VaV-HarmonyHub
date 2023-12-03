import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('name is needed'),
  phone: z
    .string()
    .nonempty('phone is needed')
    .regex(/^\d+$/, 'phone must contain only numbers'),
  email: z.string().email('E-Mail is not valid').nonempty('E-Mail is needed'),
});

type CreateData = z.infer<typeof schema>;

export type { CreateData };
export { schema };
