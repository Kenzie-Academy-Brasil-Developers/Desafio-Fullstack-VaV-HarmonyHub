import { Request, Response, NextFunction } from 'express';

import { AppDataSource } from '../data-source';

import { Contact } from '../../src/entities/contacts.entities';

const contactValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactId: number = Number(req.params.id);

  const contact = await contactRepository.findOneBy({
    id: contactId,
  });

  if (!contact) {
    return res.status(404).json({
      message: 'Contact not found',
    });
  }

  return next();
};

export { contactValidation };
