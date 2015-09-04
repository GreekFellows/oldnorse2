$(document).ready(function() {
	var nounsJSONLoaded = false;
	var allJSONLoaded = false;

	var nouns;

	var nounsJSONPath = "./dictionary/nouns.json";

	$.getJSON(nounsJSONPath, function(data) {
		nouns = data;
		nounsJSONLoaded = true;

		if (nounsJSONLoaded) {
			allJSONLoaded = true;
		}
	});

	$("#searchgo").click(function() {
		if (allJSONLoaded) {
			// first search in nouns
			var searchText = $("#searchinput").val();
			if (nouns.hasOwnProperty(searchText)) {
				var newDiv = $("<div class=\"panel panel-default\"><div class=\"panel-body\"><div class=\"page-header\"><h1>" + searchText + "</h1></div><p>" + nouns[searchText].def + "</p></div></div>");
				newDiv.appendTo("#searchresults");
			}
		}
	});
});