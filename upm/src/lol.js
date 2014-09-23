/*
 * @file This file defines the LoL API and implemntation for a simple framebuffer
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
 * API for Olimex LoL array
 * 
 * @constructor
 * @param {number} bus - The i2c bus to use
 * @param {number} [address=0x3C] - The slave address the lcd is registered on
 * @returns {Object}
*/
function LoL(bus, address) {
	
	/**
	* Get framebuffer pointer
	* @return {number} 0 on success
	*/
	this.getFramebuffer = function() {}
	
	/**
	* Gets pixel at coordinates
	* @param {number} x - The x coordinate
	* @param {number} y - The y coordinate
	* @return {number} 1 if pixel is on, 0 if off, -1 on error
	*/
	this.getPixel = function(x, y) {}
	
	/**
	* sets pixel at coordinates
	* @param {number} x - The x coordinate
	* @param {number} y - The y coordinate
	* @param {number} pixel - 0 is off, 1 is on
	* @return {number} 0 on success, -1 on error
	*/
	this.setPixel = function(x, y, pixel) {}
	
	/**
	* Get framebuffer pointer
	* @param {number} x - The x coordinate
	* @param {number} y - The y coordinate
	* @return {number} 1 if pixel is on, 0 if off, -1 on error
	*/
	this.getBit = function(x, y) {}
		
}