function Player(type){
  this.type = type;
  this.selectedSquares = [];
};

Player.prototype.selectSquare = function(square){
  this.selectedSquares.push(square);
};
