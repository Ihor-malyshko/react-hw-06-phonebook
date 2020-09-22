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

  render() {
    const { alert } = this.state;
    const { contact } = this.props;

    return (
      <>
        <Logo />
        <Section>
          <Alert isVisible={alert} />
          <ContactForm />
        </Section>

        {contact && (
          <Section title="Contacts">
            <Filter isVisible={contact.length > 1 ? true : false} />
            <PhoneList />
          </Section>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contact.items,
  };
};

export default connect(mapStateToProps, null)(App);
