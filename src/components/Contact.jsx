import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Contact = ({ contactName, removeContact, editContact }) => {
  const handleEdit = (property) => {
    switch (property) {
      case 'name':
        const newName = window.prompt('Enter new name', contactName.name);
        editContact(contactName.id, {
          name: newName
        });
        break;
      case 'email':
        const newEmail = window.prompt('Enter new email', contactName.email);
        editContact(contactName.id, {
          email: newEmail
        });
        break;
      case 'phone':
        const newPhone = window.prompt('Enter new phone', contactName.phone);
        editContact(contactName.id, {
          phone: newPhone
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className='mt-3 mb-3'>
      <ListGroup.Item>
        Name: {contactName.name}{' '}
        <Button onClick={() => handleEdit('name')} variant='success' size='sm'>
          Edit
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>
        Email: {contactName.email}{' '}
        <Button onClick={() => handleEdit('email')} variant='success' size='sm'>
          Edit
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>
        Phone: {contactName.phone}{' '}
        <Button onClick={() => handleEdit('phone')} variant='success' size='sm'>
          Edit
        </Button>
      </ListGroup.Item>
      <ListGroup.Item>
        <Button
          onClick={() => removeContact(contactName.id)}
          variant='danger'
          size='sm'
          className='mt-2'
        >
          Remove
        </Button>
      </ListGroup.Item>
    </div>
  );
};

export default Contact;
