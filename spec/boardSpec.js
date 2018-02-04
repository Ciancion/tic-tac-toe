describe('Board', function(){
  var board;

  beforeEach(function(){
    board = new Board(3);
  });

  it('should create a new borad', function(){
    board.createBoard();
    expect(board.table.length).toEqual(9);
  });

  it('should create the winning combination for the rows', function(){
    board.createBoard();
    board.winningCombinationRows();
    expect(board.winningRows.length).toEqual(3);
  });

  it('should create the winning combination for the columns', function(){
    board.createBoard();
    board.winningCombinationRows();
    board.winningCombinationColumns();
    expect(board.winningColumns.length).toEqual(3);
  });

  it('should create the winning combination for the diagonal', function(){
    board.createBoard();
    board.winningCombinationRows();
    board.winningCombinationDiagonal();
    expect(board.winningDiagonal.length).toEqual(2);
  });

 it('should create an array with all winning combinations', function(){
   board.createBoard();
   board.setWinnigCombinations();
   expect(board.winningCombinations.length).toEqual(8);
 });

 it('should set the board and winning combination to play', function(){
   board.setBoardToPlay();
   expect(board.winningCombinations.length).toEqual(8);
 });



});
