import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { RegisterData, schema } from './schema';

import React from 'react';

import { Modal } from '../ModalOverall';

import Button from '../Buttons';

import Input from '../PropsInput';

import { StyledError, RegisterModalStyled } from './style';

import { BsX } from 'react-icons/bs';

import userContextHook from '../../hooks/userContextHooks';

interface RegistrationModalProps {
  toggleModal: () => void;
}

const RegistrationModal = ({ toggleModal }: RegistrationModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const { userRegister } = userContextHook();

  return (
    <Modal toggleModal={toggleModal}>
      <RegisterModalStyled>
        <div>
          <h2>Registry Form</h2>
          <Button
            type={'button'}
            buttonVariation={'closeModal'}
            onClick={toggleModal}
          >
            <BsX size={50} />
          </Button>
        </div>
        <form onSubmit={handleSubmit(userRegister)}>
          <Input
            inputVariation={'form'}
            id={'nameRegister'}
            type={'text'}
            disabled={false}
            label={'Name'}
            required={true}
            placeholder={'Type your name!'}
            register={register('name')}
          />
          {errors.name?.message && (
            <StyledError>{errors.name.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'email'}
            type={'emailRegister'}
            disabled={false}
            label={'E-Mail'}
            required={true}
            placeholder={'type your email!'}
            register={register('email')}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'phoneRegister'}
            type={'phone'}
            disabled={false}
            label={'Phone'}
            required={true}
            placeholder={'Type your phone number!'}
            register={register('phone')}
          />
          {errors.phone?.message && (
            <StyledError>{errors.phone.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordRegister'}
            type={'password'}
            disabled={false}
            label={'Password'}
            required={true}
            placeholder={'Type your password!'}
            register={register('password')}
          />
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'confirmPassword'}
            type={'password'}
            disabled={false}
            label={'Confirm Password'}
            required={true}
            placeholder={'Confirm your password!'}
            register={register('confirmPassword')}
          />
          {errors.confirmPassword?.message && (
            <StyledError>{errors.confirmPassword.message}</StyledError>
          )}

          <Button type={'submit'} buttonVariation={'Sign-in'}>
            Enroll
          </Button>
        </form>
      </RegisterModalStyled>
    </Modal>
  );
};

export default RegistrationModal;
