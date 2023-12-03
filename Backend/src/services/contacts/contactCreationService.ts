import { AppDataSource } from '../../data-source';

import { Contact } from '../../entities/contacts.entities';

import { User } from '../../entities/user.entities';

import { AppError } from '../../errors/appError';

import {
  TContactRequest,
  TContactResponse,
} from '../../interfaces/contacts.interface';

import { contactSchema } from '../../schemas/contacts.schema';

const contactCreationService = async (
  userData: TContactRequest,
  id: number
): Promise<TContactResponse> => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.find({
    where: { id: id },
    relations: ['contacts'],
  });

  if (!findUser) {
    throw new AppError('User not found', 404);
  }

  const findContact = findUser[0].contacts.find(
    (elt) => elt.email === userData.email
  );

  if (findContact) {
    throw new AppError('Contact already in use', 409);
  }

  const user = findUser[0];

  const contact = contactRepo.create({ ...userData, user: user });

  await contactRepo.save(contact);

  return contactSchema.parse(contact);
};

export default contactCreationService;
