function addElement () {
	var element = document.getElementsByTagName("body")[0];
	var div = document.createElement('div');
	div.className = 'ag-modal';
	element.appendChild(div);
	
	setTimeout(removeElement, 60000);
}

function removeElement () {
	var el = document.getElementsByClassName('ag-modal')[0];
	el.remove(); 
}

console.log('loading content script');

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("something happening from the extension", request, sender, sendResponse);
	addElement();
});
