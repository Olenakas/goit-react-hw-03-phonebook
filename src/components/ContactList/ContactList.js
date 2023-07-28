import React from 'react';
import PropTypes from "prop-types";
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.list}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    {contact.name}: {contact.number}
                    <button type="button" onClick={() => onDeleteContact(contact.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;