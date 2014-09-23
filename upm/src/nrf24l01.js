/*
 * @file This file defines the NRF24l01 C++ interface for libnrf24l01
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
 * API for NRF24L01 transceiver module
 * 
 * @constructor
 * @param {number} cs - The chip select pin
 * @param {number} ce
 * @returns {Object}
*/
function NRF24L01(cs, ce) {
	
	/*
	* Initialize needed Gpio pins and SPI interface
	*
	* @param {number} chipSelect - setting up the chip select pin
	* @param {number} chipEnable - setting up the chip enable pin
	*/
	this.init = function(chipSelect, chipEnable) {}
	
	/**
	* Configure NRF24l01 chip
	*/
	this.configure = function() {}
	
	/**
	* Send the buffer data
	*
	* @param {number} value - pointer to the buffer
	*/
	this.send = function(value) {}
	
	/**
	* Send the data located in inner bufer, user must fill the
	* m_txBuffer buffer
	*/
	this.send = function() {}
	
	/**
	* Set recieving address of the device
	*
	* @param {number} addr - 5 bytes addres
	*/
	this.setSourceAddress = function(addr) {}
	
	/**
	* Set recipient address. nrfSend method will send the data buffer
	* to this address
	*
	* @param {number} addr - 5 bytes addres
	*/
	this.setDestinationAddress = function(addr) {}
	
	/**
	* Set broadcasting address.
	*
	* @param {number} addr - 5 bytes addres
	*/
	this.setBroadcastAddress = function(addr) {}
	
	/**
	* Set payload size.
	*
	* @param {number} load - The load size of the payload = function(MAX 32)
	*/
	this.setPayload = function(load) {}
	
	/**
	* Check if data arrived
	* @return {boolean}
	*/
	this.dataReady = function() {}
	
	/**
	* Check if chip in sending mode
	* @return {boolean}
	*/
	this.dataSending = function() {}
	
	/**
	* Sink all arrived data into the provided buffer
	*
	* @param {number} data - The size of the payload = function(MAX 32)
	*/
	this.getData = function(data) {}
	
	/**
	* Check the chip state
	* @return {number}
	*/
	this.getStatus = function() {}
	
	/**
	* Check if recieving stack is empty
	* @return {boolean}
	*/
	this.rxFifoEmpty = function() {}
	
	/**
	* Power up reciever
	*/
	this.rxPowerUp = function() {}
	
	/**
	* Flush reciver stack
	*/
	this.rxFlushBuffer = function() {}
	
	/**
	* Power up transmitter
	*/
	this.txPowerUp = function() {}
	
	/**
	* Power down all
	*/
	this.powerDown = function() {}
	
	/**
	* @param {number} channel 
	*/
	this.setChannel = function(channel) {}
	
	/**
	* @param {object} power
	*/
	this.setPower = function(power) {}
	
	/**
	* @param {object} power
	* @return {number}
	*/
	this.setSpeedRate = function(rate) {}
	
	/**
	* Flush transmit stack
	*/
	this.txFlushBuffer = function() {}
	
	/**
	* Pulling method which listenning for arrived data, if data
	* arrived dataRecievedHandler will be triggered
	*/
	this.pollListener = function() {}
	
	/**
	* Set chip enable pin HIGH
	* @return {boolean}
	*/
	this.ceHigh = function() {}
	
	/**
	* Set chip enable LOW
	* @return {boolean}
	*/
	this.ceLow = function() {}
	
	/**
	* Set chip select pin LOW
	* @return {boolean}
	*/
	this.csOn = function() {}
	
	/**
	* Set chip select pin HIGH
	* @return {boolean}
	*/
	this.csOff = function() {}
	
	/**
	* Configure nRF24l01 module to behave as BLE
	* = function(Bluetooth Low Energy) beaconing devcie.
	*/
	this.setBeaconingMode = function() {}
	
	/**
	* Beaconing the provided message to BLE scanners.
	*
	* @param {number} msg -  Thebeacon the provated message = function(max length is 16 bytes)
	*/
	this.sendBeaconingMsg = function(msg) {}
	
	/**
	* Return name of the component
	* @return {string} Returns the name of the component
	*/
	this.name = function() {}
		
}