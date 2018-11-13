// Ajax request

function getRequest() {
	var word = document.getElementById("a_word");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("result").innerHTML = this.responseText;
		}
	};
	request.open('GET', 'request.php?q=' + word.value, true);
	request.send();
}

