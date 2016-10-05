import filterActions from 'actions/visibility_filter';

describe('Visibility Filter Action', function() {
  it('returns a filter action', function() {
    const filter = 'SHOW_ALL';
    const args = {
      type: 'SET_VISIBILITY_FILTER',
      filter
    };
    expect(filterActions(filter)).to.deep.equal(args);
  });
});
