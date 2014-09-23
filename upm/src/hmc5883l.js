/*
 * @file The Honeywell [HMC5883L]
 * (http://www.adafruit.com/datasheets/HMC5883L_3-Axis_Digital_Compass_IC.pdf)
 * is a 3-axis digital compass. Communication with the HMC5883L is simple and
 * all done through an I2C interface. Different breakout boards are available,
 * typically a 3V supply is all that is needed to power the sensor.
 * @author Kris Hadlock <kris@summus.io>
 * @version 1.0.0
 * @copyright Copyright (c) 2014 Intel Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
 
/**
 * API for HMC5883l (3-axis digital compass)
 *
 * @constructor
 * @param {number} bus - The bus number of used i2c bus
 * @returns {Object}
*/
function Hmc5883l(bus) {
	
	/**
	 * Returns the direction
	 * 
	 * @returns {number}
	*/
	this.direction = function() {}
	
	/**
	 * Returns the heading
	 * 
	 * @returns {number}
	*/
	this.heading = function() {}
	
	/**
	 * Returns a pointer to a number that contains the coordinates as numbers
	 * 
	 * @returns {number}
	*/
	this.coordinates = function() {}
	
	/**
	 * Updates the values by reading from i2c
	 * 
	 * @returns {number} 0 for success
	*/
	this.update = function() {}
	
}