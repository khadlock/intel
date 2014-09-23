/*
 * @file This file defines the gpio interface for libmraa
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
 * Gpio Constructor - API to General Purpose IO
 *
 * @constructor
 * @param {number} pin - The pin number to use
 * @param {boolean} [owner=true] - Set pin owner, default behaviour is to 'own'
 * the pin if we exported it. This means we will close it on destruct.
 * Otherwise it will get left open. This is only valid in sysfs use
 * cases
 * @param {boolean} [raw=false] - Raw pins will use gpiolibs pin numbering from
 * the kernel module. Note that you will not get any muxers set up for
 * you so this may not always work as expected.
 * @returns {Object}
*/
function Gpio(pin, owner, raw) {
	
	if (typeof owner === "undefined") {
		owner = true;
	}
	if (typeof raw === "undefined") {
		raw = false;
	}
	
	/**
	 * @property {number} m_gpio
	*/
	if (raw) {
		this.m_gpio = mraa_gpio_init_raw(pin);
	}
	else {
		this.m_gpio = mraa_gpio_init(pin);
	}
	if (!owner) {
		mraa_gpio_owner(m_gpio, 0);
	}
	
	/**
	* Change Gpio mode
	*
	* @param {object} mode - The mode to change the gpio into
	* @return Result of operation
	*/
	this.mode = function(mode) {
		return mraa_gpio_mode(this.m_gpio, mode);
	}
	
	/**
	* Change Gpio direction
	*
	* @param {object} dir - The direction to change the gpio into
	* @return Result of operation
	*/
	this.dir = function(dir) {
		return mraa_gpio_dir(this.m_gpio, dir);
	}
	
	/**
	* Read value from Gpio
	*
	* @return {number} Gpio value
	*/
	this.read = function() {
		return mraa_gpio_read(this.m_gpio);
	}
	
	/**
	* Write value to Gpio
	*
	* @param {number} value - The value to write to Gpio
	* @return Result of operation
	*/
	this.write = function(value) {
		return mraa_gpio_write(this.m_gpio, value);
	}
	
	/**
	* Enable use of mmap i/o if available.
	*
	* @param {boolean} enable - Set true to use mmap
	* @return Result of operation
	*/
	this.useMmap = function(enable) {
		return mraa_gpio_use_mmaped(m_gpio, enable);
	}
}