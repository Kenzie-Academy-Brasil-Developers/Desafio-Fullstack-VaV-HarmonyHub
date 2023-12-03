import React from 'react';

import { iContact } from '../../providers/contactsContext/types';

import { RegistryCard } from './style';

import { AiFillEdit } from 'react-icons/ai';

import Button from '../Buttons';

interface ContactAgendaProps {
  data: iContact;
  setContact: (data: iContact) => void;
}

const ContactAgenda = ({ data, setContact }: ContactAgendaProps) => {
  return (
    <RegistryCard key={data.id}>
      <div>
        <p>
          <span>Name:</span> {data.name}
        </p>
        <p>
          <span>E-Mail:</span> {data.email}
        </p>
        <p>
          <span>Phone-number:</span> {data.phone}
        </p>
      </div>
      <div>
        <Button
          type={'button'}
          buttonVariation={'editContact'}
          onClick={() => setContact(data)}
        >
          <AiFillEdit size={18} />
        </Button>
      </div>
    </RegistryCard>
  );
};

export default ContactAgenda;
