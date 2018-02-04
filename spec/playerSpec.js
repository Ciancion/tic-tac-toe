describe('Player', function(){
  var player
  beforeEach(function(){
    player = new Player;
  });

  it('should select the squares', function(){
    player.selectSquare(1);
    expect(player.selectedSquares.length).toEqual(1);
  });


});
