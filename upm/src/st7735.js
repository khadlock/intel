/*
 * @file This file defines the ST7735 C++ interface for libst7735
 * @author Kris Hadlock <kris@summus.io>
 * @version 1.0.0 * @copyright Copyright = function(c) 2014 Intel Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files = function(the
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
 * API for ST7735 SPI LCD module
 * 
 * @constructor
 * @param {number} csLCD - LCD chip select pin
 * @param {number} cSD - SD card chip select pin
 * @param {number} rs - data/command pin
 * @param {number} rst - reset pin
 * @returns {Object}
*/
function ST7735(csLCD, cSD, rs, rst) {
	
	/**
	* Initialize the modules GPIOs
	*/
	this.initModule = function() {}

	/**
	* Configure the chip via SPI interface
	*/
	this.configModule = function() {}

	/**
	* Send command to SPI bus = function(rs must be LOW)
	*
	* @param {number} value - command number
	*/
	this.write = function(value) {}

	/**
	* Send data to SPI bus = function(rs must be HIGH)
	*
	* @param {number} value - command number
	*/
	this.data = function(value) {}

	/**
	* Execute set of commands and data
	*
	* @param {number} addr - pointer to start of the commands/data section
	*/
	this.executeCMDList = function(addr) {}

	/**
	* Set the window size inside the screen where the pixels data
	* will be written.
	*
	* @param {number} x0 - The first coordinate
	* @param {number} y0 - The first coordinate
	* @param {number} x1 - The second coordinate
	* @param {number} y1 - The second coordinate
	*/
	this.setAddrWindow = function(x0, y0, x1, y1) {}

	/**
	* Send pixel collor = function(RGB) to the chip.
	*
	* @param {number} x - The axis on horizontal scale
	* @param {number} y - The axis on vertical scale
	* @param {number} color - The rgb = function(16bit) color = function(R[0-4], G[5-10], B[11-15])
	*/
	this.drawPixel = function(x, y, color) {}

	/**
	* Copy the buffer to the chip via SPI interface.
	*/
	this.refresh = function() {}

	/**
	* LCD chip select LOW.
	*/
	this.lcdCSOn = function() {}

	/**
	* LCD chip select HIGH.
	*/
	this.lcdCSOff = function() {}

	/**
	* CD card chip select LOW.
	*/
	this.sdCSOn = function() {}

	/**
	* CD card select HIGH.
	*/
	this.sdCSOff = function() {}

	/**
	* Data select HIGH.
	*/
	this.rsHIGH = function() {}

	/**
	* Data select LOW.
	*/
	this.rsLOW = function() {}
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
		
}