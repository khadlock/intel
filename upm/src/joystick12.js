/*
 * @file This file defines the Joystick API and implemntation for X, Y
 * button could be treated as normal GPIO, this enables easier
 * interrupt support
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
 * API for Elecfreaks Joystick v 1.2-1.4 breakout
 *
 * @constructor
 * @param {number} pinX - The analog pin where X input is connected
 * @param {number} pinY - The analog pin where Y input is connected
 * @returns {Object}
*/
function Joystick12(pinX, pinY) {
	
	/**
	 * Get X input
	 * 
	 * @returns {number} X value, range from -1 to 1. 0 is mid
	*/
	this.getXInput = function() {}
	
	/**
	 * Get Y input
	 * 
	 * @returns {number} Y value, range from -1 to 1. 0 is mid
	*/
	this.getYInput = function() {}
	
}