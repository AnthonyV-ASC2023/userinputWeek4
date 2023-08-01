document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit_button");
  const titleInput = document.getElementById("title_input");
  const mainTitle = document.getElementById("main_title");

  titleInput.addEventListener("input", function () {
    mainTitle.textContent = titleInput.value.trim();
  });

  submitButton.addEventListener("click", handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();

  const titleInput = document.getElementById("title_input");
  const nounInput = document.getElementById("noun");
  const verbInput = document.getElementById("verb");
  const adjectiveInput = document.getElementById("adjective");

  const title = titleInput.value.trim();
  const noun = nounInput.value.trim();
  const verb = verbInput.value.trim();
  const adjective = adjectiveInput.value.trim();

  if (title === "" || noun === "" || verb === "" || adjective === "") {
    alert("Please fill in all fields");
    return;
  }

  const storyResult = document.getElementById("story_result");
  const adlibText = `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`;
  storyResult.textContent = adlibText;

  const formContainer = document.querySelector(".form_container");
  formContainer.style.display = "none";
}
