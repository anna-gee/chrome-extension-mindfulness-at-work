chrome.alarms.create("mindfulnessTimer", {delayInMinutes: 1, periodInMinutes: 1});

chrome.alarms.onAlarm.addListener(function( alarm ) {
	var messages = [
		'Take 3 mindful breaths',
		'`long, as does every human being, to be at home wherever I find myself." - Maya Angelou',
		'"The miracle is not to walk on water but to walk on earth" - Thich Nhat Hanh',
		'“Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.” – Victor Frankl',
		'Complete a body scan',
		'“If you clean the floor with love, you have given the world an invisible painting.” – Osho',
		'“Happiness is your nature. It is not wrong to desire it. What is wrong is seeking it outside when it is inside.” – Ramana Maharshi',
		'“To see a world in a grain of sand and heaven in a wild flower, Hold infinity in the palm of your hand and eternity in an hour.” – William Blake',
		'“The most fundamental aggression to ourselves, the most fundamental harm we can do to ourselves, is to remain ignorant by not having the courage and the respect to look at ourselves honestly and gently.” – Pema Chodran',
		'“Wanting to reform the world without discovering one’s true self is like trying to cover the world with leather to avoid the pain of walking on stones and thorns. It is much simpler to wear shoes.” – Ramana Maharshi',
		'"Listen, and lay your head under the tree of awe." - Rumi',
		'“You have a treasure within you that is infinitely greater than anything the world can offer.” – Eckhart Tolle',
		'“Mindfulness is about being fully awake in our lives. It is about perceiving the exquisite vividness of each moment. We also gain immediate access to our own powerful inner resources for insight, transformation, and healing.” –  Jon Kabat-Zinn',
		'“Mindfulness is the aware, balanced acceptance of the present experience. It isn’t more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it.” – Sylvia Boorstein',
		'“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.” – Albert Einstein',
		'“Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves – slowly, evenly, without rushing toward the future; live the actual moment. Only this moment is life.” – Thich Nhat Hanh',
		'“Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.” – Carl Jung',
		'“The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.” – Henry Miller',
		'"When the mind has quieted, it becomes possible to see into the truth of what we are." - Tara Brach',
		'"If you refrain from hoping, you can bring yourself entirely into the present moment and discover the joy that is already here." - Thich Nhat Hanh',
		'"Peace is present right here and now, and in ourselves and in everything we do and see." - Thich Nhat Hanh',
		'"If you can see it, hear it, feel it, taste it, touch it, or smell it... you can be present with it. It is of the present moment, and so it brings you the opportunity to be present with it" - Leonard Jacob',
		'Look out the window and observe the clouds',
		'"Breathing is warm and moist and sensual. It is continuous rhythm along with the beat of our heart, is the most obvious demonstration of our aliveness." Tarchin Hearn',
		'"To me, breathing is a joy you cannot miss..." - Thich Nhat Hanh',
		'Notice the sounds around you',
		'"Mindfulness is simply being aware of what is happening right now without wishing it were different; enjoying the pleasant without holding on when it changes (which it will); being with the unpleasant without fearing it will always be this way (which it won\'t).” – James Baraz',
		'"Feel the stirring of curiosity in the cells of your being." - Tarchin Hearn',
		'"Every day is my best day; this is my life; I am not going to have this moment again." - Bernie Siegel',
		'Notice the sensation of the air conditioning on your skin',
		
	];

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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}