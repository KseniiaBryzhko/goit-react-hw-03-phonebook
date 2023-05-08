import React, { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const contact = {
      ...data,
      id: nanoid(),
    };

    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in list`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
        <h2 className={css.title}>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.handleFilterChange}
        ></Filter>
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
