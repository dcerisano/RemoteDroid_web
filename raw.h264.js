'use strict';

var toUint8Array = function(data){

  var rawLength = data.length;
  var array = new Uint8Array(data);

  var i;
  for(i = 0; i < rawLength; i++) {
    array[i] = data.charCodeAt(i);
  }
  return array;
};

var RawRenderer = function(_useWorker) {

	
	this.player = new Player({
		useWorker : _useWorker,
		workerFile : "Decoder.js"
	});

};

RawRenderer.prototype.getCanvas = function() {
	return this.player.canvas;
};

RawRenderer.prototype.render = function(data) {
	
		this.onDecodeMessage(data);

};

RawRenderer.prototype.onDecodeMessage = function(data) {
	
	var array = toUint8Array(data);
	this.player.decode(array);
};
