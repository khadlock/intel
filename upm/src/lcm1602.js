/*
 * @file This supports all sizes of HD44780 displays from 16x2 to 4x20, the
 * controller has no idea of the actual display hardware so will let you write
 * further than you can see. These displays with such controllers are available
 * from various manufacturers with different i2c addresses. The adafruit
 * [TC1602A-01T](https://www.adafruit.com/datasheets/TC1602A-01T.pdf) seems to
 * the best documented example.
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
 * API for LCM1602 i2c controller for HD44780 based displays
 * 
 * @constructor
 * @param {number} bus - The i2c bus to use
 * @param {number} address - The slave address the lcd is registered on
 * @returns {Object}
*/
function Lcm1602(bus, address) {
	
	/**
	 * Write a string to LCD
	 * 
	 * @param {string} msg - to write to display, note only ascii chars are supported
	*/
	this.write = function(msg) {}
	
	/**
	 * @param {number} row
	 * @param {number} column
	*/
	this.setCursor = function(row, column) {}
	
	/**
	 * Clear display from characters
	*/
	this.clear = function() {}
	
	/**
	 * Return to coordinate 0,0
	*/
	this.home = function() {}
	
}