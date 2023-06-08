import React, { Component } from "react";
import ElementContactList from "./ElementContactList";

class FilterPername extends Component {
    render() {
        const { filter, contacts, handleChange } = this.props;
        const filteredNames = contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
        return (
          <>
            <label>
              Find contacts by name
              <input
                type="text"
                name="filter"
                title="Insert any name you want to search for."
                onChange={handleChange}
                value={filter}
              ></input>
            </label>
            <ElementContactList filteredNames={filteredNames}></ElementContactList>
          </>
        );
    }
}

export default FilterPername;