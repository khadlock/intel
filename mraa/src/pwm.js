/*
 * @file This file defines the PWM interface for libmraa
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
 * Pwm Constructor - Instantiates a PWM object on a pin
 *
 * @constructor
 * @param {number} pin - The pin number used on your board
 * @param {number} [chipid=-1] - The pwmchip to use, use only in raw mode
 * @param {boolean} [owner=true] - If you are the owner of the pin the destructor will
 * unexport the pin from sysfs, default behaviour is you are the owner
 * if the pinmapper exported it
 * @returns {Object}
*/
function Pwm(pin, chipid, owner) {
	
	if (typeof chipid === "undefined") {
		chipid = -1;
	}
	if (typeof owner === "undefined") {
		owner = true;
	}
	
	/**
	 * @property {number} m_pwm
	*/
	if (chipid == -1) {
		this.m_pwm = mraa_pwm_init(pin);
	}
	else {
		this.m_pwm = mraa_pwm_init_raw(pin, chipid);
	}
	if (!owner) {
		mraa_pwm_owner(this.m_pwm, 0);
	}
	
	/**
	* Set the output duty-cycle percentage, as a float
	*
	* @param {number} percentage - A floating-point value representing percentage of
	* output. The value should lie between 0.0f (representing on 0%) and
	* 1.0f Values above or below this range will be set at either 0.0f or
	* 1.0f
	* @return Result of operation
	*/
	this.write = function(percentage) {
		return mraa_pwm_write(this.m_pwm, percentage);
	}
	/**
	* Read the ouput duty-cycle percentage, as a float
	*
	* @return A floating-point value representing percentage of
	* output. The value should lie between 0.0f (representing on 0%) and
	* 1.0f Values above or below this range will be set at either 0.0f or
	* 1.0f
	*/
	this.read = function() {
		return mraa_pwm_read(this.m_pwm);
	}
	/**
	* Set the PWM period as seconds represented in a float
	*
	* @param {number} period - Period represented as a float in seconds
	* @return Result of operation
	*/
	this.period = function(period) {
		return mraa_pwm_period(this.m_pwm, period);
	}
	/**
	* Set period, milliseconds
	*
	* @param {number} ms - milliseconds for period
	* @return Result of operation
	*/
	this.period_ms = function(ms) {
		return mraa_pwm_period_ms(this.m_pwm, ms);
	}
	/**
	* Set period, microseconds
	*
	* @param {number} us - microseconds as period
	* @return Result of operation
	*/
	this.period_us = function(us) {
		return mraa_pwm_period_us(this.m_pwm, us);
	}
	/**
	* Set pulsewidth, As represnted by seconds in a (float)
	*
	* @param {number} seconds - The duration of a pulse
	* @return Result of operation
	*/
	this.pulsewidth = function(seconds) {
	return mraa_pwm_pulsewidth(this.m_pwm, seconds);
	}
	/**
	* Set pulsewidth, milliseconds
	*
	* @param {number} ms - milliseconds for pulsewidth
	* @return Result of operation
	*/
	this.pulsewidth_ms = function(ms) {
		return mraa_pwm_pulsewidth_ms(this.m_pwm, ms);
	}
	/**
	* The pulsewidth, microseconds
	*
	* @param {number} us - microseconds for pulsewidth
	* @return Result of operation
	*/
	this.pulsewidth_us = function(us) {
		return mraa_pwm_pulsewidth_us(this.m_pwm, us);
	}
	/**
	* Set the enable status of the PWM pin. None zero will assume on with
	* output being driven and 0 will disable the output
	*
	* @param {boolean} enable - enable status of pin
	* @return Result of operation
	*/
	this.enable = function(enable) {
		if (enable) {
			return mraa_pwm_enable(m_pwm, 1);
		}
		else {
			return mraa_pwm_enable(m_pwm, 0);
		}
	}
	/**
	* Set the period and duty of a PWM object.
	*
	* @param {number} period - represented in ms.
	* @param {number} duty - represented in ms as float.
	* @return Result of operation
	*/
	this.config_ms = function(period, duty) {
		return mraa_pwm_config_ms(this.m_pwm, period, duty);
	}
	/**
	* Set the period and duty (percent) of a PWM object.
	*
	* @param {number} period - represented in ms.
	* @param {number} duty - percentage i.e. 50% = 0.5f
	* @return Result of operation
	*/
	this.config_percent = function(period, duty) {
		return mraa_pwm_config_percent(this.m_pwm, period, duty);
	}
}