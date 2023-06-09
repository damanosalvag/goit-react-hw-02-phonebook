import React, { Component } from "react";
import AddForm from "./components/AddForm/AddForm";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./App.css";

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
  contactList = (name, number) => {
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(10), name: name, number: number },
      ],
    }));
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <div className="container-main">
          <AddForm
            contactList={this.contactList}
            filter={filter}
            contacts={contacts}
            handleChange={this.handleChange}
          ></AddForm>
        </div>
      </>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  contactList: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default App;
