function Game(dimensionBoard, board = Board, player= Player){
  this.board = new board(dimensionBoard);
  this.playerX = new player('x'),
  this.playerO = new player('o');
  this.on = false;
  this.currentPlayer = this.playerX;
};

Game.prototype.setStartingConditions = function() {
  if (this.on === false) {
    this.board.setBoardToPlay();
    this.on = true
  }
};

Game.prototype.play = function(value) {
  this.setStartingConditions();
  this.currentPlayer.selectSquare(value);
  if (this.currentPlayer.selectedSquares.length >= this.board.dimensionBoard) {
    if (this.isWinner() === true) {
      this.on = false;
      return `the winner is ${this.currentPlayer.type}`;
    }
  };
  this.nextPlayer()
};


Game.prototype.nextPlayer = function(){
  if(this.currentPlayer === this.playerX){
    this.currentPlayer = this.playerO;
  } else {
    this.currentPlayer = this.playerX;
  };
};

Game.prototype.isWinner = function() {
  for (i = 0; i < this.board.winningCombinations.length; i++) {
    for (j = 0; j < this.board.winningCombinations[i].length; j++) {
      if (this.currentPlayer.selectedSquares.includes(this.board.winningCombinations[i][j])){
        return true;
      }
    }
  };
};
