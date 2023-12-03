import React from 'react';

import { UpdateData, schema } from './schema';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Modal } from '../ModalOverall';

import useContactContextHook from '../../hooks/contactsContextHooks';

import userContextHook from '../../hooks/userContextHooks';

import { EditModalStyled, EditModalFailStyled } from './style';

import Input from '../PropsInput';

import Button from '../Buttons';

import { iContact } from '../../providers/contactsContext/types';

import { BsX } from 'react-icons/bs';

interface ContactModalAdaptationProps {
  toggleContactModalEdit: () => void;
  contactId: number;
}

const ContactModalEdit = ({
  toggleContactModalEdit,
  contactId,
}: ContactModalAdaptationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateData>({
    resolver: zodResolver(schema),
  });

  const { contactUpdating, contactDeletion } = useContactContextHook();
  const { user } = userContextHook();

  const findContact = (): iContact | undefined => {
    return user.contacts.find((elt) => elt.id === contactId);
  };

  return (
    <Modal toggleModal={toggleContactModalEdit}>
      <EditModalStyled>
        <div>
          <h2>Edit Contact</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleContactModalEdit}
          >
            <BsX size={50} />
          </Button>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            contactUpdating(data, contactId);
          })}
        >
          <Input
            inputVariation={'form'}
            id={'nameEditProfile'}
            type={'text'}
            disabled={false}
            label={'name'}
            required={false}
            placeholder={'Type down the Name'}
            register={register('name')}
            defaultValue={findContact()?.name}
          />

          {errors.name?.message && (
            <EditModalFailStyled>{errors.name.message}</EditModalFailStyled>
          )}

          <Input
            inputVariation={'form'}
            id={'emailEditProfile'}
            type={'email'}
            disabled={false}
            label={'email'}
            required={false}
            placeholder={'Type down the E-Mail'}
            register={register('email')}
            defaultValue={findContact()?.email}
          />
          {errors.email?.message && (
            <EditModalFailStyled>{errors.email.message}</EditModalFailStyled>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneEditProfile'}
            type={'phone'}
            disabled={false}
            label={'phone'}
            required={false}
            placeholder={'Type down the phone'}
            register={register('phone')}
            defaultValue={findContact()?.phone}
          />
          {errors.phone?.message && (
            <EditModalFailStyled>{errors.phone.message}</EditModalFailStyled>
          )}

          <div>
            <Button type={'submit'} buttonVariation={'Sign-in'}>
              Edit Contact
            </Button>
            <Button
              type={'button'}
              buttonVariation={'delete'}
              onClick={() => contactDeletion(contactId)}
            >
              Delete Contact
            </Button>
          </div>
        </form>
      </EditModalStyled>
    </Modal>
  );
};

export default ContactModalEdit;
