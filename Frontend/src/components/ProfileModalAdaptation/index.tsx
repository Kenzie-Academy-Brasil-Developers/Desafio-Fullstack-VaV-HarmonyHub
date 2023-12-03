import { useForm } from 'react-hook-form';

import { Modal } from '../ModalOverall';

import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react';

import userContextHook from '../../hooks/userContextHooks';

import { ProfileEditStyled, ProfileEditError } from './style';

import { UpdateData, schema } from './schema';

import { BsX } from 'react-icons/bs';

import Input from '../PropsInput';

import Button from '../Buttons';

interface ProfileModalAdapterProps {
  toggleModal: () => void;
}

const ProfileModalAdaptation = ({ toggleModal }: ProfileModalAdapterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateData>({
    resolver: zodResolver(schema),
  });

  const { userUpdate, updatedUser, userDeletion } = userContextHook();

  return (
    <Modal toggleModal={toggleModal}>
      <ProfileEditStyled>
        <div>
          <h2>Update your Profile</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleModal}
          >
            <BsX size={50} />
          </Button>
        </div>
        <form onSubmit={handleSubmit(userUpdate)}>
          <Input
            inputVariation={'form'}
            id={'nameEditProfile'}
            type={'text'}
            disabled={false}
            label={'Name'}
            required={false}
            placeholder={'Type down your Name'}
            register={register('name')}
            defaultValue={updatedUser.name}
          />
          {errors.name?.message && (
            <ProfileEditError>{errors.name.message}</ProfileEditError>
          )}

          <Input
            inputVariation={'form'}
            id={'emailEditProfile'}
            type={'email'}
            disabled={false}
            label={'E-Mail'}
            required={false}
            placeholder={'Type down your E-Mail'}
            register={register('email')}
            defaultValue={updatedUser.email}
          />
          {errors.email?.message && (
            <ProfileEditError>{errors.email.message}</ProfileEditError>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneEditProfile'}
            type={'phone'}
            disabled={false}
            label={'Phone'}
            required={false}
            placeholder={'Type down your phone'}
            register={register('phone')}
            defaultValue={updatedUser.phone}
          />
          {errors.phone?.message && (
            <ProfileEditError>{errors.phone.message}</ProfileEditError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordEditProfile'}
            type={'password'}
            disabled={false}
            label={'Password'}
            required={false}
            placeholder={'Type down your password'}
            register={register('password')}
          />
          {errors.password?.message && (
            <ProfileEditError>{errors.password.message}</ProfileEditError>
          )}

          <div>
            <Button type={'submit'} buttonVariation={'Sign-in'}>
              Update Profile
            </Button>
            <Button
              type={'button'}
              buttonVariation={'delete'}
              onClick={userDeletion}
            >
              Delete Profile
            </Button>
          </div>
        </form>
      </ProfileEditStyled>
    </Modal>
  );
};

export default ProfileModalAdaptation;
