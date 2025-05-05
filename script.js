//complete this code
class Rectangle {
	constructor(width, height){
		this._width=width
		this._height=height
	}
	set width(value){
		this._width=value
	}
	set height(value){
		this._height=value
	}
	getArea(){
		return this._width*this._height
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side)
	}
	getPerimeter(){
		return this._height*4
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
