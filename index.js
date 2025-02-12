function displayPoem(response) {
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 1,
		cursor: " ",
	});
}

function generatePoem(event) {
	event.preventDefault();

	let instructionsInput = document.querySelector("#user-instructions");
	let apiKey = "cadc0335bc0tc128c364a2674f06oeee";
	let prompt = `User instructions are to generate a Portuguese poem about ${instructionsInput.value}`;
	let context =
		"You're a skilled Portuguese poet specializing in traditional poetry formats. Create a poem based on the user's topic with the following structure: 2 stanzas of 4 lines each. Format each stanza in a <p> tag and use <br/> for line breaks. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning.";

	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let poemElement = document.querySelector("#poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `<div class=generating>⏳Generating a Portuguese poem about ${instructionsInput.value}</div>`;

	axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
