/*
 * @file The Bosch [BMP085]
 * (https://www.sparkfun.com/datasheets/Components/General/BST-BMP085-DS000-05.pdf)
 * is a high precision, ultra-low power consumption pressure sensor. It has a
 * range of between 30,000 and 110,000 Pa.
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
 * API for GY65/BMP085 chip (Atmospheric Pressure Sensor)
 *
 * @constructor
 * @param {number} bus - The number of used bus
 * @param {string} [devAddr=0x77] - The address of used i2c device
 * @param {string} [mode=BMP085_ULTRAHIGHRES] mode - The BMP085 mode
 * @returns {Object}
*/
function GY65(bus, devAddr, mode) {
	
	/**
	 * Return calculated pressure
	 * 
	 * @returns {number}
	*/
	this.getPressure = function() {}
	
	/**
	 * Get raw pressure data
	 * 
	 * @returns {number}
	*/
	this.getPressureRaw = function() {}
	
	/**
	 * Get raw temperature data from chip
	 * 
	 * @returns {number}
	*/
	this.getTemperatureRaw = function() {}
	
	/**
	 * Return calculated temperature
	 * 
	 * @returns {number}
	*/
	this.getTemperature = function() {}
	
	/**
	 * With given absolute altitude sea level can be calculated
	 *
	 * @param {number} [altitudeMeters=0]  - The altitude
	 * @returns {number}
	*/
	this.getSealevelPressure = function(altitudeMeters) {}
	
	/**
	 * With given sea level altitude in meters can be calculated
	 * 
	 * @param {number} [sealevelPressure=101325]  - Sea level
	 * @returns {number}
	*/
	this.getAltitude = function(sealevelPressure) {}
	
	/**
	 * Calculation of B5 (check spec for more information)
	 * 
	 * @param {number} UT
	 * @returns {number}
	*/
	this.computeB5 = function(UT) {}
	
	/**
	 * Read two bytes register
	 * 
	 * @param {number} reg  - The address of a register
	 * @returns {number}
	*/
	this.i2cReadReg_16 = function(reg) {}
	
	/**
	 * Write to one byte register
	 * 
	 * @param {number} reg  - The address of a register
	 * @param {number} value  - The byte to be written
	 * @returns {boolean}
	*/
	this.i2cWriteReg = function(reg, value) {}
	
	/**
	 * Read one byte register
	 * 
	 * @param {number} reg  - The address of a register
	 * @returns {number}
	*/
	this.i2cReadReg_8 = function(reg) {}
	
}