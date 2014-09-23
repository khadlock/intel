/*
 * @file This file defines the Gas Analog sensors virtual functions
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
 * API for Gas sensors
 *
 * @constructor
 * @param {number} gasPin - pin where gas is connected
 * @returns {Object}
*/
function Gas(gasPin) {
	
	/**
	 * Get samples from gas sensor according to provided window and
	 * number of samples
	 *
	 * @param {number} freqMS - The time between each sample (in microseconds)
	 * @param {number} numberOfSamples - The number of sample to sample for this window
	 * @param {number} buffer - The buffer with sampled data
	 * @returns {number}
	*/
	this.getSampledWindow = function(freqMS, numberOfSamples, buffer) {}
	
	/**
	* Given sampled buffer this method will return TRUE/FALSE if threshold
	* was reached
	*
	* @param {number} ctx - The threshold context
	* @param {number} threshold - The sample threshold
	* @param {number} buffer - The buffer with samples
	* @param {number} len - The buffer len
	* @returns {number}
	*/
	this.findThreshold = function(ctx, threshold, buffer, len) {}
	
	/**
	* Return avarage data for the sampled window
	*
	* @param ctx - The threshold context
	* @returns {number}
	*/
	this.getSampledData = function(ctx) {}
	
	/**
	* Return one sample from the sensor
	*
	* @param ctx - The threshold context
	* @returns {number}
	*/
	this.getSample = function(ctx) {}
	
	/**
	*
	* Print running average of threshold context
	*
	* @param ctx - The threshold context
	*/
	this.printGraph  = function(ctx, resolution) {}
	
}