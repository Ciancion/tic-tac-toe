describe('Square', function(){
  var square;

  beforeEach(function(){
    square = new Square(2);
  });

  it('should have an initialized value', function(){
    expect(square.value).toEqual(2);
  });
});
