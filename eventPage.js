chrome.alarms.create("mindfulnessTimer", {delayInMinutes: 60, periodInMinutes: 60});
console.log('i\'m about to make a request');
fetch('https://raw.githubusercontent.com/anna-gee/chrome-extension-mindfulness-at-work/master/messages.json')
.then(function(response) {
	console.log('this is being run after the response');
	return response.text();
})
.then(function(text){
	var json = JSON.parse(text);
	
	chrome.alarms.onAlarm.addListener(function( alarm ) {
		var messages = json.messages;

		chrome.notifications.create({
			type:     'basic',
			iconUrl:  'waterdrop.png',
			title:    'Mindfulness reminder',
			message:  messages[getRandomIntInclusive(0, messages.length -1)],

		});
		
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs)	{
			let text = '';
			chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {

				console.log('success');
			});
		
			console.log("Got an alarm!", alarm);
		});
	});
});

console.log('hello, i\'m being run after the request BUT BEFORE the response');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
