var b = document.getElementById('board');
var snakeElement = document.getElementById('snake_head');
var board = {height: 30, width: 40};
var squareSize = 10;
var snake = {
  x: 0,
  y: 0,
  direction: 'e',
  size: 2,
  previousPoints: [],
  
  updatePosition: function () {
    setElementPosition(snakeElement, this.x, this.y);
  },
  
  updatePreviousPoints: function () {
    if (this.previousPoints.length == this.size) {
      newPreviousPointElement = SnakeSegment(this.x, this.y)
      previousPoints.push(newPreviousPointElement);
      
      segmentToBeRemoved = previousPoints.shift();
      document.removeChild(segmentToBeRemoved.element);
    };
  }   
};

var SnakeSegment = function(x, y) {
  element = document.createElement('div');
  element.setAttribute('class', 'snake');
  setElementPosition(element, x, y);
  return {
    x: x,
    y: y,
    element: element
  };
}
var moveSnake = function () {
  switch (snake.direction) {
      case 'n':
        snake.y -= 1;
        break;
      case 's':
        snake.y += 1;
        break;
      case 'e':
        snake.x += 1;
        break;
      case 'w':
        snake.x -= 1;
        break;
  }
  snake.updatePosition();
  snake.updatePreviousPoints();
  checkBorder();
};

var setElementPosition = function (e, x, y) {
  var newX = snake.x * squareSize;
  var newY = snake.y * squareSize;
  var positionStyle = 'left: ' + newX + 'px; top: ' + newY + 'px;';
  e.setAttribute('style', positionStyle);
}
var updateSnake = function () {
}

var checkBorder = function () {
  if (snake.x == board.width ||
      snake.x < 0 ||
      snake.y == board.height ||
      snake.y < 0) {
    clearInterval(movementInterval);
    alert("Doh!");
  }
}
    
var boardSizeStyle = 'width: ' + (board.width * squareSize) + 'px;' +
                'height: ' + (board.height * squareSize) + 'px;';
b.setAttribute('style', boardSizeStyle);

snake.x = Math.floor(board.width / 2);
snake.y = Math.floor(board.height / 2);

var movementInterval = setInterval(moveSnake, 750);