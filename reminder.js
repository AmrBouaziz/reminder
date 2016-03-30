"use strict";
var notifier = require('node-notifier');
var isOnline = require('is-online');

var repeatThis = function (){

	isOnline(function(err, online) {
	    console.log(online);
	    if (! online){
		console.log("no internet");
		}else {
		// yey internet. notify the user by sending an alert 
			console.log("internet");
			alertUser();
		}	
	    
	});	
}
var notifOptions = {
	  	'title': 'Remember',
	  	'message': 'tweet something.',
	  	'icon' : __dirname+ '/Twitter.png'
};
function alertUser() {
	console.log("alertUser called");
	notifier.notify(notifOptions);
}
repeatThis();	
setInterval(repeatThis,60*60*1000); // 1 hour 60*60*1000 