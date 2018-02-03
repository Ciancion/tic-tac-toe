function Board(x, y){
  this.numSquares = x * y;
  this.table = [];
};

Board.prototype.createBoard = function(){
  for(i = 1; i < this.numSquares + 1; i++){
    var square = new Square(i);
    this.table.push(square);
  };
};
