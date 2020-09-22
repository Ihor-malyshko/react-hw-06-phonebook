import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactActive from '../redux/contact/contactActive';

import Logo from './Logo/Logo';
import Section from './section/Section';
import PhoneList from './phoneList/PhoneList';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import Alert from './Alert/Alert';

class App extends Component {
  state = {
    alert: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  // addContact = ({ name, number }) => {
  //   this.setState(prevState => {
  //     if (this.state.contacts.some(el => el.name === name)) {
  //       this.setState(() => this.setState({ alert: true }));
  //       setTimeout(() => this.setState({ alert: false }), 2000);
  //     } else {
  //       const newContact = { id: uuidv4(), name, number };
  //       return { contacts: [newContact, ...prevState.contacts] };
  //     }
  //   });
  // };

  getSearchContacs = () => {
    const { filter, contacts } = this.props;
    const normalizeSearch = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeSearch),
    );
  };

  render() {
    const { alert } = this.state;
    const { contacts } = this.props;

    return (
      <>
        <Logo />
        <Section>
          <Alert isVisible={alert} />
          <ContactForm onAddContact={this.props.onAddContact} />
        </Section>

        {contacts && (
          <Section title="Contacts">
            <Filter
              isVisible={contacts.length > 1 ? true : false}
              onSearch={event => this.props.onFilterChannge(event.target.value)}
            />

            <PhoneList
              contacts={this.getSearchContacs()}
              onRemoveContact={this.props.onRemoveContact}
            />
          </Section>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contact.items,
    filter: state.contact.filter,
  };
};

const mapDispatchToprops = {
  onAddContact: contactActive.addContact,
  onRemoveContact: contactActive.removeContact,
  onFilterChannge: contactActive.inputFilterChannge,
};

export default connect(mapStateToProps, mapDispatchToprops)(App);
