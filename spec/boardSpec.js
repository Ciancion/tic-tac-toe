describe('Board', function(){
  var board;

  beforeEach(function(){
    board = new Board(3, 3);
  });

  it('should create a new borad', function(){
    board.createBoard();
    expect(board.table.length).toEqual(9);
  });

  it('should create the winning combination for the rows', function(){
    board.createBoard();
    board.winningCombinationRow();
    expect(board.winningRows.length).toEqual(3);
  });

  it('should create the winning combination for the columns', function(){
    board.createBoard();
    board.winningCombinationRow();
    board.winningCombinationColumn();
    expect(board.winningColumns.length).toEqual(3);
  });
});
