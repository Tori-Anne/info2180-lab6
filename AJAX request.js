// Ajax request

function getRequest() {
	var request = XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("search").innerHTML = this.
	request.open('GET', 'request.php', true);
	request.send();
}