/*
 * @file The Maxim Integrated
 * [MAX31855](http://datasheets.maximintegrated.com/en/ds/MAX31855.pdf)
 * is a Cold-Junction Compensated Thermocouple-to-Digital Converter. This
 * module was * tested on the Maxim Integrated
 * [MAX31855PMB1 PMOD module]
 * (http://datasheets.maximintegrated.com/en/ds/MAX31855PMB1.pdf) from the
 * analog PMOD kit.
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
 * API for MAX31855
 * 
 * @constructor
 * @param {number} bus - The spi bus to use
 * @param {number} cs - The chip select pin
 * @returns {Object}
*/
function MAX31855(bus, cs) {
	
	/**
	* Get the distance from the sensor
	* @return {number} Returns the value in degrees celcius
	*/
	this.getTemp = function() {}
		
}