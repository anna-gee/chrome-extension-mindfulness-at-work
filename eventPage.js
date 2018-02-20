chrome.alarms.create("mindfulnessTimer", {delayInMinutes: 60, periodInMinutes: 60});

fetch('https://raw.githubusercontent.com/anna-gee/chrome-extension-mindfulness-at-work/master/messages.json')
.then(function(response) {
	return response.text();
})
.then(function(text){
	var json = JSON.parse(text);
	setUpListener(json.messages);	
});

function setUpListener (msgs) {
	chrome.alarms.onAlarm.addListener(function( alarm ) {
		var messages = msgs;

		chrome.notifications.create({
			type:     'basic',
			iconUrl:  'waterdrop.png',
			title:    'Mindfulness reminder',
			message:  messages[getRandomIntInclusive(0, messages.length -1)],
			requireInteraction: true
		});
		
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs)	{
			let text = '';
			chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {

				console.log('success');
			});
		
			console.log("Got an alarm!", alarm);
		});
	});
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
