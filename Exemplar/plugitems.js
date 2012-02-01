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
		var text = document.getElementById("result-list").innerHTML;
				
		text = text.concat("<div class=\"item\" id=\"" + i + "\">");
		
		text = text.concat("<div class=\"title\"><h3>" + name
				+ "</h3></div>");
		text = text.concat("<div class=\"price\"><p>Price: <span class=\"value\">" + price
				+ "</span></p></div>");

		text = text.concat("<div class=\"picture\"><img width=\"100px\" height=\"100px\" src=\"" + picture + "\"/></div>");
		
		text = text.concat("<div class=\"description\"><p>" + description
				+ "</p></div>");
		text = text.concat("</div>");
		document.getElementById("result-list").innerHTML = text;
	}
}