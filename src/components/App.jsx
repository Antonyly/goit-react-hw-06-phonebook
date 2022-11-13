import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';

import css from './ContactForm/ContactForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { add, remove } from '../redux/contacts/contacts-slice';
import { setFilter } from '../redux/filter/filter-slice';
import { getContacts } from '../redux/contacts/contacts-selector';
import { getFilter } from '../redux/filter/filter-selector';


export const App = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  function addContact(data) {

    const searchName = contacts
      .map((contact) => contact.name.toLowerCase())
      .includes(data.name.toLowerCase());

     if (searchName) {
      return alert(`${data.name} is already in contacts.`);
     } else {
      Notify.success('New contact added');
    };
    
    if (data.name.length === 0) {
      return alert("Fields must be filled!");
    }
    dispatch(add(data));
  }

  const removeContact = (id) => {
        dispatch(remove(id));
    }

  const changeFilter = ({target}) => dispatch(setFilter(target.value));

  const getVisibleContacts = () => {

    if (!filter) {
      return contacts;
    }

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onRemoveContact={removeContact} />
    </div>
  );
};