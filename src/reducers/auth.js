const initialState = {
  user: {}
};

export default function(state= initialState, { type, user }) {
  if (type === 'SET_USER') {
    return user;
  }
  return state;
}
