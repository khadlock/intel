/*
 * @file This file defines the MPU9150 C++ interface for libmpu9150
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
 * API for MPU9150
 * 
 * @constructor
 * @param {number} bus - The number of used bus
 * @param {number} devAddr - The addres of used i2c device
 * @returns {Object}
*/
function MPU9150(bus, devAddr) {
	
	/**
	* Initiate MPU9150 chips
 	* @return {boolean}
	*/
	this.initSensor = function() {}
	
	/**
	* Get identity of the device
 	* @return {number}
	*/
	this.getDeviceID = function() {}
	
	/**
	* Get the Accelerometer, Gyro and Compass data from the chip and
	* save it in private section.
 	* @return {boolean}
	*/
	this.getData = function() {}
	
	/**
	* @param {object} data - The data structure with 3 axis (x,y,z)
 	* @return {boolean}
	*/
	this.getAcceleromter = function(data) {}
	
	/**
	* @param {object} data - The data structure with 3 axis (x,y,z)
 	* @return {boolean}
	*/
	this.getGyro = function(data) {}
	
	/**
	* @param {object} data - The data structure with 3 axis (x,y,z)
 	* @return {boolean}
	*/
	this.getMagnometer = function(data) {}
	
	/**
	* Read on die temperature from the chip
 	* @return {number} The die temperature from the chip
	*/
	this.getTemperature = function() {}
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
		
}