import React from "react";
import s from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "redux/contactsSlice";



export const ContactList = () => {
    const { contacts } = useSelector(state => state.contacts);
    const filterValue = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const filtredContacts = contacts?.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase())
    );
    
    return (

        <ul className={s.contactList}>
            {filtredContacts?.map(({ name, number, id }) => {
                return <li key={id}>{name}: {number} <button className={s.button} type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button></li>
            })}
        </ul>

    );
};