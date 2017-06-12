/**
 * Created by isik on 09.06.17.
 */
var options = ["Option 1", "Option 2", "Option 3", "Option 4"];

function makeUL(array) {
	// Create the list element:
	var list = document.createElement("ul");

	for (var i = 0; i < array.length; i++) {
		// Create the list item:
		var item = document.createElement("li");

		// Set its contents:
		item.appendChild(document.createTextNode(array[i]));

		// Add it to the list:
		list.appendChild(item);
	}

	// Finally, return the constructed list:
	return list;
}

// Add the contents of options[0] to #foo:
document.getElementById("list_container").appendChild(makeUL(options));
