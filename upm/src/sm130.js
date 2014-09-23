/*
 * @file This file defines the SM130 C++ interface for libsm130
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
 * API for SM130 RFID reader module
 * 
 * @constructor
 * @param {number} bus - The number of used bus
 * @param {number} devAddr - The addres of used i2c device
 * @param {number} rst
 * @param {number} dready
 * @returns {Object}
*/
function SM130(bus, devAddr, bus, rst, dready) {
	
	/**
	* Get the firmware version string.
	*
	* @returns {number} Returns the firmware version
	*/
	this.getFirmwareVersion = function() {}
	
	/**
	* Checks for availability of a valid response packet.
	*
	* This function should always be called and return true prior to using results
	* of a command.
	*
	* @returns {number} true if a valid response packet is available
	*/
	this.available = function() {}
	
	/**
	* Returns the packet length, excluding checksum
	*
	* @returns {number}  Returns the packet length
	*/
	this.getPacketLength = function() {};
	
	/**
	* Returns the last executed command
	*
	* @returns {number}  Returns the last executed command
	*/
	this.getCommand = function() {};
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
		
}