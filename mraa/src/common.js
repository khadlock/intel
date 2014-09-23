/*
 * @file API to common functions of MRAA
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
 * Get libmraa version.
 *
 * @returns {string} libmraa version (e.g. v0.4.0-20-gb408207)
*/
function getVersion() {
	var ret = mraa_get_version();
	return ret;
}

/**
 * This function attempts to set the mraa process to a given priority and the
 * scheduler to SCHED_RR. Highest * priority is typically 99 and minimum is 0.
 * This function * will set to MAX if * priority is > MAX. Function will return
 * -1 on failure.
 *
 * @param {string} priority - Value from typically 0 to 99
 * @returns {number} The priority value set
*/
function setPriority(priority) {
	return mraa_set_priority(priority);
}

/**
 * Get platform type, board must be initialised.
 *
 * @returns {object} mraa_platform_t - Platform type enum
*/
function getPlatformType() {
	return mraa_get_platform_type();
}

/**
 * Print a textual representation of the mraa_result_t
 *
 * @param {object} result - The result to print
*/
function printError(result) {
	mraa_result_print(result);
}

/**
 * Checks if a pin is able to use the passed in mode.
 *
 * @param {number} pin - Physical Pin to be checked
 * @param {object} mode - The mode to be tested
 * @return {boolean} If the mode is supported, 0=false
*/
function pinModeTest(pin, mode) {
	return mraa_pin_mode_test(pin, mode);
}

/**
 * Check the board's bit size when reading the value
 *
 * @return {int} raw bits being read from kernel module. Zero if no ADC
*/
function adcRawBits() {
	return mraa_adc_raw_bits();
}

/**
* Return value that the raw value should be shifted to. Zero if no ADC
*
* @return {number} returns the actual bit size that the adc value should be understood as
*/
function adcSupportedBits() {
	return mraa_adc_supported_bits();
}