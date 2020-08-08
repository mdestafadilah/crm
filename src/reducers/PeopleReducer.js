/* eslint-disable prettier/prettier */
import people from './people.json';

const INITIALSTATE = {
  people,
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
