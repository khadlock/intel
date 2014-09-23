/*
 * @file The Maxim Integrated
 * [MAX31723](http://datasheets.maximintegrated.com/en/ds/MAX31722-MAX31723.pdf)
 * is a Low-Voltage 3-Wire/SPI Temperature Sensor controller. This module was
 * tested on the Maxim Integrated [MAX31732PMB1 PMOD
 * module](http://datasheets.maximintegrated.com/en/ds/MAX31723PMB1.pdf) from
 * the analog PMOD kit.
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
 * API for MAX31723 chip (Temperature sensor)
 * 
 * @constructor
 * @param {number} csn
 * @returns {Object}
*/
function MAX31723(csn) {
	
	/**
	* Get on board temperature.
	* @return {number} Returns the board temperature
	*/
	this.getTemperature = function() {}
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
		
}