/*
 * @file This file defines the SPI interface for libmraa
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
 * Spi Constructor - Instantiates a PWM object on a pin
 *
 * @constructor
 * @param {number} bus - The bus to use, as listed in the platform definition, normally 0
 * @returns {Object}
*/
function Spi(bus) {
	
	/**
	 * @property {number} m_spi
	*/
	this.m_spi = mraa_spi_init(bus);
	
	/**
	* Set the SPI device mode. see spidev0-3
	*
	* @param {object} mode - The mode. See Linux spidev doc
	* @return Result of operation
	*/
	this.mode = function(mode) {
		return mraa_spi_mode(this.m_spi, mode);
	}
	/**
	* Set the SPI device operating clock frequency
	*
	* @param {number} hz - The frequency to set in hz
	* @return Result of operation
	*/
	this.frequency = function(hz) {
		return mraa_spi_frequency(this.m_spi, hz);
	}
	
	/**
	* Write single byte to the SPI device
	*
	* @param {number|string} data - The byte to send
	* @return {number|string} The data received on the miso line
	*/
	this.write = function(data) {
		return mraa_spi_write(this.m_spi, data);
	}
	/**
	* Write buffer of bytes to SPI device
	*
	* @param {number|string} data - The buffer to send
	* @param {number} length - The size of buffer to send
	* @return {number|string} The data received on the miso line. Same length as passed in
	*/
	this.write = function(data, length) {
		return mraa_spi_write_buf(this.m_spi, data, length);
	}
	/**
	* Change the SPI lsb mode
	*
	* @param {boolean} lsb - Use least significant bit transmission - 0 for msbi
	* @return Result of operation
	*/
	this.lsbmode = function(lsb) {
		return mraa_spi_lsbmode(this.m_spi, lsb);
	}
	/**
	* Set bits per mode on transaction, default is 8
	*
	* @param {number} bits - bits per word
	* @return Result of operation
	*/
	this.bitPerWord = function(bits) {
		return mraa_spi_bit_per_word(this.m_spi, bits);
	}
}