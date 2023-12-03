import React, { useState } from 'react';

import userContextHook from '../../hooks/userContextHooks';

import useContactContextHook from '../../hooks/contactsContextHooks';

import ProfileModalAdaptation from '../../components/ProfileModalAdaptation';

import ContactModalAddition from '../../components/ContactModalInsertion';

import ContactModalEdit from '../../components/ContactModalAdaptation';

import ContactAgenda from '../../components/ContactAgenda';

import { BsBookmark, BsClipboard } from 'react-icons/bs';
import { iContact } from '../../providers/contactsContext/types';
import { StyledHeader, StyledMain, StyledDiv } from './style';
import Button from '../../components/Buttons';

const Dashboard = () => {
  const { user, updatedUser, isOpenModal, toggleModal, logOff } =
    userContextHook();
  const {
    toggleContactModal,
    isOpenContactModal,
    toggleEditContactModal,
    isOpenEditContactModal,
  } = useContactContextHook();

  const [contactId, setContactId] = useState<number>(0);

  const setContact = (elt: iContact) => {
    toggleEditContactModal();
    setContactId(elt.id);
  };

  return (
    <>
      <StyledDiv>
        <StyledHeader>
          <div>
            <h1>Client Agenda</h1>
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
              onClick={toggleContactModal}
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
          <ContactModalAddition toggleContactModal={toggleContactModal} />
        )}
        {isOpenEditContactModal && (
          <ContactModalEdit
            contactId={contactId}
            toggleContactModalEdit={toggleEditContactModal}
          />
        )}
      </StyledMain>
    </>
  );
};

export default Dashboard;
