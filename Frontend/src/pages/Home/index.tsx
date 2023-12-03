import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { DataLogin, schema } from './schema';

import Button from '../../components/Buttons';

import { StyledMain, StyledError } from './style';

import React from 'react';

import userContextHook from '../../hooks/userContextHooks';

import Input from '../../components/PropsInput';

import RegistrationModal from '../../components/RegistrationModal';

const Home = () => {
  const { userLogin, toggleModal, isOpenModal } = userContextHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataLogin>({
    resolver: zodResolver(schema),
  });

  return (
    <StyledMain>
      <section>
        <div>
          <h1>HarmonyHub™</h1>
          <p>
            Unlock your thoughts online. Effortlessly simple, blazingly fast,
            and delightfully intuitive.
          </p>
        </div>
      </section>
      <section>
        <div>
          <p>Welcome to your Personal Agenda!</p>
          <h2>Account Log-in</h2>
        </div>
        <form onSubmit={handleSubmit(userLogin)}>
          <Input
            inputVariation={'form'}
            id={'emailLogin'}
            type={'email'}
            disabled={false}
            label={'E-Mail'}
            required={true}
            placeholder={'Type your E-Mail'}
            register={register('email')}
          />
          {errors.email?.message && (
            <StyledError>{errors.email.message}</StyledError>
          )}

          <Input
            inputVariation={'form'}
            id={'passwordLogin'}
            type={'password'}
            disabled={false}
            label={'Password'}
            required={true}
            placeholder={'Type down your password'}
            register={register('password')}
          />
          {errors.password?.message && (
            <StyledError>{errors.password.message}</StyledError>
          )}

          <Button type={'submit'} buttonVariation={'Sign-in'}>
            Sign in
          </Button>
        </form>
        <div>
          <p>Don't have an Account yet?</p>
          <Button
            type={'submit'}
            buttonVariation={'Join'}
            onClick={toggleModal}
          >
            Join now!
          </Button>
        </div>
      </section>
      {isOpenModal && <RegistrationModal toggleModal={toggleModal} />}
    </StyledMain>
  );
};

export default Home;
