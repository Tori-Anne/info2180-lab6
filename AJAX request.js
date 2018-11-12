// Ajax request

function getRequest() {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("search").innerHTML
				// not working --> = document.getElementById("result").value;
		}
	};
	request.open('GET', 'request.php', true);
	request.send();
}