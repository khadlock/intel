/*
 * @file The [SSD1327](http://garden.seeedstudio.com/images/8/82/SSD1327_datasheet.pdf)
 * is a 96x96 Dot matrix OLED/PLED segment driver with controller. This
 * implementation was tested using the
 * [Grove LED 96×96 Display module]
 * (http://www.seeedstudio.com/wiki/Grove_-_OLED_Display_1.12%22)
 * which is an OLED monochrome display
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
 * API for SSD1327 i2c controlled OLED displays
 * 
 * @constructor
 * @param {number} bus - The i2c bus to use
 * @param {number} [address=0x3C] - The slave address the lcd is registered on
 * @returns {Object}
*/
function SSD1327(bus, address) {
	
	/**
	* Draw an image, see examples/python/make_oled_pic.py for an
	* explanation on how the pixels are mapped to bytes
	*
	* @param {number} data - The buffer to read
	* @param {number} bytes - The amount of bytes to read from the pointer
	* @return {boolean} Result of operation
	*/
	this.draw = function(data, bytes) {}
		
	/**
	* Set gray level for LCD panel
	*
	* @param {number} level - The gray level from 0-255
	* @return {boolean} Result of operation
	*/
	this.setGrayLevel = function(level) {}
	
	/**
	* Write a string to LCD
	*
	* @param {string} msg - The string to write to display, note only ascii
	* chars are supported
	* @return {boolean} Result of operation
	*/
	this.write = function(msg) {}
	
	/**
	* Set cursor to a coordinate
	*
	* @param {number} row - The row to set cursor to
	* @param {number} column - The column to set cursor to
	* @return {boolean} Result of operation
	*/
	this.setCursor = function(row, column) {}
	
	/**
	* Clear display from characters
	*
	* @return {boolean} Result of operation
	*/
	this.clear = function() {}
	
	/**
	* Return to coordinate 0,0
	*
	* @return {boolean} Result of operation
	*/
	this.home = function() {}
		
}