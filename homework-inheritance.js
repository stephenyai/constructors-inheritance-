// instead of the advanced words guess game, submit this
// 1. 
// a Shape constructor has a 
//     name property
//     sides property
//         number
// 2.
// a Rectangle is a shape
    
//     height
//     width
// on the Rectangle's prototype 
//     an area function
//     a perimeter function
// make sure to connect the Rectangle and the Shape
// 3. 
// a Square is a Rectangle
//     but if the height and width are different then set the width to be the height 


function Shape(name, sides) {
	this.name = name;
	this.sides = sides;
}

function Rectangle(height, width, name, sides) {
	this.height = height;
	this.width = width;
	Shape.call(this, name, sides);
}


Rectangle.prototype = Object.create(Shape.prototype);


Rectangle.prototype.area = function() {
	 console.log(this.height * this.width);
}

Rectangle.prototype.perimeter = function() {
	return 2 * (this.height + this.width)
}

function Square(height, name, sides) {
	Rectangle.call(this, height, height, name, sides);
}

Square.prototype = Object.create(Rectangle.prototype);




var recArea = new Rectangle(30, 20, 'rect', 4)

recArea.area()










