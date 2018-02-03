function Board(x, y){
  this.numSquares = x * y;
  this.table = [];
  this.winningRows = [];
  this.winningColumns = [];
  this.coordinateX = x;
  this.coordinateY = y;
};

Board.prototype.createBoard = function(){
  for(i = 1; i < this.numSquares + 1; i++){
    var square = new Square(i);
    this.table.push(square);
  };

  Board.prototype.winningCombinationRow = function( ){
    for(i = 0; i < this.table.length; i += this.coordinateX){
      this.winningRows.push(this.table.slice(i, i + this.coordinateX));
    };
  };

  Board.prototype.winningCombinationColumn = function(){
    var sortedSquares = []
    for(i = 0; i < this.coordinateX; i ++){
      for(j = 0; j< this.coordinateY; j++){
        sortedSquares.push(this.winningRows[j][i]);
      };
    };
    for(z = 0; z < sortedSquares.length; z += this.coordinateY){
      this.winningColumns.push(sortedSquares.slice(z , z + this.coordinateY))
    };
  }
};
