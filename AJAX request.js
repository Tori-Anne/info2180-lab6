// Ajax request

window.onload = function() {
	var word = document.getElementById("a_word").value;
	
	function getRequest() {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("result").innerHTML = request.responseText;
			}
			else {
				alert('There was a problem with the request.');
			}
		};
		request.open('GET', 'request.php?q=' + word, true);
		request.send();
	}
	
	
	
	
	
};


