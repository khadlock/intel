/*
 * @file This file defines the HCSR04 C++ interface for libhcsr04
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
 * API for HCSR04 (ultrasonic ranging module) component
 *
 * @constructor
 * @param {number} triggerPin - The pin for triggering the sensor for distance
 * @param {number} echoPin - The pulse response to triggering
 * @param {object} [fptr=] - The function pointer for handling raising and falling interrupts
 * @returns {Object}
*/
function HCSR04(triggerPin, echoPin, fptr) {
	
	/**
	 * Get the distance from the sensor
	 * 
	 * @returns {number}
	*/
	this.getDistance = function() {}
	
	/**
	 * On each interrupt this function will detect if the interrupt
	 * was falling edge or rising.
	 * Should be called from the interrupt handler.
	 * 
	*/
	this.ackEdgeDetected = function() {}
	
	/**
	 * Return name of the component
	 * 
	 * @returns {string} name - The name of the component
	*/
	this.name = function() {
		return m_name;
	}
	
}