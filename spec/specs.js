describe('factorialFinder', function() {
  it('will return 1 for an input of 0', function() {
    factorialFinder(0).should.equal(1);
  });

  it('will return n! for an input of n', function() {
    factorialFinder(5).should.equal(120);
  });
  it('will not work for nagative number', function() {
    factorialFinder(-5).should.equal('Please enter a positive intiger.');
  });

  it('will not work for non-intiger entries', function() {
    factorialFinder("foo").should.equal('Please enter a numerical value.');
  });
});
