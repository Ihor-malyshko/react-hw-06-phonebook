import { combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import { ADDCONTACT, REMOVECONTACT, CHANGE_FILTER } from './contactTypes';
import defContacts from '../../assets/defContacts.json';

const setDefContact = () => {
  const localContacts = localStorage.getItem('contacts');
  if (localContacts === null) {
    localStorage.setItem('contacts', JSON.stringify(defContacts));
    return defContacts;
  } else {
    return JSON.parse(localContacts);
  }
};

const contactsReducer = (state = setDefContact(), { type, payload }) => {
  switch (type) {
    case ADDCONTACT:
      const newContact = { id: uuidv4(), ...payload };
      return state.some(el => el.name === payload.name)
        ? state
        : [newContact, ...state];

    case REMOVECONTACT:
      return state.filter(({ id }) => id !== payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
