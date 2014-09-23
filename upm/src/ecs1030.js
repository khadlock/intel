/*
 * @file This file defines the API for ECS1030 (electricity sensor)
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
 * API for ECS1030 (electricity sensor)
 *
 * @constructor
 * @param {number} pinNumber - The number of the data pin
 * @returns {Object}
*/
function ECS1030(pinNumber) {
	
	/**
	 * Return currency data for the sampled period
	 *
	 * @returns {number}
	*/
	this.getCurrency_A = function() {}
	
	/**
	 * Return power data for the sampled period
	 *
	 * @returns {number}
	*/
	this.getPower_A = function() {}
	
	/**
	 * Return currency data for the sampled period
	 *
	 * @returns {number}
	*/
	this.getCurrency_A = function() {}
	
	/**
	 * Return power data for the sampled period
	 *
	 * @returns {number}
	*/
	this.getPower_A = function() {}
	
	/**
	 * Return name of the component
	 * 
	 * @returns {string} name - The name of the component
	*/
	this.name = function() {
		return m_name;
	}
}