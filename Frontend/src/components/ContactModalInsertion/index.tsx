import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../ModalOverall';
import { CreateData, schema } from './schema';

import useContactContextHook from '../../hooks/contactsContextHooks';

import { ContactCreationStyled, ContactCreationError } from './style';
import Input from '../PropsInput';
import Button from '../Buttons';
import { BsX } from 'react-icons/bs';

interface ContactModalInsertionProps {
  toggleContactModal: () => void;
}

const ContactModalAddition = ({
  toggleContactModal,
}: ContactModalInsertionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateData>({
    resolver: zodResolver(schema),
  });

  const { contactCreation } = useContactContextHook();

  return (
    <Modal toggleModal={toggleContactModal}>
      <ContactCreationStyled>
        <div>
          <h2>Create New Contact</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleContactModal}
          >
            <BsX size={50} />
          </Button>
        </div>
        <form onSubmit={handleSubmit(contactCreation)}>
          <Input
            inputVariation={'form'}
            id={'nameEditProfile'}
            type={'text'}
            disabled={false}
            label={'Name'}
            required={true}
            placeholder={'Type down the Name'}
            register={register('name')}
          />
          {errors.name?.message && (
            <ContactCreationError>{errors.name.message}</ContactCreationError>
          )}

          <Input
            inputVariation={'form'}
            id={'emailEditProfile'}
            type={'email'}
            disabled={false}
            label={'E-Mail'}
            required={true}
            placeholder={'Type down the E-Mail'}
            register={register('email')}
          />
          {errors.email?.message && (
            <ContactCreationError>{errors.email.message}</ContactCreationError>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneEditProfile'}
            type={'phone'}
            disabled={false}
            label={'Phone'}
            required={true}
            placeholder={'Type down the Phone'}
            register={register('phone')}
          />
          {errors.phone?.message && (
            <ContactCreationError>{errors.phone.message}</ContactCreationError>
          )}

          <Button type={'submit'} buttonVariation={'addContact'}>
            Create New Contact
          </Button>
        </form>
      </ContactCreationStyled>
    </Modal>
  );
};

export default ContactModalAddition;
