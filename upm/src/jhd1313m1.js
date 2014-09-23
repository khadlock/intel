/*
 * @file The Jhd1313m1 has two i2c addreses, one belongs to a controller very similar
 * to the upm::Lcm1602 LCD driver which controls the HD44780 based display and the
 * other controls solely the backlight. This module was tested with the Seed
 * [Grove LCD RGB Backlight v2.0 display]
 * (http://www.seeedstudio.com/depot/Grove-LCD-RGB-Backlight-p-1643.html?cPath=34_36)
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
 * API for Jhd1313m1 i2c controller for HD44780 based displays with
 * an RGB backlight such as the Grove RGB i2c LCD display
 * 
 * @constructor
 * @param {number} bus - The i2c bus to use
 * @param {number} lcdAddress - The address the slave address the lcd is registered on
 * @param {number} rgbAddress - The address the slave address the rgb backlight is on
 * @returns {Object}
*/
function Jhd1313m1(bus, lcdAddress, rgbAddress) {
	
	/**
	 * @param {boolean} direction - true is typical scrolling to the right
	 * 
	 * @returns {boolean} Result of operation
	*/
	this.scroll = function(direction) {}
	
	/**
	 * Set the color of the backlight
	 * 
	 * @param {number} r - A value in the range of 0-255 for red
	 * @param {number} g - A value in the range of 0-255 for green
	 * @param {number} b - A value in the range of 0-255 for blue
	 * 
	 * @returns {boolean} Result of operation
	*/
	this.setColor = function(r, g, b) {}
	
	/**
	 * Write a string to LCD
	 * 
	 * @param {string} msg - The std::string to write to display, note only ascii chars are supported
	 * 
	 * @returns {boolean} Result of operation
	*/
	this.write = function(msg) {}
	
	/**
	 * Set cursor to a coordinate
	 * 
	 * @param {number} row - The row to set cursor to
	 * @param {number} column - The column to set cursor to
	 * 
	 * @returns {boolean} Result of operation
	*/
	this.setCursor = function(row, column) {}
	
	/**
	 * Clear display from characters
	 * 
	 * @returns {boolean} Result of operation
	*/
	this.clear = function() {}
	
	/**
	 * Return to coordinate 0,0
	 * 
	 * @returns {boolean} Result of operation
	*/
	this.home = function() {}
	
}