chrome.alarms.create("mindfulnessTimer", {delayInMinutes: 60, periodInMinutes: 60});

fetch('https://raw.githubusercontent.com/anna-gee/chrome-extension-mindfulness-at-work/master/messages.json')
.then(function(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
})
.catch(function(err){
	console.log('failed to get from remote repository, falling back to local');
	return fetch('./messages.json');
})
.then(function(response) {
	return response.text();
})
.then(function(text){
	var json = JSON.parse(text);
	
	chrome.alarms.onAlarm.addListener(function( alarm ) {
		var messages = json.messages;

		chrome.notifications.getAll(function (notifications){
			if (Object.keys(notifications).length > 0) return;
			
			chrome.notifications.create({
				type:     'basic',
				iconUrl:  'beauty.png',
				title:    'Mindfulness reminder',
				message:  messages[getRandomIntInclusive(0, messages.length -1)],
				requireInteraction: true
			});
			
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs)	{
				let text = '';
				chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {

				});
			});
			
		});
			
		
	});
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
