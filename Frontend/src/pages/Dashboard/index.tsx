import userContextHook from '../../hooks/userContextHooks';

import React, { useState } from 'react';

import useContactContextHook from '../../hooks/contactsContextHooks';

import ProfileModalAdaptation from '../../components/ProfileModalAdaptation';

import ContactModalAddition from '../../components/ContactModalInsertion';

import { StyledHeader, StyledMain, StyledDiv } from './style';

import ContactAgenda from '../../components/ContactAgenda';

import { iContact } from '../../providers/contactsContext/types';

import { BsBookmark, BsClipboard } from 'react-icons/bs';

import ContactModalEdit from '../../components/ContactModalAdaptation';

import Button from '../../components/Buttons';

const Dashboard = () => {
  const { user, updatedUser, isOpenModal, toggleModal, logOff } =
    userContextHook();
  const {
    openContactModal,
    isOpenContactModal,
    openContactEditModal,
    isOpenEditContactModal,
  } = useContactContextHook();

  const [contactId, setContactId] = useState<number>(0);

  const setContact = (elt: iContact) => {
    openContactEditModal();
    setContactId(elt.id);
  };

  return (
    <>
      <StyledDiv>
        <StyledHeader>
          <div>
            <h1>HarmonyHub Agenda</h1>
            <div>
              <p>Name: {updatedUser.name}</p>
              <p>E-Mail: {updatedUser.email}</p>
              <p>Phone: {updatedUser.phone}</p>
            </div>
          </div>
          <div>
            <Button
              onClick={toggleModal}
              buttonVariation={'editProfile'}
              type={'button'}
            >
              Edit your Profile
              <BsClipboard size={35} />
            </Button>
            <Button onClick={logOff} buttonVariation={'logout'} type={'button'}>
              Log-out
            </Button>
          </div>
        </StyledHeader>
      </StyledDiv>

      <StyledMain>
        <section>
          <div>
            <Button
              type={'button'}
              onClick={openContactModal}
              buttonVariation={'Sign-in'}
            >
              Create a new Contact
              <BsBookmark size={35} />
            </Button>
          </div>

          <ul>
            {user.contacts.length > 0 ? (
              user.contacts.map((elt) => {
                return (
                  <ContactAgenda
                    key={elt.id}
                    data={elt}
                    setContact={setContact}
                  ></ContactAgenda>
                );
              })
            ) : (
              <div>
                <p>
                  you currently dont't own any new contacts. Shall we create a
                  new one?
                </p>
              </div>
            )}
          </ul>
        </section>
        <div></div>
        {isOpenModal && <ProfileModalAdaptation toggleModal={toggleModal} />}
        {isOpenContactModal && (
          <ContactModalAddition openContactModal={openContactModal} />
        )}
        {isOpenEditContactModal && (
          <ContactModalEdit
            contactId={contactId}
            openContactEditModal={openContactEditModal}
          />
        )}
      </StyledMain>
    </>
  );
};

export default Dashboard;
