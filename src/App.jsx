import React, { Component } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import ContactList from './components/ContactList/ContactList'
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
    };
  }
  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleAddContact = (name, number) => {
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(10), name: name, number: number },
      ],
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const tempContacts = this.state.contacts.slice();
    const filteredNames = tempContacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contactList={this.handleAddContact}
          contacts={this.state.contacts}
        />
        <h2 className='contactListTitle'>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList filteredNames={filteredNames} onDelete={this.handleDeleteContact} />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  handleChange: PropTypes.func,
  handleAddContact: PropTypes.func,
  handleDeleteContact: PropTypes.func,
  filteredNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default App
