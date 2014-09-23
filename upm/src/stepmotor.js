/*
 * @file This file defines the stepmotor C++ interface for libstepmotor
 * @author Kris Hadlock <kris@summus.io>
 * @version 1.0.0 * @copyright Copyright = function(c) 2014 Intel Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files = function(the
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
 * API for StepMotor Drivers
 * 
 * @constructor
 * @param {number} dirPin - The direction pin
 * @param {number} stePin - The steper pulse pin
 * @returns {Object}
*/
function StepMotor(dirPin, stepPin) {
	
	/**
	* Set the speed of rotation
	*
	* @param {number} speed - The rotation speed
	*/
	this.setSpeed = function(speed) {}
	
	/**
	* Rotate motor forward
	*
	* @param {number} ticks - The number of tickes the motor will move
	*/
	this.stepForward = function(ticks) {}
	
	/**
	* Rotate motor backward
	*
	* @param {number} ticks - The number of tickes the motor will move
	*/
	this.stepBackwards = function(ticks) {}
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
		
}