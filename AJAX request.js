// Ajax request


//Definition of a single word

window.onload = function() {
	var word = document.getElementById("a_word").value;
	
	function getRequest() {
		var requestOne = new XMLHttpRequest();
		requestOne.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("result").innerHTML = requestOne.responseText;
			}
			else {
				alert('There was a problem with the request.');
			}
		};
		requestOne.open('GET', 'request.php?q=' + word, true);
		requestOne.send();
	}
	

// All Definitions
	function getAll() {
		var requestTwo = new XMLHttpRequest();
		requestTwo.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var xmlDoc = requestTwo.responseXML;
				var results = xmlDoc.getElementsByTagName("definition");
				
				for (var i = 0; i < results.length; i++) {
					var definition = document.createElement("LI");
					var heading3 = document.createElement("H3");
					var para1 = document.createElement("P");
					var para2 = document.createElement("P");
					
					//var defName = document.createTextNode(results[i].get
				
				
				
				document.getElementById("result").innerHTML = requestTwo.responseText;
			}
			else {
				alert('There was a problem with the request.');
			}
		};
		requestTwo.open('GET', 'request.php?q=&all=true', true);
		requestTwo.send();
	}
		
	
	
	
};




// Create an ordered list (ol) of deﬁnitions 
// to insert into the result div, using the DOM (document.createElement).

