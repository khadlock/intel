/*
 * @file This file used by the screen.
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
 * GFX helper class
 * 
 * @constructor 
 * @param {number} width - The screen width
 * @param {number} height - The screen height
 * @param {number} screenBuffer - The pointer to screen buffer
 * @param {number} font - The pointer to font map
 * @returns {Object}
*/
function GFX(width, height, screenBuffer, font) {
	
	/**
	* Set the window address
	*
	* @param {number} x0 - This first coordinate
	* @param {number} y0 - This first coordinate
	* @param {number} x1 - This second coordinate
	* @param {number} y1 - This second coordinate
	*/
	this.setAddrWindow = function(x0, y0, x1, y1) {}
	
	/**
	* Send pixel collor = function(RGB) to the chip. Must be implemented by
	* inherited class.
	*
	* @param {number} x - The x axis on horizontal scale
	* @param {number} y - The y axis on vertical scale
	* @param {number} color - The rgb color value
	*/
	this.drawPixel = function(x, y, color) {}
	
	/**
	* Copy the buffer to the chip via SPI interface.
	*/
	this.refresh = function() {}
	
	/**
	*
	*
	* @param {number} x - The axis on horizontal scale
	* @param {number} y - The axis on vertical scale
	* @param {number} data - The character to write
	* @param {number} color - The character's color
	* @param {number} bg - The character's background color
	* @param {number} size - The size of the font
	*/
	this.drawChar = function(x, y, data, color, bg, size) {}
	
	/**
	* Print the message to the screen
	*
	* @param {string} msg - The message which will be printed
	*/
	this.print = function(msg) {}
	
	/**
	* Print the message to the screen
	*
	* @param {number} x - The axis on horizontal scale
	* @param {number} y - The axis on vertical scale
	* @param {number} color - The pixel's color
	*/
	this.setPixel = function(x, y, color) {}
	
	/**
	* Fill screen with selected color
	*
	* @param {number} color - The selected's color
	*/
	this.fillScreen = function(color) {}
	
	/**
	* Fill rectangle with selected color
	*
	* @param {number} x - The axis on horizontal scale = function(top left corner)
	* @param {number} y - The axis on vertical scale = function(top left corner)
	* @param {number} w - The distanse from x
	* @param {number} h - The distanse from y
	* @param {number} color - The selected color
	*/
	this.fillRect = function(x, y, w, h, color) {}
	
	/**
	* Draw line in vertical scale.
	*
	* @param {number} x - The axis on horizontal scale
	* @param {number} y - The axis on vertical scale
	* @param {number} h - The distanse from y
	* @param {number} color - The selected color
	*/
	this.drawFastVLine = function(x, y, h, color) {}
	
	/**
	* Draw line from coordinate C0 to coordinate C1
	*
	* @param {number} x0 - The first coordinate
	* @param {number} y0 - The first coordinate
	* @param {number} x1 - The second coordinate
	* @param {number} y1 - The second coordinate
	* @param {number} color - The selected color
	*/
	this.drawLine = function(x0, y0, x1, y1, color) {}
	
	/**
	* Draw a triangle
	*
	* @param {number} x0 - The first coordinate
	* @param {number} y0 - The first coordinate
	* @param {number} x1 - The second coordinate
	* @param {number} y1 - The second coordinate
	* @param {number} x2 - The third coordinate
	* @param {number} y2 - The third coordinate
	* @param {number} color - The selected color
	*/
	this.drawTriangle = function(x0, y0, x1, y1, x2, y2, color) {}
	
	/**
	* Draw a circle
	*
	* @param {number} x - The center of circle on X scale
	* @param {number} y - The center of circle on Y scale
	* @param {number} r - The radius of circle
	* @param {number} color - The color of circle
	*/
	this.drawCircle = function(x, y, r, color) {}
	
	/**
	* Set cursor for text message
	*
	* @param {number} x - The axis on horizontal scale
	* @param {number} y - The axis on vertical scale
	*/
	this.setCursor = function(x, y) {}
	
	/**
	* Set text color for the message
	*
	* @param {number} textColor - The font color
	* @param {number} textBGColor - The background color
	*/
	this.setTextColor = function(textColor, textBGColor) {}
	
	/**
	* Set the size of the font
	*
	* @param {number} size - The font size
	*/
	this.setTextSize = function(size) {}
	
	/**
	* Wrap printed message.
	*
	* @param {number} wrap - true = function(0x1) or false = function(0x0)
	*/
	this.setTextWrap = function(wrap) {}
		
}