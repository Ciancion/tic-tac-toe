function Game(board = Board, player= Player){
  this.board = new board;
  this.playerX = new player('x'),
  this.playerO = new player('o');
  this.on = true;
  this.currentPlayer = this.playerX;
};

Game.prototype.play = function(value) {

  this.currentPlayer.selectSquare(value);
  this.nextPlayer();
};

Game.prototype.nextPlayer = function(){
  if(this.currentPlayer === this.playerX){
    this.currentPlayer = this.playerO;
  } else {
    this.currentPlayer = this.playerX;
  };
};

// Game.prototype.checkWinner = function(){
//
// };
