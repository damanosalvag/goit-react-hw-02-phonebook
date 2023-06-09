import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactList from "../ContactList";
import FilterPername from "../FilterPerName";
import styles from "../AddForm/AddForm.module.css"

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
    const { contactList, contacts } = this.props;
    const { name, number } = this.state;
    const foundName = contacts.some((element) => element.name == name);
    const foundNumber = contacts.some((element) => element.number == number);
    e.preventDefault();
    if (foundName) {
      return alert("The name is already exist");
    } else if (foundNumber) {
      return alert("The number is already exist");
    } else {
      contactList(name, number);
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { filter, contacts, handleChange } = this.props;
    return (
      <div className={styles["container"]}>
        <div className={styles["container-form"]}>
        <h2>Add contact</h2>
          <form onSubmit={this.handleSubmit} className={styles["display"]}>
            <label className={styles["display"]}>
              Name
              <input
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ]+[a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
                onChange={this.handleChange}
                value={this.state.name}
                required
              ></input>
            </label>
            <label className={styles["display"]}>
              Number
              <input
                type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes and can start with +"
                pattern="^\+\d{1,4}[-\s]\d{3,12}$"
                onChange={this.handleChange}
                value={this.state.number}
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
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

AddForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}; 

export default AddForm;
