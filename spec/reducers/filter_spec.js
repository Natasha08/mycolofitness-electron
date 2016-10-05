import visibilityFilterReducer from 'reducers/filter';

describe('Visibility Filter', function() {
  it('returns a filter',function() {
    const filter = 'SHOW_ALL'
    const beforeState = undefined;
    const action = deepFreeze({
      type: 'SET_VISIBILITY_FILTER',
      filter
    });
    const afterState = filter;
    expect(visibilityFilterReducer(beforeState, action)).to.deep.equal(afterState);
  });
});
