const initialState = {
  auth: {}
};

export default function(state= initialState, { type, auth }) {
  if (type === 'SET_USER') {
    return auth;
  }
  return state;
}
