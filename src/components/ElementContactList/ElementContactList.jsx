import React, { Component } from "react";
import styles from "./ElementContactList.module.css";

class ElementContactList extends Component {
  render() {
    const { filteredNames } = this.props;
    return (
      <ol>
        {filteredNames.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ol>
    );
  }
}

export default ElementContactList;
