import React, { Component } from "react";

class ElementContactList extends Component {
  render() {
    const { filteredNames } = this.props;
    return (
      <ul>
        {filteredNames.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    );
  }
}

export default ElementContactList;
