/*
 * @file This file defines the MLX90614 C++ interface for libmlx90614
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
 * API for MLX90614
 * 
 * @constructor
 * @param {number} bus - The number of used bus
 * @param {number} devAddr - The addres of used i2c device
 * @returns {Object}
*/
function MLX90614(bus, devAddr) {
	
	/**
	* Read object temperature in Fahrenheit
	* @return {number} Returns the temperature in Fahrenheit
	*/
	this.readObjectTempF = function() {}
	
	/**
	* Read ambient temperature in Fahrenheit
	* @return {number} Returns the ambient temperature in Fahrenheit
	*/
	this.readAmbientTempF = function() {}
	
	/**
	* Read object temperature in Celsius
	* @return {number} Returns the temperature in Celsius
	*/
	this.readObjectTempC = function() {}
	
	/**
	* Read ambient temperature in Celsius
	* @return {number} Returns the ambient temperature in Celsius
	*/
	this.readAmbientTempC = function() {}
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
		
}