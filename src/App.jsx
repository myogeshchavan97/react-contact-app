import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';
import './index.css';

function App() {
  const localContacts =
    JSON.parse(window.localStorage.getItem('contacts')) || [];
  const [contacts, setContacts] = useState(localContacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (id, updates) => {
    setContacts(
      contacts.map((contact) => {
        if (contact.id === id) {
          return {
            ...contact,
            ...updates
          };
        }
        return contact;
      })
    );
  };

  console.log('contacts', contacts);
  return (
    <div className='container'>
      <Header />
      <ContactForm addContact={addContact} contacts={contacts} />
      {contacts.length > 0 && (
        <ContactList
          contacts={contacts}
          removeContact={removeContact}
          editContact={editContact}
        />
      )}
    </div>
  );
}

export default App;
