
/*
Create a Circle() constructor that takes the radius as a single argument and has the following properties and methods:

.radius
.diameter
.getC() (get circumference)
.getA() (get area)
Instantiate this constructor with two circles:

c1 has radius 3
c2 has radius 5
For example, if I used the Circle constructor to instantiate a new instance called c0 with a radius of 1, I would have:

Examples
c0.radius ➞ 1

c0.diameter ➞ 2

c0.getC() ➞ 6.28

c0.getA() ➞ 3.14

*/

function Circle(radius) {
	const diameter = radius * 2
	return {
		radius: radius,
		diameter: diameter,
		getC: () => Number((Math.PI * diameter).toFixed(2)),
		getA: () => Number((Math.PI * Math.pow(radius, 2)).toFixed(2))
	}
}

const c1 = Circle(3)
const c2 = Circle(5)

