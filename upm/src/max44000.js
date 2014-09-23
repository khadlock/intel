/*
 * @file The Maxim Integrated
 * [MAX44000](http://datasheets.maximintegrated.com/en/ds/MAX44000.pdf)
 * is Ambient and Infrared Proximity Sensor. This module was tested on the
 * Maxim Integrated
 * [MAX44000PMB1 PMOD module]
 * (http://datasheets.maximintegrated.com/en/ds/MAX44000PMB1.pdf) from the
 * analog PMOD kit.
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
 * API for the MAX44000 chip (Ambient and Infrared Proximity Sensor)
 * 
 * @constructor
 * @param {number} bus - The number of used bus
 * @param {number} devAddr - The addres of used i2c device
 * @returns {Object}
*/
function MAX44000(bus, devAddr) {
	
	/**
	* Read the proximity value from the chip (based on ambient data).
	* @return {number} Returns the proximity value from the chip
	*/
	this.getProximity = function() {}
	
	/**
	* Read the ambient value from the chip (based on ambient data).
	* @return {number} Returns the ambient value from the chip
	*/
	this.getAmbient = function() {}
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
	
	/**
	* Read one byte register
	*
	* @param {number} reg - The address of a register
	* @return {number}
	*/
	this.i2cReadReg_8 = function(reg) {}
	
	/**
	* Read two bytes register
	*
	* @param {number} reg - The address of a register
	* @return {number}
	*/
	this.i2cReadReg_16 = function(reg) {}
	
	/**
	* Write to one byte register
	*
	* @param {number} reg - The address of a register
	* @param {number} value - The byte to be written
	* @return {boolean}
	*/
	this.i2cWriteReg = function(reg, value) {}
		
}