function Board(dimensionBoard){
  this.numSquares = dimensionBoard * dimensionBoard
  this.table = [];
  this.winningRows = [];
  this.winningColumns = [];
  this.winningDiagonal = []
  this.dimensionBoard = dimensionBoard;
  this.winningCombinations = [];
};

Board.prototype.createBoard = function() {
  for (i = 1; i < this.numSquares + 1; i++) {
    var square = i;
    this.table.push(square);
  };
}

Board.prototype.winningCombinationRows = function() {
  for (i = 0; i < this.table.length; i += this.dimensionBoard) {
    this.winningRows.push(this.table.slice(i, i + this.dimensionBoard));
  };
};

Board.prototype.winningCombinationColumns = function() {
  var sortedSquares = []
  for (i = 0; i < this.dimensionBoard; i++) {
    for (j = 0; j < this.dimensionBoard; j++) {
      sortedSquares.push(this.winningRows[j][i]);
    };
  };
  for (z = 0; z < sortedSquares.length; z += this.dimensionBoard) {
    this.winningColumns.push(sortedSquares.slice(z, z + this.dimensionBoard))
  };
}

Board.prototype.winningCombinationDiagonal = function() {
  const SquaresDiagLeft = []
  for (i = 0; i < this.dimensionBoard; i++) {
    SquaresDiagLeft.push(this.winningRows[i][i])
  };
  const SquaresDiagRight = []
  for (j = 0, z = (this.dimensionBoard - 1); j < this.dimensionBoard; j++, z--) {
    SquaresDiagRight.push(this.winningRows[j][z])
  };
  this.winningDiagonal.push(SquaresDiagLeft, SquaresDiagRight)
}

Board.prototype.setWinnigCombinations = function(){
  this.winningCombinationRows();
  this.winningCombinationColumns();
  this.winningCombinationDiagonal();
  this.winningCombinations = this.winningRows.concat(this.winningColumns, this.winningDiagonal)
};

Board.prototype.setBoardToPlay = function(){
  this.createBoard();
  this.setWinnigCombinations();
};
