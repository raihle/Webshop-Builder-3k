function get(item, tag) {
	return item.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
}

function loadXMLDoc(dname) {
	var xhttp = false;
	try {
		xhttp = new XMLHttpRequest();
	} catch (e) {
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET", dname, false);
	xhttp.send();
	return xhttp.responseXML;
}

function populateList() {
	var xmlDoc = loadXMLDoc("./items.xml");
	var items = xmlDoc.getElementsByTagName("item");
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		var name = get(item, "name");
		var price = get(item, "price");
		var picture = get(item, "picture");
		var description = get(item, "description");
		var text = document.getElementById("resultlist_1").innerHTML;
		
		text = text.concat("<div class=\"item\" id=\"item_" + i + "\" style=\"top:" + i * 135 + "px;\">");
		text = text.concat("	<h3 class=\"title\">" + name + "</h3>");
		text = text.concat("	<p class=\"price\">Price: <span class=\"value\">" + price + "</span></p>");
		text = text.concat("	<img class=\"picture\" width=\"100px\" height=\"100px\" src=\"" + picture + "\"/>");
		text = text.concat("	<p class=\"description\">" + description + "</p>");
		text = text.concat("</div>");
		document.getElementById("resultlist_1").innerHTML = text;
	}
}
