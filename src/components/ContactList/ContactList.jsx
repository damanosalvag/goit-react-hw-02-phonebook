import React, { Component } from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

class ContactList extends Component {
  render() {
    const { filteredNames, onDelete } = this.props;
    return (
      <>
        <ol>
          {filteredNames.map((contact) => (
            <li key={contact.id}>
              <div className={styles["contact"]}>
                {contact.name}: {contact.number}
                <button
                  onClick={() => onDelete(contact.id)}
                  className={styles["delete-btn"]}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ol>
      </>
    );
  }
}
ContactList.propTypes = {
  filteredNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};

export default ContactList;
