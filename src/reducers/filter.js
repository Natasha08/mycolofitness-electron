const initialState = {
  filter: {}
}

export default function(state= initialState, { type, filter }) {
  if (type === 'SET_VISIBILITY_FILTER') {
    return filter;
  }
  return state;
};
