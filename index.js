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

	function makeNounEntryDiv(searchText, entry) {
		var defString = "<ol>";
		for (var defIndex = 0; defIndex != entry.defs.length; ++defIndex) {
			defString += ("<li>" + entry.defs[defIndex] + "</li");
		}
		defString += "</ol>";

		var divEntry = $("<div class=\"panel panel-default\">
							<div class=\"panel-heading\">Result for: <i>\"" + searchText + "\"</i></div>
							<div class=\"panel-body\">
								<h2>" + entry.declension.singular.nominative + "</h2>

								<p>
									<i>n. " + entry.gender + "</i> " + (entry.strong ? "strong" : "weak") + ", " + entry.decltype + ".

									" + defString + "
								</p>

								<table class=\"table\">
									<thead>
										<tr>
											<th>#</th>
											<th>singular</th>
											<th>plural</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th>nom.</th>
											<td>"entry.declension.singular.nominative"</td>
											<td>"entry.declension.plural.nominative"</td>
										</tr>
										<tr>
											<th>gen.</th>
											<td>"entry.declension.singular.genitive"</td>
											<td>"entry.declension.plural.genitive"</td>
										</tr>
										<tr>
											<th>dat.</th>
											<td>"entry.declension.singular.dative"</td>
											<td>"entry.declension.plural.dative"</td>
										</tr>
										<tr>
											<th>acc.</th>
											<td>"entry.declension.singular.accusative"</td>
											<td>"entry.declension.plural.accusative"</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>");
		return divEntry;
	}

	$("#searchgo").click(function() {
		makeNounEntryDiv(0);

		if (allJSONLoaded) {
			// first search in nouns
			var searchText = $("#searchinput").val();
			if (nouns.hasOwnProperty(searchText)) {
				var newDiv = makeNounEntryDiv(searchText, nouns[searchText]);
				newDiv.appendTo("#searchresults");
			}
		}
	});
});