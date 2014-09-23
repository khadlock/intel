/*
 * @file This file defines the I2c interface for libmraa
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
 * I2c Constructor - Instantiates an i2c bus. Multiple instances of the same bus can
 * exist and the bus is not guarranteed to be on the correct address
 * before read/write.
 *
 * @constructor
 * @param {number} bus - The i2c bus to use
 * @param {boolean} [raw=false] - Whether to disable pinmapper for your board
 * @returns {Object}
*/
function I2c(bus, raw) {
	
	if (typeof raw === "undefined") {
		raw = false;
	}
	
	/**
	 * @property {number} m_i2c
	*/
	if (raw) {
		this.m_i2c = mraa_i2c_init_raw(bus);
	}
	else {
		this.m_i2c = mraa_i2c_init(bus);
	}
	
	/**
	 * Set the edge mode for ISR
	 *
	 * @param {object} mode - The edge mode to set
	 * @return Result of operation
	*/
	this.edge = function() {
		return mraa_gpio_edge_mode(this.m_gpio, mode);
	}
	
	/**
	* Sets the i2c Frequency for communication. Your board may not support
	* the set frequency. Anyone can change this at any time and this will
	* affect every slave on the bus
	*
	* @param {number} hz - The frequency to set the bus to in hz
	* @return Result of operation
	*/
	this.frequency = function(hz) {
		return mraa_i2c_frequency(this.m_i2c, hz);
	}
	/**
	* Set the slave to talk to, typically called before every read/write
	* operation
	*
	* @param {number} address - Communicate to the i2c slave on this address
	* @return Result of operation
	*/
	this.address = function(address) {
		return mraa_i2c_address(this.m_i2c, address);
	}
	/**
	* Read exactly one byte from the bus
	*
	* @return {number|string} read from the bus
	*/
	this.read = function() {
		return mraa_i2c_read_byte(this.m_i2c);
	}
	/**
	* Read mutliple bytes from the bus
	*
	* @param {number|string} data - Buffer to write into
	* @param {number} length - Size of read
	* @return {number} The length of the read or 0 if failed
	*/
	this.read = function(data, length) {
		return mraa_i2c_read(this.m_i2c, data, length);
	}
	/**
	* Read length bytes from the bus, and return as a std::string note
	* that this is not a null terminated string
	*
	* @param {number} length - Size of read to make
	* @return {string}
	*/
	this.read = function(length) {
		return str;
	}
	
	/**
	* Write one byte to the bus
	*
	* @param {number} data - The buffer to send on the bus
	* @param {number} length - The size of buffer to send
	* @return Result of operation
	*/
	this.write = function(data, length) {
		return mraa_i2c_write(this.m_i2c, data, length);
	}
	/**
	* Write to an i2c register
	*
	* @param {number} reg - The register to write to
	* @param {number} data - The value to write to register
	* @return Result of operation
	*/
	this.writeReg = function(reg, data) {
		var buf = [reg, data];
		return mraa_i2c_write(this.m_i2c, buf);
	}
	/**
	* Write multiple bytes to the bus
	*
	* @param {number|string} data - The byte to send on the bus
	* @return Result of the operation
	*/
	this.write = function(data) {
		return mraa_i2c_write_byte(this.m_i2c, data);
	}
}