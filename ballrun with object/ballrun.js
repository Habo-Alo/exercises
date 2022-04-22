var ballObject = {}


function constructBall() {
  // When this func ballObject.radius= 35;
   ballObject.radius= 35;
   ballObject.position={x: 250, y: 250};
   ballObject.color="blue";
   ballObject.velocity={x: 10, y: 0};
   ballObject.domElement = document.querySelector('.ball')
  // - add defaults to the ballObject
  //      radius
  //      position ({x: 250, y: 250})
  //      color
  //      velocity ({x: 10, y: 0})
  //      domElement (document.querySelector("#ball"))

  // Add the following starting styles to the domElement:
   ballObject.domElement.style.height =ballObject.radius+"px"
   ballObject.domElement.style.width =ballObject.radius+"px"
    ballObject.domElement.style.backgroundColor =ballObject.color
    ballObject.domElement.style.top =ballObject.position.x+"px"
    ballObject.domElement.style.left =ballObject.position.y+"px"
   // document.hight=ballObject.radius+"px"
   // document.backgroundcolor=ballObject.color;
   // document.top=ballObject.position.x +40;
   // document.left=ballObject.position.y +35;
  console.log(ballObject)

  //  - height = radius + "px"
  //  - backgroundColor = color
  //  - top = position.y + "px"
  //  - left = position.x + "px"
}

function move() {
  setPosition();
  drawPosition();
}

function setPosition() {
  ballObject.position.x=ballObject.position.x+ballObject.velocity.x;
  ballObject.position.y=ballObject.position.y+ballObject.velocity.y;
  // When this function runs, we need to:
  //   - update the properties of the ballObject
  //   - run the drawPosition() function
  // The position of the ball should be the current position plus the velocity.
}

function drawPosition() {

  // When this function runs, we need to:
  //   - use the properties of the ballObject to update the style of the ball domElement
  // Remember that CSS requires a string with "px" at the end. You can use x + "px"
  ballObject.domElement.style.top =ballObject.position.x+"px"
  ballObject.domElement.style.left =ballObject.position.y+"px"
}
var ballObject2 = {}


function constructBall2() {
  // When this func ballObject.radius= 35;
   ballObject2.radius= 60;
   ballObject2.position={x: 330, y: 340};
   ballObject2.color="red";
   ballObject2.velocity={x: 20, y: 22};
   ballObject2.domElement = document.querySelector('.ball2')
  // - add defaults to the ballObject
  //      radius
  //      position ({x: 250, y: 250})
  //      color
  //      velocity ({x: 10, y: 0})
  //      domElement (document.querySelector("#ball"))

  // Add the following starting styles to the domElement:
   ballObject2.domElement.style.height =ballObject2.radius+"px"
   ballObject2.domElement.style.width =ballObject2.radius+"px"
    ballObject2.domElement.style.backgroundColor =ballObject2.color
    ballObject2.domElement.style.top =ballObject2.position.x+"px"
    ballObject2.domElement.style.left =ballObject2.position.y+"px"
   // document.hight=ballObject.radius+"px"

   r=ballObject.color;
   // document.top=ballObject.position.x +40;
   // document.left=ballObject.position.y +35;


  //  - height = radius + "px"
  //  - backgroundColor = color
  //  - top = position.y + "px"
  //  - left = position.x + "px"
}
function move2() {
  setPosition2();
  drawPosition2();
}

function setPosition2() {
  ballObject2.position.x=ballObject2.position.x+ballObject2.velocity.x;
  ballObject2.position.y=ballObject2.position.y+ballObject2.velocity.y;
  // When this function runs, we need to:
  //   - update the properties of the ballObject
  //   - run the drawPosition() function
  // The position of the ball should be the current position plus the velocity.
}

function drawPosition2() {

  // When this function runs, we need to:
  //   - use the properties of the ballObject to update the style of the ball domElement
  // Remember that CSS requires a string with "px" at the end. You can use x + "px"
  ballObject2.domElement.style.top =ballObject2.position.x+"px"
  ballObject2.domElement.style.left =ballObject2.position.y+"px"
}// document.backgroundcolo
