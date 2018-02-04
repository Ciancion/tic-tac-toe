function Board(x, y){
  this.numSquares = x * y;
  this.table = [];
  this.winningRows = [];
  this.winningColumns = [];
  this.winningDiagonal = []
  this.coordinateX = x;
  this.coordinateY = y;
};

Board.prototype.createBoard = function(){
  for(i = 1; i < this.numSquares + 1; i++){
    var square = new Square(i);
    this.table.push(square);
  };

  Board.prototype.winningCombinationRows = function( ){
    for(i = 0; i < this.table.length; i += this.coordinateX){
      this.winningRows.push(this.table.slice(i, i + this.coordinateX));
    };
  };

  Board.prototype.winningCombinationColumns = function(){
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

  Board.prototype.winningCombinationDiagonal = function(){
    const SquaresDiagLeft = []
    const SquaresDiagRight = []
    for(i = 0; i < this.coordinateX; i ++){
        SquaresDiagLeft.push(this.winningRows[i][i])
    };
    for(j = 0, z = (this.coordinateY - 1); j < this.coordinateX; j++, z-- ){
        SquaresDiagRight.push(this.winningRows[j][z])
      };

    this.winningDiagonal.push(SquaresDiagLeft, SquaresDiagRight)
    console.log(this.winningDiagonal)
  }

};
