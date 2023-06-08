import React, { Component } from "react";
import ContactList from "./ContactList";
import FilterPername from "./FilterPerName";
import ElementContactList from "./ElementContactList";
import { nanoid } from "nanoid";


class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        number: "",
    };
  }
  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

    handleSubmit = (e) => {
        const { contactList } = this.props;
        const { name, number } = this.state;
    e.preventDefault();
    if (this.validateName(name)) {
        contactList(name, number)
        this.setState({name:"", number:""})
    } else {
      alert(
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      );
    }
  };

  validateName = (name) => {
    const regex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    return regex.test(name);
  };
    render() {
        const { filter, contacts, handleChange } = this.props;
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
                ></input>
              </label>
              <label>
                Number
                <input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  onChange={this.handleChange}
                  value={this.state.number}
                  required
                />
              </label>
              <button type="submit">Add contact</button>
            </form>
            <ContactList>
              <FilterPername
                filter={filter}
                contacts={contacts}
                handleChange={handleChange}
              ></FilterPername>
            </ContactList>
          </div>
        );
  }
}

export default AddForm;