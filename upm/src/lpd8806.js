/*
 * @file The FastPixel lpd8806 is an RGB led strip controller.
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
 * API for LPD8806
 * 
 * @constructor
 * @param {number} pixelCount - The number of pixels in the strip
 * @param {number} csn - The chip select pin
 * @returns {Object}
*/
function LPD8806(pixelCount, csn) {
	
	/**
	* @param {number} pixelOffset - The pixel offset in the strip of pixel
	* @param {number} r - The red led
	* @param {number} g - The green led
	* @param {number} b - The blue led
	*/
	this.setPixelColor = function(pixelOffset, r, g, b) {}
	
	/**
	* Write the data stored in array of pixels to the chip
	*/
	this.show = function() {}
	
	/**
	* Return the length of the led strip
	* @return {number} The length of the led strip
	*/
	this.getStripLength = function() {}
	
	/**
	* Return name of the component
	* @return {string} The name of the component
	*/
	this.name = function() {}
		
}