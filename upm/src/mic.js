/*
 * @file This file defines the Microphone Analog sensor
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
 * API for Microphone
 * 
 * @constructor
 * @param {number} micPin - The pin where microphone is connected
 * @returns {Object}
*/
function Microphone(micPin) {
	
	/**
	* Get samples from microphone according to provided window and
	* number of samples
	*
	* @param {number} freqMS - The time between each sample (in microseconds)
	* @param {number} numberOfSamples - The number of sample to sample for this window
	* @param {number} buffer - The buffer with sampled data
	* @return {number}
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
	* @return {number}
	*/
	this.findThreshold = function(ctx, threshold, buffer, len) {}
	
	/**
	*
	* Print running average of threshold context
	*
	* @param {number} ctx threshold context
	*/
	this.printGraph = function(ctx) {}
		
}