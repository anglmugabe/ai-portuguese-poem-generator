function displayPoem(response) {
	console.log("poem generated");

	let poemElement = document.querySelector("#poem"); // Get the correct element
	poemElement.innerHTML = ""; // Clear previous poem

	let typewriter = new Typewriter(poemElement, {
		autoStart: true,
		delay: 50, // Adjust typing speed
		cursor: "", // Hide cursor
	});

	typewriter.typeString(response.data.answer).start();
}

function generatePoem(event) {
	event.preventDefault();

	let instructionsInput = document.querySelector("#user-instructions");
	let apiKey = "cadc0335bc0tc128c364a2674f06oeee";
	let prompt = `User instructions are to generate a Portuguese poem about ${instructionsInput.value}`;
	let context =
		"You're a poet enthusiast and love to write poems. Make sure to follow the user's instructions. The poems should have a maximum of 2 stanzas, with spaces between each line.";

	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	console.log("generating poem...");
	axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
