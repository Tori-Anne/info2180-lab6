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
				var definitonsList = document.createElement("OL");
				var results = xmlDoc.getElementsByTagName("definition");
				
				for (var i = 0; i < results.length; i++) {
					var definition = document.createElement("LI");
					
					var heading3 = document.createElement("H3");
					var defName = document.createTextNode(results[i].getAttribute("name"));
					heading3.appendChild(defName);
					
					var para1 = document.createElement("P");
					var defText = document.createTextNode(results[i].childNodes[0].nodeValue);
					para1.appendChild(defText);
					
					var para2 = document.createElement("P");
					var dash_author = document.createTextNode("-" + results[i].getAttribute("author"));
					para2.appendChild(dash_author);
					
					definition.appendChild(heading3);
					definition.appendChild(para1);
					definition.appendChild(para2);
					
					definitonsList.appendChild(definition);
				}			
				
				document.getElementById("result").appendChild(definitonsList);
			}
			else {
				alert('There was a problem with the request.');
			}
		};
		requestTwo.open('GET', 'request.php?q=&all=true', true);
		requestTwo.send();
	}
		
	
	
	
};