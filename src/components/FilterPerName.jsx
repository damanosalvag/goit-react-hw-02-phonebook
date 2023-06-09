import React, { Component } from "react";
import PropTypes from "prop-types";
import ElementContactList from "./ElementContactList/ElementContactList";
import "../App.css";

class FilterPername extends Component {
    render() {
        const { filter, contacts, handleChange } = this.props;
        const filteredNames = contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
        return (
          <div>
            <label className="display">
              Find contacts by name
              <input
                type="text"
                name="filter"
                title="Insert any name you want to search for."
                onChange={handleChange}
                value={filter}
              ></input>
            </label>
            <ElementContactList
              filteredNames={filteredNames}
            ></ElementContactList>
          </div>
        );
    }
}

FilterPername.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  filteredNames: PropTypes.array.isRequired,
};

export default FilterPername;