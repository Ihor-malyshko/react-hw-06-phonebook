import { ADDCONTACT, REMOVECONTACT, CHANGE_FILTER } from './contactTypes';
import { v4 as uuidv4 } from 'uuid';

const addContact = ({ name, number }) => {
  return {
    type: ADDCONTACT,
    payload: {
      contact: {
        id: uuidv4(),
        name,
        number,
      },
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
