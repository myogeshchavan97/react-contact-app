import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Contact from './Contact';

const ContactList = ({ contacts, removeContact, editContact }) => {
  return (
    <div>
      <h2 className='mt-4'>Contact List</h2>
      <ListGroup className='mt-3'>
        {contacts.map((contact) => {
          return (
            <Contact
              contactName={contact}
              key={contact.id}
              removeContact={removeContact}
              editContact={editContact}
            />
          );
        })}
      </ListGroup>
    </div>
  );
};

export default ContactList;
