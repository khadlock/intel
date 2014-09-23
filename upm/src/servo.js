/*
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
 * API for Servo
 * 
 * @constructor
 * @param {number} pin - The servo pin number
 * @returns {Object}
*/
function Servo(pin) {
	
	/**
	* Set the of the servo engine.
	*
	* X = between = function(MIN_PULSE_WIDTH , MAX_PULSE_WIDTH)
	*
	* X usec
	* _______
	* |_______________________________________
	* 20000 usec
	*
	* Max period can be only 7968750(nses) which is ~8(msec)
	* so the servo will not work as expected.
	*
	* @param {number} angle - The number between 0 and 180
	* 
	* @return {boolean}
	*/
	this.setAngle = function(angle) {}
	
	/**
	* Set min pulse width
	*
	* @param {number} width - The HIGH signal width
	*/
	this.setMinPulseWidth = function(width) {}
	
	/**
	* Set max pulse width
	*
	* @param {number} width - HIGH signal width
	*/
	this.setMaxPulseWidth = function(width) {}
	
	/**
	* Set max period width
	*
	* @param {number} width - The PWM period width
	*/
	this.setMaxPeriod = function(width) {}
	
	/**
	* Return min pulse width
	* 
	* @return {number} Returns the min pulse width
	*/
	this.getMinPulseWidth = function() {}
	
	/**
	* Return max pulse width
	* 
	* @return {number} Returns the max pulse width
	*/
	this.getMaxPulseWidth = function() {}
	
	/**
	* Return max PWM period width
	* 
	* @return {number} Returns the max PWM period width
	*/
	this.getMaxPeriod = function() {}
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
		
}