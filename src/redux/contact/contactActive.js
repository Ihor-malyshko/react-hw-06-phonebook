import { ADDCONTACT, REMOVECONTACT, CHANGE_FILTER } from './contactTypes';

const addContact = ({ name, number }) => {
  return {
    type: ADDCONTACT,
    payload: {
      name,
      number,
    },
  };
};

const removeContact = id => {
  return {
    type: REMOVECONTACT,
    payload: {
      id,
    },
  };
};

const inputFilterChannge = filter => {
  return {
    type: CHANGE_FILTER,
    payload: {
      filter: filter,
    },
  };
};

export default { addContact, removeContact, inputFilterChannge };
