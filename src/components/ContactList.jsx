import React, { Component } from "react";

class ContactList extends Component {

    render() {
        const { children } = this.props;
        return (
            <div>
                <h2>Contacts</h2>
                {children}
            </div>
        )
    }
}

export default ContactList;