/*
 * @file This file defines the LSM303DLH 3-axis magnetometer/3-axis accelerometer.
 * This module was tested with the SeedStudio Grove [6-Axis Accelerometer&Compass]
 * (http://www.seeedstudio.com/wiki/Grove_-_6-Axis_Accelerometer%26Compass)
 * module that is used over i2c. The magnometer and acceleromter are accessed
 * at two seperate i2c addresses.
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
 * API for LSM303
 * 
 * @constructor
 * @param {number} bus - The i2c bus
 * @param {number} [addrMag=LSM303_MAG] - The addr magometer
 * @param {number} [addrAcc=LSM303_ACC] - The addr accelerometer
 * @returns {Object}
*/
function LSM303(bus, addrMag, addrAcc) {
	
	/**
	* Get Current Heading, headings <0 indicate an error occured
	*
	* @return {number}
	*/
	this.getHeading = function() {}
	
	/**
	* Get the coordinates in XYZ order
	* @return {boolean} Returns the coordinates in XYZ order
	*/
	this.getCoordinates = function() {}
	
	/**
	* Get accelerometer values
	* @return {boolean} Returns the accelerometer values
	*/
	this.getAcceleration = function() {}
	
	/**
	* Get the raw coordinate data, this will get updated when getCoordinates() is called
	* @return {number} Returns the raw coordinate data
	*/
	this.getRawCoorData = function() {}
	
	/**
	* Get accelerometer y value
	* @return {number} Returns accelerometer y value
	*/
	this.getAccelY = function() {}
	
	/**
	* Get accelerometer z value
	* @return {number} Returns accelerometer z value
	*/
	this.getAccelZ = function() {}
	
	/**
	* Get accelerometer x value
	* @return {number} Returns accelerometer x value
	*/
	this.getAccelX = function() {}
	
	/**
	* Get the raw accelerometer data, this will get updated when getAcceleration() is called
	* @return {number} Returns the raw accelerometer data
	*/
	this.getRawAccelData = function() {}
		
}