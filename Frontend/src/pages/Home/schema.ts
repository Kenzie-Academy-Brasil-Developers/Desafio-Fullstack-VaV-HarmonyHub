import { z } from 'zod';

const schema = z.object({
  email: z.string().nonempty().email('Invalid E-Mail'),
  password: z.string().nonempty('Password is required'),
});

type DataLogin = z.infer<typeof schema>;

export { schema };

export type { DataLogin };
