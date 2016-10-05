const initialState = {
  register: {}
}

export default function(state = initialState, { type, register }) {
  if (type === 'FETCH_REGISTRATION_MESSAGE') {
    return register;
  }
  return state;
};
