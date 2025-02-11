function generatePoem(event) {
	event.preventDefault();

	new Typewriter("#poem", {
		strings: " Cai o silêncio nos ombros e a luz impura, até doer.",
		autoStart: true,
		delay: 1,
		cursor: "",
	});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
