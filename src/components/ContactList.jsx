import React, { Component } from "react";
import "../App.css";

class ContactList extends Component {

    render() {
        const { children } = this.props;
        return (
            <div className="filter">
                <h2>Contacts</h2>
                {children}
            </div>
        )
    }
}

export default ContactList;