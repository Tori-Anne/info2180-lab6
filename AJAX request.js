// Ajax request

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
	
	
	function getAll() {
		var requestTwo = new XMLHttpRequest();
		requestTwo.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("result").innerHTML = requestTwo.responseText;
			}
			else {
				alert('There was a problem with the request.');
			}
		};
		requestTwo.open('GET', 'request.php?q=&all=', true);
		requestTwo.send();
	}
		
	
	
	
};


