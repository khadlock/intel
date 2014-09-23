/*
 * @file The Maxim Integrated
 * [MAX5487](http://datasheets.maximintegrated.com/en/ds/MAX5487-MAX5489.pdf)
 * is a Dual, 256-Tap, Nonvolatile, SPI-Interface, Linear-Taper Digital
 * Potentiometer. This module was tested on the Maxim Integrated [MAX5487PMB1
 * PMOD module](http://datasheets.maximintegrated.com/en/ds/MAX5487PMB1.pdf)
 * from the analog PMOD kit.
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
 * API for MAX5487 chip (SPI digital potentionmeter)
 * 
 * @constructor
 * @param {number} csn - The csn to use if any, by default will use ICSP CS (-1)
 * @returns {Object}
*/
function MAX5487(csn) {
	
	/**
	* Set wiper for port A.
	* @param {number} wiper
	*/
	this.setWiperA = function(wiper) {}
	
	/**
	* Set wiper for port B.
	* @param {number} wiper
	*/
	this.setWiperB = function(wiper) {}
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
		
}