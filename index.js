$(document).ready(function() {
	var nouns;

	var nounsJSONPath = "./dictionary/nouns.json";

	$.getJSON(nounsJSONPath, function(data) {
		nouns = data;
		console.log(JSON.stringify(nouns));
	});
});