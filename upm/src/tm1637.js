/*
 * @file This file defines the TM1637 C++ interface for lib4digitdisplay
 * @author Kris Hadlock <kris@summus.io>
 * @version 1.0.0 * @copyright Copyright (c) 2014 Intel Corporation.
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
 * API for Seven segments screen
 *     A
 *    ---
 * F |   | B
 *    -G-
 * E |   | C
 *    ---
 *     D
 *
 * @constructor
 * @param {number} di - The data pin
 * @param {number} dcki- The clock pin
 * @returns {Object}
*/
function TM1637(di, dcki) {
	
	/**
	* Set the brightness of the seven segment display
	*
	* @param {number} level - The brightness level of leds
	*/
	this.setBrightness = function(level) {}
	
	/**
	* Set the the segment screen data and number of segments
	*
	* @param {number} segments - The data to write on the segments, each element in array is segment
	* @param {number} [length=4] - The number of elements in segments array
	* @param {number} [pos=0] - The data writing offset
	*/
	this.setSegments = function(segments, length, pos) {}
	
	/**
	* Write message on the screen.
	*
	* @param {string} msg - The message to be written on the sreen
	*/
	this.write = function(msg) {}
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
		
}